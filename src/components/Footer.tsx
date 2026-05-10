import { Droplets } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Droplets className="text-blue-400" size={24} />
              <span className="font-bold text-white">Streakless Windows</span>
            </div>
            <p className="text-sm text-gray-400">Professional window cleaning and exterior services for the Greater Toronto Area.</p>
          </div>

          <div>
            <h5 className="font-bold text-white mb-4">Services</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Window Cleaning</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Gutter Cleaning</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Pressure Washing</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white mb-4">Contact</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:416-889-9463" className="hover:text-blue-400 transition-colors">416-889-9463</a></li>
              <li><a href="mailto:info@streakless.ca" className="hover:text-blue-400 transition-colors">info@streakless.ca</a></li>
              <li className="text-gray-500">Mon-Sun: 9AM-7PM</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white mb-4">Why Choose Us</h5>
            <ul className="space-y-2 text-sm">
              <li>Water-fed pole technology</li>
              <li>3-stage filtration system</li>
              <li>Fully insured and licensed</li>
              <li>100% satisfaction guarantee</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {currentYear} Streakless Windows. All rights reserved. Streak Free &bull; Stress Free
          </p>
        </div>
      </div>
    </footer>
  );
}
