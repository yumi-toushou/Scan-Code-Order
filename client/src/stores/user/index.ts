import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('userStore', () => {
  const userInfo = ref({
    Id: '',
    username: '',
    avatar: '',
    authority: ''
  })

  const token = ref('')

  function register({ username, password, phone }) {
    
  }


  function login({username, password}) {
    
  }

  function update() {

  }

  return { userInfo, token }
})
