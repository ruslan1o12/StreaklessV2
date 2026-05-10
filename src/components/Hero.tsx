export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-slate-100 pt-20 pb-24 sm:pt-32 sm:pb-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Crystal Clear <span className="text-blue-600">Windows</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 mb-4 font-medium">Professional Window Cleaning Services for Toronto</p>
          <p className="text-lg text-gray-500 mb-8">Streak Free • Stress Free</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:416-889-9463"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Get a Free Quote
            </a>
            <a
              href="mailto:info@streakless.ca"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              Email Us
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-blue-600">100%</p>
                <p className="text-gray-600 text-sm mt-1">Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-blue-600">24/7</p>
                <p className="text-gray-600 text-sm mt-1">Booking Available</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-blue-600">10+</p>
                <p className="text-gray-600 text-sm mt-1">Years Experience</p>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mt-8 max-w-2xl mx-auto">
            Professional window cleaning using advanced water-fed pole technology. Serving Toronto's residential and commercial properties.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
