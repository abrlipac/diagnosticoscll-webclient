import { w as writable } from "./index2.js";
const userStore = writable({
  isAuth: true,
  id: 11,
  name: "Abraham Paciente 11",
  profile: "/img/user.png",
  role: "Paciente"
});
const diagnosticoStore = writable({
  id: 1,
  especialidad: "General",
  fecha: new Date(),
  posiblesEnfermedades: []
});
export {
  diagnosticoStore as d,
  userStore as u
};
