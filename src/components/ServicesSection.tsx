import { 
  Stethoscope, 
  Baby, 
  Syringe, 
  Heart, 
  Pill, 
  Clipboard,
  ArrowRight
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Pemeriksaan Umum",
      description: "Layanan pemeriksaan kesehatan umum untuk semua usia dengan tenaga medis profesional.",
    },
    {
      icon: Baby,
      title: "Kesehatan Ibu & Anak",
      description: "Pelayanan kesehatan ibu hamil, bayi, dan balita termasuk imunisasi dasar lengkap.",
    },
    {
      icon: Syringe,
      title: "Imunisasi",
      description: "Program imunisasi dasar dan lanjutan untuk anak-anak sesuai jadwal nasional.",
    },
    {
      icon: Heart,
      title: "Program Posbindu",
      description: "Deteksi dini penyakit tidak menular seperti hipertensi dan diabetes mellitus.",
    },
    {
      icon: Pill,
      title: "Pemberian Obat",
      description: "Penyediaan obat-obatan esensial untuk pengobatan penyakit ringan.",
    },
    {
      icon: Clipboard,
      title: "Konsultasi Kesehatan",
      description: "Layanan konsultasi dan edukasi kesehatan untuk masyarakat desa.",
    },
  ];

  return (
    <section id="layanan" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm font-medium mb-4">
            Layanan Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Pelayanan Kesehatan <span className="text-gradient">Lengkap</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Kami menyediakan berbagai layanan kesehatan dasar untuk memenuhi kebutuhan 
            kesehatan masyarakat desa secara menyeluruh.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>

              <a 
                href="#kontak" 
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200"
              >
                Selengkapnya
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
