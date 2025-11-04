CREATE TABLE `clients` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`logo_url` text,
	`is_featured` integer DEFAULT false,
	`order` integer DEFAULT 0,
	`created_at` integer DEFAULT (unixepoch())
);
--> statement-breakpoint
CREATE TABLE `downloads` (
	`id` text PRIMARY KEY NOT NULL,
	`ip_address` text,
	`user_agent` text,
	`downloaded_at` integer DEFAULT (unixepoch())
);
--> statement-breakpoint
CREATE TABLE `gallery` (
	`id` text PRIMARY KEY NOT NULL,
	`image_url` text NOT NULL,
	`description` text NOT NULL,
	`category` text NOT NULL,
	`order` integer DEFAULT 0,
	`created_at` integer DEFAULT (unixepoch()),
	`updated_at` integer DEFAULT (unixepoch())
);
--> statement-breakpoint
CREATE TABLE `leads` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text,
	`company` text NOT NULL,
	`topic` text,
	`message` text NOT NULL,
	`utm_source` text,
	`utm_medium` text,
	`utm_campaign` text,
	`status` text DEFAULT 'new',
	`created_at` integer DEFAULT (unixepoch())
);
--> statement-breakpoint
CREATE TABLE `services` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`summary` text NOT NULL,
	`icon` text,
	`order` integer DEFAULT 0,
	`created_at` integer DEFAULT (unixepoch())
);
--> statement-breakpoint
CREATE TABLE `testimonials` (
	`id` text PRIMARY KEY NOT NULL,
	`author_name` text NOT NULL,
	`role_company` text NOT NULL,
	`quote` text NOT NULL,
	`logo_url` text,
	`is_published` integer DEFAULT true,
	`order` integer DEFAULT 0,
	`created_at` integer DEFAULT (unixepoch())
);
