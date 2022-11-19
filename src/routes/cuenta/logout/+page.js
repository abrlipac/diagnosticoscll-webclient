import { userStore } from '$lib/store.js'
import { goto } from '$app/navigation'

userStore.set({
  isAuth: false,
  id: 0,
  name: '',
  profile: '',
  role: '',
})

goto('/login')