<script>
  import axios from 'axios'
  import { format } from 'date-fns'
  import { goto } from '$app/navigation'

  let errors = []

  let usuarioPaciente = {
    paciente: {
      activo: true,
      apellidos: 'Lipa Calabilla',
      celular: '942024657',
      dni: '76368626',
      email: 'abraham@mail.com',
      fechanacimiento: format(new Date(), 'yyyy-MM-dd'),
      nombres: 'Abraham',
      region: 'Tacna',
      sexo: 1,
      usuario_id: '113',
    },
    password: '123456',
    repetirPassword: '123456',
    userName: 'persona10',
  }

  const handleSignUp = () => {
    if (usuarioPaciente.password === usuarioPaciente.repetirPassword) {
      registrarPaciente()
    } else {
      errors = ['Las contraseñas no coinciden']
    }
  }

  async function registrarPaciente() {
    let usuario = {
      nombrecompleto: `${usuarioPaciente.paciente.nombres} ${usuarioPaciente.paciente.apellidos}`,
      username: usuarioPaciente.userName,
      password: usuarioPaciente.password,
    }

    console.log(usuario)

    let response = await axios.post('http://localhost:10003/identity/', usuario)
    if (response.status === 200 && response.data.succeeded) {
      response = await axios.get(
        `http://localhost:10003/usuarios/${usuarioPaciente.userName}`
      )
      if (response.status === 200) {
        usuarioPaciente.paciente.usuario_id = response.data.content.id

        usuarioPaciente.paciente.sexo = parseInt(usuarioPaciente.paciente.sexo)

        response = await axios.post(
          'http://localhost:10001/pacientes/',
          usuarioPaciente.paciente
        )
        if (response.status === 201) {
          goto('/login')
        }
      }
    }
  }
</script>

<h1 class="text-center">Registrarse</h1>
<h4 class="text-center">Regístrese para acceder al sistema</h4>
<hr class="col-md-4 mx-auto" />

<div class="row justify-content-center">
  <div class="col-md-9">
    <form on:submit|preventDefault={handleSignUp}>
      <div class="row gap-3">
        <div class="card col p-0">
          <div class="card-header">Datos del paciente</div>
          <div class="card-body p-3">
            <div class="form-floating mb-3">
              <input
                bind:value={usuarioPaciente.paciente.nombres}
                class="form-control"
                id="nombres" />
              <label for="nombres" class="form-label">Nombres</label>
              <span class="text-danger" />
            </div>

            <div class="form-floating mb-3">
              <input
                bind:value={usuarioPaciente.paciente.apellidos}
                class="form-control"
                id="apellidos" />
              <label for="apellidos" class="form-label">Apellidos</label>
              <span class="text-danger" />
            </div>

            <div class="form-floating mb-3">
              <input
                bind:value={usuarioPaciente.paciente.dni}
                class="form-control"
                id="dni" />
              <label for="dni" class="form-label">DNI</label>
              <span class="text-danger" />
            </div>

            <div class="form-floating mb-3">
              <input
                bind:value={usuarioPaciente.paciente.email}
                class="form-control"
                id="email"
                type="email" />
              <label for="email" class="form-label">Email</label>
              <span class="text-danger" />
            </div>

            <div class="form-floating mb-3">
              <input
                bind:value={usuarioPaciente.paciente.celular}
                class="form-control"
                id="celular" />
              <label for="celular" class="form-label">Celular</label>
              <span class="text-danger" />
            </div>

            <fieldset class="mb-3">
              <legend class="fs-6">Sexo</legend>
              <div class="form-check">
                <input
                  bind:group={usuarioPaciente.paciente.sexo}
                  id="m"
                  type="radio"
                  class="form-check-input"
                  value="0" />
                <label for="m" class="form-check-label">Masculino</label>
              </div>
              <div class="form-check">
                <input
                  bind:group={usuarioPaciente.paciente.sexo}
                  id="f"
                  type="radio"
                  class="form-check-input"
                  value="1" />
                <label for="f" class="form-check-label">Femenino</label>
              </div>
            </fieldset>

            <div class="form-floating mb-3">
              <select
                bind:value={usuarioPaciente.paciente.region}
                id="region"
                class="form-select">
                <option value="">Seleccione una opción</option>
                <option value="Amazonas">Amazonas</option>
                <option value="Ancash">Ancash</option>
                <option value="Apurímac">Apurímac</option>
                <option value="Arequipa">Arequipa</option>
                <option value="Ayacucho">Ayacucho</option>
                <option value="Cajamarca">Cajamarca</option>
                <option value="Callao">Callao</option>
                <option value="Cuzco">Cuzco</option>
                <option value="Huancavelica">Huancavelica</option>
                <option value="Huánuco">Huánuco</option>
                <option value="Ica">Ica</option>
                <option value="Junín">Junín</option>
                <option value="La_Libertad">La Libertad</option>
                <option value="Lambayeque">Lambayeque</option>
                <option value="Lima">Lima</option>
                <option value="Loreto">Loreto</option>
                <option value="Madre_de_Dios">Madre de Dios</option>
                <option value="Moquegua">Moquegua</option>
                <option value="Pasco">Pasco</option>
                <option value="Piura">Piura</option>
                <option value="Puno">Puno</option>
                <option value="San_Martín">San Martín</option>
                <option value="Tacna">Tacna</option>
                <option value="Tumbes">Tumbes</option>
                <option value="Ucayali">Ucayali</option>
              </select>
              <label for="region" class="form-label">Región</label>
            </div>

            <div class="form-floating mb-3">
              <input
                bind:value={usuarioPaciente.paciente.fechanacimiento}
                class="form-control"
                id="fechaNacimiento"
                type="date" />
              <label for="fechaNacimiento" class="form-label">
                Fecha de nacimiento
              </label>
            </div>
          </div>
        </div>

        <div class="card col p-0">
          <div class="card-header">Datos del usuario</div>
          <div class="card-body p-3">
            <div class="form-floating mb-3">
              <input
                bind:value={usuarioPaciente.userName}
                class="form-control"
                placeholder="johndoe"
                id="UserName" />
              <label for="UserName" class="form-label">Usuario</label>
            </div>

            <div class="form-floating mb-3">
              <input
                bind:value={usuarioPaciente.password}
                class="form-control"
                type="password"
                placeholder="***"
                id="password" />
              <label for="password" class="form-label">Contraseña</label>
            </div>

            <div class="form-floating mb-3">
              <input
                bind:value={usuarioPaciente.repetirPassword}
                class="form-control"
                type="password"
                placeholder="***"
                id="repetirPassword" />
              <label for="repetirPassword" class="form-label">
                Repetir contraseña
              </label>
            </div>

            <input bind:value={usuarioPaciente.activo} type="hidden" />

            <input
              class="btn btn-primary w-100 mb-2"
              type="submit"
              name="submit"
              value="Registrarse" />

            <div class="text-center">
              <a href="/login" class="btn btn-outline-secondary w-100">
                Iniciar sesión
              </a>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
