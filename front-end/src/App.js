import logo from './logo.svg';
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ForWhoSection from './components/ForWhoSection/ForWhoSection';
import BenefitsSection from './components/Benefits/BenefitsSection';
import { Spacer } from './components/Spacer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Spacer size='lg'/>
      <ForWhoSection />
      <Spacer size='lg'/>
      <BenefitsSection />
    </div>
  );
}

export default App;