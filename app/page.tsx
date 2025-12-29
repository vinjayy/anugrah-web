import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Phone,
  Wrench,
  Settings,
  Wind,
  Package,
  ShoppingCart,
  Truck,
} from "lucide-react"

export default function HomePage() {
  const services = [
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Penjualan Alat Berat",
      description:
        "Penyediaan berbagai jenis alat berat untuk kebutuhan industri dengan kualitas terpercaya.",
      image: "/alatberat.jpeg",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Labor Service Heavy Equipment",
      description:
        "Layanan teknis dan tenaga kerja profesional untuk perawatan heavy equipment.",
      image: "/laborService.jpeg",
    },
    {
      icon: <Wind className="h-8 w-8" />,
      title: "Labor Service AC",
      description:
        "Preventive, periodic, dan corrective maintenance untuk sistem AC industri dan komersial.",
      image: "/ac-servis.jpeg",
    },
  ]

  const advantages = [
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Teknisi Berpengalaman",
      description:
        "Tim profesional dan bersertifikat dgn keahlian dibidang alat berat,generator maupun Air Conditioner",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Layanan Cepat & Responsif",
      description:
        "Respon cepat untuk setiap kebutuhan dengan standar pelayanan terbaik.",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Solusi Industri Efisien",
      description:
        "Memberikan solusi komprehensif untuk mendukung operasional industri Anda.",
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "Dukungan Pengadaan & Spare Part",
      description:
        "Penyediaan spare part berkualitas dan dukungan pengadaan alat berat.",
    },
  ]

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[url('/hero.jpeg')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              PT. Anugerah Cipta Equipment
            </h1>
            <p className="mt-6 text-xl font-medium text-amber-400 sm:text-2xl">
              Solusi Alat Berat & Layanan Teknik Terpercaya
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Perusahaan yang bergerak di bidang penjualan alat berat serta
              layanan teknis dan perawatan heavy equipment dan AC.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row justify-center">
              <Button
                size="lg"
                className="bg-amber-500 text-slate-950 hover:bg-amber-400 font-semibold px-8"
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

      {/* ABOUT */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-950 sm:text-5xl">
              Tentang Kami
            </h2>
            <p className="mt-6 text-lg text-slate-700">
              PT. Anugerah Cipta Equipment hadir untuk mendukung kebutuhan
              industri melalui penyediaan alat berat serta layanan teknis yang
              andal.
            </p>
            <Button className="mt-8 bg-slate-950 hover:bg-slate-800" asChild>
              <Link href="/tentang">Selengkapnya</Link>
            </Button>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
            <div className="absolute inset-0 bg-[url('/about.jpeg')] bg-cover bg-center" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-950 sm:text-5xl">
              Layanan Utama
            </h2>
            <p className="mt-4 text-lg text-slate-700">
              Layanan profesional untuk mendukung kebutuhan industri Anda
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 bg-white shadow-lg hover:shadow-xl transition"
              >
                <div className="relative aspect-video overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="p-8">
                  <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 p-4 text-white shadow-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-slate-600">
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="bg-slate-950 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-white sm:text-5xl">
              Keunggulan Perusahaan
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {advantages.map((item, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 p-4 text-white w-fit">
                  {item.icon}
                </div>
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-amber-500 via-orange-500 to-orange-600 py-20 text-center">
        <h2 className="text-4xl font-bold text-slate-950 sm:text-5xl">
          Siap Bekerja Sama?
        </h2>
        <div className="mt-10">
          <Button size="lg" className="bg-slate-950 text-white px-8">
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
      </section>
    </main>
  )
}
