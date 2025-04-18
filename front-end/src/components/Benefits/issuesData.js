import { Clock, FileQuestion, TrendingDown, PuzzleIcon } from "lucide-react";

export const issuesData = [
    {
        id: 1,
        name: "Temps perdu",
        description: "8h par semaine gaspillées en tâches administratives, ressaisie de données et création manuelle de devis et factures.",
        icon: < Clock/>
    },
    {
        id: 2,
        name: "Désorganisation",
        description: "Informations dispersées, difficultés à retrouver l'historique client, communication chaotique entre bureau et terrain.",
        icon: <FileQuestion />
    },
    {
        id: 3,
        name: "Visibilité limitée",
        description: "Site web inexistant ou mal optimisé, difficulté à attirer de nouveaux clients, image moins professionnelle que les concurrents.",
        icon: <TrendingDown />
    },
    {
        id: 4,
        name: "Outils inadaptés",
        description: "Solutions génériques coûteuses, abonnements multiples, interfaces complexes non conçues pour les spécificités des métiers terrain.",
        icon: <PuzzleIcon />
    },
];