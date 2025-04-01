import React from 'react'

// Au lieu d'importer benefitsData, nous le définissons directement dans ce fichier
// pour résoudre l'erreur d'importation
const benefitsData = [
    {
        id: 1,
        name: "Temps gagné",
        description: "Réduisez votre paperasse de 68%, Automatisez vos tâches administratives, Passez plus de temps sur votre expertise métier",
        picture: "/hourglass.png" // Remplacez par le chemin de votre icône
    },
    {
        id: 2,
        name: "Meilleure organisation",
        description: "Centralisez toutes vos informations, Accédez à vos données même hors connexion, Synchronisez vos équipes en temps réel",
        picture: "/icons/organization-icon.svg" // Remplacez par le chemin de votre icône
    },
    {
        id: 3,
        name: "Plus de revenus",
        description: "Facturez plus rapidement (23 jours → 5 jours), Augmentez votre volume d'interventions de 27%, Générez plus de recommandations clients",
        picture: "/icons/revenue-icon.svg" // Remplacez par le chemin de votre icône
    },
]

const BenefitsSection = () => {
  return (
    <div className='bg-black text-white'>
        <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col justify-center items-center gap-2'>
                <p>Garantissez la croissance de votre entreprise de terrain</p>
                <h2>Gagnez en croissance avec Roland Web</h2>
                <p>Bénéficiez de l'expertise d'une agence spécialisée en solutions terrain avec des écosystèmes digitaux conçus pour maximiser votre efficacité ! </p>
            </div>
            <div className='grid grid-col-1 md:grid-cols-2 gap-6'>
                <div className='bg-gray-500 flex flex-col items-center'>
                    <h3>AVANT Roland Web: La réalité du terrain aujourd'hui</h3>
                    <img />
                </div>
                <div className='bg-gray-500 flex flex-col items-center'>
                    <h3>APRÈS QRD WEB : Votre activité optimisée</h3>
                    <img />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
                {benefitsData.map((benefit) => (
                    <div 
                    key={benefit.id} 
                    className="inline-block p-[2px] rounded-2xl bg-gradient-to-tr from-violet-custom via-purple-custom to-orange-custom"
                    >
                        <div className="bg-black text-white h-full p-10 rounded-2xl relative z-1 flex flex-col items-start">
                            <div className="absolute top-0 right-[-50px] w-1/2 h-full flex items-center justify-center opacity-30">
                                <img 
                                    src={benefit.picture} 
                                    alt={benefit.name} 
                                    width={160} 
                                    height={160}
                                    className="mx-auto"
                                    />
                            </div>
                            <div className='relative'>
                                <h3 className="text-xl font-bold mb-3">{benefit.name}</h3>
                                <p className="text-gray-300 text-start">{benefit.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default BenefitsSection