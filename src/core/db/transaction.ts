import type { PrismaClient } from "@prisma/client";
import { getPrisma } from "./client";

/**
 * The client available inside an interactive transaction: the full Prisma
 * client minus connection-lifecycle and nesting operations.
 */
export type TransactionClient = Omit<
  PrismaClient,
  "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
>;

/** Run a function inside a database transaction. */
export function withTransaction<T>(
  fn: (tx: TransactionClient) => Promise<T>,
  client: PrismaClient = getPrisma()
): Promise<T> {
  return client.$transaction(fn);
}
