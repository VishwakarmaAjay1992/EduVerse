import type { RedisLike } from "./types";

/** Read a JSON value from the cache, or null if absent. */
export async function getJson<T>(redis: RedisLike, key: string): Promise<T | null> {
  const raw = await redis.get(key);
  return raw === null ? null : (JSON.parse(raw) as T);
}

/** Write a JSON value with a TTL in seconds. */
export async function setJson<T>(
  redis: RedisLike,
  key: string,
  value: T,
  ttlSeconds: number
): Promise<void> {
  await redis.set(key, JSON.stringify(value), "EX", ttlSeconds);
}

/**
 * Cache-aside: return the cached value if present, otherwise load it, cache it
 * with the given TTL, and return it.
 */
export async function getOrSet<T>(
  redis: RedisLike,
  key: string,
  ttlSeconds: number,
  loader: () => Promise<T>
): Promise<T> {
  const cached = await getJson<T>(redis, key);
  if (cached !== null) return cached;

  const value = await loader();
  await setJson(redis, key, value, ttlSeconds);
  return value;
}
