export interface Lead {
  id: string
  name: string
  email: string
  phone?: string
  company: string
  topic?: string
  message: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  status: 'new' | 'contacted' | 'qualified' | 'closed'
  created_at: string
}

export interface Client {
  id: string
  name: string
  logo_url?: string
  is_featured: boolean
  order: number
  created_at: string
}

export interface Testimonial {
  id: string
  author_name: string
  role_company: string
  quote: string
  logo_url?: string
  is_published: boolean
  order: number
  created_at: string
}

export interface Service {
  id: string
  title: string
  summary: string
  icon?: string
  order: number
  created_at: string
}

export interface Download {
  id: string
  ip_address?: string
  user_agent?: string
  downloaded_at: string
}
