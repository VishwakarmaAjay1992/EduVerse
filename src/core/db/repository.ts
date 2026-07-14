/**
 * Repository contract. Concrete repositories live in their owning module and
 * are the only place Prisma queries are written; services depend on this
 * interface, never on Prisma directly.
 */
export interface Repository<TEntity, TCreate, TUpdate, TId = string> {
  findById(id: TId): Promise<TEntity | null>;
  create(data: TCreate): Promise<TEntity>;
  update(id: TId, data: TUpdate): Promise<TEntity>;
  delete(id: TId): Promise<void>;
}
