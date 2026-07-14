// @vitest-environment node
import { describe, expect, it } from "vitest";
import { hashPassword, verifyPassword } from "@/core/auth/password";

describe("password hashing (Argon2id)", () => {
  it("produces an argon2id digest and verifies the original password", async () => {
    const digest = await hashPassword("Str0ngPass!");
    expect(digest).toMatch(/^\$argon2id\$/);
    expect(await verifyPassword(digest, "Str0ngPass!")).toBe(true);
  });

  it("rejects an incorrect password", async () => {
    const digest = await hashPassword("Str0ngPass!");
    expect(await verifyPassword(digest, "wrong-password")).toBe(false);
  });

  it("returns false for a malformed digest instead of throwing", async () => {
    expect(await verifyPassword("not-a-hash", "whatever")).toBe(false);
  });
});
