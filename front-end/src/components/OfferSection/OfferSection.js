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
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridTemplateRows: 'auto auto auto auto',
        gridTemplateAreas: `
          "web web seo seo "
          "app eco eco dash"
        `
      }}>
        <div style={{ gridArea: 'web' }}>
          <img src='/WebsiteCreation.png' alt='' className='w-full' />
        </div>
        
        <div style={{ gridArea: 'app' }}>
          <img src='/FieldMobileApp.png' alt='' className='w-full' />
        </div>
        
        <div style={{ gridArea: 'eco' }} >
          <img src='/Ecosystem.png' alt='' className='w-full' />
        </div>
        
        <div style={{ gridArea: 'dash' }} >
          <img src='/Management.png' alt='' className='w-full' />
        </div>
        
        <div style={{ gridArea: 'seo' }}>
        <img src='/SeoOptimisation.png' alt='' className='w-full' /> 
        </div>
      </div>
    </div>
  )
}

export default OfferSection