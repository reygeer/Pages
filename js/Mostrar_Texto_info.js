const texto = `Soy un estudiante en la Universidad Tecnológica de Calvillo en la cual estoy aprendiendo a programar y a desarrollar diferentes lenguajes asi como tambien estoy aprendiendo a leerlos asi como estoy desarrollando multiples softwares en la carrera de Tecnologías de la Información y Desarrollo de Software multiplataforma. Me enfoco en desarrollar para diferentes dispositivos móviles y plataformas. Tambien estuve trabajando en diferentes aplicaciones en la primera que trabajamos fue con el lenguaje python este software es para que se administraran tutorias grupales individuales y para aquellos alumnos que tienen problemas para pagar colegiaturas o ecoomicos alimenticios etc, y en este software lo actualizamos para el lenguaje de html css y con conexion a base de datos MYSQL de forma local y creamos un apartado para que se creara un archivo word con los datos que se metian en formularios.Tambien vimos el lenguaje react y estuvimos enel concurso del hackaton en el que quedamos en 6 lugar en nuestra categoria.Despues participamos en un concurso llamado Hidrotalent en el cual quedamos en 6 lugar aunque hubo muchos interesados como el gobernador ya no recibimos respuestas.En este cuatrimestre estamos trabajando en crear una aplicacion para que controle un sistema que se encargara de el ahorro del agua y en este te dara opciones de ahorro mediante sus elecciones.`;

        function mostrarTexto() {
            let i = 0;
            const elemento = document.getElementById("contenido");
            elemento.innerHTML = ''; // Limpiar cualquier texto previo
            elemento.style.width = '0'; // Asegurarse de que el contenido empiece oculto

            // Usar setInterval para agregar cada carácter
            let intervalo = setInterval(() => {
                if (i < texto.length) {
                    elemento.innerHTML += texto.charAt(i);
                    i++;
                } else {
                    clearInterval(intervalo); // Detener la animación una vez que todo el texto esté mostrado
                }
            }, 50); // Ajusta este valor para cambiar la velocidad de la animación

            // Mostrar el texto con animación de tipo escribir
            elemento.style.width = '100%'; // Iniciar la animación de despliegue
        }