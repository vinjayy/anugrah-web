import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ShoppingCart,
  Wrench,
  Wind,
  Package,
  Truck,
  Cog,
  CheckCircle2,
} from "lucide-react"

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
      image: "/jualAlatBerat.jpeg",
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
      image: "/laborServices.jpeg",
    },
  ]

  return (
    <main>
      {/* ================= HEADER ================= */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Layanan Kami
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Solusi lengkap untuk kebutuhan alat berat dan layanan teknis industri Anda
            </p>
          </div>
        </div>
      </section>

      {/* ================= MAIN SERVICES ================= */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center"
              >
                {/* TEXT */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 p-4 text-white shadow-lg">
                    {service.icon}
                  </div>

                  <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                    {service.title}
                  </h2>

                  <p className="mt-6 text-lg leading-8 text-slate-700">
                    {service.description}
                  </p>

                  <ul className="mt-8 space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-amber-500" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* IMAGE (BEDA PER LAYANAN) */}
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 ${index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AC SERVICE ================= */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12">
              <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 p-4 text-white shadow-lg">
                <Wind className="h-10 w-10" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Labor Service AC for Fleet & User
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                Layanan perawatan dan perbaikan sistem AC untuk berbagai sektor industri,
                komersial, dan transportasi dengan teknisi bersertifikat.
              </p>
            </div>

            <div className="space-y-8">
              <div className="rounded-xl bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-slate-950">Fleet & User</h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {["Home", "Office", "Hotel", "Government"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-500" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-slate-950">
                  Industrial & Specialized AC
                </h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Industrial AC",
                    "Heavy Equipment AC",
                    "Truck / LV AC",
                    "Ship / Vessel AC",
                    "Hospital AC",
                    "Mall AC",
                    "Factory AC",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-500" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 aspect-video w-full overflow-hidden rounded-2xl bg-slate-100">
              <div className="h-full w-full bg-[url('/servicesAc.jpeg')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= ADDITIONAL SERVICES ================= */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Layanan Tambahan
            </h2>
            <p className="mt-4 text-lg text-slate-700">
              Dukungan lengkap untuk kebutuhan operasional Anda
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

                {/* IMAGE */}
                <div className="pl-6">
                  <div className="min-h-[360px] rounded-xl bg-[url('/tambahan.jpeg')] bg-cover bg-center" />
                </div>

                {/* CONTENT */}
                <div className="p-8 lg:py-12 space-y-6">
                  <ServiceItem
                    icon={<Package />}
                    title="Pengadaan"
                    desc="Pengadaan alat berat dan komponen sesuai kebutuhan proyek."
                  />
                  <ServiceItem
                    icon={<Truck />}
                    title="Rental"
                    desc="Penyewaan alat berat dengan fleksibilitas jangka waktu."
                  />
                  <ServiceItem
                    icon={<Cog />}
                    title="Spare Part"
                    desc="Spare part original dan kompatibel."
                  />
                </div>

              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-br from-amber-500 via-orange-500 to-orange-600 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Butuh Konsultasi?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-900">
            Hubungi kami untuk mendiskusikan kebutuhan layanan Anda
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              className="bg-slate-950 text-white hover:bg-slate-800 font-semibold"
              asChild
            >
              <Link href="/kontak">Hubungi Kami</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

/* ===== COMPONENT ===== */
function ServiceItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-amber-500">{icon}</div>
      <div>
        <h4 className="font-bold text-slate-950">{title}</h4>
        <p className="text-slate-600">{desc}</p>
      </div>
    </div>
  )
}
