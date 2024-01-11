<script setup lang="ts">
import { reactive, watch, computed } from 'vue'
import { useLocationStore } from '@/stores/useLocationData'

const locationStore = useLocationStore()

const formData = reactive({
  memberId: '',
  userName: '',
  email: '',
  phone: '',
  quantity: null,
  city: '',
  addressLine1: '',
  addressLine2: '',
  pincode: '',
  district: '',
  state: '',
  country: '',
  subscriptionDuration: null,
  startDate: ''
})

const defaultFormData = {
  memberId: '',
  userName: '',
  email: '',
  phone: '',
  quantity: null,
  city: '',
  addressLine1: '',
  addressLine2: '',
  pincode: '',
  district: '',
  state: '',
  country: '',
  subscriptionDuration: null,
  startDate: ''
}

const resetForm = () => {
  Object.assign(formData, defaultFormData)
}

const onSubmit = () => {
  console.log('Form Submitted', formData)
  resetForm()
}

watch(
  () => formData.pincode,
  (newValue) => {
    if (newValue.length === 6 && isInt(newValue)) {
      locationStore.fetchLocationData(newValue)
    }
  }
)

watch(
  () => locationStore.district,
  (newDistrict) => {
    formData.district = newDistrict
  }
)

watch(
  () => locationStore.stateName,
  (newState) => {
    formData.state = newState
  }
)

watch(
  () => locationStore.country,
  (newCountry) => {
    formData.country = newCountry
  }
)

const isInt = function (value: number | string) {
  return (
    !isNaN(value as number) &&
    parseInt(value.toString()) == value &&
    !isNaN(parseInt(value.toString(), 10))
  )
}

const validateNumber = function (number: string, type: string) {
  let pattern
  switch (type) {
    case 'phone':
      pattern = /^[56789]\d{9}$/
      break
    case 'pincode':
      pattern = /^[1-9][0-9]{5}$/
      break
    default:
      return false
  }
  return pattern.test(number)
}

const isPhoneValid = computed(() => {
  return formData.phone.length === 0 || validateNumber(formData.phone, 'phone')
})

const isPincodeValid = computed(() => {
  return formData.pincode.length === 0 || validateNumber(formData.pincode, 'pincode')
})
</script>

<template>
  <div id="subscribe-form">
    <div v-if="locationStore.isLoading">Loading...</div>
    <h3 class="form-heading">
      Sai Ram! Welcome to Sanathana Sarathi. Subscribe to get your monthly copy.
    </h3>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="member-id">Member Id</label>
        <input type="text" id="member-id" v-model="formData.memberId" required />
      </div>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="formData.userName" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>

      <div class="form-group">
        <label for="phone">Phone</label>
        <input type="tel" id="phone" maxlength="10" v-model="formData.phone" required />
        <p v-if="!isPhoneValid" class="phone-error">Please enter a valid phone number!</p>
      </div>

      <div class="form-group">
        <label for="quantity">Quantity</label>
        <input type="number" id="quantity" v-model="formData.quantity" required />
      </div>

      <div class="form-group">
        <label for="city">City</label>
        <input type="text" id="city" v-model="formData.city" required />
      </div>

      <div class="form-group">
        <label for="addressLine1">Address Line 1</label>
        <input type="text" id="addressLine1" v-model="formData.addressLine1" required />
      </div>

      <div class="form-group">
        <label for="addressLine2">Address Line 2</label>
        <input type="text" id="addressLine2" v-model="formData.addressLine2" />
      </div>

      <div class="form-group">
        <label for="pincode">Pincode</label>
        <input
          type="text"
          pattern="[0-9]*"
          id="pincode"
          maxlength="6"
          v-model="formData.pincode"
          required
        />
        <p v-if="!isPincodeValid" class="pincode-error">Please enter a valid pincode!</p>
      </div>

      <div class="form-group">
        <label for="district">District</label>
        <input type="text" id="district" v-model="formData.district" readonly />
      </div>

      <div class="form-group">
        <label for="state">State</label>
        <input type="text" id="state" v-model="formData.state" readonly />
      </div>

      <div class="form-group">
        <label for="country">Country</label>
        <input type="text" id="country" v-model="formData.country" readonly />
      </div>

      <div class="form-group">
        <label for="startDate">Start Date</label>
        <input type="date" id="startDate" v-model="formData.startDate" required />
      </div>

      <div class="form-group">
        <label for="subscriptionDuration">Subscription Duration (Years)</label>
        <select id="subscriptionDuration" v-model="formData.subscriptionDuration" required>
          <option disabled value="">Please select one</option>
          <option value="1">1 Year</option>
          <option value="2">2 Years</option>
          <option value="3">3 Years</option>
        </select>
      </div>

      <div class="form-group">
        <label for="endDate">End Date</label>
        <input type="date" id="endDate" v-model="calculatedEndDate" disabled />
      </div>

      <button type="submit">Subscribe</button>
    </form>
  </div>
</template>

<style scoped>
#subscribe-form .form-group {
  margin-bottom: 1rem;
}

#subscribe-form .form-heading {
  margin: 1rem 0;
  font-size: 1.2rem;
}

label {
  font-size: 1rem;
  display: block;
  margin-bottom: 0.5rem;
}

input,
select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background-color: transparent;
  color: var(--sssso-black);
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: transparent;
  text-transform: uppercase;
  color: var(--sssso-black);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: var(--sssso-indigo);
}

@media (prefers-color-scheme: dark) {
  input {
    color: var(--sssso-white);
  }
  button {
    color: var(--sssso-white);
  }
}

.phone-error,
.pincode-error {
  color: red;
  font-size: 0.8rem;
}

@media (min-width: 1024px) {
  input {
    width: 100%;
  }
}
</style>
