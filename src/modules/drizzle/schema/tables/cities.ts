import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const cities = pgTable('cities', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
});

export type CitiesTable = typeof cities.$inferSelect;
export type CitiesInsert = typeof cities.$inferInsert;
