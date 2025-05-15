// Lógica Calculadora de Sueño
const boton = document.querySelector('#calcularSueno');//capturamos el boton

//Agregamos el evento click al boton
boton.addEventListener('click', () => {
    const dormir = document.querySelector("#horaDormir").value;//capturamos la hora en que nos acostamos a dormir
    const despertar = document.querySelector("#horaDespertar").value;//capturamos la hora en que nos levantamos

    //validamos que ambas horas no estan vacias
    if (!dormir || !despertar) {
        document.querySelector("#resultado").innerText = "Por favor, ingresa ambas horas.";//Agregamos el texto al div
        return;
    }

    const [hDormir, mDormir] = dormir.split(":").map((elemento)=>Number(elemento));//separamos las horas y los minutos con split y luego con map los convertimos en numero 
    const [hDespertar, mDespertar] = despertar.split(":").map((elemento)=>Number(elemento));

    const tDormir = new Date(); //creamos un nuevo objeto de fecha y hora que representa el momento actual (fecha y hora del sistema en ese instante).
                                //Por ejemplo, si hoy es 15 de mayo de 2025 a las 10:30 AM, ese Date representará:
                                //2025-05-15T10:30:00
    tDormir.setHours(hDormir, mDormir, 0); //modificamos solo la hora y los minutos del objeto fecha

    const tDespertar = new Date();
    tDespertar.setHours(hDespertar, mDespertar, 0);

    if (tDespertar <= tDormir) tDespertar.setDate(tDespertar.getDate() + 1);//Si la Si la hora en que me desperté es menor (o igual) a la hora en que me dormí, le sumamos un día a la hora de despertar para que los cálculos tengan sentido.

    const diffMs = tDespertar - tDormir; //Calcula la diferencia entre las dos fechas (en milisegundos)
                                        // Esto nos da el tiempo transcurrido entre la hora de dormir y la de despertar
    const horas = Math.floor(diffMs / (1000 * 60 * 60)); // Convierte la diferencia de milisegundos a horas
                                                      // (1000 milisegundos = 1 segundo, 60 segundos = 1 minuto, 60 minutos = 1 hora)
                                                      // Math.floor redondea hacia abajo el resultado (por ejemplo, 2.5 horas -> 2)

    const minutos = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60)); // Calcula los minutos restantes después de calcular las horas
                                                                      // El operador % obtiene el residuo de la división de los milisegundos
                                                                      // para obtener solo el tiempo que no completó una hora completa
                                                                      // Luego lo divide entre 1000 * 60 (milisegundos en un minuto)
                                                                      // y usa Math.floor para redondear el valor hacia abajo

    let mensaje = `Dormiste ${horas} horas y ${minutos} minutos. `;

    if (horas >= 7 && horas <= 9) {
        mensaje += "¡Tu sueño fue ideal! Probablemente descansaste bien."; //a mensaje le concatenamos este texto
    } else if (horas < 5) {
        mensaje += "Dormiste muy poco. Es probable que tu sueño no haya sido reparador.";
    } else if (horas > 9) {
        mensaje += "Dormiste bastante. Tu cuerpo puede haber estado agotado.";
    } else {
        mensaje += "Dormiste una cantidad moderada. Podrías sentirte bien o algo cansado.";
    }

    document.querySelector("#resultado").innerText = mensaje;
});

// Lista de sueños Array de objetos
const sueños = [
    { nombre: "Soñar con Agua", descripcion: "Representa emociones y estados del alma. El tipo de agua cambia su significado.", enlace: "suenos/agua.html", emoji: "💧" },
    { nombre: "Soñar con Serpientes", descripcion: "Puede simbolizar traición, sabiduría o transformación personal.", enlace: "suenos/serpientes.html", emoji: "🐍" },
    { nombre: "Soñar con Caída de Dientes", descripcion: "Se asocia con inseguridad, pérdida o miedo al envejecimiento.", enlace: "suenos/caida-dientes.html", emoji: "🦷" },
    { nombre: "Soñar que Vuelas", descripcion: "Simboliza libertad, éxito o el deseo de escapar de preocupaciones.", enlace: "suenos/volar.html", emoji: "🕊️" },
    { nombre: "Soñar que te Pierdes", descripcion: "Representa confusión, falta de dirección o miedo a decisiones importantes.", enlace: "suenos/perderse.html", emoji: "🧭" },
    { nombre: "Soñar con Muerte", descripcion: "Refleja cambios profundos o transformaciones personales.", enlace: "suenos/muerte.html", emoji: "⚰️" },
    { nombre: "Soñar con Perros", descripcion: "Simboliza lealtad, protección o necesidades afectivas.", enlace: "suenos/perros.html", emoji: "🐶" },
    { nombre: "Soñar con Gatos", descripcion: "Se relaciona con la intuición, el misterio o la independencia.", enlace: "suenos/gatos.html", emoji: "🐱" },
    { nombre: "Soñar con una Casa", descripcion: "Refleja el estado emocional o interior del soñador.", enlace: "suenos/casa.html", emoji: "🏠" },
    { nombre: "Soñar con Llorar", descripcion: "Expresa liberación emocional, tristeza o necesidad de desahogo.", enlace: "suenos/llorar.html", emoji: "😢" },
    { nombre: "Soñar con Matrimonio", descripcion: "Puede indicar compromisos, uniones o decisiones importantes por tomar.", enlace: "suenos/matrimonio.html", emoji: "💍" },
    { nombre: "Soñar con Embarazo", descripcion: "Simboliza nuevas ideas, proyectos o cambios en desarrollo.", enlace: "suenos/embarazo.html", emoji: "🤰" },
    { nombre: "Soñar con tu Ex", descripcion: "Refleja recuerdos, lecciones pasadas o emociones no resueltas.", enlace: "suenos/ex.html", emoji: "💔" },
    { nombre: "Soñar con un Volcán", descripcion: "Puede representar emociones intensas que están por estallar.", enlace: "suenos/volcan.html", emoji: "🌋" },
    { nombre: "Soñar con Caer", descripcion: "Indica pérdida de control, miedo al fracaso o inseguridad.", enlace: "suenos/caida.html", emoji: "🪂" },
    { nombre: "Soñar con Dinero", descripcion: "Se relaciona con autoestima, valor personal o deseos materiales.", enlace: "suenos/dinero.html", emoji: "💰" },
    { nombre: "Soñar con Fuego", descripcion: "Simboliza transformación, pasión o destrucción según el contexto.", enlace: "suenos/fuego.html", emoji: "🔥" },
    { nombre: "Soñar con Espejos", descripcion: "Representa la autoimagen, introspección o necesidad de conocerse.", enlace: "suenos/espejo.html", emoji: "🪞" },
    { nombre: "Soñar con un Teléfono", descripcion: "Simboliza comunicación, conexión o mensajes importantes.", enlace: "suenos/telefono.html", emoji: "📱" },
    { nombre: "Soñar con Números", descripcion: "Pueden tener significado simbólico, espiritual o personal importante.", enlace: "suenos/numeros.html", emoji: "🔢" }
];

