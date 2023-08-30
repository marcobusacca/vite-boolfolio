<!-- JAVASCRIPT & VUE.JS -->
<script>
import { store } from '../store';

import axios from 'axios';

import AppLoader from '../components/AppLoader.vue';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    components: {
        AppLoader,
        ProjectCard,
    },
    data() {
        return {
            store,

            projects: [],

            currentPage: 1,
            lastPage: null,
        }
    },
    created() {
        /*
            VERSIONE 1 - SENZA PAGINAZIONE

            this.getProjects();
        */

        this.getProjects(1);
    },
    methods: {
        /*
            VERSIONE 1 - SENZA PAGINAZIONE
            
            getProjects() {
    
                this.loading = true;
    
                axios.get(`${this.baseUrl}/api/projects`).then((response) => {
    
                    if (response.data.success) {
    
                        this.projects = response.data.results;
    
                        this.loading = false;
                    }
                })
            },
        */
        getProjects(num_page) {

            this.store.loading = true;

            axios.get(`${this.store.baseUrl}/api/projects`, { params: { page: num_page } }).then((response) => {

                if (response.data.success) {

                    this.projects = response.data.results.data;

                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;

                    this.store.loading = false;
                }
            })
        }
    },
}
</script>

<!-- TEMPLATE HTML -->
<template lang="">
    <div class="container pb-5">
        <div class="row justify-content-center">
            <!-- PROJECTS TITLE -->
            <div class="col-12 py-5">
                <h1 class="text-center">Progetti</h1>
            </div>
            <!-- APP LOADER -->
            <div class="col-12 d-flex justify-content-center align-items-center py-5" v-if="store.loading">
                <AppLoader/>
            </div>
            <!-- PROJECTS INFO CARD -->
            <div class="col-4 my-4" v-else v-for="project in projects" :key="project.id">
                <ProjectCard :project="project"/>
            </div>
            <!-- PULSANTI GESTIONE PAGINAZIONE -->
            <div class="col-12 my-5" v-if="!store.loading">
                <nav class="d-flex justify-content-center">
                    <ul class="pagination">
                        <li :class="currentPage === 1 ? 'disabled' : ''">
                            <button class="page-link" @click="getProjects(currentPage - 1)">Precedente</button>
                        </li>
                        <li :class="currentPage === lastPage ? 'disabled' : ''">
                            <button class="page-link" @click="getProjects(currentPage + 1)">Successivo</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<!-- STYLE SCSS -->
<style lang="scss">
// IMPORTO GENERALS.SCSS
@use '../styles/generals.scss' as *;
</style>