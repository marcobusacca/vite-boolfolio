<!-- JAVASCRIPT & VUE.JS -->
<script>
import axios from 'axios';
import AppLoader from './AppLoader.vue';

export default {
    components: {
        AppLoader,
    },
    data() {
        return {
            baseUrl: 'http://localhost:8000',
            loading: true,
            projects: [],
        }
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects() {

            this.loading = true;

            axios.get(`${this.baseUrl}/api/projects`).then((response) => {

                if (response.data.success) {

                    this.projects = response.data.results;

                    this.loading = false;
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
            <div class="col-12 py-5">
                <h1 class="text-center">vite-boolfolio</h1>
            </div>
            <div class="col-12 d-flex justify-content-center align-items-center py-5" v-if="loading">
                <AppLoader/>
            </div>
            <div class="col-4 my-4" v-else v-for="project in projects" :key="project.id">
                <div class="card h-100">
                    <img class="card-img-top img-fluid" :src="`${baseUrl}/storage/${project.cover_image}`" :alt="`${project.title}-image`" v-if="project.cover_image">
                    <div class="card-body h-50">
                        <h5 class="card-title py-2" v-text="project.title"></h5>
                        <p class="card-text py-2" v-text="truncateText(project.description)"></p>
                    </div>
                    <div class="card-footer text-center">
                        <a href="#" class="btn btn-primary">Visualizza Progetto</a>
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