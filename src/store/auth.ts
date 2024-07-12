import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const token = ref('')
    const isLoggedIn = computed(() => !!token.value)
    function setToken(value: string) {
      token.value = value
    }

    return { token, setToken, isLoggedIn }
  },
  { persist: true }
)
