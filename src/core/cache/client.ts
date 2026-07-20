import Redis from "ioredis";
import { getConfig } from "@/core/config";

const globalForRedis = globalThis as unknown as { redis?: Redis };

/** Lazily construct and memoize the Redis client. */
export function getRedis(): Redis {
  if (globalForRedis.redis) return globalForRedis.redis;

  const url = getConfig().REDIS_URL;
  if (!url) {
    throw new Error(
      "REDIS_URL is not configured. Set it in your environment before using cache helpers.",
    );
  }

  const client = new Redis(url, {
    maxRetriesPerRequest: 3,
    lazyConnect: true,
  });

  if (getConfig().NODE_ENV !== "production") {
    globalForRedis.redis = client;
  }
  return client;
}
