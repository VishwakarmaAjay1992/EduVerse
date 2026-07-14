import type { RedisLike } from "./types";

export interface RateLimitResult {
  allowed: boolean;
  limit: number;
  remaining: number;
  resetSeconds: number;
}

/**
 * Fixed-window rate limit. Increments a counter under `key`, setting the window
 * TTL on first hit. Returns whether the request is allowed and how many
 * requests remain in the current window.
 */
export async function fixedWindowRateLimit(
  redis: RedisLike,
  key: string,
  limit: number,
  windowSeconds: number
): Promise<RateLimitResult> {
  const count = await redis.incr(key);
  if (count === 1) {
    await redis.expire(key, windowSeconds);
  }

  const ttl = await redis.ttl(key);
  const resetSeconds = ttl >= 0 ? ttl : windowSeconds;

  return {
    allowed: count <= limit,
    limit,
    remaining: Math.max(0, limit - count),
    resetSeconds,
  };
}
