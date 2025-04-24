import React from 'react';
import { motion } from 'framer-motion';
import SectorsTable from '../ForWhoSection/Sectors';

const ForWhoSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 sm:py-16 md:py-24 px-4">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full md:w-2/5 flex flex-col justify-center gap-2"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className='bg-violet-custom/80 py-2 px-3 inline-block rounded-full w-fit text-white text-sm'
          >
            Des solutions adaptées à votre métier
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-gray-800"
          >
            Pour qui est conçue notre solution ?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg leading-relaxed pt-2 text-gray-700"
          >
            Nos écosystèmes digitaux sont spécialement développés pour révolutionner le quotidien des professionnels de terrain. 
            Que vous soyez un <span className="font-semibold">artisan indépendant</span> cherchant à maximiser votre efficacité, 
            une <span className="font-semibold">entreprise multi-techniciens</span> visant une coordination parfaite, 
            une <span className="font-semibold">société de maintenance</span> souhaitant optimiser ses interventions, 
            ou une <span className="font-semibold">entreprise d'aménagement extérieur</span> nécessitant un suivi visuel précis — 
            notre solution s'adapte précisément à vos défis quotidiens. 
          </motion.p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-3/5"
        >
          <SectorsTable />
        </motion.div>
      </div>
    </div>
  );
};

export default ForWhoSection;