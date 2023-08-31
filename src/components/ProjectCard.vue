<!-- JAVASCRIPT & VUE.JS -->
<script>
import { store } from '../store';

export default {
    props: {
        project: Object,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
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
    <div class="card h-100">
        <!-- PROJECTS CARD IMAGE -->
        <img class="card-img-top img-fluid" :src="`${store.baseUrl}/storage/${project.cover_image}`" :alt="`${project.title}-image`" v-if="project.cover_image">
        <!-- PROJECTS CARD BODY -->
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
        <!-- PROJECTS CARD FOOTER -->
        <div class="card-footer text-center">
            <router-link :to="{ name: 'single-project', params: { slug: project.slug } }" class="btn btn-primary">Visualizza Progetto</router-link>
        </div>
    </div>
</template>

<!-- STYLE SCSS -->
<style lang="scss">
// IMPORTO GENERALS.SCSS
@use '../styles/generals.scss' as *;
</style>