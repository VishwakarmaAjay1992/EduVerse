// @vitest-environment node
import { describe, expect, it, vi } from "vitest";
import { getOrSet } from "@/core/cache/cache";
import type { RedisLike } from "@/core/cache/types";

function fakeRedis(): RedisLike {
  const store = new Map<string, string>();
  return {
    get: async (k) => store.get(k) ?? null,
    set: async (k, v) => {
      store.set(k, v);
      return "OK";
    },
    del: async (...keys) => {
      let n = 0;
      for (const k of keys) if (store.delete(k)) n++;
      return n;
    },
    incr: async (k) => {
      const n = Number(store.get(k) ?? "0") + 1;
      store.set(k, String(n));
      return n;
    },
    expire: async () => 1,
    ttl: async () => 60,
  };
}

describe("getOrSet", () => {
  it("loads and caches on a miss", async () => {
    const redis = fakeRedis();
    const loader = vi.fn(async () => ({ n: 1 }));
    const value = await getOrSet(redis, "k", 60, loader);
    expect(value).toEqual({ n: 1 });
    expect(loader).toHaveBeenCalledTimes(1);
  });

  it("returns the cached value without calling the loader on a hit", async () => {
    const redis = fakeRedis();
    await getOrSet(redis, "k", 60, async () => ({ n: 1 }));
    const loader = vi.fn(async () => ({ n: 2 }));
    const value = await getOrSet(redis, "k", 60, loader);
    expect(value).toEqual({ n: 1 });
    expect(loader).not.toHaveBeenCalled();
  });
});
