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

            technology: null,
        }
    },
    created() {
        this.getSingleTechnology();
    },
    methods: {
        getSingleTechnology() {

            this.store.loading = true;

            axios.get(`${this.store.baseUrl}/api/technologies/${this.$route.params.slug}`).then((response) => {

                if (response.data.success) {

                    this.technology = response.data.technology;

                    this.store.loading = false;

                } else {

                    this.$router.push({ name: 'not-found' });
                }
            });
        }
    },
}
</script>

<!-- TEMPLATE HTML -->
<template lang="">
    <div class="container pb-5">
        <div class="row justify-content-center">
            <!-- APP LOADER -->
            <div class="col-12 d-flex justify-content-center align-items-center py-5" v-if="store.loading">
                <AppLoader/>
            </div>
            <!-- TECHNOLOGY INFO CARD -->
            <div class="col-12 my-4" v-else>
                <div class="card h-100">
                    <!-- TECHNOLOGY CARD BODY -->
                    <div class="card-body text-center py-5 h-50">
                        <!-- TECHNOLOGY PROJECTS -->
                        <div class="row justify-content-center py-5" v-if="technology.projects.length !== 0">
                            <h5 class="fw-bold mx-1">Progetti sviluppati con {{ technology.name }}:</h5>
                            <div class="col-4 my-4" v-for="project in technology.projects" :key="project.id">
                                <ProjectCard :project="project" />
                            </div>
                        </div>
                        <div class="row justify-content-center py-5" v-else>
                            <h5 class="fw-bold mx-1">Nessun Progetto Sviluppato con {{ technology.name }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- STYLE SCSS -->
<style lang="scss">
// IMPORTO GENERALS.SCSS
@use '../styles/generals.scss' as *;
</style>