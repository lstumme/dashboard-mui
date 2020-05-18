import { Directory, Criticite, Management } from '../../views/KnwoledgeManagement';

const dashboardRoutes = [
    {
        name: 'Tableau de bord',
        icon: null,
        path: '/dashboard',
        component: null
    },
    {
        name: 'Réseau Technique',
        icon: null,
        elements: [
            {
                name: 'Annuaire expertise',
                path: '/km/directory',
                icon: null,
                component: Directory
            },
            {
                name: 'Promotion et renouvellement',
                path: '/km/renew',
                icon: null,
                component: Management
            },
            {
                name: 'Criticité',
                path: '/km/criticite',
                icon: null,
                component: Criticite
            }
        ]
    },
    {
        name: 'R&D',
        icon: null,
        elements: [
            {
                name: 'FPIT en cours',
                path: '/rd/openfpit',
                icon: null,
                component: null
            }
        ]
    }
];

export default dashboardRoutes;