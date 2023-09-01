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
        sendForm() {

            // SALVO I DATI DI INPUT DELL'UTENTE
            const form_data = {

                name: this.name,
                email: this.email,
                content: this.content,

            };

            // SVUOTO L'OGGETTO CONTENTE I MESSAGGI DI ERRORE
            this.errors = {};

            // EFFETTUIAMO LA CHIAMATA AXIOS IN POST
            axios.post(`${this.store.baseUrl}/api/contacts`, form_data).then((response) => {

                if (response.data.success) {

                    // RIPULISCO I DATI DI INPUT
                    this.name = '';
                    this.email = '';
                    this.content = '';

                    this.$router.push({ name: 'thank-you' });

                } else {

                    // SALVO I MESSAGGI DI ERRORE NELL'OGGETTO ERRORS
                    this.errors = response.data.errors;
                }
            });
        }
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