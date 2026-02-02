import headerBg from "@/assets/header-bg.png";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const galleryItems = [
  {
    images: [gallery1, gallery2, gallery3],
    title: "Pemeriksaan Kesehatan",
    description: "Layanan pemeriksaan umum rutin untuk warga desa."
  },
  {
    images: [gallery2, gallery3, gallery1],
    title: "Penyuluhan Posyandu",
    description: "Kegiatan edukasi kesehatan untuk ibu dan anak."
  },
  {
    images: [gallery3, gallery1, gallery2],
    title: "Kegiatan Masyarakat",
    description: "Program jalan sehat dan olahraga bersama warga."
  }
];

const Gallery = () => {
  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Header */}
      <div
        className="relative py-16 md:py-24 overflow-hidden"
        style={{
          backgroundImage: `url(${headerBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-background/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <span className="inline-block px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm font-medium mb-4">
              Galeri Kami
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Dokumentasi <span className="text-gradient">Kegiatan</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Dokumentasi berbagai kegiatan pelayanan dan pengabdian kesehatan masyarakat di Ponkesdes.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in flex flex-col bg-card border border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {item.images.map((img, imgIndex) => (
                        <CarouselItem key={imgIndex}>
                          <div className="aspect-[4/3] overflow-hidden">
                            <img
                              src={img}
                              alt={`${item.title} - ${imgIndex + 1}`}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <CarouselPrevious className="relative left-0 translate-y-0 pointer-events-auto bg-background/80 backdrop-blur-sm border-white/20 hover:bg-background shadow-lg h-10 w-10" />
                      <CarouselNext className="relative right-0 translate-y-0 pointer-events-auto bg-background/80 backdrop-blur-sm border-white/20 hover:bg-background shadow-lg h-10 w-10" />
                    </div>
                  </Carousel>
                </div>

                <div className="p-6">
                  <h3 className="text-foreground font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
