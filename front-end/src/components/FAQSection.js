import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  // Fonction pour formater le texte avec des listes à puces
  const formatAnswer = (text) => {
    if (typeof text !== 'string') return text;
    
    // Diviser le texte en paragraphes
    const paragraphs = text.split('\n\n');
    
    return paragraphs.map((paragraph, i) => {
      if (paragraph.includes('\n')) {
        const lines = paragraph.split('\n');
        const title = lines[0]; // Premier élément comme titre
        const listItems = lines.slice(1); // Autres lignes comme éléments de liste
        
        return (
          <div key={i} className="mb-3">
            {title && <p className="mb-2">{title}</p>}
            <ul className="list-disc pl-5 space-y-1">
              {listItems.map((item, j) => (
                <li key={j} className="text-gray-600">{item}</li>
              ))}
            </ul>
          </div>
        );
      } else {
        return <p key={i} className="mb-3">{paragraph}</p>;
      }
    });
  };
  
  return (
    <div className="border-b border-gray-200 py-3 md:py-4">
      <div 
        className="flex justify-between items-center cursor-pointer" 
        onClick={onClick}
      >
        <h3 className="text-black text-base md:text-xl font-medium pr-2">{question}</h3>
        <motion.span 
          initial={false}
          animate={{rotate: isOpen ? 180 : 0}}
          transition={{duration : 0.3}}
          className="flex-shrink-0"
        >
          <ChevronDown size={16} className="text-gray-400 md:w-5 md:h-5" />
        </motion.span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{height : 0, opacity:0}}
            animate={{height: "auto", opacity:1}}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mt-2 md:mt-4 text-gray-600 text-sm md:text-lg"
          >
            {formatAnswer(answer)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openItem, setOpenItem] = useState(0);
  
  const faqData = [
    {
      question: "Combien de temps faut-il pour développer un écosystème digital complet ?",
      answer: "Le développement d'un écosystème complet (site web, application mobile et dashboard) prend généralement entre 8 et 12 semaines, selon la complexité des fonctionnalités requises. Nous suivons un processus en 5 étapes clairement définies pour garantir que la solution répond parfaitement à vos besoins. Si vous avez besoin d'une mise en place plus rapide, nous pouvons commencer par les éléments les plus prioritaires pour votre activité."
    },
    {
      question: "Est-ce que je peux commencer par une partie de l'écosystème et ajouter d'autres éléments plus tard ?",
      answer: "Absolument ! Nous concevons nos solutions de manière modulaire pour vous permettre d'évoluer à votre rythme. Beaucoup de nos clients commencent par l'application mobile, puis ajoutent le dashboard et enfin le site web. Cette approche vous permet d'étaler votre investissement tout en commençant à bénéficier immédiatement des avantages de la digitalisation."
    },
    {
      question: "Comment assurez-vous que l'application fonctionne sur le terrain, même sans connexion internet ?",
      answer: "Nos applications sont conçues avec un mode hors-ligne robuste qui stocke temporairement les données sur l'appareil et les synchronise automatiquement une fois la connexion rétablie. Vos techniciens peuvent ainsi créer des devis, consulter l'historique client et remplir des rapports d'intervention même dans les zones sans couverture. Cette fonctionnalité est particulièrement appréciée par les professionnels intervenant en zones rurales ou dans des bâtiments avec peu de signal."
    },
    {
      question: "Dois-je payer des frais mensuels ou des abonnements en plus du prix initial ?",
      answer: "Notre approche est différente des modèles traditionnels d'abonnement. Le prix fixe que vous voyez inclut le développement complet, la formation et le support pendant la période indiquée. Après livraison, les seuls coûts récurrents concernent l'hébergement des API et du backend, nécessaires au fonctionnement de votre écosystème. Ces frais sont généralement minimes (souvent moins de 20€/mois) et varient selon la taille de votre entreprise et le volume de données. Nous vous présentons ces coûts de manière transparente dès notre premier échange, sans surprises cachées."
    },
    {
      question: "Comment se passe la formation pour mon équipe ?",
      answer: `La formation est incluse dans tous nos packs et adaptée à vos besoins spécifiques. Nous organisons généralement 2 à 3 sessions :

Une formation administrateur pour les personnes qui géreront le système
Une formation utilisateur pour les techniciens terrain
Une session de questions/réponses quelques semaines après le déploiement

Toutes les sessions sont enregistrées et mises à votre disposition, et nous fournissons une documentation complète pour référence future.`
    },
    {
      question: "Quel est le retour sur investissement que je peux espérer ?",
      answer: `La majorité de nos clients constatent un ROI positif dans les 3 à 6 mois suivant l'implémentation complète. Les économies proviennent principalement :

Du temps gagné sur les tâches administratives (8h par semaine en moyenne)
De l'augmentation du nombre de clients grâce à votre site optimisé (+5 clients par mois en moyenne)
De la réduction des erreurs de facturation et de communication
De l'amélioration du taux de conversion des devis grâce à leur aspect professionnel

Lors de notre appel découverte, nous réaliserons une estimation personnalisée du ROI pour votre entreprise spécifique.`
    }
  ];

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? -1 : index);
  };

  return (
    <div id="faq" className="bg-white text-black p-4 sm:p-8 md:p-12">
      <div className="flex flex-col md:flex-row items-start justify-between max-w-7xl mx-auto gap-8 md:gap-6">
        <div className="w-full md:w-1/2 md:sticky md:top-20 self-start">
          <div className='w-full'>
            <span className='bg-purple-custom/80 py-2 px-3 inline-block rounded-full w-fit text-white text-sm'>FAQ</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Questions fréquentes</h2>
            <p className="text-black max-w-md text-base md:text-lg">Nous avons rassemblé les questions les plus fréquentes de nos clients à propos de nos solutions. Si vous ne trouvez pas la réponse à votre question, n'hésitez pas à nous contacter directement pour un échange personnalisé.</p>
          </div>
          <div className='flex gap-4'>
            <a href='/'><img src='/iconInstagram.png' className='w-[32px] h-[32px] md:w-[40px] md:h-[40px]' /></a>
            <a href='/'><img src='/iconLinkedin.png' className='w-[32px] h-[32px] md:w-[40px] md:h-[40px]' /></a>
            <a href='/'><img src='/iconFacebook.png' className='w-[32px] h-[32px] md:w-[40px] md:h-[40px]' /></a>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 space-y-1">
          {faqData.map((item, index) => (
            <FAQItem 
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItem === index}
              onClick={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;