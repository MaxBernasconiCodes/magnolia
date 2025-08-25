<script setup>
import { ref } from 'vue'

const form = ref({ nombre: '', email: '', mensaje: '' })
const valid = ref(false)

function submit() {
  // Placeholder submit – would integrate with backend or email service
  alert(`Gracias ${form.value.nombre || 'visitante'}! Te responderemos pronto.`)
}
</script>

<template>
  <section class="section">
    <v-container class="container">
      <h2 class="text-h4 text-md-h3 section-title mb-6">Contacto</h2>
      <v-row>
        <v-col cols="12" md="7">
          <v-form v-model="valid" @submit.prevent="submit">
            <v-text-field v-model="form.nombre" label="Nombre" prepend-inner-icon="mdi-account" required />
            <v-text-field v-model="form.email" type="email" label="Email" prepend-inner-icon="mdi-email" required />
            <v-textarea v-model="form.mensaje" label="Mensaje" auto-grow rows="4" prepend-inner-icon="mdi-message-text" required />
            <v-btn type="submit" color="accent" :disabled="!valid">Enviar</v-btn>
          </v-form>
        </v-col>
        <v-col cols="12" md="5">
          <v-card class="pa-4" elevation="1">
            <div class="text-subtitle-1 font-weight-medium mb-2">También podés escribirnos por WhatsApp</div>
            <v-btn color="success" variant="tonal" :href="'https://wa.me/+5493814166915'" target="_blank">
              <v-icon icon="mdi-whatsapp" class="mr-2" /> +54 9 381 416 6915
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
</style>


