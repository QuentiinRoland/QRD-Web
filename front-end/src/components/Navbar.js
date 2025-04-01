import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black text-white'>
        <div className='max-w-7xl mx-auto flex items-center h-[70px] px-4 relative'>
            {/* Logo et nom (à gauche) */}
            <div className='flex items-center'>
                <img src='/QRDLogo.png' alt='' width={60} height={60} className="mr-2" />
                <p className="font-medium">Roland Web</p>
            </div>
            
            {/* Navigation centrale - positionnée absolument pour être vraiment au centre */}
            <ul className='absolute left-1/2 transform -translate-x-1/2 flex space-x-8 items-center h-full'>
                <li className="flex items-center h-full cursor-pointer hover:text-orange-custom transition-colors">Services</li>
                <li className="flex items-center h-full cursor-pointer hover:text-orange-custom transition-colors">Cas clients</li>
                <li className="flex items-center h-full cursor-pointer hover:text-orange-custom transition-colors">Tarifs</li>
                <li className="flex items-center h-full cursor-pointer hover:text-orange-custom transition-colors">FAQ</li>
            </ul>
            
            {/* Bouton de consultation (à droite) */}
            <div className='ml-auto inline-block p-[2px] relative bg-gradient-to-r from-violet-custom via-purple-custom to-orange-custom rounded-full'>
                <button className="bg-black text-white font-medium py-2 px-4 rounded-full relative z-1">Consultation gratuite</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar