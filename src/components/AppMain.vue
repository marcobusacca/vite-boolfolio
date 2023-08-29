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
            baseUrl: 'http://localhost:8000/api',
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

            axios.get(`${this.baseUrl}/projects`).then((response) => {

                if (response.data.success) {

                    this.projects = response.data.results;

                    this.loading = false;
                }
            })
        },
    },
}
</script>

<!-- TEMPLATE HTML -->
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12 py-5">
                <h1 class="text-center">vite-boolfolio</h1>
            </div>
            <div class="col-12 d-flex justify-content-center align-items-center py-5" v-if="loading">
                <AppLoader/>
            </div>
        </div>
    </div>
</template>

<!-- STYLE SCSS -->
<style lang="scss">
// IMPORTO GENERALS.SCSS
@use '../styles/generals.scss' as *;
</style>