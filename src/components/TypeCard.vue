<!-- JAVASCRIPT & VUE.JS -->
<script>
export default {
    props: {
        type: Object,
    }
}
</script>

<!-- TEMPLATE HTML -->
<template lang="">
    <div class="card h-100">
        <!-- TYPE CARD BODY -->
        <div class="card-body text-center py-5 h-50">
            <!-- TYPE NAME -->
            <h5 class="card-title" v-text="type.name"></h5>
            <!-- TYPE SLUG -->
            <p class="card-text" v-text="type.slug"></p>
        </div>
        <!-- TYPE CARD FOOTER -->
        <div class="card-footer text-center">
            <router-link :to="{ name: 'single-type', params: { slug: type.slug } }" class="btn btn-primary">Visualizza Tipologia</router-link>
        </div>
    </div>
</template>

<!-- STYLE SCSS -->
<style lang="scss">
// IMPORTO GENERALS.SCSS
@use '../styles/generals.scss' as *;
</style>