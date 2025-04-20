import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openCalendly = () => {
    window.open('https://calendly.com/rolandigital-info/30min', '_blank', 'noopener,noreferrer')
  }

  return (
    <div className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${isTransparent ? 'bg-transparent' : 'bg-black shadow-md'}`}>
        <div className='max-w-7xl mx-auto flex items-center h-[70px] relative'>
            <div className='flex items-center'>
                <img src='/Rolandigital.png' alt='' width={80} height={80} className="mr-2" />
                <p className="font-medium text-white text-xl">Rolandigital</p>
            </div>
            
            <ul className='hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 items-center h-full text-lg'>
                <li className="flex items-center h-full cursor-pointer hover:text-orange-custom transition-colors text-white">Services</li>
                <li className="flex items-center h-full cursor-pointer hover:text-orange-custom transition-colors text-white">Cas clients</li>
                <li className="flex items-center h-full cursor-pointer hover:text-orange-custom transition-colors text-white">Tarifs</li>
                <li className="flex items-center h-full cursor-pointer hover:text-orange-custom transition-colors text-white">FAQ</li>
            </ul>
            
            <button className="md:hidden ml-auto text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
            
            <div className={`hidden md:inline-block ml-auto p-[2px] relative rounded-full ${isTransparent ? 'bg-white' :'bg-gradient-to-r from-violet-custom via-purple-custom to-orange-custom'}`}>
                <button onClick={() => openCalendly()} className={`${isTransparent ? ' text-black' : 'bg-black text-white '} font-medium py-2 px-4 rounded-full relative z-1`}>
                    Consultation gratuite
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar