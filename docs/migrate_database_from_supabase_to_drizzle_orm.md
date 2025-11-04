# Panduan Migrasi Database: Supabase ke Drizzle ORM

## Ringkasan
Panduan komprehensif untuk migrate schema database dari Supabase ke Drizzle ORM dengan pendekatan database-first menggunakan introspection, kemudian mengelola migration dengan codebase-first.

---

## 1. Prerequisites & Setup Awal

### 1.1 Pastikan sudah ter-install:
- Node.js (v18+)
- pnpm atau npm/yarn
- Supabase CLI (latest version)
- PostgreSQL client atau tools database lainnya

### 1.2 Siapkan kredensial Supabase:
1. Akses dashboard Supabase project Anda
2. Navigasi ke **Database Settings** → **Connection String**
3. Pilih **Connection Pooling** (gunakan pooler untuk production)
4. Copy connection string (format: `postgresql://user:password@host:port/dbname`)
5. Ganti placeholder password dengan actual password Anda

---

## 2. Install Dependencies

Jalankan command berikut di root project (Next.js/Node.js):

```

pnpm add drizzle-orm postgres
pnpm add -D drizzle-kit dotenv

```

Untuk Node.js / Express:
```

npm install drizzle-orm postgres
npm install -D drizzle-kit dotenv

```

---

## 3. Setup Environment Variables

Buat file `.env` atau `.env.local` di root project:

```

DATABASE_URL="postgresql://user:password@region.pooler.supabase.com:6543/postgres"

```

**Catatan:**
- Untuk connection pooling, gunakan port `6543` (bukan 5432)
- Pool mode: **Transaction** (default untuk Supabase)
- Jangan enable prepared statements jika menggunakan Transaction pool mode

---

## 4. Konfigurasi Drizzle

### 4.1 Buat `drizzle.config.ts` di root project:

```

import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

export default defineConfig({
schema: './src/db/schema.ts',
out: './src/db/migrations',
dialect: 'postgresql',
dbCredentials: {
url: process.env.DATABASE_URL!,
},
// Jika ada custom schema selain "public", tambahkan:
// schemaFilter: ['public', 'custom_schema'],

// Untuk introspect schema yang ada:
introspect: {
casing: 'preserve', // atau 'snake_case' / 'camelCase'
},

verbose: true,
strict: true,
});

```

### 4.2 Buat struktur folder di `src/db/`:

```

src/
├── db/
│   ├── index.ts           (database connection)
│   ├── schema.ts          (table definitions)
│   ├── migrations/        (auto-generated migrations)
│   └── queries/           (optional: query functions)
├── env.ts
└── ...

```

---

## 5. Setup Database Connection

### 5.1 Buat `src/db/index.ts`:

**Untuk Next.js (SSR/API Routes):**
```

import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const client = postgres(process.env.DATABASE_URL!, {
prepare: false, // Disable jika menggunakan Transaction pool mode
});

export const db = drizzle(client, { schema });

```

**Untuk serverless/Edge Functions:**
```

import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const sql = postgres(process.env.DATABASE_URL!, {
prepare: false,
ssl: 'require',
});

export const db = drizzle(sql);

```

---

## 6. Introspect Schema Existing Supabase Database

### 6.1 Pull schema dari Supabase:

```

pnpm drizzle-kit introspect:pg

```

Atau dengan environment tertentu:
```

DATABASE_URL="your_connection_string" pnpm drizzle-kit introspect:pg

```

**Hasil:** File `src/db/schema.ts` akan ter-generate otomatis dari struktur database Supabase.

### 6.2 Review dan cleanup schema yang di-generate:

Periksa `src/db/schema.ts` untuk:
- ✓ Pastikan semua table ter-introspect dengan benar
- ⚠️ Jika ada foreign keys ke `auth.users` (Supabase auth), buat `src/db/authSchema.ts` terpisah
- ⚠️ Hapus atau sesuaikan create statements untuk `auth` schema (jangan di-manage via Drizzle)

**Contoh handling auth.users:**
```

// src/db/authSchema.ts (jangan di-export dari schema utama)
import { pgSchema, uuid } from 'drizzle-orm/pg-core';

const authSchema = pgSchema('auth');

export const users = authSchema.table('users', {
id: uuid('id').primaryKey(),
// ... field lainnya
});

```

---

## 7. Data Migration (Jika mengganti database target)

### Skenario A: Tetap di Supabase (hanya tambah Drizzle ORM)
Tidak perlu data migration, cukup:
1. Introspect schema (langkah 6)
2. Configure connection (langkah 5)
3. Mulai gunakan Drizzle ORM untuk queries

### Skenario B: Migrate ke database lain (Turso, PostgreSQL, dll)

