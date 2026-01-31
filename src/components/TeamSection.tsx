import nurseImage from "@/assets/nurse-1.jpg";
import doctorImage from "@/assets/doctor-1.jpg";
import bidanImage from "@/assets/bidan-1.jpg";

const TeamSection = () => {
  const team = [
    {
      name: "dr. Ahmad Wijaya",
      role: "Dokter Umum",
      image: doctorImage,
      description: "Dokter dengan pengalaman lebih dari 10 tahun di bidang kesehatan masyarakat.",
    },
    {
      name: "Siti Nurhaliza, Amd.Keb",
      role: "Bidan Desa",
      image: bidanImage,
      description: "Bidan profesional yang berpengalaman dalam pelayanan kesehatan ibu dan anak.",
    },
    {
      name: "Dewi Kartika, Amd.Kep",
      role: "Perawat",
      image: nurseImage,
      description: "Perawat terampil dengan dedikasi tinggi dalam merawat pasien.",
    },
  ];

  return (
    <section id="tim" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm font-medium mb-4">
            Tim Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tenaga Kesehatan <span className="text-gradient">Profesional</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Didukung oleh tim tenaga kesehatan yang berpengalaman dan berdedikasi 
            untuk memberikan pelayanan terbaik bagi masyarakat.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-card mb-1">{member.name}</h3>
                  <span className="inline-block px-3 py-1 bg-primary rounded-full text-primary-foreground text-sm font-medium">
                    {member.role}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
