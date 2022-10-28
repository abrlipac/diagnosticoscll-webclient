import { c as create_ssr_component, g as get_store_value, e as each, d as escape, v as validate_component } from "../../../../chunks/index.js";
import { d as diagnosticoStore } from "../../../../chunks/store.js";
import "axios";
const Resultado = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let diagnostico = get_store_value(diagnosticoStore);
  return `<ul class="${"list-group mb-3"}">${each(diagnostico.posiblesEnfermedades, (posibleEnfermedad) => {
    return `<li class="${"list-group-item"}"><b>${escape(posibleEnfermedad.porcentaje)} %</b>
      - ${escape(posibleEnfermedad.nombre)}
    </li>`;
  })}</ul>

<div class="${"d-flex flex-column"}"><a href="${"https://clinicalaluz.pe/contacto/"}" class="${"btn btn-primary mb-2"}">Reservar una cita
</a>
<a href="${"/"}" class="${"btn btn-outline-primary"}">Regresar al men\xFA</a></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="${"text-center mt-4"}">Resultado de diagn\xF3stico</h1>
<h4 class="${"text-center"}">Resumen del diagn\xF3stico generado</h4>
<hr class="${"col-md-4 mx-auto"}">

<div class="${"row justify-content-center"}"><div class="${"col col-md-6"}">${validate_component(Resultado, "Resultado").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
