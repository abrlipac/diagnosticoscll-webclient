import { writable } from 'svelte/store'

export const userStore = writable({
  isAuth: false,
  id: 0,
  name: '',
  profile: '',
  role: '',
})

export const diagnosticoStore = writable({
  id: 1,
  especialidad: 'General',
  fecha: new Date(),
  posiblesEnfermedades: [
    {
      enfermedad_Id: 1,
      porcentaje: 86.54,
    },
    {
      enfermedad_Id: 2,
      porcentaje: 34.67,
    },
    {
      enfermedad_Id: 3,
      porcentaje: 12.34,
    },
    {
      enfermedad_Id: 4,
      porcentaje: 5.98,
    },
  ],
})
