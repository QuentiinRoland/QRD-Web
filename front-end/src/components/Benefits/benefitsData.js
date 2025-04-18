import { TimerReset, Database, TrendingUp, PuzzleIcon } from "lucide-react";

export const benefitsData = [
    {
        id: 1,
        name: "Efficacité maximale",
        description: "Automatisation des processus administratifs, création de documents en quelques clics, gain de temps de 94% sur les tâches répétitives.",
        icon: <TimerReset />
    },
    {
        id: 2,
        name: "Centralisation intelligente",
        description: "Toutes vos données accessibles instantanément, historique client complet et synchronisation en temps réel entre tous vos appareils.",
        icon: <Database />
    },
    {
        id: 3,
        name: "Présence digitale optimisée",
        description: "Site web professionnel générant des leads, référencement local performant et image de marque renforcée auprès de vos clients.",
        icon: <TrendingUp />
    },
    {
        id: 4,
        name: "Écosystème sur mesure",
        description: "Solution développée spécifiquement pour votre métier, prix fixe sans abonnement, interfaces intuitives adaptées au travail terrain.",
        icon: <PuzzleIcon />
    },
];