// Variables de paginación
const elementosPorPagina = 4; // Número de elementos (sueños) que se mostrarán por página
let paginaActual = 1; // Página actual, comienza en la 1

// Función para renderizar sueños en la página
const mostrarSueños = (suenos, pagina = 1) => {
    const contenedor = document.querySelector("#sueños-lista");  // Seleccionamos el contenedor donde se van a mostrar los sueños
    contenedor.innerHTML = "";  // Limpiamos el contenedor antes de agregar nuevos elementos (esto elimina los sueños previos)

    // Calculamos el rango de elementos para la página actual
    const inicio = (pagina - 1) * elementosPorPagina;  // Índice de inicio (por ejemplo, página 2 empieza en el índice 4)
    const fin = inicio + elementosPorPagina;  // Índice final (por ejemplo, página 2 termina en el índice 7)
    
    // Extraemos los sueños correspondientes a la página actual usando `slice`
    const sueñosPagina = suenos.slice(inicio, fin);  // `sueños.slice` crea un nuevo array con los elementos que se deben mostrar en la página actual

    // Creamos un elemento `article` por cada sueño en la página
    sueñosPagina.forEach(sueno => {
        const articulo = document.createElement("article");  // Creamos un nuevo artículo para cada sueño
        // Asignamos el contenido HTML del artículo con el nombre, emoji y descripción del sueño
        // Muestra el emoji y el enlace al nombre del sueño
        // Muestra la descripción del sueño
        articulo.innerHTML = `  
            <h3>${sueno.emoji} <a href="${sueno.enlace}">${sueno.nombre}</a></h3>  
            <p>${sueno.descripcion}</p>  
        `;
        contenedor.appendChild(articulo);  // Agregamos el artículo al contenedor en el DOM
    });

    // Llamamos a la función que renderiza la paginación
    renderizarPaginacion(suenos.length, pagina);  // Le pasamos el total de sueños y la página actual
}

// Función para renderizar la paginación
const renderizarPaginacion = (totalElementos, paginaAct) => {
    const contenedor = document.querySelector("#pagination-container");  // Seleccionamos el contenedor de los botones de paginación
    contenedor.innerHTML = "";  // Limpiamos la paginación antes de renderizar los nuevos botones

    // Calculamos el número total de páginas necesarias para mostrar todos los elementos
    const totalPaginas = Math.ceil(totalElementos / elementosPorPagina);  // Usamos Math.ceil para redondear hacia arriba y asegurarnos de mostrar todas las páginas

    // Creamos un botón de paginación por cada página
    for (let i = 1; i <= totalPaginas; i++) {
        const boton = document.createElement("button");  // Creamos un botón para cada número de página
        boton.innerText = i;  // El texto del botón será el número de la página
        if (i === paginaAct) {  // Si el número de la página es el actual, lo marcamos como activo
            boton.classList.add("activo");  // Agregamos una clase "activo" para destacar la página actual
        }
        // Agregamos un evento al botón para cambiar la página cuando se hace clic
        boton.addEventListener("click", () => {
            paginaActual = i;  // Actualizamos la página actual al hacer clic en el botón
            mostrarSueños(sueñosFiltrados, paginaActual);  // Volvemos a renderizar los sueños en la nueva página
        });
        contenedor.appendChild(boton);  // Agregamos el botón al contenedor de la paginación
    }
}

// Buscador de sueños
const inputBusqueda = document.querySelector("#search-input");  // Seleccionamos el campo de búsqueda
let sueñosFiltrados = [...sueños];  // Hacemos una copia del array de sueños para filtrarlos según la búsqueda

// Agregamos un evento para realizar la búsqueda cuando el usuario escribe
inputBusqueda.addEventListener("input", () => {
    const texto = inputBusqueda.value.toLowerCase();  // Obtenemos el valor del campo de búsqueda en minúsculas
    sueñosFiltrados = sueños.filter(s => s.nombre.toLowerCase().includes(texto));  // Filtramos los sueños que contienen el texto de la búsqueda
    paginaActual = 1;  // Reiniciamos la página a la 1 cada vez que se realice una nueva búsqueda
    mostrarSueños(sueñosFiltrados, paginaActual);  // Volvemos a renderizar los sueños filtrados en la primera página
});

// Mostrar sueños al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    mostrarSueños(sueñosFiltrados, paginaActual);  // Al cargar la página, mostramos los sueños en la primera página
});

