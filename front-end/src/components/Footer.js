// Footer.jsx - Version responsive avec fond noir sur mobile
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black relative min-h-[600px] sm:min-h-[550px] md:min-h-[450px]' style={{ marginBottom: '-1px' }}>
      {/* Image de fond - masquée sur mobile */}
      <img src='/FooterBackground.png' className='w-full h-full absolute inset-0 object-cover hidden md:block' />
      
      {/* Contenu du footer */}
      <div className='flex flex-col max-w-7xl mx-auto relative z-10 px-4 py-12 h-full'>
        {/* Structure du contenu sans positions absolues */}
        <div className='flex flex-col h-full'>
          {/* Logo */}
          <div className='flex justify-center items-center mb-12 sm:mb-0'>
            <img src='/Rolandigital.png' className='w-[60px] h-[60px] md:w-[100px] md:h-[100px]' />
          </div>
          
          {/* Contact et navigation */}
          <div className='flex flex-col md:flex-row w-full justify-between gap-8 md:gap-0 mb-8 sm:mb-10'>
              {/* Contact */}
              <div className='text-white flex flex-col gap-2'>
                  <h3 className='text-sm font-normal'>Contactez-nous</h3>
                  <a className='text-base md:text-lg' href='mailto:info@rolandweb.com'>info@rolandigital.com</a>
                  <a className='text-base md:text-lg' href='tel:0471455054'>0471/45.50.54</a>
              </div>
              
              {/* Navigation */}
              <div className='text-white text-sm md:text-lg font-normal flex flex-wrap md:items-center gap-4 md:gap-6 lg:gap-12'>
                  <a href="#services">Services</a>
                  <a href="#customers">Cas Clients</a>
                  <a href="#pricing">Tarifs</a>
                  <a href="#faq">FAQ</a>
              </div>
          </div>
          
          {/* Séparateur */}
          <div className='w-full border border-white mb-8'></div>
          
          {/* Formulaire newsletter */}
          <div className="w-full mb-auto">
              <div className="mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0 mb-8 sm:mb-10">
                  <div className="text-white flex flex-col gap-1 w-full md:w-1/2">
                      <h3 className="text-base md:text-lg font-medium">Ne manquez aucune astuce terrains</h3>
                      <p className="max-w-sm bg-gradient-to-b from-white to-white/60 inline-block text-transparent bg-clip-text text-sm md:text-base">Recevez nos conseils d'optimisation, études de cas et nouveautés digitales pour professionnels terrain.</p>
                  </div>
                  
                  <div className="text-white flex flex-col sm:flex-row gap-3 md:gap-4 w-full md:w-auto">
                      <input 
                        type="email" 
                        className="bg-white/10 w-full sm:w-[250px] rounded-lg pl-4 h-10 py-2 border border-white border-solid focus:outline-none" 
                        placeholder="exemple@email.com" 
                      />
                      <button className="text-black bg-white px-6 py-2 rounded-lg whitespace-nowrap w-fit">
                        Rejoindre
                      </button>
                  </div>
              </div>
          </div>
          
          {/* Footer bottom */}
          <div className='w-full flex flex-col sm:flex-row justify-between gap-6 md:gap-0 mt-4'>
              {/* Copyright */}
              <div className='text-white'>
                  <span className='text-white/30 text-xs md:text-sm'>@2025 RolandWeb, Designed by <a href='mailto:info@rolandweb.com' className='hover:text-white'>Quentin Roland</a></span>
              </div>
              
              {/* Légal */}
              <div className='text-white/30 flex gap-4 md:gap-12 text-xs md:text-sm'>
                  <a className='hover:text-white'>CGV</a>
                  <a className='hover:text-white'>Politique de confidentialité</a>
              </div>
              
              {/* Réseaux sociaux */}
              <div className='text-white flex gap-4 md:gap-12 text-xs md:text-sm'>
                  <a>Instagram</a>
                  <a>Linkedin</a>
                  <a>Facebook</a>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer