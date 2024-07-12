import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from '@/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { useAuthStore } from '@/store/auth'

import App from './App.vue'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

router.beforeEach((to, from, next) => {
  const store = useAuthStore()
  console.log(store.isLoggedIn, 'store.isLoggedIn')
  if (!store.isLoggedIn && !['/auth/login', '/auth/register'].includes(to.path)) {
    next({ path: '/auth/login' })
  } else {
    next()
  }
})

createApp(App).use(router).use(pinia).mount('#app')
