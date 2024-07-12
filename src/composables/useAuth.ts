import axios from 'axios'

const API_BASE_URL = 'http://64.226.101.216/api'
// const API_TOKEN = localStorage.getItem('token')

export function useAuth() {
  const router = useRouter()

  const login = async (data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, data, {
        headers: {
          Accept: 'application/json'
        }
      })

      if (response?.data.token) {
        localStorage.setItem('token', response.data.token)
        router.push('/')
      }
    } catch (error) {
      console.error('Error during login:', error.response?.data || error.message)
    }
  }

  const logout = async () => {
    try {
      // await axios.post(
      //   `${API_BASE_URL}/logout`,
      //   {},
      //   {
      //     headers: {
      //       Authorization: `Bearer ${API_TOKEN}`,
      //       Accept: 'application/json'
      //     }
      //   }
      // )

      localStorage.removeItem('token')
      router.push('/auth/login')
    } catch (error) {
      console.error('Error during login:', error.response?.data || error.message)
    }
  }

  return { login, logout }
}
