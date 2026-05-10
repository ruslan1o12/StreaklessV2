import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'home' && (
        <>
          <Hero />
          <Services />
          <Contact />
        </>
      )}

      {activeTab === 'portfolio' && <Portfolio />}

      <Footer />
    </div>
  );
}

export default App;
