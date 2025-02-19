// Cargar los datos existentes desde localStorage (si hay alguno)
let datosFormulario = JSON.parse(localStorage.getItem('datosFormulario')) || [];

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de la forma tradicional
    
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const experiencia = document.getElementById('experiencia').value;

    // Crear un objeto con los datos del formulario
    const datos = {
        nombre: nombre,
        correo: correo,
        telefono: telefono,
        experiencia: experiencia
    };

    // Agregar el nuevo objeto de datos al arreglo de datosFormulario
    datosFormulario.push(datos);

    // Guardar el arreglo actualizado de datos en localStorage
    localStorage.setItem('datosFormulario', JSON.stringify(datosFormulario));

    // Convertir el arreglo a una cadena JSON
    const datosJson = JSON.stringify(datosFormulario, null, 2);

    // Crear un archivo JSON descargable
    const blob = new Blob([datosJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // Crear un enlace para descargar el archivo
    const a = document.createElement('a');
    a.href = url;
    a.download = 'datos_formulario.json'; // Nombre del archivo (siempre el mismo nombre)
    a.click();

    // Limpiar el formulario
    document.getElementById('formulario').reset();
});
