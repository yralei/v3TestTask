import axios from 'axios'
import { useAuthStore } from '@/store/auth'
import { useRouter } from 'vue-router'

const API_BASE_URL = 'http://64.226.101.216/api'

export function useAuth() {
  const router = useRouter()
  const store = useAuthStore()

  const register = async (data) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/register`,
        {
          email: data.email,
          name: data.name,
          password: data.password,
          password_confirmation: data.passwordConfirmation
        },
        {
          headers: {
            Accept: 'application/json'
          }
        }
      )
      console.log('Registration successful:', response.data)
      router.push('/auth/login')
    } catch (error) {
      console.error('Error during registration:', error.response?.data || error.message)
    }
  }

  const login = async (data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, data, {
        headers: {
          Accept: 'application/json'
        }
      })

      if (response?.data.token) {
        store.setToken(response.data.token)
        router.push('/')
      }
    } catch (error) {
      console.error('Error during login:', error.response?.data || error.message)
    }
  }

  const logout = async () => {
    store.setToken('')
    router.push('/auth/login')
    try {
      const response = await axios.post(
        `${API_BASE_URL}/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${store.token}`,
            Accept: 'application/json'
          }
        }
      )
      console.log(response)
    } catch (error) {
      console.error('Error during login:', error.response?.data || error.message)
    }
  }

  return { login, logout, register }
}
