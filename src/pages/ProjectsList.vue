<!-- JAVASCRIPT & VUE.JS -->
<script>
import { store } from '../store';

import axios from 'axios';

import AppLoader from '../components/AppLoader.vue';

export default {
    components: {
        AppLoader,
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
        },
        truncateText(text) {
            if (text.length > 100) {
                return text.substr(0, 100) + '...';
            }

            return text;
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
                <div class="card projects-card h-100">
                    <!-- PROJECTS COVER IMAGE -->
                    <img class="card-img-top img-fluid" :src="`${baseUrl}/storage/${project.cover_image}`" :alt="`${project.title}-image`" v-if="project.cover_image">
                    <div class="card-body h-50">
                        <!-- PROJECTS TITLE -->
                        <h5 class="card-title" v-text="project.title"></h5>
                        <!-- PROJECTS DESCRIPTION -->
                        <p class="card-text" v-text="truncateText(project.description)"></p>
                        <!-- PROJECTS TYPE -->
                        <div class="py-4" v-if="project.type">
                            <label class="fw-bold mx-1">Tipologia:</label>
                            <span v-text="project.type.name"></span>
                        </div>
                        <!-- PROJECTS TECHNOLOGIES -->
                        <div class="py-2" v-if="project.technologies">
                            <label class="fw-bold mx-1">Tecnologie:</label>
                            <ul>
                                <li v-for="technology in project.technologies" v-text="technology.name" class="my-2"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-footer text-center">
                        <a href="#" class="btn btn-primary">Visualizza Progetto</a>
                    </div>
                </div>
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