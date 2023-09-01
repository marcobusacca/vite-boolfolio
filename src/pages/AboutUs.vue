<!-- JAVASCRIPT & VUE.JS -->
<script>
import ContactForm from '../components/ContactForm.vue';

export default {
    components: {
        ContactForm,
    }
}
</script>

<!-- TEMPLATE HTML -->
<template lang="">
    <div class="container pb-5">
        <div class="row justify-content-center">
            <!-- ABOUT US TITLE -->
            <div class="col-12 py-5">
                <h1 class="text-center">About Us</h1>
            </div>
        </div>
        <ContactForm/>
    </div>
</template>

<!-- STYLE SCSS -->
<style lang="scss">
// IMPORTO GENERALS.SCSS
@use '../styles/generals.scss' as *;
</style>