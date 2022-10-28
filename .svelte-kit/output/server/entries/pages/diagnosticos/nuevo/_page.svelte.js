import { c as create_ssr_component, i as createEventDispatcher, d as escape, e as each, b as add_attribute, v as validate_component } from "../../../../chunks/index.js";
import "axios";
const Mensaje_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".chatbot__boticon.svelte-1dz19xr{min-width:50px;max-width:50px}.chatbot__options.svelte-1dz19xr{gap:0.2rem;flex-wrap:wrap}",
  map: null
};
const Mensaje = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { mensaje = {
    esPregunta: false,
    contenido: "",
    opciones: [],
    opcionElegida: ""
  } } = $$props;
  if ($$props.mensaje === void 0 && $$bindings.mensaje && mensaje !== void 0)
    $$bindings.mensaje(mensaje);
  $$result.css.add(css$1);
  return `<div class="${"container mb-3 d-flex flex-row " + escape(!mensaje.esPregunta ? "justify-content-end" : "", true)}">${mensaje.esPregunta ? `<div class="${"chatbot__boticon rounded-circle pr-2 align-self-start svelte-1dz19xr"}"><img src="${"/img/bot.svg"}" class="${"w-100 h-100"}" alt="${"logo bot"}"></div>` : ``}
  <div><div class="${"chatbot__message btn btn-outline-primary text-wrap text-start " + escape(!mensaje.esPregunta ? "fw-bold" : "", true)}">${escape(mensaje.contenido)}</div>
    ${mensaje.opciones != null ? `<div class="${"chatbot__options d-flex pt-1 svelte-1dz19xr"}">${each(mensaje.opciones, (opcion) => {
    return `<button class="${"btn btn-outline-secondary"}">${escape(opcion)}
          </button>`;
  })}</div>` : ``}</div>
</div>`;
});
const Chatbot_svelte_svelte_type_style_lang = "";
const css = {
  code: ".chatbot.svelte-14un3ta{min-height:calc(100vh - 22rem)}.chatbot__messages.svelte-14un3ta{min-height:calc(100vh - 26rem);max-height:calc(100vh - 26rem)}.chatbot__send.svelte-14un3ta{width:50px;height:50px}",
  map: null
};
const Chatbot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let datoIngresado = "";
  let chatbotMessages;
  let mensajes = [];
  let noHayMasPreguntas = false;
  let seGeneroDiagnostico = false;
  function scrollToBottom() {
    setTimeout(
      () => {
        chatbotMessages.scrollTo({
          top: chatbotMessages.scrollHeight,
          left: 0,
          behavior: "smooth"
        });
      },
      10
    );
  }
  $$result.css.add(css);
  {
    if (mensajes.length > 0 && mensajes[mensajes.length - 1].esPregunta || seGeneroDiagnostico || noHayMasPreguntas) {
      scrollToBottom();
    }
  }
  return `<div class="${"chatbot rounded overflow-hidden d-flex flex-column mt-3 border border-primary mx-1 svelte-14un3ta"}"><div class="${"chatbot__header p-3 text-white bg-primary"}"><h2 class="${"h3 text-white m-0"}">Chatbot</h2></div>
  <div class="${"chatbot__messages py-2 flex-grow-1 overflow-scroll svelte-14un3ta"}"${add_attribute("this", chatbotMessages, 0)}>${validate_component(Mensaje, "Mensaje").$$render(
    $$result,
    {
      mensaje: {
        contenido: "Bienvenido!",
        esPregunta: true
      }
    },
    {},
    {}
  )}
    ${each(mensajes, (mensaje) => {
    return `${``}
      ${mensaje.opciones && mensaje.opciones.length > 0 ? `${validate_component(Mensaje, "Mensaje").$$render($$result, { mensaje }, {}, {})}` : `${validate_component(Mensaje, "Mensaje").$$render($$result, { mensaje }, {}, {})}`}`;
  })}
    ${``}
    ${``}</div>
  <div class="${"chatbot__footer d-flex flex-row p-2 align-items-center border-top"}"><input class="${"form-control"}" placeholder="${"Ingrese un dato"}"${add_attribute("value", datoIngresado, 0)}>
    <button class="${"chatbot__send btn btn-primary rounded-circle ms-2 d-flex align-items-center svelte-14un3ta"}"><img src="${"/img/send_48px.png"}" class="${"w-100"}" alt="${"logo de enviar"}"></button></div></div>

${``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="${"text-center mt-4"}">Generar diagn\xF3stico</h1>
<h4 class="${"text-center"}">Responda las preguntas planteadas</h4>
<hr class="${"col-md-4 mx-auto"}">

<div class="${"row justify-content-center"}"><div class="${"col col-md-6"}">${validate_component(Chatbot, "Chatbot").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
