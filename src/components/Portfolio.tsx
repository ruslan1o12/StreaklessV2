interface BeforeAfterItem {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

interface PortfolioImage {
  id: string;
  title: string;
  description: string;
  image_url: string;
}

const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: 'ba-1',
    title: 'Siding Cleaning',
    description: 'Vinyl siding restored from green mold and algae buildup to pristine white',
    beforeImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jNEqF0ZQSoyv3B3PF6ygyUCm0UE0SV.png',
    afterImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Siding%20after-an308bmQ62Efi3fRr5G0gwtOJLovjm.jpg',
  },
  {
    id: 'ba-2',
    title: 'Window Cleaning',
    description: 'Crystal clear windows on brick home - see the difference in clarity',
    beforeImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/before%20windows-RN6zq98Tf8Z3F0BtKRBjNt3PpurwbB.jpeg',
    afterImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/after%20windows-MtW3VGMut1xkjGIka9IVpeoXFyvOC2.jpeg',
  },
];

const portfolioImages: PortfolioImage[] = [
  {
    id: '1',
    title: 'Residential Entrance',
    description: 'High-reach window cleaning for modern residential properties',
    image_url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Windows1-b6PSNpf3DdpfkcVmU60XYv1SPdjw6E.jpg',
  },
  {
    id: '2',
    title: 'Two-Story Reach',
    description: 'Extended pole cleaning for hard-to-reach second floor windows',
    image_url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amazing-ThKhcxS22fRkIXQcN6oB88gQjULmqi.jpg',
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-8 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Portfolio</h2>
          <p className="text-gray-600">Our Recent Work</p>
        </div>

        {/* Before & After Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Before & After</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {beforeAfterItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img
                      src={item.beforeImage}
                      alt={`${item.title} - Before`}
                      className="w-full h-64 object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      BEFORE
                    </span>
                  </div>
                  <div className="relative">
                    <img
                      src={item.afterImage}
                      alt={`${item.title} - After`}
                      className="w-full h-64 object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      AFTER
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regular Portfolio Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Work in Action</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioImages.map((image) => (
              <div key={image.id} className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img
                      src={image.image_url}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-gray-900 mb-2">{image.title}</h4>
                    <p className="text-gray-600 text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
