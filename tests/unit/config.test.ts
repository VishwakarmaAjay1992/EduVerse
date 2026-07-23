// @vitest-environment node
import { describe, expect, it } from "vitest";
import { envSchema } from "@/core/config";

const base = {
  DATABASE_URL: "postgresql://localhost/db",
  REDIS_URL: "redis://localhost:6379",
  JWT_ACCESS_SECRET: "x".repeat(16),
  JWT_REFRESH_SECRET: "y".repeat(16),
};

describe("env config", () => {
  it("applies defaults and coerces numeric TTLs", () => {
    const env = envSchema.parse({ ...base, JWT_ACCESS_TTL: "1200" });
    expect(env.NODE_ENV).toBe("development");
    expect(env.JWT_ACCESS_TTL).toBe(1200);
    expect(env.RATE_LIMIT_MAX_REQUESTS).toBe(120);
  });

  it("allows an unused Phase 1 secret to be omitted", () => {
    const { JWT_ACCESS_SECRET: _omit, ...rest } = base;
    void _omit;
    expect(envSchema.safeParse(rest).success).toBe(true);
  });

  it("fails when a provided secret is too short", () => {
    expect(envSchema.safeParse({ ...base, JWT_ACCESS_SECRET: "short" }).success).toBe(false);
  });
});
