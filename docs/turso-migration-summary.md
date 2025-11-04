# Migrasi Database: Supabase → Turso DB + Drizzle ORM

**Status:** ✅ Completed  
**Date:** November 4, 2025  
**Database:** Turso (SQLite-based edge database)  
**ORM:** Drizzle ORM

---

## 🎯 Migration Summary

Successfully migrated from **Supabase (PostgreSQL)** to **Turso DB (SQLite)** with **Drizzle ORM** as the database layer.

### Key Changes:
- ❌ Removed: `@supabase/supabase-js` dependency
- ✅ Added: `@libsql/client`, `drizzle-orm`, `drizzle-kit`
- ✅ Created: 6 database tables with SQLite-compatible schema
- ✅ Updated: 5 API routes to use Drizzle ORM
- ✅ Configured: Turso cloud database connection

---

## 📊 Database Schema

### Tables Created (6 total):

#### 1. **services**
```sql
CREATE TABLE services (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  icon TEXT,
  order INTEGER DEFAULT 0,
  created_at INTEGER DEFAULT (unixepoch())
)
```

#### 2. **clients**
```sql
CREATE TABLE clients (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  logo_url TEXT,
  is_featured INTEGER DEFAULT false,
  order INTEGER DEFAULT 0,
  created_at INTEGER DEFAULT (unixepoch())
)
```

#### 3. **downloads**
```sql
CREATE TABLE downloads (
  id TEXT PRIMARY KEY,
  ip_address TEXT,
  user_agent TEXT,
  downloaded_at INTEGER DEFAULT (unixepoch())
)
```

#### 4. **leads**
```sql
CREATE TABLE leads (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT NOT NULL,
  topic TEXT,
  message TEXT NOT NULL,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  status TEXT DEFAULT 'new',
  created_at INTEGER DEFAULT (unixepoch())
)
```

#### 5. **testimonials**
```sql
CREATE TABLE testimonials (
  id TEXT PRIMARY KEY,
  author_name TEXT NOT NULL,
  role_company TEXT NOT NULL,
  quote TEXT NOT NULL,
  logo_url TEXT,
  is_published INTEGER DEFAULT true,
  order INTEGER DEFAULT 0,
  created_at INTEGER DEFAULT (unixepoch())
)
```

#### 6. **gallery**
```sql
CREATE TABLE gallery (
  id TEXT PRIMARY KEY,
  image_url TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  order INTEGER DEFAULT 0,
  created_at INTEGER DEFAULT (unixepoch()),
  updated_at INTEGER DEFAULT (unixepoch())
)
```

---

## 🔧 Implementation Details

### 1. Dependencies Installed:
```bash
npm install @libsql/client drizzle-orm
npm install -D drizzle-kit tsx dotenv
npm uninstall @supabase/supabase-js
```

### 2. Configuration Files:

**`drizzle.config.ts`** - Drizzle ORM configuration
```typescript
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './lib/db/schema.ts',
  out: './lib/db/migrations',
  dialect: 'turso',
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
})
```

**`lib/db/index.ts`** - Database connection
```typescript
import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'
import * as schema from './schema'

const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN,
})

export const db = drizzle(client, { schema })
```

**`lib/db/schema.ts`** - All table definitions (90 lines)

### 3. Environment Variables:

**`.env.local`** (Updated)
```env
# Turso Database
TURSO_DATABASE_URL=libsql://lei-website-db-lumbunggroup.aws-ap-northeast-1.turso.io
TURSO_AUTH_TOKEN=eyJ...

# Removed:
# NEXT_PUBLIC_SUPABASE_URL
# NEXT_PUBLIC_SUPABASE_ANON_KEY
# SUPABASE_SERVICE_ROLE_KEY
```

### 4. API Routes Updated:

| Route | Status | Changes |
|-------|--------|---------|
| `/api/contact/route.ts` | ✅ | Insert leads using Drizzle |
| `/api/admin/gallery/route.ts` | ✅ | GET & POST with Drizzle |
| `/api/admin/gallery/[id]/route.ts` | ✅ | GET, PATCH, DELETE with Drizzle |
| `/api/download/company-profile/route.ts` | ✅ | Track downloads using Drizzle |
| `/api/admin/gallery/upload/route.ts` | ⚠️ | No changes (Vercel Blob only) |

