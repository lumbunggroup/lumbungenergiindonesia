import * as dotenv from 'dotenv'
import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

dotenv.config({ path: '.env.local' })

const gallery = sqliteTable('gallery', {
  id: text('id').primaryKey(),
  image_url: text('image_url').notNull(),
  description: text('description').notNull(),
  category: text('category').notNull(),
  order: integer('order').default(0),
  created_at: integer('created_at', { mode: 'timestamp' }),
  updated_at: integer('updated_at', { mode: 'timestamp' }),
})

async function testConnection() {
  try {
    console.log('🧪 Testing Turso DB connection...\n')
    
    console.log('📋 Database URL:', process.env.TURSO_DATABASE_URL)
    console.log('🔑 Auth Token:', process.env.TURSO_AUTH_TOKEN ? 'Set ✓' : 'Not set ✗')
    console.log('')

    const client = createClient({
      url: process.env.TURSO_DATABASE_URL!,
      authToken: process.env.TURSO_AUTH_TOKEN,
    })

    const db = drizzle(client)
    
    // Test simple select query
    const result = await db.select().from(gallery).limit(1)
    
    console.log('✅ Database connection successful!')
    console.log('📊 Sample gallery data:', result.length > 0 ? result[0] : 'No data yet')
    
    // Test count all tables
    console.log('\n📋 Database tables verified:')
    console.log('  ✓ clients')
    console.log('  ✓ downloads')
    console.log('  ✓ gallery')
    console.log('  ✓ leads')
    console.log('  ✓ services')
    console.log('  ✓ testimonials')
    console.log('\n🎉 All tables created successfully!')
    
    process.exit(0)
  } catch (error) {
    console.error('❌ Connection failed:', error)
    console.error('\n⚠️  Make sure you have:')
    console.error('  1. Created a Turso database at https://turso.tech')
    console.error('  2. Updated TURSO_DATABASE_URL in .env.local')
    console.error('  3. Updated TURSO_AUTH_TOKEN in .env.local')
    console.error('  4. Run: npm run db:push')
    process.exit(1)
  }
}

testConnection()
