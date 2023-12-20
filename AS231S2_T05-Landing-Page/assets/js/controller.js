// TODO: llamar la URL
const url = "http://127.0.0.1:3000/api/usuario";

let opcion = '';
const formContacto = document.getElementById("contactForm");
const nombreInput = document.getElementById("nombres");
const apellidoInput = document.getElementById("apellidos");
const telefonoInput = document.getElementById("telefono");
const correoInput = document.getElementById("email");
const mensajeInput = document.getElementById("mensaje");

// Boton crear
document.querySelector(".submit").addEventListener('click', () => {
    console.log("Acción de crear activada");
    opcion = 'crear';
});

// Formulario
formContacto.addEventListener('submit', (e) => {
    e.preventDefault();
    if (opcion == 'crear') {
        if (nombreInput.value == "" || apellidoInput.value == "" || telefonoInput.value == "" || correoInput.value == "" || mensajeInput.value == "") {
            alert("Asegúrese de que todos los campos estén completos");
            return false;
        } else {
            console.log("Todos los campos están completos");
            fetch(
                url,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        {
                            NOMBRES: nombreInput.value,
                            APELLIDOS: apellidoInput.value,
                            TELEFONO: telefonoInput.value,
                            CORREO: correoInput.value,
                            MENSAJE: mensajeInput.value
                        }
                    )
                }
            )
                .then(
                    response => response.json()
                )
                .then(
                    response => location.reload()
                );
        }
    } else if (opcion == 'editar') {
        console.log("Activado el modo editar");
        // Add your edit logic here
    }
});