### 5. Files Deleted:
- ❌ `lib/supabase.ts` (Supabase client removed)

---

## 🚀 Key Type Conversions (PostgreSQL → SQLite)

| PostgreSQL | SQLite (Turso) |
|------------|----------------|
| `uuid` | `TEXT` with UUID |
| `timestamptz` | `INTEGER` (Unix timestamp) |
| `boolean` | `INTEGER` (0/1) |
| `gen_random_uuid()` | `crypto.randomUUID()` |
| `now()` | `unixepoch()` |

---

## ⏭️ Next Steps (Manual Action Required)

### 1. ✅ Push Schema to Turso
```bash
npm run db:push
# Select "Yes" when prompted to apply migrations
```

### 2. ✅ Test Database Connection
```bash
npm run db:test
```
Expected output:
```
🧪 Testing Turso DB connection...
✅ Database connection successful!
📊 Sample gallery data: No data yet
```

### 3. ✅ Open Drizzle Studio (Optional)
```bash
npm run db:studio
# Opens http://localhost:4983
```

### 4. ✅ Test API Endpoints

**Test Contact Form:**
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Corp",
    "message": "Testing Turso DB"
  }'
```

**Test Gallery API:**
```bash
# List gallery items
curl http://localhost:3000/api/admin/gallery

# Create gallery item
curl -X POST http://localhost:3000/api/admin/gallery \
  -H "Content-Type: application/json" \
  -d '{
    "image_url": "https://example.com/image.jpg",
    "description": "Test Image",
    "category": "energi"
  }'
```

---

## 📝 NPM Scripts Available

| Script | Command | Description |
|--------|---------|-------------|
| `db:generate` | `drizzle-kit generate` | Generate migration files |
| `db:push` | `drizzle-kit push` | Push schema to Turso |
| `db:studio` | `drizzle-kit studio` | Open Drizzle Studio UI |
| `db:test` | `tsx lib/db/test.ts` | Test database connection |

---

## ✅ Migration Checklist

- [x] Install Turso DB dependencies
- [x] Remove Supabase dependencies
- [x] Update environment variables
- [x] Create Drizzle configuration
- [x] Define SQLite-compatible schema (6 tables)
- [x] Create database connection
- [x] Generate migration files
- [x] Update `/api/contact/route.ts`
- [x] Update `/api/admin/gallery/route.ts`
- [x] Update `/api/admin/gallery/[id]/route.ts`
- [x] Update `/api/download/company-profile/route.ts`
- [x] Delete `lib/supabase.ts`
- [ ] **MANUAL: Push schema to Turso (`npm run db:push`)**
- [ ] **MANUAL: Test all API endpoints**
- [ ] **MANUAL: Deploy to Vercel with Turso env vars**

---

## 🎉 Benefits of Turso DB

✅ **Performance**: Edge-native, < 100ms latency globally  
✅ **Cost**: Generous free tier (500 databases, 9GB storage)  
✅ **Scalability**: Auto-scaling, no connection pool limits  
✅ **Developer Experience**: Works seamlessly with Drizzle Studio  
✅ **SQLite Compatibility**: Standard SQL, battle-tested  
✅ **Edge-Ready**: Perfect for Next.js Edge runtime & Vercel

---

## 🔗 Useful Links

- **Turso Dashboard**: https://turso.tech/app
- **Drizzle ORM Docs**: https://orm.drizzle.team
- **Drizzle + Turso Guide**: https://orm.drizzle.team/docs/tutorials/drizzle-with-turso
- **Database URL**: `libsql://lei-website-db-lumbunggroup.aws-ap-northeast-1.turso.io`

---

## 💡 Tips for Production Deployment

1. **Vercel Environment Variables:**
   ```
   TURSO_DATABASE_URL=libsql://...
   TURSO_AUTH_TOKEN=eyJ...
   ```

2. **Automatic Migrations:**
   - Run `npm run db:push` after schema changes
   - Migrations are tracked in `lib/db/migrations/`

3. **Monitoring:**
   - Use Drizzle Studio for data inspection
   - Check Turso dashboard for usage metrics

4. **Backup Strategy:**
   - Turso provides automatic backups
   - Export data via Drizzle Studio if needed

---

**Migration Completed Successfully! 🎉**

All code changes are done. Next step: Run `npm run db:push` to create tables in Turso.
