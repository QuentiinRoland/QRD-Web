import React from 'react'
import { useState } from 'react';
import { benefitsData } from './benefitsData';
import { issuesData } from './issuesData';

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
    const bgColor = showSolutions ? 'bg-gray-900' : 'bg-gray-900';
    const accentColor = showSolutions ? 'text-green-600' : 'text-red-600';
    const borderColor = showSolutions ? 'border-green-600' : 'border-red-600';
    
    return (
    <div className='bg-black'>
        <div className={`max-w-7xl mx-auto flex flex-col justify-center items-center text-white py-24 rounded-lg transition-all duration-500`}>
            <div className="mb-4 transition-all duration-500 flex flex-col justify-center items-center gap-2 text-center">
                <span className={`text-sm font-semibold bg-white py-3 px-3 rounded-full w-fit ${!showSolutions ? 'text-red-600' : 'text-green-600'}`}>{activeInfo.subtitle}</span>
                <h2 className={`text-4xl font-bold mb-1 ${accentColor}`}>{activeInfo.title}</h2>
                <p className="max-w-3xl mx-auto text-gray-300 text-lg">{activeInfo.description}</p>
            </div>

            <div className="bg-gray-800 p-1 rounded-full inline-flex mb-12">
                <button 
                className={`px-6 py-2 rounded-full transition-all ${!showSolutions ? 'bg-red-600 text-white' : 'text-gray-400'}`}
                onClick={() => setShowSolutions(false)}
                >
                Problèmes
                </button>
                <button 
                className={`px-6 py-2 rounded-full transition-all ${showSolutions ? 'bg-green-00 text-white' : 'text-gray-400'}`}
                onClick={() => setShowSolutions(true)}
                >
                Solutions
                </button>
                </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activeData.map((item) => (
                <div 
                key={item.id} 
                className={`p-6 rounded-lg border-t-2 ${borderColor} transition-all duration-300 hover:transform hover:scale-105`}
                >
                <div className="mb-4">{item.icon}</div>
                <h3 className={`text-xl font-bold mb-2 ${accentColor}`}>{item.name}</h3>
                <p className="text-gray-300 text-lg">{item.description}</p>
                </div>
            ))}
            </div>
        </div>
    </div>
    );
  };

export default ProblemsSolutionsToggle