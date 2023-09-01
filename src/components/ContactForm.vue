<!-- JAVASCRIPT & VUE.JS -->
<script>
import { store } from '../store';

import axios from 'axios';

export default {
    components: {

    },
    data() {
        return {
            store,

            name: '',
            email: '',
            content: '',

            errors: {},
        }
    },
    methods: {

    },
}
</script>

<!-- TEMPLATE HTML -->
<template lang="">
</template>

<!-- STYLE SCSS -->
<style lang="scss">
// IMPORTO GENERALS.SCSS
@use '../styles/generals.scss' as *;
</style>