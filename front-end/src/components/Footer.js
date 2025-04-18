import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black relative h-[450px]'style={{ marginBottom: '-1px' }}>
      <img src='/FooterBackground.png' className='w-full h-full absolute inset-0'/>
      <div className='flex flex-col max-w-7xl mx-auto relative z-10'>
        <div className='flex justify-center items-center'>
            <img src='/Rolandigital.png' className='w-[80px] h-[80px] absolute top-[52px]' />
        </div>
        {/* <div className='absolute flex flex-col justify-center items-center gap-2 left-0 right-0 top-[100px]'>
            <h2 className='text-white text-3xl font-medium'>Découvrez une nouvelle approche digitale pour les métiers de terrain</h2>
            <p className='bg-gradient-to-b from-white to-white/60 inline-block text-transparent bg-clip-text max-w-3xl text-center text-md'>Propulsez votre entreprise avec un écosystème digital sur mesure, conçu spécifiquement pour les artisans et professionnels terrain, des indépendants aux sociétés multi-techniciens</p>
            <button className='text-white text-xs mt-[16px]'>Réserver un appel gratuit !</button>
        </div> */}
        {/* Abeliasun
        Roland Container
        Agidrive
        Upixis
        Learn at lunch
        ESG-e-learning
        Kermesse de chastre
        Caraor */}
        <div className='absolute top-[100px] flex w-full justify-between'>
            <div className='text-white flex flex-col gap-2'>
                <h3 className='text-sm font-normal'>Contactez-nous</h3>
                <a className='text-lg' href='mailto:info@rolandweb.com'>info@rolandigital.com</a>
                <a className='text-lg' href='tel:0471455054'>0471/45.50.54</a>
            </div>
            <div className='text-white text-lg font-normal flex items-center gap-12'>
                <a>Bénéfices</a>
                <a>Services</a>
                <a>Cas Clients</a>
                <a>Tarifs</a>
                <a>FAQ</a>
            </div>
        </div>
        <div className='absolute top-[210px] left-0 right-0 border border-white'></div>
        <div className="absolute top-[225px] w-full">
            <div className="container mx-auto flex justify-between items-start">
                <div className="text-white flex flex-col gap-1 w-1/2">
                    <h3 className="text-lg font-medium">Ne manquez aucune astuce terrains</h3>
                    <p className="max-w-sm bg-gradient-to-b from-white to-white/60 inline-block text-transparent bg-clip-text">Recevez nos conseils d'optimisation, études de cas et nouveautés digitales pour professionnels terrain.</p>
                </div>
                
                <div className="text-white flex gap-4 w-auto">
                    <input 
                    type="email" 
                    className="bg-white/10 w-[250px] rounded-lg pl-4 border border-white border-solid focus:outline-none" 
                    placeholder="exemple@email.com" 
                    />
                    <button className="text-black bg-white px-6 py-2 rounded-lg whitespace-nowrap">
                    Rejoindre
                    </button>
                </div>
            </div>
        </div>
        
        <div className='absolute top-[350px] flex w-full justify-between'>
            <div className='text-white flex flex-col gap-2'>
                <span className='text-white/30'>@2025 RolandWeb, Designed by <a href='mailto:info@rolandweb.com' className='hover:text-white'>Quentin Roland</a></span>
            </div>
            <div className='text-white/30 flex gap-12'>
                <a className='hover:text-white'>CGV</a>
                <a className='hover:text-white'>Politique de confidentialité</a>
            </div>
            <div className='text-white flex gap-12'>
                <a>Instagram</a>
                <a>Linkedin</a>
                <a>Facebook</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer