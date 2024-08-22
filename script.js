const d = document;
const textArea = d.querySelector(".input_form");
const imgMuneco = d.querySelector(".img_result");
const loader = d.querySelector(".loader");
const titleResult = d.querySelector(".title_result");
const textResult = d.querySelector(".text_result");
const btnEncriptar = d.querySelector(".btn_form");
const btnDesencriptar = d.querySelectorAll(".btn_form");
const btnCopiar = d.querySelector(".btn_result");

const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

//function para encriptar

function encriptarmensaje(mensaje) {
    let mensajeEncriptado = "";
    for (let i = 0; i < mensaje.length; i++) {
        let letra = mensaje[i];
        let encriptada = letra;
        for (let j = 0; j < llaves.length; j++) {
            if (letra === llaves[j][0]) {
                encriptada = llaves[j][1]; //reemplaza la letra por su equivalente encriptado
                break; //termina el bucle cuando se encuentra la correspondencia
            }
        }
        mensajeEncriptado += encriptada;

    }
    return mensajeEncriptado
}

//function para desencriptar

function desencriptarmensaje(mensaje) {
    let mensajeDesencriptado = mensaje;
    for (let i = 0; i < llaves.length; i++) {
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}

//ocultar elementos dinamicamente
textArea.addEventListener("input", (e) => {
    imgMuneco.style.display = "none";
    loader.classList.remove("hidden");
    titleResult.textContent = "Capturando mensaje..."
    textResult.textContent = "";
})
//function btn encriptar
btnEncriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarmensaje(mensaje);
    textResult.textContent = mensajeEncriptado;
    btnCopiar.classList.remove("hidden");
    titleResult.textContent = "El resultado es:";
});
//function btn desencriptar
btnDesencriptar[1].addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarmensaje(mensaje);
    textResult.textContent = mensajeDesencriptado;
    titleResult.textContent = "El resultado es:";
    loader.classList.add("hidden");
})
//function para copiar
btnCopiar.addEventListener('click', () => {
    let textCopy = textResult.textContent;
    navigator.clipboard.writeText(textCopy).then(() => {
        imgMuneco.style.display = "block";
        loader.classList.add("hidden");
        titleResult.textContent = "El texto se copio con éxito"
        btnCopiar.classList.add("hidden");
        textResult.textContent = "";
    })
});

