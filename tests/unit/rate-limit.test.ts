// @vitest-environment node
import { describe, expect, it } from "vitest";
import { fixedWindowRateLimit } from "@/core/cache/rate-limit";
import type { RedisLike } from "@/core/cache/types";

function fakeRedis(): RedisLike {
  const counts = new Map<string, number>();
  return {
    get: async () => null,
    set: async () => "OK",
    del: async () => 0,
    incr: async (k) => {
      const n = (counts.get(k) ?? 0) + 1;
      counts.set(k, n);
      return n;
    },
    expire: async () => 1,
    ttl: async () => 30,
  };
}

describe("fixedWindowRateLimit", () => {
  it("allows requests up to the limit then blocks", async () => {
    const redis = fakeRedis();
    const r1 = await fixedWindowRateLimit(redis, "ip", 2, 60);
    const r2 = await fixedWindowRateLimit(redis, "ip", 2, 60);
    const r3 = await fixedWindowRateLimit(redis, "ip", 2, 60);
    expect(r1.allowed).toBe(true);
    expect(r1.remaining).toBe(1);
    expect(r2.allowed).toBe(true);
    expect(r2.remaining).toBe(0);
    expect(r3.allowed).toBe(false);
    expect(r3.remaining).toBe(0);
    expect(r3.resetSeconds).toBe(30);
  });
});
