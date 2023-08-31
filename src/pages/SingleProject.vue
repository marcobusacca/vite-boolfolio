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

            project: null,
        }
    },
    created() {
        this.getSingleProject();
    },
    methods: {
        getSingleProject() {

            this.store.loading = true;

            axios.get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`).then((response) => {

                if (response.data.success) {

                    this.project = response.data.project;

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
            <!-- PROJECT INFO CARD -->
            <div class="col-12 my-4" v-else>
                <div class="card h-100">
                    <!-- PROJECTS CARD IMAGE -->
                    <img class="card-img-top img-fluid" :src="`${store.baseUrl}/storage/${project.cover_image}`" :alt="`${project.title}-image`" v-if="project.cover_image">
                    <!-- PROJECTS CARD BODY -->
                    <div class="card-body h-50">
                        <!-- PROJECTS TITLE -->
                        <h5 class="card-title" v-text="project.title"></h5>
                        <!-- PROJECTS DESCRIPTION -->
                        <p class="card-text" v-text="project.description"></p>
                        <!-- PROJECTS TYPE -->
                        <div class="py-4" v-if="project.type">
                            <label class="fw-bold mx-1">Tipologia:</label>
                            <span v-text="project.type.name"></span>
                        </div>
                        <!-- PROJECTS TECHNOLOGIES -->
                        <div class="py-2" v-if="project.technologies">
                            <label class="fw-bold mx-1">Tecnologie:</label>
                            <ul>
                                <li v-for="technology in project.technologies"  :key="technology.id" v-text="technology.name" class="my-2"></li>
                            </ul>
                        </div>
                        <!-- PROJECTS DATE OF CREATION -->
                        <h5 class="card-title" v-text="project.date_of_creation"></h5>
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