document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const experiencia = document.getElementById('experiencia').value;

    const datosFormulario = {
        nombre,
        correo,
        telefono,
        experiencia
    };

    // Enviar los datos al servidor
    fetch('http://localhost:5500/guardarFormulario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosFormulario),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Datos guardados:', data);
        alert('Formulario enviado correctamente.');
    })
    .catch((error) => {
        console.error('Error al guardar los datos:', error);
        alert('Hubo un error al enviar el formulario.');
    });
});
