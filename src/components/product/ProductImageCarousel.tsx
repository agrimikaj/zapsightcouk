import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import aiviDashboardStats from '@/assets/aivi-dashboard-stats.png';
import aiviCharts from '@/assets/aivi-charts.png';

interface ProductImageCarouselProps {
  productId: string;
}

const productImages: Record<string, { src: string; alt: string; caption: string }[]> = {
  aivi: [
    {
      src: aiviDashboardStats,
      alt: 'AIVI Dashboard Overview',
      caption: 'AI Visibility Dashboard with real-time metrics and KPIs',
    },
    {
      src: aiviCharts,
      alt: 'AIVI Visibility Trend & Source Attribution',
      caption: 'Track visibility trends and source attribution analytics',
    },
  ],
};

// Video configuration for products that use video instead of image carousel
const productVideos: Record<string, { src: string; title: string }> = {
  aisac: {
    src: '/videos/aisac-demo.mp4',
    title: 'AISAC Security Operations Demo',
  },
};

const ProductImageCarousel = ({ productId }: ProductImageCarouselProps) => {
  const images = productImages[productId];
  const video = productVideos[productId];

  // If product has video, show video player instead
  if (video) {
    return (
      <section className="py-10 lg:py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Product Demo</p>
            <h2 className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-[hsl(0,0%,97%)]">
              See It In Action
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl border border-[hsl(220,16%,15%)] bg-[hsl(220,20%,8%)] shadow-2xl">
              {/* Browser-like header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[hsl(220,20%,10%)] border-b border-[hsl(220,16%,15%)]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 bg-[hsl(220,20%,8%)] rounded-md text-[hsl(220,10%,50%)] text-xs">
                    app.zapsight.ai
                  </div>
                </div>
              </div>
              {/* Video */}
              <div className="overflow-hidden">
                <video
                  src={video.src}
                  controls
                  className="w-full h-auto"
                  poster=""
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            {/* Caption */}
            <p className="text-center text-[hsl(220,10%,55%)] mt-4 text-sm">
              {video.title}
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="py-10 lg:py-14 relative overflow-hidden">
      <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Product Preview</p>
          <h2 className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-[hsl(0,0%,97%)]">
            See It In Action
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: 'center',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-[90%] lg:basis-[85%]">
                  <div className="p-2">
                    <div className="relative overflow-hidden rounded-2xl border border-[hsl(220,16%,15%)] bg-[hsl(220,20%,8%)] shadow-2xl">
                      {/* Browser-like header */}
                      <div className="flex items-center gap-2 px-4 py-3 bg-[hsl(220,20%,10%)] border-b border-[hsl(220,16%,15%)]">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500/80" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                          <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <div className="flex-1 flex justify-center">
                          <div className="px-4 py-1 bg-[hsl(220,20%,8%)] rounded-md text-[hsl(220,10%,50%)] text-xs">
                            app.zapsight.ai
                          </div>
                        </div>
                      </div>
                      {/* Image */}
                      <div className="overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                    {/* Caption */}
                    <p className="text-center text-[hsl(220,10%,55%)] mt-4 text-sm">
                      {image.caption}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 lg:-left-12 bg-[hsl(220,20%,10%)] border-[hsl(220,16%,20%)] text-[hsl(0,0%,80%)] hover:bg-[hsl(220,20%,15%)] hover:text-white" />
            <CarouselNext className="right-2 lg:-right-12 bg-[hsl(220,20%,10%)] border-[hsl(220,16%,20%)] text-[hsl(0,0%,80%)] hover:bg-[hsl(220,20%,15%)] hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProductImageCarousel;
