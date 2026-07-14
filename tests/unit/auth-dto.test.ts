// @vitest-environment node
import { describe, expect, it } from "vitest";
import { loginSchema, registerSchema } from "@/dto/auth";

describe("auth DTOs", () => {
  it("accepts a valid registration", () => {
    const result = registerSchema.safeParse({
      email: "a@example.com",
      password: "Str0ngPass",
      displayName: "Ada",
    });
    expect(result.success).toBe(true);
  });

  it("rejects a weak password", () => {
    const result = registerSchema.safeParse({
      email: "a@example.com",
      password: "weak",
      displayName: "Ada",
    });
    expect(result.success).toBe(false);
  });

  it("rejects an invalid email on login", () => {
    expect(loginSchema.safeParse({ email: "nope", password: "x" }).success).toBe(false);
  });
});