**Langkah 1: Export data dari Supabase**
```


# Via Supabase CLI

supabase db pull

# Atau backup PostgreSQL dump

pg_dump postgresql://user:password@host/db > backup.sql

```

**Langkah 2: Create fresh schema di target database**

Update `drizzle.config.ts` dengan target database URL, lalu:
```

pnpm drizzle-kit push

```

**Langkah 3: Restore data (jika ada)**
```

psql postgresql://target_url < backup.sql

```

---

## 8. Generate & Apply Migrations

### 8.1 Setelah introspect, untuk perubahan schema ke depan:

```


# Generate migration file dari schema changes

pnpm drizzle-kit generate

# Lihat migration yang di-generate di src/db/migrations/

```

### 8.2 Apply migrations:

**Option A: Push langsung ke database**
```

pnpm drizzle-kit push

```

**Option B: Run migrations via CLI**
```

pnpm drizzle-kit migrate

```

**Option C: Runtime migrations (Vercel/Serverless)**
```

import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const client = postgres(process.env.DATABASE_URL!);
const db = drizzle(client);

await migrate(db, { migrationsFolder: './src/db/migrations' });

```

---

## 9. Verifikasi & Testing

### 9.1 Test database connection:

```

// src/db/test.ts
import { db } from './index';
import { sql } from 'drizzle-orm';

async function testConnection() {
try {
const result = await db.execute(sql`SELECT 1`);
console.log('✓ Database connection successful:', result);
} catch (error) {
console.error('✗ Connection failed:', error);
}
}

testConnection();

```

Run:
```

npx tsx src/db/test.ts

```

### 9.2 Test query sederhana:

```

// Contoh select
const allUsers = await db.select().from(users).limit(5);

// Contoh insert
await db.insert(users).values({
id: '123',
email: 'test@example.com',
// ... fields lainnya
});

// Verifikasi di Supabase dashboard

```

---

## 10. Best Practices & Gotchas

### ✓ Do's:
- **Backup database sebelum introspect/migrate**
- **Review generated schema.ts sebelum push**
- **Commit migration files ke git**
- **Test di staging terlebih dahulu**
- **Gunakan prepared statements mode: `prepare: false` dengan Transaction pooling**
- **Separate auth schema jika menggunakan Supabase auth**

### ✗ Don'ts:
- **Jangan langsung drop Supabase sebelum verify migration sukses**
- **Jangan enable prepared statements dengan Transaction pool mode**
- **Jangan modify auth.* schemas via Drizzle (kelola via Supabase CLI)**
- **Jangan commit .env dengan credentials**

---

## 11. Troubleshooting Common Issues

### Issue: "Error: connect ECONNREFUSED"
→ Check DATABASE_URL di .env.local dan pastikan URL valid

### Issue: "Error: prepared statement protocol not supported"
→ Set `prepare: false` di postgres connection config

### Issue: Introspect gagal dengan auth schema
→ Tambahkan `schemaFilter: ['public']` di drizzle.config.ts

### Issue: Type errors di schema.ts
→ Run `pnpm drizzle-kit introspect:pg` ulang dan manual fix

---

## 12. Quick Reference Commands

```


# Setup \& install

pnpm install drizzle-orm postgres drizzle-kit dotenv

# Introspect database existing

pnpm drizzle-kit introspect:pg

# Generate migration dari schema changes

pnpm drizzle-kit generate

# Push schema langsung

pnpm drizzle-kit push

# Run migrations dari file

pnpm drizzle-kit migrate

# Buka Drizzle Studio UI (inspect data)

pnpm drizzle-kit studio

```

---

## 13. Next Steps

Setelah migration selesai:

1. **Setup query functions** di `src/db/queries/` untuk organize queries
2. **Integrate dengan API routes** (Next.js)
3. **Setup type-safe API validation** (Zod + Drizzle)
4. **Configure CI/CD** untuk auto-migration di deployment
5. **Monitor** performance queries di Drizzle Studio

---

## Referensi
- Drizzle ORM Docs: https://orm.drizzle.team
- Drizzle + Supabase: https://orm.drizzle.team/docs/tutorials/drizzle-with-supabase
- Supabase Docs: https://supabase.com/docs

---

**Ditulis untuk:** Droid CLI / AI-Assisted Development
**Status:** Production-Ready
**Last Updated:** November 2025
```


***

**Keuntungan format ini untuk Droid CLI:**[^2]

- ✓ Terstruktur jelas dengan section numbering
- ✓ Include code examples siap copy-paste
- ✓ Troubleshooting included untuk common errors
- ✓ Bisa generate `drizzle.config.ts`, `index.ts`, dan `schema.ts` otomatis
- ✓ Commands reference mudah diikuti

