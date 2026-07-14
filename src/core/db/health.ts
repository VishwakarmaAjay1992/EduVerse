import type { PrismaClient } from "@prisma/client";
import { getPrisma } from "./client";

/** Verify database connectivity with a trivial query. */
export async function pingDatabase(client: PrismaClient = getPrisma()): Promise<boolean> {
  try {
    await client.$queryRaw`SELECT 1`;
    return true;
  } catch {
    return false;
  }
}
