import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'
import { migrate } from 'drizzle-orm/libsql/migrator'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

async function applySchema() {
  console.log('🚀 Applying schema to Turso database...\n')

  try {
    const client = createClient({
      url: process.env.TURSO_DATABASE_URL!,
      authToken: process.env.TURSO_AUTH_TOKEN,
    })

    const db = drizzle(client)

    console.log('📦 Running migrations...')
    await migrate(db, { migrationsFolder: './lib/db/migrations' })

    console.log('\n✅ Schema applied successfully!')
    console.log('\n📋 Tables created:')
    console.log('  - clients')
    console.log('  - downloads')
    console.log('  - gallery')
    console.log('  - leads')
    console.log('  - services')
    console.log('  - testimonials')
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Error applying schema:', error)
    process.exit(1)
  }
}

applySchema()
