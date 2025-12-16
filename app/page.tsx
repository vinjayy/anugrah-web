import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, Wrench, Settings, Wind, Package, ShoppingCart, Truck } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Penjualan Alat Berat",
      description: "Penyediaan berbagai jenis alat berat untuk kebutuhan industri dengan kualitas terpercaya.",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Labor Service Heavy Equipment",
      description: "Layanan teknis dan tenaga kerja profesional untuk perawatan heavy equipment.",
    },
    {
      icon: <Wind className="h-8 w-8" />,
      title: "Labor Service AC",
      description: "Preventive, periodic, dan corrective maintenance untuk sistem AC industri dan komersial.",
    },
  ]

  const advantages = [
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Teknisi Berpengalaman",
      description: "Tim profesional dengan keahlian mendalam di bidang alat berat dan sistem teknis.",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Layanan Cepat & Responsif",
      description: "Respon cepat untuk setiap kebutuhan dengan standar pelayanan terbaik.",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Solusi Industri Efisien",
      description: "Memberikan solusi komprehensif untuk mendukung operasional industri Anda.",
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "Dukungan Pengadaan & Spare Part",
      description: "Penyediaan spare part berkualitas dan dukungan pengadaan alat berat.",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[url('/heavy-equipment-industrial.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              PT. Anugerah Cipta Equipment
            </h1>
            <p className="mt-6 text-xl font-medium text-amber-400 sm:text-2xl">
              Solusi Alat Berat & Layanan Teknik Terpercaya
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Perusahaan yang bergerak di bidang penjualan alat berat serta layanan teknis dan perawatan heavy equipment
              dan AC dengan standar profesional.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-amber-500 text-slate-950 hover:bg-amber-400 font-semibold px-8">
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
              <Button
                size="lg"
                variant="outline"
                className="border-amber-500 text-amber-400 hover:bg-amber-500/10 font-semibold px-8 bg-transparent"
                asChild
              >
                <Link href="/layanan">Lihat Layanan</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Tentang Kami</h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                PT. Anugerah Cipta Equipment hadir untuk mendukung kebutuhan industri melalui penyediaan alat berat
                serta layanan perawatan dan teknis yang andal, efisien, dan berkelanjutan.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Dengan pengalaman dan dedikasi tim profesional kami, kami berkomitmen memberikan solusi terbaik untuk
                setiap kebutuhan operasional industri Anda.
              </p>
              <Button className="mt-8 bg-slate-950 hover:bg-slate-800" asChild>
                <Link href="/tentang">Selengkapnya tentang Kami</Link>
              </Button>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
              <div className="absolute inset-0 bg-[url('/industrial-machinery-workspace.jpg')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Layanan Utama</h2>
            <p className="mt-4 text-lg text-slate-700">
              Kami menyediakan berbagai layanan profesional untuk mendukung kebutuhan industri Anda
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 bg-white shadow-lg transition-all hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-orange-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative p-8">
                  <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 p-4 text-white shadow-lg">
                    {service.icon}
                  </div>
                  <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg bg-slate-100">
                    <div className="h-full w-full bg-[url('/industrial-equipment.png')] bg-cover bg-center" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-950">{service.title}</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-amber-500 text-slate-950 hover:bg-amber-400 font-semibold" asChild>
              <Link href="/layanan">Lihat Semua Layanan</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-slate-950 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Keunggulan Perusahaan</h2>
            <p className="mt-4 text-lg text-slate-300">
              Mengapa memilih PT. Anugerah Cipta Equipment sebagai partner bisnis Anda
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 p-4 text-white">
                    {advantage.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{advantage.title}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-amber-500 via-orange-500 to-orange-600 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Siap Bekerja Sama?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-900">
            Hubungi kami untuk konsultasi dan penawaran layanan yang sesuai dengan kebutuhan industri Anda.
          </p>
          <div className="mt-10">
            <Button size="lg" className="bg-slate-950 text-white hover:bg-slate-800 font-semibold px-8">
              <a
                href="https://wa.me/6282122672026"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Hubungi Kami Sekarang
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
