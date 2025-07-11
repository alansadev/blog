import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const postsTable = sqliteTable('posts', {
  id: text('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  author: text('author').notNull(),
  excerpt: text('excerpt').notNull(),
  content: text('content').notNull(),
  coverImageUrl: text('cover_image_url').notNull(),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
  published: integer('published', { mode: 'boolean' }).notNull(),
});

export type PostTableSelectModel = InferSelectModel<typeof postsTable>;
export type PostTableInsertModel = InferInsertModel<typeof postsTable>;
