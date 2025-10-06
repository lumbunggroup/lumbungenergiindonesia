interface ContactNotificationEmailProps {
  name: string
  email: string
  company: string
  phone?: string
  topic?: string
  message: string
}

export function generateContactNotificationEmail(props: ContactNotificationEmailProps): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1e3a5f; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 20px; }
    .label { font-weight: bold; color: #1e3a5f; margin-bottom: 5px; }
    .value { background: white; padding: 10px; border-radius: 4px; border-left: 3px solid #ff7849; }
    .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">🔔 Lead Baru dari Website LEI</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Nama:</div>
        <div class="value">${props.name}</div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value">${props.email}</div>
      </div>
      <div class="field">
        <div class="label">Perusahaan:</div>
        <div class="value">${props.company}</div>
      </div>
      ${props.phone ? `
      <div class="field">
        <div class="label">Telepon:</div>
        <div class="value">${props.phone}</div>
      </div>
      ` : ''}
      ${props.topic ? `
      <div class="field">
        <div class="label">Topik:</div>
        <div class="value">${props.topic}</div>
      </div>
      ` : ''}
      <div class="field">
        <div class="label">Pesan:</div>
        <div class="value">${props.message}</div>
      </div>
      <div class="footer">
        <p>Email ini dikirim otomatis dari formulir kontak website LEI</p>
        <p>Segera follow up lead ini untuk respon &lt;4 jam kerja</p>
      </div>
    </div>
  </div>
</body>
</html>
  `
}

interface AutoReplyEmailProps {
  name: string
}

export function generateAutoReplyEmail(props: AutoReplyEmailProps): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1e3a5f; color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
    .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
    .logo { font-size: 32px; font-weight: bold; margin-bottom: 10px; }
    .footer { text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px; }
    .highlight { background: #fff3cd; padding: 15px; border-left: 4px solid #ff7849; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">LEI</div>
      <h1 style="margin: 0; font-size: 24px;">Terima Kasih Telah Menghubungi Kami!</h1>
    </div>
    <div class="content">
      <p>Halo <strong>${props.name}</strong>,</p>
      
      <p>Terima kasih telah menghubungi <strong>PT Lumbung Energi Indonesia</strong>.</p>
      
      <div class="highlight">
        <strong>✅ Permintaan Anda telah kami terima!</strong><br>
        Tim sales kami akan menghubungi Anda dalam waktu <strong>&lt;4 jam kerja</strong>.
      </div>
      
      <p>Sementara menunggu, Anda dapat:</p>
      <ul>
        <li>Mengunduh <a href="${process.env.NEXT_PUBLIC_SITE_URL}/api/download/company-profile">Company Profile kami</a></li>
        <li>Menghubungi kami langsung via WhatsApp: <a href="https://wa.me/${process.env.WHATSAPP_NUMBER}">Chat WhatsApp</a></li>
        <li>Email: <a href="mailto:sales@lumbungenergi.id">sales@lumbungenergi.id</a></li>
      </ul>
      
      <div class="footer">
        <p><strong>PT Lumbung Energi Indonesia</strong></p>
        <p>Solusi Energi Industri yang Terpercaya</p>
        <p style="margin-top: 15px; font-size: 12px; color: #999;">
          Email ini dikirim otomatis. Mohon tidak membalas email ini.
        </p>
      </div>
    </div>
  </div>
</body>
</html>
  `
}
