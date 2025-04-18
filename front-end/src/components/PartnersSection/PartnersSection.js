import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { PartnersData } from './dataPartners'

const PartnersSection = () => {
  const duplicatedLogos = [...PartnersData, ...PartnersData]

  return (
    <div className="w-full py-8 bg-black backdrop-blur-sm border-t border-white/10">
    <div className='max-w-7xl mx-auto flex items-center justify-between gap-12 px-4'>
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-medium  text-white'>Adopté par les entreprises terrain à travers tous les secteurs.</h2>
        <p className='text-md font-medium bg-gradient-to-b from-white to-white/50 text-transparent inline-block bg-clip-text'>Des artisans indépendants aux grandes sociétés de maintenance.</p>
      </div>
      <div className="overflow-hidden max-w-[800px] h-[80px]">
        <motion.div
          className='flex items-center gap-12'
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity
          }}
        >
          {duplicatedLogos.map((partner, idx) => (
            <div key={idx} className='flex-shrink-0'>
              <img src={partner.picture} alt={partner.picture} width={120} height={120} className='object-contain grayscale hover:grayscale-0 transition'/>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </div>
  )
}

export default PartnersSection