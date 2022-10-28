import { c as create_ssr_component, e as each, b as add_attribute, d as escape } from "../../../chunks/index.js";
import "axios";
import "js-cookie";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let errors = [];
  let user = { username: "", password: "" };
  return `<h1 class="${"text-center mt-4"}">Iniciar sesi\xF3n</h1>
<h4 class="${"text-center"}">Ingrese sus datos para ingresar al sistema</h4>
<hr class="${"col-md-4 mx-auto"}">

${errors.length > 0 ? `<div class="${"alert alert-danger"}">${each(errors, (error) => {
    return `<p>${escape(error)}</p>`;
  })}</div>` : ``}

${``}

<div class="${"row justify-content-center"}"><div class="${"col-md-4"}"><form><div class="${"text-danger"}"></div>

      <div class="${"form-floating mb-3"}"><input class="${"form-control"}" id="${"username"}" placeholder="${"name@example.com"}"${add_attribute("value", user.username, 0)}>
        <label for="${"username"}" class="${"form-label"}">Usuario</label>
        <span class="${"text-danger"}"></span></div>

      <div class="${"form-floating mb-3"}"><input id="${"password"}" class="${"form-control"}" type="${"password"}" placeholder="${"***"}"${add_attribute("value", user.password, 0)}>
        <label for="${"password"}" class="${"form-label"}">Contrase\xF1a</label>
        <span class="${"text-danger"}"></span></div>

      <input class="${"btn btn-primary w-100 mb-2"}" type="${"submit"}" name="${"submit"}" value="${"Iniciar sesi\xF3n"}">

      <div class="${"text-center"}"><a href="${"/signup"}" class="${"btn btn-outline-secondary w-100"}">Registrarse
        </a></div></form></div></div>`;
});
export {
  Page as default
};
