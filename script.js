
// PREGUNTAS DEL CUESTIONARIO
const preguntas = [
    {
        pregunta: "¿En qué país nació San Pompilio?",
        opciones: ["España", "Italia", "Francia"],
        correcta: 1
    },
    {
        pregunta: "¿En qué año nació?",
        opciones: ["1710", "1734", "1766"],
        correcta: 0
    },
    {
        pregunta: "¿A qué edad decidió ser escolapio?",
        opciones: ["A los 10 años", "A los 15 años", "A los 24 años"],
        correcta: 1
    },
    {
        pregunta: "¿En qué año fue ordenado sacerdote?",
        opciones: ["1710", "1766", "1734"],
        correcta: 2
    },
    {
        pregunta: "¿En qué año fue canonizado por el papa Pío XI?",
        opciones: ["1934", "1900", "1766"],
        correcta: 0
    }
];

// VARIABLES DEL CUESTIONARIO
let preguntaActual = 0;
let puntaje = 0;

// ELEMENTOS DE LA PÁGINA
const botonComenzar = document.getElementById("comenzarQuiz");
const contenedorQuiz = document.getElementById("contenedorQuiz");

// FUNCIÓN PARA MOSTRAR UNA PREGUNTA
function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];

    contenedorQuiz.innerHTML = `
        <h3>${pregunta.pregunta}</h3>
        <div class="opciones">
            ${pregunta.opciones.map((opcion, indice) => `
                <button class="opcion" onclick="seleccionarRespuesta(${indice})">
                    ${opcion}
                </button>
            `).join("")}
        </div>
        <p>Pregunta ${preguntaActual + 1} de ${preguntas.length}</p>
    `;
}

// FUNCIÓN PARA COMPROBAR LA RESPUESTA
function seleccionarRespuesta(indice) {
    if (indice === preguntas[preguntaActual].correcta) {
        puntaje++;
    }

    preguntaActual++;

    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
}

// FUNCIÓN PARA MOSTRAR EL RESULTADO FINAL
function mostrarResultado() {
    contenedorQuiz.innerHTML = `
        <h3>¡Terminaste el cuestionario!</h3>
        <p>Obtuviste ${puntaje} de ${preguntas.length} respuestas correctas.</p>
        <button onclick="reiniciarQuiz()">Volver a intentarlo</button>
    `;
}

// FUNCIÓN PARA REINICIAR EL CUESTIONARIO
function reiniciarQuiz() {
    preguntaActual = 0;
    puntaje = 0;
    mostrarPregunta();
}

// INICIAR EL CUESTIONARIO AL HACER CLIC
botonComenzar.addEventListener("click", function() {
    preguntaActual = 0;
    puntaje = 0;
    mostrarPregunta();
});
