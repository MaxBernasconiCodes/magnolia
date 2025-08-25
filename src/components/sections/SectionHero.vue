<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const images = [
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop',
]

const currentIndex = ref(0)
let intervalId

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length
  }, 3500)
})

onBeforeUnmount(() => clearInterval(intervalId))
</script>

<template>
  <section class="section">
    <v-container class="container">
      <v-row align="center" justify="space-between" class="flex-column flex-md-row">
        <v-col cols="12" md="6" class="pr-md-8">
          <h1 class="text-h3 text-md-h2 section-title mb-4">Cabañas en Tafí del Valle</h1>
          <p class="text-body-1 text-md-h6 mb-6">
            Disfrutá de la tranquilidad de los Valles. Confort, naturaleza y vistas únicas.
          </p>
          <div class="d-flex w-full ga-4">
            <v-btn color="accent" href="#services">Nuestros servicios</v-btn>
            <v-btn variant="outlined" color="accent" href="#contact">Reservar</v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="gallery-wrapper">
            <transition-group name="slide-overlap" tag="div" class="gallery-inner">
              <img
                v-for="(src, idx) in [images[currentIndex]]"
                :key="src + '-' + idx + '-' + currentIndex"
                :src="src"
                alt="Cabin gallery"
                class="gallery-image"
              />
            </transition-group>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
  
</template>

<style scoped>
.gallery-wrapper {
  position: relative;
  height: 360px;
  overflow: hidden;
  border-radius: 14px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
}
.gallery-inner { position: relative; width: 100%; height: 100%; }
.gallery-image {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  width: 100%; height: 100%; object-fit: cover;
  border-radius: 14px;
}

/* Slide from right to left with slight overlap fade */
.slide-overlap-enter-active, .slide-overlap-leave-active { transition: all 700ms ease; }
.slide-overlap-enter-from { transform: translateX(100%); opacity: 0.0; }
.slide-overlap-enter-to { transform: translateX(0%); opacity: 1; }
.slide-overlap-leave-from { transform: translateX(0%); opacity: 1; }
.slide-overlap-leave-to { transform: translateX(-20%); opacity: 0; }

@media (min-width: 960px) {
  .gallery-wrapper { height: 480px; }
}
</style>


