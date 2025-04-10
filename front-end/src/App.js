import logo from './logo.svg';
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ForWhoSection from './components/ForWhoSection/ForWhoSection';
import BenefitsSection from './components/Benefits/BenefitsSection';
import { Spacer } from './components/Spacer';
import OfferSection from './components/OfferSection/OfferSection';
import { ProjectSection } from './components/ProjectSection/ProjectSection';
import { PricingSection } from './components/PricingSection/PricingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Spacer size='lg'/>
      <ForWhoSection />
      <Spacer size='lg'/>
      <BenefitsSection />
      <Spacer size='lg' />
      <OfferSection />
      <Spacer size='lg' />
      <ProjectSection />
      <Spacer size='lg' />
      <PricingSection />
      <Footer />
    </div>
  );
}

export default App;