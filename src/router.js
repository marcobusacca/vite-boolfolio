// IMPORTIAMO I METODI "CREATE_ROUTER" E "CREATE_WEB_HISTORY" DA "VUE-ROUTER"
import { createRouter, createWebHistory } from 'vue-router';

// IMPORTARE TUTTE LE PAGINE DALLA CARTELLA "PAGES"
import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';

import ProjectsList from './pages/ProjectsList.vue';
import SingleProject from './pages/SingleProject.vue';

import TypesList from './pages/TypesList.vue';
import SingleType from './pages/SingleType.vue';

import TechnologiesList from './pages/TechnologiesList.vue';
import SingleTechnology from './pages/SingleTechnology.vue';

import Contacts from './pages/Contacts.vue';

import NotFound from './pages/NotFound.vue';

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
            path: '/types/:slug',
            name: 'single-type',
            component: SingleType,
        },
        {
            path: '/technologies',
            name: 'technologies-list',
            component: TechnologiesList,
        },
        {
            path: '/technologies/:slug',
            name: 'single-technology',
            component: SingleTechnology,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts,
        },
        {
            path: '/:catchAll(.*)',
            redirect: '/pagina-non-trovata',
        },
        {
            path: '/pagina-non-trovata',
            name: 'not-found',
            component: NotFound,
        },
    ]

})

// ESPORTIAMO IL ROUTER
export { router }