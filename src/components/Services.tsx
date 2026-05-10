import { Droplets, Wind, Leaf } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Droplets,
      title: 'Window Cleaning',
      description: 'Professional window cleaning using water-fed poles with 3-stage filtration system for spotless results.',
      features: ['Water-Fed Poles', '3-Stage Filters', 'Streak-Free Finish'],
    },
    {
      icon: Leaf,
      title: 'Gutter Cleaning',
      description: 'Keep your gutters flowing freely. We remove debris and ensure proper drainage year-round.',
      features: ['Debris Removal', 'Flow Testing', 'Safe Access'],
    },
    {
      icon: Wind,
      title: 'Pressure Washing',
      description: 'Professional pressure washing for driveways, patios, and exterior surfaces.',
      features: ['Deep Cleaning', 'Safe Handling', 'Quick Dry Time'],
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Services</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete exterior cleaning solutions for your home or business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 hover:shadow-xl transition-shadow border border-slate-200"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-blue-600" size={32} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-10 text-white text-center">
          <h4 className="text-2xl font-bold mb-2">Why Choose Streakless?</h4>
          <p className="mb-6 text-blue-100">Professional equipment, experienced team, and commitment to excellence</p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="font-bold mb-1">Advanced Technology</p>
              <p className="text-blue-100">Water-fed poles with 3-stage filtration</p>
            </div>
            <div>
              <p className="font-bold mb-1">Fully Insured</p>
              <p className="text-blue-100">Protected and professional service</p>
            </div>
            <div>
              <p className="font-bold mb-1">Customer Focused</p>
              <p className="text-blue-100">Your satisfaction is guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
