import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black relative h-[500px]'>
      <img src='/FooterBackground.png' className='w-full h-full absolute inset-0'/>
      <div className='flex flex-col max-w-7xl mx-auto relative z-10'>
        <div className='flex justify-center items-center'>
            <img src='/QRDLogo.png' className='w-[50px] h-[50px] absolute top-[34px]' />
        </div>
        <div className='absolute flex flex-col justify-center items-center gap-2 left-0 right-0 top-[100px]'>
            <h2 className='text-white text-2xl font-medium'>Découvrez une nouvelle approche digitale pour les métiers de terrain</h2>
            <p className='bg-gradient-to-b from-white to-white/50 inline-block text-transparent bg-clip-text max-w-3xl text-center text-sm'>Propulsez votre entreprise avec un écosystème digital sur mesure, conçu spécifiquement pour les artisans et professionnels terrain, des indépendants aux sociétés multi-techniciens</p>
            <button className='text-white text-xs mt-[28px]'>Réserver un appel gratuit !</button>
        </div>
        <div className='absolute top-[248px] flex w-full justify-between'>
            <div className='text-white flex flex-col gap-2'>
                <h3 className='text-sm font-normal'>Contactez-nous</h3>
                <a className='text-lg' href='mailto:info@rolandweb.com'>info@rolandweb.com</a>
                <a className='text-lg' href='tel:0471455054'>0471/45.50.54</a>
            </div>
            <div className='text-white text-lg font-normal flex items-center gap-12'>
                <a>Bénéfices</a>
                <a>Bénéfices</a>
                <a>Bénéfices</a>
                <a>Bénéfices</a>
            </div>
        </div>
        <div className='absolute top-[350px] left-0 right-0 border border-white'></div>
        <div className='absolute top-[370px] flex w-full justify-between'>
            <div className='text-white flex flex-col gap-2'>
                <h3>Ne manquez aucune astuce terrains</h3>
                <p>Recevez nos conseils d'optimisation, études de cas et nouveautés digitales pour professionnels terrain.</p>
            </div>
            <div className='text-white flex gap-4'>
                <input type='email' className='bg-white/10 w-[250px] rounded-lg pl-4 border-white focus:' placeholder='exemple@email.com' />
                <button className='text-black bg-white px-6 py-2 rounded-lg'>Rejoindre</button>
             </div>
        </div>
        <div className='absolute top-[450px] flex w-full justify-between'>
            <div className='text-white flex flex-col gap-2'>
                <span>@2025 RolandWeb, Designed by <a href='mailto:info@rolandweb.com'>Quentin Roland</a></span>
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