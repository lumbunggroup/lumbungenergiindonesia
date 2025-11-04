import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm'

// Services Table
export const services = sqliteTable('services', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  title: text('title').notNull(),
  summary: text('summary').notNull(),
  icon: text('icon'),
  order: integer('order').default(0),
  created_at: integer('created_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
})

// Clients Table
export const clients = sqliteTable('clients', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text('name').notNull(),
  logo_url: text('logo_url'),
  is_featured: integer('is_featured', { mode: 'boolean' }).default(false),
  order: integer('order').default(0),
  created_at: integer('created_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
})

// Downloads Table
export const downloads = sqliteTable('downloads', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  ip_address: text('ip_address'),
  user_agent: text('user_agent'),
  downloaded_at: integer('downloaded_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
})

// Leads Table
export const leads = sqliteTable('leads', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  company: text('company').notNull(),
  topic: text('topic'),
  message: text('message').notNull(),
  utm_source: text('utm_source'),
  utm_medium: text('utm_medium'),
  utm_campaign: text('utm_campaign'),
  status: text('status', { enum: ['new', 'contacted', 'qualified', 'closed'] }).default('new'),
  created_at: integer('created_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
})

// Testimonials Table
export const testimonials = sqliteTable('testimonials', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  author_name: text('author_name').notNull(),
  role_company: text('role_company').notNull(),
  quote: text('quote').notNull(),
  logo_url: text('logo_url'),
  is_published: integer('is_published', { mode: 'boolean' }).default(true),
  order: integer('order').default(0),
  created_at: integer('created_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
})

// Gallery Table
export const gallery = sqliteTable('gallery', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  image_url: text('image_url').notNull(),
  description: text('description').notNull(),
  category: text('category', { 
    enum: ['energi', 'logistik', 'mekanikal-elektrikal', 'teknologi-informasi'] 
  }).notNull(),
  order: integer('order').default(0),
  created_at: integer('created_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
  updated_at: integer('updated_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
})

// Export types for TypeScript
export type Service = typeof services.$inferSelect
export type NewService = typeof services.$inferInsert

export type Client = typeof clients.$inferSelect
export type NewClient = typeof clients.$inferInsert

export type Download = typeof downloads.$inferSelect
export type NewDownload = typeof downloads.$inferInsert

export type Lead = typeof leads.$inferSelect
export type NewLead = typeof leads.$inferInsert

export type Testimonial = typeof testimonials.$inferSelect
export type NewTestimonial = typeof testimonials.$inferInsert

export type Gallery = typeof gallery.$inferSelect
export type NewGallery = typeof gallery.$inferInsert
