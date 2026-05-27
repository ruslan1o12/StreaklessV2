interface PortfolioImage {
  id: string;
  title: string;
  description: string;
  before_image_url: string;
  after_image_url: string;
}

const portfolioImages: PortfolioImage[] = [
  {
    id: '1',
    title: 'Residential Home',
    description: 'Full exterior window cleaning for a two-story home',
    before_image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    after_image_url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=400&fit=crop',
  },
  {
    id: '2',
    title: 'Commercial Office Building',
    description: 'High-rise window cleaning using water-fed pole system',
    before_image_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop',
    after_image_url: 'https://images.unsplash.com/photo-1554435493-93422e8220c8?w=400&h=400&fit=crop',
  },
  {
    id: '3',
    title: 'Storefront Windows',
    description: 'Crystal clear windows for local retail shop',
    before_image_url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop',
    after_image_url: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=400&h=400&fit=crop',
  },
  {
    id: '4',
    title: 'Modern Condo',
    description: 'Floor-to-ceiling windows cleaned inside and out',
    before_image_url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=400&fit=crop',
    after_image_url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=400&fit=crop',
  },
  {
    id: '5',
    title: 'Heritage Property',
    description: 'Careful cleaning of delicate heritage windows',
    before_image_url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=400&fit=crop',
    after_image_url: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400&h=400&fit=crop',
  },
  {
    id: '6',
    title: 'Restaurant Windows',
    description: 'Spotless windows for busy downtown restaurant',
    before_image_url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=400&fit=crop',
    after_image_url: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=400&fit=crop',
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-8 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Portfolio</h2>
          <p className="text-gray-600">Before & After Gallery</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioImages.map((image) => (
            <div key={image.id} className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-2 gap-2 bg-gray-100 p-2">
                  <div className="relative overflow-hidden rounded-lg bg-gray-200 aspect-square">
                    <img
                      src={image.before_image_url}
                      alt={`${image.title} - Before`}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      BEFORE
                    </span>
                  </div>
                  <div className="relative overflow-hidden rounded-lg bg-gray-200 aspect-square">
                    <img
                      src={image.after_image_url}
                      alt={`${image.title} - After`}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      AFTER
                    </span>
                  </div>
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
