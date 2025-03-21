import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-between px-4 pt-32 pb-48 bg-black overflow-hidden">
      <div className="absolute w-[40vw] h-[40vw] rounded-full bg-gradient-to-t from-violet-custom to-purple-custom opacity-30 blur-[80px] -left-[10%] top-[10%]"></div>
      <div className="absolute w-[35vw] h-[35vw] rounded-full bg-orange-custom opacity-30 blur-[80px] -right-[5%] top-[50%]"></div>

      <div className="absolute w-16 h-8 border border-white opacity-40 rotate-12 top-[15%] left-[15%]"></div>
      
      <div className="absolute w-16 h-8 border border-white opacity-40 rotate-12 top-[15%] left-[15%]"></div>
      
      <div className="absolute w-16 h-16 border border-white opacity-40 top-[30%] right-[15%]" 
           style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}></div>
    
      <div className="absolute w-16 h-16 border border-white opacity-40 bottom-[30%] left-[15%]" 
           style={{ clipPath: 'polygon(0 100%, 0 0, 100% 100%)' }}></div>
   
      <div className="absolute w-12 h-12 rounded-full border border-white opacity-40 bottom-[20%] right-[25%]"></div>
      
      <div className="absolute w-4 h-20 border border-white opacity-40 rotate-45 top-[20%] right-[35%]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 flex w-full">
        <div className='flex flex-col w-1/2'>
          <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight w-[130%] mb-8">
            Transformez VOTRE entreprise de service sur site avec un écosystème digital
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mb-12">
            Vous perdez 5h par semaine en paperasse ? Nos solutions digitales connectent vos équipes terrain, votre bureau et vos clients dans un système fluide et efficace.
          </p>
          <div className='flex gap-4 text-white mb-8'>
            <div className='flex gap-2 items-center'>
              <img src='/internet.png' width={30} height={30}/>
              <p>Sites internet</p>
            </div>
            <p>•</p>
            <div className='flex gap-2 items-center'>
              <img src='/setting.png' width={30} height={30}/>
              <p>Applications mobiles</p>
            </div>
            <p>•</p>
            <div className='flex gap-2 items-center'>
              <img src='/develop.png' width={30} height={30}/>
              <p>Solutions digitales</p>
            </div>
          </div>
          <div className="inline-flex w-fit relative p-[2px] bg-gradient-to-r from-violet-custom via-purple-custom to-orange-custom rounded-full">
            <button className="bg-black text-white font-medium py-4 px-8 rounded-full relative z-10">
              Réservez un appel découverte gratuit (15 min)
            </button>
          </div>
        </div>

        <div className='relative flex flex-col w-1/2 items-end space-y-12 pr-8'>
          {[
            { logo:"/develop.png", text: "+ 10 entreprises accompagnées", offset: "top-0 right-0" },
            { logo:"/develop.png", text: "Délivrables rapides !", offset: "top-10 right-10" },
            { logo:"/develop.png", text: "+ 60% de nouveaux clients", offset: "top-20 right-20" },
            { logo:"/develop.png", text: "Retours et demandes illimitées", offset: "top-32 right-5" }
          ].map((item, index) => (
            <div key={index} className={`flex gap-2 items-center relative px-4 py-3 w-80 rounded-lg bg-gradient-to-b from-violet-custom via-purple-custom to-orange-custom shadow-[0px_0px_12px_#FF4600] ${item.offset}`}>
              <div className='absolute inset-0 rounded-lg border border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
              <div className='absolute inset-0 rounded-lg border border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'></div>
              <div className='absolute inset-0 shadow-[0_0_10px__#BF2188_inset] rounded-lg'></div>
                <img src={item.logo} width={30} height={30} />
                <p className='text-white text-center'>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
