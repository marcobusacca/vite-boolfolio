<!-- JAVASCRIPT & VUE.JS -->
<script>
export default {
    props: {
        technology: Object,
    }
}
</script>

<!-- TEMPLATE HTML -->
<template lang="">
    <div class="card h-100">
        <!-- TECHNOLOGY CARD BODY -->
        <div class="card-body text-center py-5 h-50">
            <!-- TECHNOLOGY NAME -->
            <h5 class="card-title" v-text="technology.name"></h5>
            <!-- TECHNOLOGY SLUG -->
            <p class="card-text" v-text="technology.slug"></p>
        </div>
        <!-- TECHNOLOGY CARD FOOTER -->
        <div class="card-footer text-center">
            <router-link :to="{ name: 'single-technology', params: { slug: technology.slug } }" class="btn btn-primary">Visualizza Tecnologia</router-link>
        </div>
    </div>
</template>

<!-- STYLE SCSS -->
<style lang="scss">
// IMPORTO GENERALS.SCSS
@use '../styles/generals.scss' as *;
</style>