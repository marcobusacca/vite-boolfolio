<!-- JAVASCRIPT & VUE.JS -->
<script>
import { store } from '../store';

import axios from 'axios';

import AppLoader from '../components/AppLoader.vue';
import TypeCard from '../components/TypeCard.vue';

export default {
    components: {
        AppLoader,
        TypeCard,
    },
    data() {
        return {
            store,

            types: [],
        }
    },
    created() {
        this.getTypes();
    },
    methods: {
        getTypes() {

            this.store.loading = true;

            axios.get(`${this.store.baseUrl}/api/types`).then((response) => {

                if (response.data.success) {

                    this.types = response.data.results;

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
            <!-- TYPES TITLE -->
            <div class="col-12 py-5">
                <h1 class="text-center">Tipologie</h1>
            </div>
            <!-- APP LOADER -->
            <div class="col-12 d-flex justify-content-center align-items-center py-5" v-if="store.loading">
                <AppLoader/>
            </div>
            <!-- TYPES INFO CARD -->
            <div class="col-4 my-4" v-else v-for="item in types" :key="item.id">
                <TypeCard :type="item"/>
            </div>
        </div>
    </div>
</template>

<!-- STYLE SCSS -->
<style lang="scss">
// IMPORTO GENERALS.SCSS
@use '../styles/generals.scss' as *;
</style>