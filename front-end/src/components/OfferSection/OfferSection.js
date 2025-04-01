import React from 'react'

const OfferSection = () => {
  return (
    <div className='flex flex-col max-w-7xl mx-auto'>
      <div className='flex flex-col text-center gap-2 mb-8'>
        <p>Solutions</p>
        <h2 className='text-2xl font-bold'>Nos solutions Digitales</h2>
        <p>Nous développons des écosystèmes digitaux sur mesure qui transforment les opérations terrain et stimulent votre croissance</p>
      </div>
      
      <div className='grid gap-4' style={{
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: 'auto auto auto',
        gridTemplateAreas: `
          "web web web"
          "app eco dash"
          "seo seo seo"
        `
      }}>
        <div style={{ gridArea: 'web' }} className='flex flex-col bg-gray-500 p-4 rounded-lg'>
          <h3 className='text-xl font-bold'>Site Web Professionnel</h3>
          <p>Nous créons des sites web optimisés pour les professionnels terrain qui convertissent les visiteurs en clients et renforcent votre image.</p>
          <div className='mt-auto'></div>
        </div>
        
        <div style={{ gridArea: 'app' }} className='flex flex-col bg-gray-500 p-4 rounded-lg'>
          <h3 className='text-xl font-bold'>App Mobile Terrain</h3>
          <p>Notre application mobile transforme le travail sur le terrain avec des outils intuitifs qui éliminent la paperasse et optimisent chaque intervention. Conçue pour fonctionner même sans connexion internet.</p>
          <div className='mt-auto'></div>
        </div>
        
        <div style={{ gridArea: 'eco' }} className='flex flex-col bg-gray-500 p-4 rounded-lg'>
          <h3 className='text-xl font-bold'>Créez Votre Écosystème</h3>
          <p>Solutions modulaires qui s'adaptent à vos besoins spécifiques</p>
          <div className='mt-auto'></div>
        </div>
        
        <div style={{ gridArea: 'dash' }} className='flex flex-col bg-gray-500 p-4 rounded-lg'>
          <h3 className='text-xl font-bold'>Dashboard de Gestion</h3>
          <p>Centralisez et visualisez toute votre activité terrain dans un tableau de bord intuitif qui connecte vos équipes et optimise vos opérations.</p>
          <div className='mt-auto'></div>
        </div>
        
        <div style={{ gridArea: 'seo' }} className='flex flex-col bg-gray-500 p-4 rounded-lg'>
          <h3 className='text-xl font-bold'>SEO</h3>
          <p>Optimisez votre visibilité en ligne et attirez de nouveaux clients grâce à notre stratégie de référencement dédiée aux professionnels terrain.</p>
          <div className='mt-auto'></div>
        </div>
      </div>
    </div>
  )
}

export default OfferSection