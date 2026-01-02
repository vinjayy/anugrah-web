import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPinIcon } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative h-18 w-18 bg-white rounded-md p-2">
                <Image
                  src="/anugrah.png"
                  alt="Anugrah Web"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-lg font-bold text-white">
                  PT. Anugerah Cipta Equipment
                </div>
                <div className="text-sm text-slate-400">
                  Heavy equipment & Labor services
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Perusahaan yang bergerak di bidang penjualan alat berat serta layanan
              teknis dan perawatan heavy equipment dan AC dengan standar profesional.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-amber-500" />
                <a
                  href="https://wa.me/6282122672026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  62821-2267-2026
                </a>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-amber-500" />
                <a
                  href="mailto:info@anugerahcipta.com"
                  className="hover:text-amber-400 transition-colors"
                >
                  info@anugerahcipta.com
                </a>
              </div>

              <div className="flex gap-2 text-sm leading-relaxed">
                <MapPinIcon className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p>Jl. A. Yani Km. 10, Komplek Green Yakin</p>
                  <p>Cluster Amarilis, Jalur AIII No. 225</p>
                  <p>Kertak Hanyar, Kabupaten Banjar</p>
                  <p>Kalimantan Selatan 70654</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white">Navigasi</h3>
            <ul className="mt-4 space-y-3">
              {[
                { name: "Beranda", href: "/" },
                { name: "Tentang Kami", href: "/tentang" },
                { name: "Layanan", href: "/layanan" },
                { name: "Kontak", href: "/kontak" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-amber-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white">Layanan</h3>
            <ul className="mt-4 space-y-3">
              <li className="text-sm">Penjualan Alat Berat</li>
              <li className="text-sm">Labor Service Equipment</li>
              <li className="text-sm">Labor Service AC</li>
              <li className="text-sm">Pengadaan & Rental</li>
              <li className="text-sm">Spare Part</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <p className="text-center text-sm text-slate-400">
            Copyright © {currentYear} PT. Anugerah Cipta Equipment.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
