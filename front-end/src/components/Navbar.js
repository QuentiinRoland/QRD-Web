import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Fermer le menu mobile lors du défilement
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
      
      if (window.scrollY > 50) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  // Empêcher le défilement quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const openCalendly = () => {
    setIsMobileMenuOpen(false); // Fermer le menu mobile après avoir cliqué
    window.open('https://calendly.com/rolandigital-info/30min', '_blank', 'noopener,noreferrer')
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  
  // Fonction pour scroller vers une section
  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false); // Fermer le menu mobile
    
    const section = document.getElementById(sectionId);
    if (section) {
      // Récupérer la hauteur de la navbar pour compenser
      const navbarHeight = 70; // Hauteur de la navbar en pixels
      
      // Calculer la position avec ajustement de la hauteur de la navbar
      const offsetTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      
      // Animation de défilement
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${isMobileMenuOpen ? 'bg-black' : isTransparent ? 'bg-transparent' : 'bg-black shadow-md'}`}>
        <div className='max-w-7xl mx-auto flex items-center h-[70px] relative px-4'>
            <div className='flex items-center'>
                <img src='/Rolandigital.png' alt='' width={80} height={80} className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] mr-2" />
                <p className="font-medium text-white text-lg md:text-xl">Rolandigital</p>
            </div>
            
            {/* Menu desktop */}
            <ul className='hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 items-center h-full text-lg'>
                <li onClick={() => scrollToSection('services')} className="flex items-center h-full cursor-pointer hover:text-orange-custom transition-colors text-white">
                  Services
                </li>
                <li onClick={() => scrollToSection('customers')} className="flex items-center h-full cursor-pointer hover:text-orange-custom transition-colors text-white">
                  Cas clients
                </li>
                <li onClick={() => scrollToSection('pricing')} className="flex items-center h-full cursor-pointer hover:text-orange-custom transition-colors text-white">
                  Tarifs
                </li>
                <li onClick={() => scrollToSection('faq')} className="flex items-center h-full cursor-pointer hover:text-orange-custom transition-colors text-white">
                  FAQ
                </li>
            </ul>
            
            {/* Bouton hamburger */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden ml-auto text-white focus:outline-none"
              aria-label="Menu"
            >
                {!isMobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
            </button>
            
            {/* Bouton CTA desktop */}
            <div className={`hidden md:inline-block ml-auto p-[2px] relative rounded-full ${isTransparent ? 'bg-white' :'bg-gradient-to-r from-violet-custom via-purple-custom to-orange-custom'}`}>
                <button 
                  onClick={openCalendly} 
                  className={`${isTransparent ? ' text-black' : 'bg-black text-white '} font-medium py-2 px-4 rounded-full relative z-1`}
                >
                    Consultation gratuite
                </button>
            </div>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-20 bg-black pt-[70px]"
          >
            <div className="flex flex-col h-full px-6 py-8">
              <nav className="flex-1">
                <ul className="flex flex-col space-y-6 text-center">
                  <li>
                    <a onClick={() => scrollToSection('services')} className="text-white text-2xl font-medium hover:text-orange-custom transition-colors">
                      Services
                    </a>
                  </li>
                  <li>
                    <a onClick={() => scrollToSection('clients')} className="text-white text-2xl font-medium hover:text-orange-custom transition-colors">
                      Cas clients
                    </a>
                  </li>
                  <li>
                    <a onClick={() => scrollToSection('pricing')} className="text-white text-2xl font-medium hover:text-orange-custom transition-colors">
                      Tarifs
                    </a>
                  </li>
                  <li>
                    <a onClick={() => scrollToSection('faq')} className="text-white text-2xl font-medium hover:text-orange-custom transition-colors">
                      FAQ
                    </a>
                  </li>
                </ul>
              </nav>
              
              {/* Bouton CTA mobile */}
              <div className="mt-8 flex justify-center">
                <div className="p-[2px] relative rounded-full bg-gradient-to-r from-violet-custom via-purple-custom to-orange-custom">
                  <button 
                    onClick={openCalendly} 
                    className="bg-black text-white font-medium py-3 px-6 rounded-full relative z-1"
                  >
                    Consultation gratuite
                  </button>
                </div>
              </div>
              
              {/* Réseaux sociaux - optionnel */}
              <div className="mt-8 flex justify-center space-x-6">
                <a href="#" className="text-white hover:text-orange-custom transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-orange-custom transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-orange-custom transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar