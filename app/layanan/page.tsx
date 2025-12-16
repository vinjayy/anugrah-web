import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingCart, Wrench, Wind, Package, Truck, Cog, CheckCircle2 } from "lucide-react"

export default function ServicesPage() {
  const mainServices = [
    {
      icon: <ShoppingCart className="h-10 w-10" />,
      title: "Penjualan Alat Berat",
      description:
        "Penyediaan berbagai jenis alat berat untuk kebutuhan industri dengan kualitas dan dukungan teknis yang terpercaya.",
      features: [
        "Berbagai jenis alat berat tersedia",
        "Kualitas terjamin dan bergaransi",
        "Dukungan teknis purna jual",
        "Harga kompetitif",
      ],
    },
    {
      icon: <Wrench className="h-10 w-10" />,
      title: "Labor Service Heavy Equipment",
      description:
        "Layanan teknis dan tenaga kerja profesional untuk perawatan dan perbaikan heavy equipment dengan standar industri.",
      features: [
        "Teknisi bersertifikat dan berpengalaman",
        "Perawatan preventif dan korektif",
        "Layanan darurat 24/7",
        "Laporan perawatan terperinci",
      ],
    },
  ]

  const acServices = [
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Preventive Maintenance",
      description: "Perawatan berkala untuk mencegah kerusakan sistem AC sebelum terjadi masalah.",
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Periodic Maintenance",
      description: "Perawatan terjadwal sesuai dengan standar pabrikan dan kebutuhan operasional.",
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Corrective Maintenance",
      description: "Perbaikan dan penggantian komponen yang rusak untuk mengembalikan fungsi optimal.",
    },
  ]

  const additionalServices = [
    {
      icon: <Package className="h-8 w-8" />,
      title: "Pengadaan",
      description: "Layanan pengadaan alat berat dan komponen sesuai spesifikasi dan kebutuhan proyek Anda.",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Rental",
      description: "Penyewaan alat berat dengan fleksibilitas jangka waktu dan dukungan operator berpengalaman.",
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Spare Part",
      description: "Penyediaan spare part original dan kompatibel untuk berbagai jenis alat berat dan sistem AC.",
    },
  ]

  return (
    <main>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">Layanan Kami</h1>
            <p className="mt-6 text-lg text-slate-300">
              Solusi lengkap untuk kebutuhan alat berat dan layanan teknis industri Anda
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 p-4 text-white shadow-lg">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{service.title}</h2>
                  <p className="mt-6 text-lg leading-8 text-slate-700">{service.description}</p>
                  <ul className="mt-8 space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-amber-500" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className="absolute inset-0 bg-[url('/heavy-equipment-service.jpg')] bg-cover bg-center" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AC Service Section */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12">
              <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 p-4 text-white shadow-lg">
                <Wind className="h-10 w-10" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Labor Service AC</h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                Layanan perawatan dan perbaikan sistem AC untuk industri dan komersial dengan teknisi bersertifikat dan
                berpengalaman.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {acServices.map((service, index) => (
                <Card key={index} className="border-0 bg-white p-6 shadow-lg">
                  <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 p-3 text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-950">{service.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{service.description}</p>
                </Card>
              ))}
            </div>

            <div className="mt-12 aspect-video w-full overflow-hidden rounded-2xl bg-slate-100">
              <div className="h-full w-full bg-[url('/ac-maintenance.png')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Layanan Tambahan</h2>
            <p className="mt-4 text-lg text-slate-700">Dukungan lengkap untuk kebutuhan operasional Anda</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {additionalServices.map((service, index) => (
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
                    <div className="h-full w-full bg-[url('/industrial-parts.jpg')] bg-cover bg-center" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-950">{service.title}</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-amber-500 via-orange-500 to-orange-600 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Butuh Konsultasi?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-900">
            Hubungi kami untuk mendiskusikan kebutuhan layanan Anda
          </p>
          <div className="mt-10">
            <Button size="lg" className="bg-slate-950 text-white hover:bg-slate-800 font-semibold" asChild>
              <Link href="/kontak">Hubungi Kami</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
