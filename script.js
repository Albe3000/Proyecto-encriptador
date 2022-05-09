// Obtener año actual.
const actualYear = new Date().getFullYear();
// Asignar año actual al footer.
document.getElementById("year").innerHTML = actualYear;

//Focus en campo de texto al iniciar.
document.getElementById("textBox").focus();

// Campo para mostrar el texto encriptado.
let resultsArea = document.getElementById("results");

let resultsTitle = document.getElementById("resultsTitle");

// Elemento div mensaje no encontrado.
let divNotFound = document.getElementById("notFound");

// Boton copiar mensaje.
let copyResultButton = document.getElementById("copyResultButton");

// Encriptador \\

const letraA = "ai";
const letraE = "enter";
const letraI = "imes";
const letraO = "ober";
const letraU = "ufat";

// Chequea si tiene solo letras. Devuelve true.
function checkRegEx(string) {
  return /^[a-z\s]*$/.test(string);
}

function checkEncryptText() {
  // Obtiene el valor del texto ingresado.
  const textBox = document.getElementById("textBox").value;

  if (textBox.trim() === "") {
    divNotFound.style.display = "flex";
    resultsArea.style.display = "none";
    copyResultButton.style.display = "none";
    alert("El texto debe contener al menos una letra");
    return false;
  }
  if (!checkRegEx(textBox)) {
    divNotFound.style.display = "flex";
    resultsArea.style.display = "none";
    copyResultButton.style.display = "none";
    alert("El texto debe contener solo letras minúsculas sin acentos");
    return false;
  } else {
    return true;
  }
}

/*
Esta es la primera funcion que cree.

Funciona correctamente.

Se me ocurrió utlizar otro método como .replace() y me pareció una mejor implementación.

function encryptText(textBox) {
  let textBoxElement = document.getElementById("textBox");
  let textEncrypted = "";

  for (let i = 0; i < textBox.length; i++) {
    if (textBox.at(i) === "a") {
      textEncrypted += letraA;
    } else if (textBox.at(i) === "e") {
      textEncrypted += letraE;
    } else if (textBox.at(i) === "i") {
      textEncrypted += letraI;
    } else if (textBox.at(i) === "o") {
      textEncrypted += letraO;
    } else if (textBox.at(i) === "u") {
      textEncrypted += letraU;
    } else {
      textEncrypted += `${textBox.at(i)}`;
    }
  }

  textBoxElement.value = "";
  document.getElementById("notFound").style.display = "none";
  resultsArea.style.display = "block";
  resultsArea.innerHTML = `Texto Encriptado con éxito: ${textEncrypted}`;
  copyResultButton.style.display = "block";
}
*/

function encryptTextv2() {
  if (!checkEncryptText()) {
    return false;
  }

  const text = document.getElementById("textBox").value;
  let textBoxElement = document.getElementById("textBox");
  let textEncrypted = text;

  textEncrypted = textEncrypted.replace(/e/gi, letraE);
  textEncrypted = textEncrypted.replace(/i/gi, letraI);
  textEncrypted = textEncrypted.replace(/a/gi, letraA);
  textEncrypted = textEncrypted.replace(/o/gi, letraO);
  textEncrypted = textEncrypted.replace(/u/gi, letraU);

  textBoxElement.value = "";
  document.getElementById("notFound").style.display = "none";
  resultsArea.style.display = "block";
  resultsTitle.innerHTML = "Texto encriptado:";
  resultsArea.innerHTML = textEncrypted;
  copyResultButton.style.display = "block";
}

function decryptText() {
  if (!checkEncryptText()) {
    return false;
  }

  const text = document.getElementById("textBox").value;
  let textBoxElement = document.getElementById("textBox");
  let textDecrypted = text;

  textDecrypted = textDecrypted.replace(/enter/gi, "e");
  textDecrypted = textDecrypted.replace(/imes/gi, "i");
  textDecrypted = textDecrypted.replace(/ai/gi, "a");
  textDecrypted = textDecrypted.replace(/ober/gi, "o");
  textDecrypted = textDecrypted.replace(/ufat/gi, "u");

  textBoxElement.value = "";
  document.getElementById("notFound").style.display = "none";
  resultsArea.style.display = "block";
  resultsTitle.innerHTML = "Texto desencriptado:";
  resultsArea.innerHTML = textDecrypted;
  copyResultButton.style.display = "block";
}

function copyText() {
  let text = document.getElementById("results");
  text.select();
  navigator.clipboard.writeText(text.innerHTML);
}