import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen" style={{ background: '#000d1a', direction: 'rtl' }}>
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
