<!-- JAVASCRIPT & VUE.JS -->
<script>
import { store } from '../store';

import axios from 'axios';

import AppLoader from '../components/AppLoader.vue';
import TechnologyCard from '../components/TechnologyCard.vue';

export default {
    components: {
        AppLoader,
        TechnologyCard,
    },
    data() {
        return {
            store,

            technologies: [],
        }
    },
    created() {
        this.getTechnologies();
    },
    methods: {
        getTechnologies() {

            this.store.loading = true;

            axios.get(`${this.store.baseUrl}/api/technologies`).then((response) => {

                if (response.data.success) {

                    this.technologies = response.data.results;

                    this.store.loading = false;
                }
            })
        },
    },
}
</script>

<!-- TEMPLATE HTML -->
<template lang="">
    <div class="container pb-5">
        <div class="row justify-content-center">
            <!-- TECHNOLOGIES TITLE -->
            <div class="col-12 py-5">
                <h1 class="text-center">Tecnologie</h1>
            </div>
            <!-- APP LOADER -->
            <div class="col-12 d-flex justify-content-center align-items-center py-5" v-if="store.loading">
                <AppLoader/>
            </div>
            <!-- TECHNOLOGIES INFO CARD -->
            <div class="col-4 my-4" v-else v-for="technology in technologies" :key="technology.id">
                <TechnologyCard :technology="technology"/>
            </div>
        </div>
    </div>
</template>

<!-- STYLE SCSS -->
<style lang="scss">
// IMPORTO GENERALS.SCSS
@use '../styles/generals.scss' as *;
</style>