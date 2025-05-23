import { useState } from 'react';
import { easeIn, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const ProjectSection = () => {
    const [headerRef, headerInView] = useInView({
      triggerOnce: true,
      threshold: 0.1
    })
    const [projectsRef, projectsInView] = useInView({
      triggerOnce: true,
      threshold: 0.2
    })

    const headerContainerVariants = {
      hidden: {opacity: 0},
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.3
        }
      }
    }

    const titleVariants = {
      hidden: { opacity: 0, x: -30 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut"
        }
      }
    }

    const paragraphVariants = {
      hidden: { opacity: 0, x: -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut",
          delay: 0.3 // Délai supplémentaire après l'animation du titre
        }
      }
    }

    const containerVariants = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.3,
          delayChildren: 0.4
        }
      }
    }

    const itemVariants = {
      hidden: {
        opacity: 0,
        x: -50,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      }
    }

    const [projects] = useState([
        {
          id: 1,
          title: 'Abeliasun Dashboard',
          description: 'Tableau de bord administrateur pour entreprise de parcs et jardins avec suivi des interventions en temps réel',
          image: '/MockupAbeliasun.png',
          tags: ['Dashboard', 'Analytics', 'Gestion Terrain'],
        },
        {
          id: 2,
          title: 'Abeliasun MobileApp',
          description: `Application mobile terrain pour paysagistes permettant la création de devis et rapports d'intervention sur site`,
          image: '/MockupAbeliasunApp.png',
          tags: ['App Mobile', 'Mode Hors-ligne', 'Service Terrain'],
        },
        {
          id: 3,
          title: 'Roland Container',
          description: 'Site web responsive pour entreprise de location de containers avec système de réservation intégré',
          image: '/MockupRoland.png',
          tags: ['Site Web', 'E-commerce', 'Réservation'],
        },
        {
          id: 4,
          title: 'Kermesse de Chastre',
          description: 'Site événementiel avec billetterie en ligne et plan interactif pour festival local',
          image: '/MockupKermesse.png',
          tags: ['Événementiel', 'Billetterie', 'Site Web'],
        },
        // {
        //   id: 5,
        //   title: 'Agidrive',
        //   description: 'Application web pour auto-école avec suivi des heures de conduite et progression des élèves',
        //   image: '/mobile-app-design.jpg',
        //   tags: ['Application Web', 'Dashboard', 'Gestion Élèves'],
        // },
        // {
        //   id: 6,
        //   title: 'Upixis',
        //   description: `Refonte complète du site vitrine d'une agence digitale avec portfolio dynamique`,
        //   image: '/mobile-app-design.jpg',
        //   tags: ['Site Vitrine', 'Portfolio', 'UX Design'],
        // },
      ]);

  return (
    <div id="customers" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <motion.div 
          ref={headerRef}
          variants={headerContainerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="mb-8 md:mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-0"
        >
          <motion.div className='flex flex-col gap-2 mb-4 md:mb-0' variants={titleVariants}>
            <span className='bg-orange-custom/80 py-2 px-3 inline-block rounded-full w-fit text-white text-sm'>Cas clients</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900">
              Nos réalisations pour professionnels terrain
            </h1>
          </motion.div>
          <motion.p variants={paragraphVariants} className='text-base md:text-lg max-w-full md:max-w-xl text-left md:text-center bg-gradient-to-b from-black to-black/60 inline-block text-transparent bg-clip-text'>Découvrez quelques exemples d'écosystèmes digitaux que nous avons développés pour des entreprises de service terrain. Chaque projet est conçu pour répondre aux défis spécifiques de nos clients.</motion.p>
        </motion.div>

        <motion.div 
          ref={projectsRef} 
          variants={containerVariants} 
          initial="hidden" 
          animate={projectsInView ? "visible" : "hidden"} 
          className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2"
        >
          {projects.map((project) => ( 
            <motion.div 
              variants={itemVariants} 
              key={project.id} 
              className="relative bg-gray-100 rounded-lg overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-12 relative">
                {/* Affichage de l'image avec fallback */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.classList.add('opacity-0');
                    e.target.parentNode.classList.add('bg-gray-200');
                  }}
                />
                {/* Fallback si l'image ne charge pas */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 opacity-0">
                  {project.title}
                </div>
              </div>
              <div className="p-3 md:p-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-2 md:px-3 py-1 text-xs bg-gray-200 rounded-full text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base md:text-lg font-bold">{project.title}</h3>
                    <p className="text-sm md:text-base text-gray-600">{project.description}</p>
                  </div>
                  <div className="h-6 w-6 md:h-8 md:w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <svg 
                      width="14" 
                      height="14" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-400"
                    >
                      <path 
                        d="M7 17L17 7M17 7H7M17 7V17" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
