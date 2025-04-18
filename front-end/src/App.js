import logo from './logo.svg';
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ForWhoSection from './components/ForWhoSection/ForWhoSection';
import ProblemsSolutionsToggle from './components/Benefits/BenefitsSection';
import { Spacer } from './components/Spacer';
import OfferSection from './components/OfferSection/OfferSection';
import { ProjectSection } from './components/ProjectSection/ProjectSection';
import { PricingSection } from './components/PricingSection/PricingSection';
import Footer from './components/Footer';
import FAQSection from './components/FAQSection';
import CtaSection from './components/CtaSection';
import PartnersSection from './components/PartnersSection/PartnersSection';

function App() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <HeroSection />
      <Spacer size='lg'/>
      <ForWhoSection />
      <Spacer size='lg'/>
      <ProblemsSolutionsToggle />
      <OfferSection />
      <Spacer size='lg' />
      <ProjectSection />
      <Spacer size='lg' />
      <PricingSection />
      <Spacer size='lg' />
      <FAQSection />
      <Spacer size='lg' />
      <div className="relative z-20 mb-[-20px]">
        <CtaSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;