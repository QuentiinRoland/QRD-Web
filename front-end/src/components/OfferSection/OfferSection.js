import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OfferSection = () => {
  // Créer un hook useInView pour détecter quand la section devient visible
  const [ref, inView] = useInView({
    triggerOnce: true,  // Ne déclenche l'animation qu'une seule fois
    threshold: 0.1      // Déclenche quand 10% de l'élément est visible
  });

  // Définir les variants pour le conteneur
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // Décaler chaque enfant de 0.3s
        staggerChildren: 0.3,
        // Démarrer après que le titre soit apparu
        delayChildren: 0.4
      }
    }
  };

  // Définir les variants pour chaque image
  const itemVariants = {
    hidden: { 
      x: -50,
      opacity: 0 
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className='flex flex-col max-w-7xl mx-auto py-24'>
      <motion.div 
        className='flex flex-col justify-center items-center gap-2 mb-8'
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <motion.span 
          className='bg-purple-custom/80 py-2 px-3 inline-block rounded-full w-fit text-white text-sm'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Solutions
        </motion.span>
        <motion.h2 
          className='text-4xl font-bold'
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Nos solutions Digitales
        </motion.h2>
        <motion.p 
          className='text-lg max-w-xl text-center bg-gradient-to-b from-black to-black/60 inline-block text-transparent bg-clip-text'
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          Nous développons des écosystèmes digitaux sur mesure qui transforment les opérations terrain et stimulent votre croissance
        </motion.p>
      </motion.div>
      
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className='grid gap-4' 
        style={{
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gridTemplateRows: 'auto auto auto auto',
          gridTemplateAreas: `
            "web web seo seo "
            "app eco eco dash"
          `
        }}
      >
        <motion.div 
          style={{ gridArea: 'web' }}
          variants={itemVariants}
          className="overflow-hidden rounded-lg"
        >
          <motion.img 
            src='/WebsiteCreation.png' 
            alt='Création de site web' 
            className='w-full transition duration-500 hover:scale-105' 
            whileHover={{ scale: 1.03 }}
          />
        </motion.div>
        <motion.div 
          style={{ gridArea: 'seo' }}
          variants={itemVariants}
          className="overflow-hidden rounded-lg"
        >
          <motion.img 
            src='/SeoOptimisation.png' 
            alt='Optimisation SEO' 
            className='w-full' 
            whileHover={{ scale: 1.03 }}
          />
        </motion.div>
        <motion.div 
          style={{ gridArea: 'app' }}
          variants={itemVariants}
          className="overflow-hidden rounded-lg"
        >
          <motion.img 
            src='/FieldMobileApp.png' 
            alt='Application mobile terrain' 
            className='w-full' 
            whileHover={{ scale: 1.03 }}
          />
        </motion.div>
        
        <motion.div 
          style={{ gridArea: 'eco' }}
          variants={itemVariants}
          className="overflow-hidden rounded-lg"
        >
          <motion.img 
            src='/Ecosystem.png' 
            alt='Écosystème digital' 
            className='w-full' 
            whileHover={{ scale: 1.03 }}
          />
        </motion.div>
        
        <motion.div 
          style={{ gridArea: 'dash' }}
          variants={itemVariants}
          className="overflow-hidden rounded-lg"
        >
          <motion.img 
            src='/Management.png' 
            alt='Tableau de bord' 
            className='w-full' 
            whileHover={{ scale: 1.03 }}
          />
        </motion.div>
        
       
      </motion.div>
    </div>
  );
};

export default OfferSection;