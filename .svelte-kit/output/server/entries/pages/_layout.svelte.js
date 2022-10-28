import { c as create_ssr_component, g as get_store_value, e as each, b as add_attribute, d as escape, v as validate_component } from "../../chunks/index.js";
import { u as userStore } from "../../chunks/store.js";
const Navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".logo.svelte-1i1mn3r{height:1.4rem}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentUser = get_store_value(userStore);
  console.log(currentUser);
  const opcionesPaciente = [
    {
      Diagn\u00F3sticos: [
        {
          "Generar diagn\xF3stico": "/diagnosticos/nuevo"
        },
        {
          "Editar s\xEDntomas de diagn\xF3stico": "/diagnosticos/editar"
        },
        {
          "Visualizar diagn\xF3sticos": "/diagnosticos"
        }
      ]
    },
    {
      Reportes: [
        {
          "Ver reporte de salud": "/reportes/paciente"
        }
      ]
    }
  ];
  const opcionesAdmin = [
    {
      Diagn\u00F3sticos: [
        {
          "Visualizar diagn\xF3sticos": "/diagnosticos"
        }
      ]
    },
    {
      Pacientes: [{ "Visualizar pacientes": "/pacientes" }]
    },
    {
      Reportes: [
        {
          "Ver reporte de salud general": "/reportes/general"
        }
      ]
    }
  ];
  let opciones = currentUser.role === "Paciente" ? opcionesPaciente : currentUser.role === "Admin" ? opcionesAdmin : [];
  $$result.css.add(css$1);
  return `<nav class="${"navbar navbar-expand-lg border-bottom"}"><div class="${"container-fluid"}"><a class="${"navbar-brand"}" href="${"/"}"><img src="${"/img/logo1.png"}" class="${"logo svelte-1i1mn3r"}" alt="${"Logo de Cl\xEDnica La Luz"}">
      Diagn\xF3sticos
    </a>
    <button class="${"navbar-toggler"}" type="${"button"}" data-bs-toggle="${"collapse"}" data-bs-target="${"#navbarSupportedContent"}" aria-controls="${"navbarSupportedContent"}" aria-expanded="${"false"}" aria-label="${"Toggle navigation"}"><span class="${"navbar-toggler-icon"}"></span></button>
    <div class="${"collapse navbar-collapse justify-content-between"}" id="${"navbarSupportedContent"}"><ul class="${"navbar-nav ms-auto mb-2 mb-lg-0"}">${currentUser.isAuth ? `${each(opciones, (opcion) => {
    return `<li class="${"nav-item dropdown"}"><a class="${"nav-link dropdown-toggle"}"${add_attribute("href", "#", 0)} role="${"button"}" data-bs-toggle="${"dropdown"}" aria-expanded="${"false"}">${escape(Object.keys(opcion))}</a>
              <ul class="${"dropdown-menu"}">${each(Object.values(opcion)[0], (subOpcion) => {
      return `<li><a class="${"dropdown-item"}"${add_attribute("href", Object.values(subOpcion)[0], 0)}>${escape(Object.keys(subOpcion))}</a>
                  </li>`;
    })}</ul>
            </li>`;
  })}` : ``}</ul>

      ${currentUser.isAuth ? `<ul class="${"list-unstyled ms-auto mb-2 mb-lg-0"}"><li class="${"nav-item dropdown"}"><a class="${"nav-link dropdown-toggle"}"${add_attribute("href", "#", 0)} id="${"navbarDropdown"}" role="${"button"}" data-bs-toggle="${"dropdown"}" aria-expanded="${"false"}"><img${add_attribute("src", currentUser.profile, 0)} class="${"logo svelte-1i1mn3r"}" alt="${"foto de usuario"}">
              <b>Bienvenido</b>
              ${escape(currentUser.name)}
              <span class="${"caret"}"></span></a>
            <ul class="${"dropdown-menu"}" aria-labelledby="${"navbarDropdown"}"><li><a class="${"dropdown-item"}" href="${"/cuenta/perfil"}">Perfil de usuario
                </a></li>
              <li><a class="${"dropdown-item"}" href="${"/cuenta/2fa"}">Agregar 2FA</a></li>
              <li><a class="${"dropdown-item"}" href="${"/cuenta/logout"}">Cerrar sesi\xF3n</a></li></ul></li></ul>` : `<ul class="${"navbar-nav ms-auto mb-2 mb-lg-0"}"><li class="${"nav-item mx-1"}"><a class="${"nav-link text-primary"}" href="${"/login"}">Iniciar sesi\xF3n</a></li>
          <li class="${"nav-item mx-1"}"><a class="${"nav-link text-secondary"}" href="${"/signup"}">Registrarse</a></li></ul>`}</div></div>
</nav>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: ".logo.svelte-riu6i4{height:3rem;filter:grayscale(100%) brightness(0.7) contrast(0.3) invert(1)}.social.svelte-riu6i4{height:2rem;filter:brightness(0.7)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"bg-dark"}"><footer class="${"container d-flex flex-wrap justify-content-between align-items-center py-3"}"><div class="${"col-md-6 d-flex align-items-center"}"><a href="${"/"}" class="${"mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"}"><img src="${"/img/logo.png"}" class="${"logo svelte-riu6i4"}" alt="${"Logo de Cl\xEDnica La Luz"}"></a>
      <span class="${"mb-3 mb-md-0 mx-3 text-muted"}">\xA9 2022 Cl\xEDnica La Luz</span></div>

    <ul class="${"nav col-md-3 px-1 justify-content-end list-unstyled d-flex"}"><li class="${"ms-3"}"><a class="${"text-muted"}" href="${"https://www.facebook.com/ClinicaLaLuz/"}"><img src="${"/img/facebook_48px.png"}" class="${"social mx-1 svelte-riu6i4"}" alt="${"logo de Facebook"}"></a></li>
      <li class="${"ms-3"}"><a class="${"text-muted"}" href="${"https://www.instagram.com/clinicalaluz/"}"><img src="${"/img/instagram_48px.png"}" class="${"social mx-1 svelte-riu6i4"}" alt="${"logo de Instagram"}"></a></li>
      <li class="${"ms-3"}"><a class="${"text-muted"}" href="${"https://www.youtube.com/user/IMAGENCLINICALALUZ"}"><img src="${"/img/youtube_48px.png"}" class="${"social mx-1 svelte-riu6i4"}" alt="${"logo de Youtube"}"></a></li></ul></footer>
</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
<div class="${"container"}" style="${"height: calc(100vh - 3.5rem - 1px)"}">${slots.default ? slots.default({}) : ``}</div>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
