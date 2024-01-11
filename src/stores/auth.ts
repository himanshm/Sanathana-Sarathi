import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref(false)

  const checkAuthStatus = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/check-auth', {
        withCredentials: true
      })
      isLoggedIn.value = response.data.loggedIn
    } catch (error) {
      console.error('Error checking auth status:', error)
    }
  }

  const login = async (username: string, password: string) => {
    const loginData = {
      username,
      password
    }
    console.log(loginData)
    try {
      const response = await axios.post('http://localhost:3000/api/user-login', loginData, {
        withCredentials: true // This ensures cookies are included with the request
      })
      return response.status;
    } catch (error) {
      console.error('Error during login:', error)
    }
  }
  
  const logout = async()=> {}

  return { isLoggedIn, checkAuthStatus, login, logout }
})
