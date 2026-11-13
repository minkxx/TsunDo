import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const notes = sqliteTable("notes", {
   id: integer("id").primaryKey({ autoIncrement: true }),
   title: text("title").notNull(),
   description: text("description").notNull(),
   createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
   updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

export type Note = typeof notes.$inferSelect;
export type NewNote = typeof notes.$inferInsert;
