<!-- JAVASCRIPT & VUE.JS -->
<script>
import axios from 'axios';

export default {
    components: {

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
        </div>
    </div>
</template>

<!-- STYLE SCSS -->
<style lang="scss">
// IMPORTO GENERALS.SCSS
@use '../styles/generals.scss' as *;
</style>