let jsonData = []; // Variable global para almacenar los datos del JSON

// Leer el archivo JSON y cargarlo en la tabla
document.getElementById('inputFile').addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file && file.type === 'application/json') {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            jsonData = JSON.parse(e.target.result); // Guardamos los datos en jsonData
            const tableBody = document.getElementById('tablaDatos').getElementsByTagName('tbody')[0];
            
            // Limpiar las filas anteriores
            tableBody.innerHTML = '';

            // Llenar la tabla con los datos del JSON
            jsonData.forEach((item, index) => {
                const row = tableBody.insertRow();

                // Crear la celda de selección (checkbox)
                const selectCell = row.insertCell(0);
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.classList.add('checkbox');
                checkbox.dataset.index = index;  // Asociamos el índice de la fila
                selectCell.appendChild(checkbox);

                row.insertCell(1).textContent = item.nombre;
                row.insertCell(2).textContent = item.correo;
                row.insertCell(3).textContent = item.telefono;
                row.insertCell(4).textContent = item.experiencia;
            });

            // Mostrar la tabla después de agregar los datos
            document.getElementById('tablaDatos').style.display = 'table';

            // Mostrar el botón de eliminar y guardar si hay datos
            document.getElementById('btnEliminar').style.display = 'inline-block';
            document.getElementById('btnGuardar').style.display = 'inline-block';
        };

        reader.readAsText(file);
    } else {
        alert('Por favor selecciona un archivo JSON válido.');
    }
});

// Eliminar filas seleccionadas
document.getElementById('btnEliminar').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('.checkbox:checked');
    const tableBody = document.getElementById('tablaDatos').getElementsByTagName('tbody')[0];

    checkboxes.forEach((checkbox) => {
        const row = checkbox.closest('tr');
        const index = checkbox.dataset.index;  // Obtenemos el índice del dato
        jsonData.splice(index, 1);  // Eliminamos el dato del array
        row.remove();  // Eliminamos la fila de la tabla
    });

    // Si no hay más filas, ocultar el botón de eliminar
    if (tableBody.rows.length === 0) {
        document.getElementById('btnEliminar').style.display = 'none';
    }
});

// Guardar los datos en un archivo JSON
document.getElementById('btnGuardar').addEventListener('click', function() {
    const jsonBlob = new Blob([JSON.stringify(jsonData, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(jsonBlob);
    link.download = 'datos_formulario.json';
    link.click();
});
