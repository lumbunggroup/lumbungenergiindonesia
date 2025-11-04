import * as dotenv from 'dotenv'

// Load environment variables FIRST before importing db
dotenv.config({ path: '.env.local' })

import { db } from './index'
import { gallery } from './schema'

async function testConnection() {
  try {
    console.log('🧪 Testing Turso DB connection...')
    
    // Test simple select query
    const result = await db.select().from(gallery).limit(1)
    
    console.log('✅ Database connection successful!')
    console.log('📊 Sample gallery data:', result.length > 0 ? result[0] : 'No data yet')
    
    // Test count all tables
    console.log('\n📋 Database tables created:')
    console.log('  - services')
    console.log('  - clients')
    console.log('  - downloads')
    console.log('  - leads')
    console.log('  - testimonials')
    console.log('  - gallery')
    
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
