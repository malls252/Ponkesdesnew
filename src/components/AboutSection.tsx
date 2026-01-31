import { CheckCircle, Target, Eye } from "lucide-react";

const AboutSection = () => {
  const features = [
    "Tenaga kesehatan profesional dan berpengalaman",
    "Pelayanan ramah dan bersahabat",
    "Fasilitas kesehatan yang memadai",
    "Obat-obatan berkualitas",
    "Biaya terjangkau untuk masyarakat",
    "Jam operasional yang fleksibel",
  ];

  return (
    <section id="tentang" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <span className="inline-block px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm font-medium">
              Tentang Kami
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Mitra Kesehatan{" "}
              <span className="text-gradient">Keluarga Anda</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Ponkesdes (Pondok Kesehatan Desa) adalah fasilitas kesehatan tingkat pertama yang 
              didirikan untuk memberikan pelayanan kesehatan dasar kepada masyarakat desa. 
              Kami berkomitmen untuk meningkatkan derajat kesehatan masyarakat melalui pelayanan 
              yang profesional, ramah, dan terjangkau.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision & Mission Cards */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Visi</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Menjadi fasilitas kesehatan desa yang unggul dalam memberikan pelayanan 
                kesehatan dasar yang berkualitas, merata, dan terjangkau untuk seluruh 
                lapisan masyarakat.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                  <Target className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Misi</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Memberikan pelayanan kesehatan yang profesional dan berkualitas
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Meningkatkan kesadaran masyarakat tentang pentingnya kesehatan
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Menjalin kemitraan dengan berbagai pihak untuk peningkatan kesehatan
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
