import { hash, verify } from "@node-rs/argon2";

/** OWASP-aligned Argon2id parameters. Argon2id is this library's default variant. */
const OPTIONS = {
  memoryCost: 19_456,
  timeCost: 2,
  parallelism: 1,
} as const;

/** Hash a plaintext password with Argon2id. */
export function hashPassword(password: string): Promise<string> {
  return hash(password, OPTIONS);
}

/** Verify a plaintext password against a stored Argon2id digest. */
export async function verifyPassword(digest: string, password: string): Promise<boolean> {
  try {
    return await verify(digest, password);
  } catch {
    return false;
  }
}
