import { HeroHeader } from "@/components/header"
import { Footer } from "@/components/layout/footer"
import { ContactFormLEI } from "@/components/contact-form-lei"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <Section className="pt-24 pb-12 lg:pt-28 lg:pb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background -z-10" />
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Terakhir diperbarui: 7 Januari 2025
              </p>
              <h1>Kebijakan Privasi</h1>
              <p className="mt-6 leading-7">
                Lumbung Energi Indonesia berkomitmen melindungi privasi dan keamanan data pribadi Anda. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda.
              </p>
            </div>
          </Container>
        </Section>

        {/* Content Section */}
        <Section className="py-16 lg:py-20">
          <Container>
            <div className="max-w-3xl mx-auto space-y-12 lg:space-y-16">
              
              {/* Section 1: Informasi yang Kami Kumpulkan */}
              <div className="space-y-6">
                <h2>1. Informasi yang Kami Kumpulkan</h2>
                
                <div className="space-y-4">
                  <h3>1.1 Informasi yang Anda Berikan</h3>
                  <p className="leading-7">
                    Kami mengumpulkan informasi yang Anda berikan secara langsung ketika:
                  </p>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground leading-7">
                    <li>Mengisi formulir kontak atau permintaan layanan</li>
                    <li>Menghubungi kami melalui email, telepon, atau WhatsApp</li>
                    <li>Mengunduh materi pemasaran seperti Company Profile</li>
                    <li>Berlangganan newsletter atau komunikasi pemasaran</li>
                  </ul>
                  <p className="leading-7">
                    Informasi yang dikumpulkan meliputi: nama lengkap, email kerja, nama perusahaan, nomor telepon, dan pesan atau kebutuhan proyek Anda.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3>1.2 Informasi yang Dikumpulkan Secara Otomatis</h3>
                  <p className="leading-7">
                    Ketika Anda mengunjungi website kami, kami dapat mengumpulkan informasi teknis secara otomatis:
                  </p>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground leading-7">
                    <li>Alamat IP dan lokasi geografis</li>
                    <li>Jenis perangkat dan browser yang digunakan</li>
                    <li>Halaman yang dikunjungi dan durasi kunjungan</li>
                    <li>Sumber rujukan (website yang mengarahkan Anda ke situs kami)</li>
                  </ul>
                </div>
              </div>

              {/* Section 2: Bagaimana Kami Menggunakan Informasi */}
              <div className="space-y-6">
                <h2>2. Bagaimana Kami Menggunakan Informasi</h2>
                <p className="leading-7">
                  Kami menggunakan informasi yang dikumpulkan untuk tujuan berikut:
                </p>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground leading-7">
                  <li>Merespons pertanyaan dan permintaan layanan Anda</li>
                  <li>Memberikan penawaran, proposal, dan informasi produk/layanan</li>
                  <li>Mengirimkan komunikasi pemasaran yang relevan (dengan persetujuan Anda)</li>
                  <li>Meningkatkan pengalaman pengguna di website kami</li>
                  <li>Melakukan analisis untuk perbaikan layanan</li>
                  <li>Mematuhi kewajiban hukum dan regulasi yang berlaku</li>
                </ul>
              </div>

              {/* Section 3: Dasar Hukum Pemrosesan Data */}
              <div className="space-y-6">
                <h2>3. Dasar Hukum Pemrosesan Data</h2>
                <p className="leading-7">
                  Kami memproses data pribadi Anda berdasarkan:
                </p>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground leading-7">
                  <li><strong>Persetujuan:</strong> Anda memberikan persetujuan eksplisit saat mengisi formulir</li>
                  <li><strong>Kepentingan Sah:</strong> Untuk menjalankan operasi bisnis dan merespons pertanyaan</li>
                  <li><strong>Kewajiban Kontraktual:</strong> Untuk memenuhi kontrak atau perjanjian dengan Anda</li>
                  <li><strong>Kepatuhan Hukum:</strong> Untuk mematuhi peraturan perundang-undangan yang berlaku</li>
                </ul>
              </div>

              {/* Section 4: Berbagi Informasi */}
              <div className="space-y-6">
                <h2>4. Berbagi Informasi dengan Pihak Ketiga</h2>
                <p className="leading-7">
                  Kami tidak menjual atau menyewakan data pribadi Anda kepada pihak ketiga. Kami hanya membagikan informasi dalam kondisi berikut:
                </p>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground leading-7">
                  <li><strong>Penyedia Layanan:</strong> Dengan vendor yang membantu operasi website (hosting, analytics, email marketing) dengan perjanjian kerahasiaan</li>
                  <li><strong>Kewajiban Hukum:</strong> Jika diwajibkan oleh hukum, pengadilan, atau otoritas pemerintah</li>
                  <li><strong>Perlindungan Hak:</strong> Untuk melindungi hak, properti, atau keamanan perusahaan dan pengguna kami</li>
                  <li><strong>Restrukturisasi Bisnis:</strong> Dalam hal merger, akuisisi, atau penjualan aset perusahaan</li>
                </ul>
              </div>

              {/* Section 5: Keamanan Data */}
              <div className="space-y-6">
                <h2>5. Keamanan Data</h2>
                <p className="leading-7">
                  Kami menerapkan langkah-langkah keamanan teknis dan organisasi untuk melindungi data pribadi Anda:
                </p>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground leading-7">
                  <li>Enkripsi data saat transmisi (SSL/TLS)</li>
                  <li>Kontrol akses terbatas hanya untuk personel yang berwenang</li>
                  <li>Pemantauan sistem keamanan secara berkala</li>
                  <li>Penilaian risiko keamanan data secara rutin</li>
                  <li>Pelatihan keamanan untuk karyawan</li>
                </ul>
                <p className="leading-7">
                  Meskipun kami mengambil langkah-langkah untuk melindungi data Anda, tidak ada sistem yang sepenuhnya aman. Kami tidak dapat menjamin keamanan mutlak data yang dikirimkan melalui internet.
                </p>
              </div>

              {/* Section 6: Penyimpanan Data */}
              <div className="space-y-6">
                <h2>6. Penyimpanan dan Retensi Data</h2>
                <p className="leading-7">
                  Kami menyimpan data pribadi Anda selama diperlukan untuk tujuan yang dijelaskan dalam kebijakan ini, kecuali periode retensi yang lebih lama diwajibkan atau diizinkan oleh hukum.
                </p>
                <p className="leading-7">
                  Kriteria penentuan periode penyimpanan meliputi:
                </p>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground leading-7">
                  <li>Durasi hubungan bisnis dengan Anda</li>
                  <li>Kewajiban hukum untuk menyimpan data tertentu</li>
                  <li>Periode statute of limitations untuk klaim hukum</li>
                  <li>Kebutuhan operasional bisnis</li>
                </ul>
              </div>

              {/* Section 7: Hak Anda */}
              <div className="space-y-6">
                <h2>7. Hak Anda atas Data Pribadi</h2>
                <p className="leading-7">
                  Sesuai dengan peraturan perlindungan data yang berlaku, Anda memiliki hak untuk:
                </p>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground leading-7">
                  <li><strong>Akses:</strong> Meminta salinan data pribadi yang kami miliki tentang Anda</li>
                  <li><strong>Koreksi:</strong> Memperbarui atau memperbaiki data yang tidak akurat</li>
                  <li><strong>Penghapusan:</strong> Meminta penghapusan data Anda dalam kondisi tertentu</li>
                  <li><strong>Pembatasan:</strong> Membatasi pemrosesan data Anda</li>
                  <li><strong>Portabilitas:</strong> Menerima data Anda dalam format yang terstruktur dan umum</li>
                  <li><strong>Keberatan:</strong> Menolak pemrosesan data untuk tujuan pemasaran</li>
                  <li><strong>Pencabutan Persetujuan:</strong> Menarik persetujuan kapan saja (tanpa mempengaruhi legalitas pemrosesan sebelumnya)</li>
                </ul>
                <p className="leading-7">
                  Untuk menggunakan hak-hak ini, hubungi kami melalui informasi kontak yang tertera di bawah.
                </p>
              </div>

              {/* Section 8: Cookies */}
              <div className="space-y-6">
                <h2>8. Cookies dan Teknologi Pelacakan</h2>
                <p className="leading-7">
                  Website kami menggunakan cookies dan teknologi serupa untuk:
                </p>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground leading-7">
                  <li>Mengingat preferensi dan pengaturan Anda</li>
                  <li>Memahami bagaimana Anda menggunakan website kami</li>
                  <li>Meningkatkan kinerja dan fungsionalitas website</li>
                  <li>Menganalisis traffic dan pola penggunaan</li>
                </ul>
                <p className="leading-7">
                  Anda dapat mengontrol penggunaan cookies melalui pengaturan browser Anda. Menonaktifkan cookies dapat mempengaruhi fungsionalitas website.
                </p>
              </div>

              {/* Section 9: Tautan Pihak Ketiga */}
              <div className="space-y-6">
                <h2>9. Tautan ke Website Pihak Ketiga</h2>
                <p className="leading-7">
                  Website kami mungkin mengandung tautan ke website pihak ketiga. Kami tidak bertanggung jawab atas praktik privasi atau konten dari website eksternal tersebut. Kami mendorong Anda untuk membaca kebijakan privasi setiap website yang Anda kunjungi.
                </p>
              </div>

              {/* Section 10: Perubahan Kebijakan */}
              <div className="space-y-6">
                <h2>10. Perubahan Kebijakan Privasi</h2>
                <p className="leading-7">
                  Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan dalam praktik kami atau untuk alasan operasional, hukum, atau regulasi.
                </p>
                <p className="leading-7">
                  Perubahan material akan dinotifikasikan melalui pemberitahuan di website atau melalui email. Tanggal &ldquo;Terakhir diperbarui&rdquo; di bagian atas halaman ini menunjukkan kapan kebijakan terakhir direvisi.
                </p>
              </div>

              {/* Section 11: Hubungi Kami */}
              <div className="space-y-6">
                <h2>11. Hubungi Kami</h2>
                <p className="leading-7">
                  Jika Anda memiliki pertanyaan, kekhawatiran, atau permintaan terkait Kebijakan Privasi ini atau pemrosesan data pribadi Anda, silakan hubungi kami:
                </p>
                <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                  <p className="font-medium text-foreground">PT Lumbung Energi Indonesia</p>
                  <p className="text-muted-foreground leading-7">
                    Alamat: Ruko Pariwarna Niaga Kulon No. 7, Kota Baru Parahyangan, Padalarang, Bandung Barat 40553
                  </p>
                  <p className="text-muted-foreground leading-7">
                    Email: admin.lei@lumbunggroup.co.id
                  </p>
                  <p className="text-muted-foreground leading-7">
                    Telepon: +62 811-2005-7777
                  </p>
                </div>
                <p className="leading-7">
                  Kami akan merespons permintaan Anda sesegera mungkin, maksimal dalam 30 hari kerja sesuai dengan ketentuan peraturan yang berlaku.
                </p>
              </div>

            </div>
          </Container>
        </Section>

        {/* Contact Form Section */}
        <ContactFormLEI />
      </main>
      <Footer />
    </div>
  )
}
