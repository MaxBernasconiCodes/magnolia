<script setup>
const services = [
  { icon: 'mdi-bed-queen-outline', title: 'Camas confortables', text: 'Ropa blanca incluida y calefacción.' },
  { icon: 'mdi-fireplace', title: 'Hogar a leña', text: 'Calidez de montaña en tu cabaña.' },
  { icon: 'mdi-wifi', title: 'Wi‑Fi', text: 'Conexión estable para trabajar o descansar.' },
  { icon: 'mdi-silverware-fork-knife', title: 'Cocina equipada', text: 'Heladera, anafe y vajilla completa.' },
  { icon: 'mdi-car', title: 'Estacionamiento', text: 'Espacio dentro del predio, seguro.' },
  { icon: 'mdi-panorama', title: 'Vistas únicas', text: 'Paisajes de Tafí desde tu terraza.' },
]
</script>

<template>
  <section class="section">
    <v-container class="container">
      <h2 class="text-h4 text-md-h3 section-title mb-8">Servicios</h2>
      <v-row>
        <v-col v-for="(s, i) in services" :key="i" cols="12" sm="6" md="4">
          <v-card elevation="2" class="py-6 px-4 fill-height">
            <v-icon :icon="s.icon" size="40" color="accent" class="mb-3"></v-icon>
            <div class="text-h6 mb-1">{{ s.title }}</div>
            <div class="text-body-2 text-medium-emphasis">{{ s.text }}</div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
</style>


