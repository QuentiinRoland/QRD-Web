import React from 'react'

const Sectors = () => {
  return (
    <div className='grid grid-cols-3 gap-4'>
        <div className="relative p-6 text-white rounded-lg overflow-hidden col-span-2 bg-black">
            <div className="absolute inset-0 z-0">
                <img 
                    src="/artisan.jpg" 
                    alt="Smart Home Integration" 
                    className="h-full w-full object-cover opacity-45"
                />
            </div>
            
            <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-2">Artisans et professionnels indépendants
                </h3>
                <p className="text-base">Vous êtes un plombier, électricien, menuisier ou tout autre artisan travaillant principalement seul ou avec une petite équipe ?. Les artisans utilisant notre écosystème gagnent en moyenne 8 heures par semaine - du temps</p>
            </div>
        </div>

        <div className="relative p-6 text-white rounded-lg overflow-hidden bg-black">
            <div className="absolute inset-0 z-0">
                <img 
                    src="/companyPicture.jpg" 
                    alt="Remote Access" 
                    className="h-full w-full object-cover opacity-35"
                />
            </div>
            
            <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-2">Entreprises de services locaux</h3>
                <p className="text-base">Vous dirigez une entreprise de services avec plusieurs techniciens ou équipes intervenant quotidiennement chez vos clients ? Les entreprises de services avec 5 à 15 employés constatent généralement une augmentation de 30% de leur capacité d'intervention après l'implémentation de notre système !</p>
            </div>
        </div>

        <div className="relative p-6 text-white rounded-lg overflow-hidden bg-black">
            <div className="absolute inset-0 z-0">
                <img 
                    src="/fieldBusiness.jpg" 
                    alt="Intuitive Interface" 
                    className="h-full w-full object-cover opacity-35"
                />
            </div>
            
            <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-2">Sociétés de maintenance et SAV</h3>
                <p className="text-base">Vous gérez un service de maintenance, un SAV ou toute activité nécessitant de nombreuses interventions quotidiennes de courte durée ? La réactivité et la traçabilité sont essentielles dans votre métier. </p>
            </div>
        </div>

        <div className="relative p-6 text-white rounded-lg overflow-hidden col-span-2 bg-black">
            <div className="absolute inset-0 z-0">
                <img 
                    src="/fieldBusiness.jpg" 
                    alt="Tailored Control" 
                    className="h-full w-full object-cover opacity-35"
                />
            </div>
            
            <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-2">Entreprises d'aménagement extérieur</h3>
                <p className="text-base">Vous travaillez dans l'aménagement paysager, l'entretien d'espaces verts ou tout autre métier en extérieur ? Notre écosystème digital a été initialement développé avec des professionnels de ce secteur et répond parfaitement à ces particularités.</p>
            </div>
        </div>
    </div>
  )
}

export default Sectors