import * as dotenv from 'dotenv'
import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm'

dotenv.config({ path: '.env.local' })

const leads = sqliteTable('leads', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  company: text('company').notNull(),
  message: text('message').notNull(),
  created_at: integer('created_at', { mode: 'timestamp' }),
})

const gallery = sqliteTable('gallery', {
  id: text('id').primaryKey(),
  image_url: text('image_url').notNull(),
  description: text('description').notNull(),
  category: text('category').notNull(),
})

async function checkData() {
  try {
    console.log('🔍 Checking database data...\n')

    const client = createClient({
      url: process.env.TURSO_DATABASE_URL!,
      authToken: process.env.TURSO_AUTH_TOKEN,
    })

    const db = drizzle(client)
    
    // Check leads
    console.log('📧 Leads (Contact Form Submissions):')
    const leadsData = await db.select().from(leads)
    console.log(`   Total: ${leadsData.length}`)
    if (leadsData.length > 0) {
      leadsData.forEach((lead, i) => {
        console.log(`   ${i + 1}. ${lead.name} (${lead.email}) - ${lead.company}`)
      })
    } else {
      console.log('   (No data yet)')
    }
    
    console.log('\n🖼️  Gallery Items:')
    const galleryData = await db.select().from(gallery)
    console.log(`   Total: ${galleryData.length}`)
    if (galleryData.length > 0) {
      galleryData.forEach((item, i) => {
        console.log(`   ${i + 1}. ${item.description} (${item.category})`)
      })
    } else {
      console.log('   (No data yet)')
    }
    
    console.log('\n✅ Data check complete!')
    
    process.exit(0)
  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

checkData()
