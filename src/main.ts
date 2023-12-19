import { createApp } from 'vue'
import '@/styles/style.scss'
import App from './App.vue'
import { createPinia } from 'pinia' // 引入 pinia
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.mount('#app')
