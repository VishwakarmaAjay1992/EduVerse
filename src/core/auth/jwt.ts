import { SignJWT, jwtVerify } from "jose";
import { getConfig } from "@/core/config";
import { UnauthorizedError } from "@/core/errors";
import type { AccessTokenPayload, RefreshTokenPayload } from "./types";

const ALG = "HS256";
const encoder = new TextEncoder();

function accessKey(): Uint8Array {
  const secret = getConfig().JWT_ACCESS_SECRET;
  if (!secret) {
    throw new Error(
      "JWT_ACCESS_SECRET is not configured. Set it in your environment before using auth helpers.",
    );
  }
  return encoder.encode(secret);
}

function refreshKey(): Uint8Array {
  const secret = getConfig().JWT_REFRESH_SECRET;
  if (!secret) {
    throw new Error(
      "JWT_REFRESH_SECRET is not configured. Set it in your environment before using auth helpers.",
    );
  }
  return encoder.encode(secret);
}

/** Issue a short-lived access token. */
export function signAccessToken(input: { sub: string; roles?: string[] }): Promise<string> {
  const cfg = getConfig();
  return new SignJWT({ type: "access", roles: input.roles ?? [] })
    .setProtectedHeader({ alg: ALG })
    .setSubject(input.sub)
    .setIssuedAt()
    .setExpirationTime(`${cfg.JWT_ACCESS_TTL}s`)
    .sign(accessKey());
}

/** Issue a long-lived refresh token bound to a session id. */
export function signRefreshToken(input: { sub: string; sessionId: string }): Promise<string> {
  const cfg = getConfig();
  return new SignJWT({ type: "refresh", sessionId: input.sessionId })
    .setProtectedHeader({ alg: ALG })
    .setSubject(input.sub)
    .setIssuedAt()
    .setExpirationTime(`${cfg.JWT_REFRESH_TTL}s`)
    .sign(refreshKey());
}

/** Verify and decode an access token, or throw UnauthorizedError. */
export async function verifyAccessToken(token: string): Promise<AccessTokenPayload> {
  try {
    const { payload } = await jwtVerify(token, accessKey());
    if (payload.type !== "access" || typeof payload.sub !== "string") {
      throw new UnauthorizedError("Invalid token type");
    }
    const roles = Array.isArray(payload.roles) ? (payload.roles as string[]) : [];
    return { sub: payload.sub, roles, type: "access" };
  } catch (error) {
    if (error instanceof UnauthorizedError) throw error;
    throw new UnauthorizedError("Invalid or expired access token");
  }
}

/** Verify and decode a refresh token, or throw UnauthorizedError. */
export async function verifyRefreshToken(token: string): Promise<RefreshTokenPayload> {
  try {
    const { payload } = await jwtVerify(token, refreshKey());
    if (
      payload.type !== "refresh" ||
      typeof payload.sub !== "string" ||
      typeof payload.sessionId !== "string"
    ) {
      throw new UnauthorizedError("Invalid token type");
    }
    return { sub: payload.sub, sessionId: payload.sessionId, type: "refresh" };
  } catch (error) {
    if (error instanceof UnauthorizedError) throw error;
    throw new UnauthorizedError("Invalid or expired refresh token");
  }
}
