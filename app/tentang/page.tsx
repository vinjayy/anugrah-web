import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Target, Eye, CheckCircle2 } from "lucide-react"

export default function AboutPage() {
  const missions = [
    "Memberikan solusi alat berat yang berkualitas",
    "Menyediakan layanan perawatan yang profesional",
    "Menjaga kepuasan pelanggan melalui layanan terbaik",
    "Mengembangkan kemitraan jangka panjang dengan klien",
  ]

  return (
    <main>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">Tentang Kami</h1>
            <p className="mt-6 text-lg text-slate-300">
              Mengenal lebih dekat PT. Anugerah Cipta Equipment dan komitmen kami terhadap industri
            </p>
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
              <div className="absolute inset-0 bg-[url('/profile.jpg')] bg-cover bg-center" />
            </div>
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Profil Perusahaan</h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                PT. Anugerah Cipta Equipment merupakan perusahaan yang bergerak di bidang alat berat dan jasa layanan
                teknis, meliputi perawatan, pengadaan, penyewaan, serta penyediaan spare part untuk mendukung
                operasional industri dan komersial.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Dengan dedikasi tinggi dan tim yang berpengalaman, kami hadir sebagai solusi terpercaya untuk setiap
                tantangan operasional industri modern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Vision */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 p-10 lg:p-12">
              <div className="absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full bg-amber-500/20 blur-3xl" />
              <div className="relative">
                <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 p-4 text-white shadow-lg">
                  <Eye className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">Visi</h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Menjadi perusahaan penyedia alat berat dan layanan teknik yang profesional, terpercaya, dan unggul di
                  Indonesia.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 p-10 lg:p-12">
              <div className="absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full bg-white/20 blur-3xl" />
              <div className="relative">
                <div className="mb-6 inline-flex rounded-xl bg-slate-950 p-4 text-white shadow-lg">
                  <Target className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">Misi</h2>
                <ul className="mt-6 space-y-4">
                  {missions.map((mission, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-slate-950" />
                      <span className="text-lg text-slate-900">{mission}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Nilai-Nilai Perusahaan</h2>
            <p className="mt-4 text-lg text-slate-700">Prinsip yang kami pegang dalam setiap aspek bisnis</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Profesionalisme",
                description: "Menjalankan setiap pekerjaan dengan standar tertinggi dan etika profesional.",
              },
              {
                title: "Integritas",
                description: "Menjunjung tinggi kejujuran dan transparansi dalam setiap transaksi bisnis.",
              },
              {
                title: "Inovasi",
                description: "Terus berinovasi untuk memberikan solusi terbaik dan terdepan.",
              },
              {
                title: "Kepuasan Pelanggan",
                description: "Mengutamakan kepuasan pelanggan sebagai prioritas utama.",
              },
              {
                title: "Kualitas",
                description: "Menyediakan produk dan layanan dengan kualitas terjamin.",
              },
              {
                title: "Kemitraan",
                description: "Membangun hubungan jangka panjang dengan klien dan partner.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-950">{value.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Mari Berkolaborasi</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Hubungi kami untuk mengetahui lebih lanjut tentang layanan kami
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-amber-500 text-slate-950 hover:bg-amber-400 font-semibold" asChild>
              <Link href="/kontak">Hubungi Kami</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-500 text-amber-400 hover:bg-amber-500/10 font-semibold bg-transparent"
              asChild
            >
              <Link href="/layanan">Lihat Layanan</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
