<script setup>
import MainLayout from './components/MainLayout.vue'
</script>

<template>
  <v-app>
    <MainLayout />
  </v-app>
  
  <!-- Floating WhatsApp Button -->
  <a
    href="https://wa.me/+5493814166915"
    target="_blank"
    rel="noopener"
    class="whatsapp-fab"
    aria-label="WhatsApp"
  >
    <v-btn icon color="success" elevation="8" size="large">
      <v-icon icon="mdi-whatsapp"></v-icon>
    </v-btn>
  </a>
</template>

<style scoped>
.whatsapp-fab {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1000;
}
</style>
