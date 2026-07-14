import { createHash, randomBytes } from "node:crypto";

/**
 * Generate a cryptographically-random, URL-safe token. Used for email
 * verification and password-reset links. The raw token is sent to the user;
 * only its hash is stored.
 */
export function generateToken(bytes = 32): string {
  return randomBytes(bytes).toString("base64url");
}

/** Deterministic SHA-256 hash of a token, for storage and constant lookup. */
export function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}
