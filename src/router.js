// IMPORTIAMO I METODI "CREATE_ROUTER" E "CREATE_WEB_HISTORY" DA "VUE-ROUTER"
import { createRouter, createWebHistory } from 'vue-router';

// IMPORTARE TUTTE LE PAGINE DALLA CARTELLA "PAGES"
import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';

import ProjectsList from './pages/ProjectsList.vue';
import SingleProject from './pages/SingleProject.vue';

import TypesList from './pages/TypesList.vue';

import TechnologiesList from './pages/TechnologiesList.vue';

import Contacts from './pages/Contacts.vue';


// CREIAMO IL ROUTER CON LE SUE ROTTE
const router = createRouter({

    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: AboutUs,
        },
        {
            path: '/projects',
            name: 'projects-list',
            component: ProjectsList,
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: SingleProject,
        },
        {
            path: '/types',
            name: 'types-list',
            component: TypesList,
        },
        {
            path: '/technologies',
            name: 'technologies-list',
            component: TechnologiesList,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts,
        },
    ]

})

// ESPORTIAMO IL ROUTER
export { router }