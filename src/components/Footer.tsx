import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-card py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">+</span>
              </div>
              <div>
                <span className="font-bold text-lg">Ponkesdes</span>
              </div>
            </div>
            <p className="text-card/70 text-sm leading-relaxed">
              Pondok Kesehatan Desa - Melayani kesehatan masyarakat dengan sepenuh hati.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Menu Cepat</h4>
            <ul className="space-y-2 text-card/70 text-sm">
              <li><a href="#beranda" className="hover:text-primary transition-colors">Beranda</a></li>
              <li><a href="#layanan" className="hover:text-primary transition-colors">Layanan</a></li>
              <li><a href="#tentang" className="hover:text-primary transition-colors">Tentang Kami</a></li>
              <li><a href="#tim" className="hover:text-primary transition-colors">Tim Medis</a></li>
              <li><a href="#kontak" className="hover:text-primary transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Layanan Kami</h4>
            <ul className="space-y-2 text-card/70 text-sm">
              <li>Pemeriksaan Umum</li>
              <li>Kesehatan Ibu & Anak</li>
              <li>Imunisasi</li>
              <li>Program Posbindu</li>
              <li>Konsultasi Kesehatan</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3 text-card/70 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Jl. Kesehatan No. 01, Desa Sejahtera</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(0341) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>ponkesdes.sejahtera@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-card/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-card/70 text-sm text-center md:text-left">
              © {currentYear} Ponkesdes. Seluruh hak cipta dilindungi.
            </p>
            <p className="text-card/70 text-sm flex items-center gap-1">
              Dibuat dengan <Heart className="w-4 h-4 text-accent" /> untuk kesehatan masyarakat
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
