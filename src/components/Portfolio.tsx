interface PortfolioImage {
  id: string;
  title: string;
  description: string;
  image_url: string;
}

const portfolioImages: PortfolioImage[] = [
  {
    id: '1',
    title: 'Water-Fed Pole Cleaning',
    description: 'Professional window cleaning on a stone entrance using water-fed pole technology',
    image_url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Windows2-aFSgTIjYU1Og9nDoVP8UJdS6NZCKPE.jpg',
  },
  {
    id: '2',
    title: 'Residential Entrance',
    description: 'High-reach window cleaning for modern residential properties',
    image_url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Windows1-rzsxaIcq4kStW4qYAGqPwdyZhgoHJ9.jpg',
  },
  {
    id: '3',
    title: 'Sparkling Clean Windows',
    description: 'Crystal clear results on brick home windows',
    image_url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WOWW-36guQVQNDfUENzPqHVIYjyyDUjrk3u.jpg',
  },
  {
    id: '4',
    title: 'Before & After Results',
    description: 'Dramatic transformation showing our cleaning quality',
    image_url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wow-HWZAJj9OOY58dS44OXwoGjifVNRsVb.jpeg',
  },
  {
    id: '5',
    title: 'Two-Story Reach',
    description: 'Extended pole cleaning for hard-to-reach second floor windows',
    image_url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amazing-BAXpbk29j2FBGFtVjcboEHtKV4Gise.jpg',
  },
  {
    id: '6',
    title: 'Gutter & Soffit Cleaning',
    description: 'Exterior cleaning services including gutters and soffits',
    image_url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/123123-sVFG1QHagulFc7jR16EeSr0XG2sjcS.jpg',
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
  );
}
