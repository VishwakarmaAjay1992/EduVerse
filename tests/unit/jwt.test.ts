// @vitest-environment node
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import { resetConfigForTesting } from "@/core/config";
import { UnauthorizedError } from "@/core/errors";
import {
  signAccessToken,
  signRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
} from "@/core/auth/jwt";

beforeAll(() => {
  vi.stubEnv("JWT_ACCESS_SECRET", "a".repeat(32));
  vi.stubEnv("JWT_REFRESH_SECRET", "b".repeat(32));
  vi.stubEnv("DATABASE_URL", "postgresql://localhost/test");
  vi.stubEnv("REDIS_URL", "redis://localhost:6379");
  resetConfigForTesting();
});

afterAll(() => {
  vi.unstubAllEnvs();
  resetConfigForTesting();
});

describe("jwt", () => {
  it("signs and verifies an access token with roles", async () => {
    const token = await signAccessToken({ sub: "user-1", roles: ["student"] });
    const payload = await verifyAccessToken(token);
    expect(payload.sub).toBe("user-1");
    expect(payload.roles).toEqual(["student"]);
    expect(payload.type).toBe("access");
  });

  it("signs and verifies a refresh token bound to a session", async () => {
    const token = await signRefreshToken({ sub: "user-1", sessionId: "sess-9" });
    const payload = await verifyRefreshToken(token);
    expect(payload.sub).toBe("user-1");
    expect(payload.sessionId).toBe("sess-9");
  });

  it("rejects an access token presented as a refresh token", async () => {
    const access = await signAccessToken({ sub: "user-1" });
    await expect(verifyRefreshToken(access)).rejects.toBeInstanceOf(UnauthorizedError);
  });

  it("rejects a tampered token", async () => {
    const token = await signAccessToken({ sub: "user-1" });
    await expect(verifyAccessToken(token + "tampered")).rejects.toBeInstanceOf(UnauthorizedError);
  });
});
