import { Button } from "@/components/ui/button"
import { Phone, MapPin, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Nomor Kantor",
      value: "0511-5213014",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      label: "Jam Operasional",
      value: "Senin - Sabtu: 08.00 - 17.00",
    },
        {
      icon: <Clock className="h-6 w-6" />,
      label: "Jam Operasional AC",
      value: "Senin - Minggu: 08.00 - 17.00",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Lokasi",
      value: "Banjarmasin Kalimantan selatan dan tengah",
    },
  ]

  return (
    <main>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">Hubungi Kami</h1>
            <p className="mt-6 text-lg text-slate-300">
              Kami siap membantu kebutuhan alat berat dan layanan teknis Anda
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Informasi Kontak</h2>
              <p className="mt-4 text-lg text-slate-700">
                Jangan ragu untuk menghubungi kami. Tim kami siap memberikan solusi terbaik untuk kebutuhan Anda.
              </p>

              <div className="mt-10 space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 p-3 text-white">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-950">{info.label}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 text-slate-700 hover:text-amber-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-slate-700">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <Button
                  size="lg"
                  className="bg-amber-500 text-slate-950 hover:bg-amber-400 font-semibold w-full sm:w-auto"
                >
                  <a
                    href="https://wa.me/6282122672026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    Hubungi via WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden rounded-2xl bg-slate-100">
              <div className="absolute inset-0 bg-[url('/informasi.png')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Mengapa Memilih Kami?</h2>
            <p className="mt-4 text-lg text-slate-700">
              Kami berkomitmen memberikan layanan terbaik untuk setiap kebutuhan Anda
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Respons Cepat",
                description: "Kami merespons setiap pertanyaan dan kebutuhan Anda dengan cepat dan profesional.",
              },
              {
                title: "Konsultasi Gratis",
                description: "Dapatkan konsultasi gratis untuk menemukan solusi yang tepat untuk bisnis Anda.",
              },
              {
                title: "Layanan 24/7",
                description: "Tim kami siap membantu Anda kapan saja untuk kebutuhan darurat.",
              },
              {
                title: "Harga Kompetitif",
                description: "Penawaran harga terbaik dengan kualitas layanan yang tidak diragukan.",
              },
              {
                title: "Dukungan Purna Jual",
                description: "Dukungan berkelanjutan setelah penjualan untuk kepuasan pelanggan.",
              },
              {
                title: "Tim Profesional",
                description: "Teknisi dan staf yang berpengalaman dan bersertifikat.",
              },
            ].map((benefit, index) => (
              <div key={index} className="rounded-xl bg-white p-8 shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-950">{benefit.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Siap untuk Memulai?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Hubungi kami sekarang untuk mendapatkan penawaran terbaik
          </p>
          <div className="mt-10">
            <Button size="lg" className="bg-amber-500 text-slate-950 hover:bg-amber-400 font-semibold">
              <a
                href="https://wa.me/6282122672026"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Chat via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
