import React from 'react'

const OfferSection = () => {
  return (
    <div className='flex flex-col max-w-7xl mx-auto py-24'>
      <div className='flex flex-col justify-center items-center gap-2 mb-8'>
        <span className='bg-purple-custom/80 py-2 px-3 inline-block rounded-full w-fit text-white text-sm'>Solutions</span>
        <h2 className='text-4xl font-bold '>Nos solutions Digitales</h2>
        <p className='text-lg max-w-xl text-center bg-gradient-to-b from-black to-black/60 inline-block text-transparent bg-clip-text'>Nous développons des écosystèmes digitaux sur mesure qui transforment les opérations terrain et stimulent votre croissance</p>
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