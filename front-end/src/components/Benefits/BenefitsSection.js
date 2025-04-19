import React from 'react'
import { useState } from 'react';
import { benefitsData } from './benefitsData';
import { issuesData } from './issuesData';
import { motion, AnimatePresence } from 'framer-motion';

export const sectionsInfo = {
    issues: {
        title: "Obstacles critiques",
        subtitle: "Freinant les professionnels terrain",
        description: "Malgré leur expertise technique, les professionnels de terrain font face à des défis majeurs qui limitent leur efficacité et leur croissance. Nous résolvons ces problèmes de front."
    },
    benefits: {
        title: "Bénéfices concrets",
        subtitle: "Propulsant votre entreprise terrain",
        description: "Notre écosystème digital transforme radicalement votre efficacité opérationnelle et votre développement commercial. Découvrez les avantages clés."
    }
};

const ProblemsSolutionsToggle = () => {
    const [showSolutions, setShowSolutions] = useState(false);
    
    const activeData = showSolutions ? benefitsData : issuesData;
    const activeInfo = showSolutions ? sectionsInfo.benefits : sectionsInfo.issues;
    const accentColor = showSolutions ? 'text-green-600' : 'text-red-600';
    const borderColor = showSolutions ? 'border-green-600' : 'border-red-600';
    
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1
        }
      }
    };
  
    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
      },
      exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.3 }
      }
    };
  
    return (
      <div className='bg-black'>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className={`max-w-7xl mx-auto flex flex-col justify-center items-center text-white py-24 rounded-lg transition-all duration-500`}
        >
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-4 transition-all duration-500 flex flex-col justify-center items-center gap-2 text-center"
          >
            <motion.span 
              layout
              className={`text-sm font-semibold bg-white py-3 px-3 rounded-full w-fit ${!showSolutions ? 'text-red-600' : 'text-green-600'}`}
            >
              {activeInfo.subtitle}
            </motion.span>
            <motion.h2 
              layout
              className={`text-4xl font-bold mb-1 ${accentColor}`}
            >
              {activeInfo.title}
            </motion.h2>
            <motion.p 
              layout
              className="max-w-3xl mx-auto text-gray-300 text-lg"
            >
              {activeInfo.description}
            </motion.p>
          </motion.div>
  
          <motion.div 
            className="bg-gray-800 p-1 rounded-full inline-flex mb-12"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.button 
              className={`px-6 py-2 rounded-full transition-all ${!showSolutions ? 'bg-red-600 text-white' : 'text-gray-400'}`}
              onClick={() => setShowSolutions(false)}
              whileHover={{ scale: !showSolutions ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Problèmes
            </motion.button>
            <motion.button 
              className={`px-6 py-2 rounded-full transition-all ${showSolutions ? 'bg-green-600 text-white' : 'text-gray-400'}`}
              onClick={() => setShowSolutions(true)}
              whileHover={{ scale: showSolutions ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solutions
            </motion.button>
          </motion.div>
              
          <AnimatePresence mode="wait">
            <motion.div 
              key={showSolutions ? 'solutions' : 'problems'}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {activeData.map((item) => (
                <motion.div 
                  key={item.id} 
                  variants={itemVariants}
                  className={`p-6 rounded-lg border-t-2 ${borderColor} transition-all duration-300`}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)", 
                    backgroundColor: "rgba(255,255,255,0.05)" 
                  }}
                >
                  <motion.div 
                    className="mb-4"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className={`text-xl font-bold mb-2 ${accentColor}`}>{item.name}</h3>
                  <p className="text-gray-300 text-lg">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    );
  };
  
  export default ProblemsSolutionsToggle;