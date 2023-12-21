import { reactive, toRefs } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useLocationStore = defineStore('location', () => {
  const state = reactive({
    district: '',
    stateName: '',
    country: '',
    isLoading: false
  })

  const emptyState = () => {
    state.district = ''
    state.stateName = ''
    state.country = ''
    state.isLoading = false
  }

  const fetchLocationData = async (pin: String) => {
    state.isLoading = true
    if (!pin || pin.length !== 6) {
      emptyState()
      return
    }

    try {
      const response = await axios.get(`https://api.postalpincode.in/pincode/${pin}`)

      const responseData = response.data[0]
      
      if (responseData.Status === 'Success') {
        const location = responseData.PostOffice[0]
        state.district = location.District
        state.stateName = location.State
        state.country = location.Country
        state.isLoading = false
      } else {
        emptyState()
      }
    } catch (error) {
      console.error(`Error fetching location data: ${error}`)
      emptyState()
    }
  }

  return { ...toRefs(state), fetchLocationData }
})
