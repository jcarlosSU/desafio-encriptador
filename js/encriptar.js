const textareaEncriptar = document.querySelector(".textarea-encriptar");
const textareaEncriptado = document.querySelector(".textarea-encriptado");
const btnEncriptar = document.querySelector(".boton-encriptar");
const btnDesencriptar = document.querySelector(".boton-desencriptar");
const btnCopiar = document.querySelector(".boton-copiar");
const imgYTexto = document.querySelectorAll(".mostrar-si-no");
const txtNoEncontrado = document.querySelector(".texto-mensaje-no-encontrado");
const txtIngresarTexto = document.querySelector(".ingresar-texto");

const objetoEncriptar = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" };
const objetoDesencriptar = { ai: "a", enter: "e", imes: "i", ober: "o", ufat: "u" };

function encriptarTexto(texto) {
  textareaEncriptado.value = texto.replace(/[aeiou]/g, (elemento) => objetoEncriptar[elemento]);
}

function desencriptarTexto(texto) {
  let textoDesencriptado = texto.replace(
    /(ai|enter|imes|ober|ufat)/g,
    (elemento) => objetoDesencriptar[elemento]
  );
  if (texto === textoDesencriptado) {
    textareaEncriptar.focus();
    return 0;
  }
  textareaEncriptado.value = textoDesencriptado;
}
function validarTextoSoloMinusculas(texto) {
  return /^[a-z,\.,\?,!,\-,\',\s]+$/.test(texto) ? true : false;
}
function encriptar() {
  if (textareaEncriptar.value !== "") {
    let blnValidar = validarTextoSoloMinusculas(textareaEncriptar.value);
    if (blnValidar) {
      imgYTexto.forEach((elemento) => (elemento.style.visibility = "hidden"));
      btnCopiar.style.visibility = "visible";
      encriptarTexto(textareaEncriptar.value, 1);
      textareaEncriptar.value = "";
      if (textareaEncriptar.clientWidth <= 768) {
        btnCopiar.style.display = "inline-block";
        textareaEncriptar.style.display = "inline-block";
        textareaEncriptado.style.display = "inline-block";
        txtNoEncontrado.style.display = "none";
        txtIngresarTexto.style.display = "none";
      }
      if (textareaEncriptar.clientWidth <= 365) {
        textareaEncriptar.style.height = "24rem";
        textareaEncriptado.style.height = "13rem";
      }
    } else {
      textareaEncriptar.value = "";
      alert("Solo letras minúsculas y sin acentos");
    }
  }
}

function desencriptar() {
  if (textareaEncriptar.value !== "") {
    desencriptarTexto(textareaEncriptar.value, 0);
    textareaEncriptar.value = "";
  }
}

function copiarTexto() {
  textareaEncriptado.select();
  textareaEncriptado.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(textareaEncriptado.value);
}

btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);
btnCopiar.addEventListener("click", copiarTexto);
