<script setup>
import { ref } from 'vue'
import SectionHero from './sections/SectionHero.vue'
import SectionServices from './sections/SectionServices.vue'
import SectionHistory from './sections/SectionHistory.vue'
import SectionContact from './sections/SectionContact.vue'

const navItems = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#services' },
  { label: 'Historia', href: '#history' },
  { label: 'Contacto', href: '#contact' },
]

const drawer = ref(false)

function goAndClose(href) {
  drawer.value = false
  // allow default anchor behavior after closing drawer
  requestAnimationFrame(() => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}
</script>

<template>
  <v-layout>
    <!-- App bar fixed -->
    <v-app-bar elevation="2" color="primary" density="comfortable" flat fixed>
      <v-container class="d-flex align-center justify-space-between">
        <div class="d-flex align-center gap-2">
          <v-icon color="accent" icon="mdi-flower" class="mr-2"></v-icon>
          <span class="text-h6 font-weight-bold">Magnolia Cabañas</span>
        </div>
        <nav class="d-none d-md-flex">
          <v-btn
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            variant="text"
            class="mx-1"
          >{{ item.label }}</v-btn>
        </nav>
        <v-btn class="d-md-none" icon="mdi-menu" @click="drawer = !drawer" aria-label="Abrir menú"></v-btn>
      </v-container>
    </v-app-bar>

    <!-- Navigation Drawer for mobile -->
    <v-navigation-drawer v-model="drawer" temporary location="right">
      <v-list density="comfortable">
        <v-list-item
          v-for="item in navItems"
          :key="item.href"
          :title="item.label"
          @click="goAndClose(item.href)"
        />
      </v-list>
    </v-navigation-drawer>

    <!-- Main content -->
    <v-main>
      <SectionHero id="hero" />
      <div class="parallax-divider" style="background-image:url('https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1600&auto=format&fit=crop');"></div>
      <SectionServices id="services" />
      <div class="parallax-divider" style="background-image:url('https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1600&auto=format&fit=crop');"></div>
      <SectionHistory id="history" />
      <div class="parallax-divider" style="background-image:url('https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1600&auto=format&fit=crop');"></div>
      <SectionContact id="contact" />
    </v-main>
  </v-layout>
</template>

<style scoped>
.parallax-divider {
  height: 280px;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

@media (max-width: 959px) {
  .parallax-divider { height: 180px; background-attachment: scroll; }
}
</style>


