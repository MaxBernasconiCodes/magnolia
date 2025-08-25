import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'

// Global styles (overrides and layout helpers)
import './styles/main.scss'

const magnoliaTheme = {
  dark: false,
  colors: {
    primary: '#f1ede6', // Magnolia petal cream
    secondary: '#e0c7c0', // Soft pink-beige
    accent: '#d67a7a', // Magnolia center pink
    info: '#8aa27e', // Leafy green muted
    success: '#6e8f62',
    warning: '#f2c14e',
    error: '#c75b66',
    background: '#fffdfa',
    surface: '#ffffff',
  },
}

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'magnoliaTheme',
    themes: { magnoliaTheme },
  },
})

createApp(App).use(vuetify).mount('#app')
