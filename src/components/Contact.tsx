import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h3>
          <p className="text-lg text-gray-300">We're ready to make your windows shine</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-6 text-center hover:bg-opacity-20 transition-all">
            <div className="flex justify-center mb-4">
              <Phone className="text-blue-400" size={32} />
            </div>
            <h4 className="font-bold text-lg mb-2">Phone</h4>
            <a href="tel:416-889-9463" className="text-blue-300 hover:text-blue-200 transition-colors">
              416-889-9463
            </a>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-6 text-center hover:bg-opacity-20 transition-all">
            <div className="flex justify-center mb-4">
              <Mail className="text-blue-400" size={32} />
            </div>
            <h4 className="font-bold text-lg mb-2">Email</h4>
            <a href="mailto:info@streakless.ca" className="text-blue-300 hover:text-blue-200 transition-colors">
              info@streakless.ca
            </a>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-6 text-center hover:bg-opacity-20 transition-all">
            <div className="flex justify-center mb-4">
              <Clock className="text-blue-400" size={32} />
            </div>
            <h4 className="font-bold text-lg mb-2">Hours</h4>
            <p className="text-gray-300">Mon-Sun</p>
            <p className="text-blue-300">9:00 AM - 7:00 PM</p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-6 text-center hover:bg-opacity-20 transition-all">
            <div className="flex justify-center mb-4">
              <MapPin className="text-blue-400" size={32} />
            </div>
            <h4 className="font-bold text-lg mb-2">Service Area</h4>
            <p className="text-gray-300">Greater Toronto Area</p>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-10 text-center border border-white border-opacity-20">
          <h4 className="text-2xl font-bold mb-4">Ready to Transform Your Windows?</h4>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Call us today for a free quote or to schedule your service. We're available Monday through Sunday.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:416-889-9463"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors"
            >
              Call Now
            </a>
            <a
              href="mailto:info@streakless.ca"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-bold transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
