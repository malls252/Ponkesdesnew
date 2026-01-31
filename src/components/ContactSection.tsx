import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content: "Jl. Kesehatan No. 01, Desa Sejahtera, Kecamatan Makmur, Kabupaten Sentosa",
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "(0341) 123-4567",
    },
    {
      icon: Mail,
      title: "Email",
      content: "ponkesdes.sejahtera@gmail.com",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: "Senin - Sabtu: 08.00 - 16.00 WIB",
    },
  ];

  const schedule = [
    { day: "Senin - Jumat", time: "08.00 - 16.00 WIB", service: "Pelayanan Umum" },
    { day: "Sabtu", time: "08.00 - 12.00 WIB", service: "Pelayanan Umum" },
    { day: "Minggu", time: "Tutup", service: "-" },
    { day: "Hari Libur Nasional", time: "Tutup", service: "-" },
  ];

  return (
    <section id="kontak" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm font-medium mb-4">
            Hubungi Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Informasi <span className="text-gradient">Kontak</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Jangan ragu untuk menghubungi kami atau mengunjungi langsung lokasi Ponkesdes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-left">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                  <p className="text-muted-foreground">{info.content}</p>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                <Phone className="w-5 h-5" />
                Hubungi Sekarang
              </Button>
            </div>
          </div>

          {/* Schedule Table */}
          <div className="animate-slide-in-right">
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Jadwal Pelayanan
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 text-muted-foreground font-medium">Hari</th>
                      <th className="text-left py-3 text-muted-foreground font-medium">Jam</th>
                      <th className="text-left py-3 text-muted-foreground font-medium">Layanan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.map((item, index) => (
                      <tr key={index} className="border-b border-border/50 last:border-0">
                        <td className="py-4 text-foreground font-medium">{item.day}</td>
                        <td className="py-4 text-primary font-semibold">{item.time}</td>
                        <td className="py-4 text-muted-foreground">{item.service}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-6 bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.29279726093!2d112.61454545!3d-7.275358750000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf8381ac47f%3A0x3027a76e352be40!2sSurabaya%2C%20Kota%20SBY%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1704067200000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Ponkesdes"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
