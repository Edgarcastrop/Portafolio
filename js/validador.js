export function valida(input){
    const tipoDeinput = input.dataset.tipo;

    if(input.validity.valid){
        input.parentElement.querySelector(".mensajeDeError").innerHTML = "";
        input.parentElement.classList.remove("error");
        input.parentElement.classList.add("correcto");
    }
    else{
        input.parentElement.classList.add("error");
        input.parentElement.querySelector(".mensajeDeError").innerHTML = mostrarMensajeDeError(tipoDeinput, input);
    }
}
const tipodeerror = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];
const mensajedeerror = {
    nombre: {
        valueMissing: "No puede estar vacio",
        patternMismatch: "El maximo son 50 caracteres",
    },
    correo: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido",
        patternMismatch: "Debes cumplir con el formato de correo",
    },
    asunto: {
        valueMissing: "No puede estar vacio",
        patternMismatch: "El maximo son 50 caracteres",
    },
    mensaje: {
        valueMissing: "No puede estar vacio",
        patternMismatch: "El maximo son 300 caracteres",
    }
}
function mostrarMensajeDeError(tipoDeinput, input) {
    let mensaje = "";
    tipodeerror.forEach((error) => {
      if (input.validity[error]) {
        mensaje = mensajedeerror[tipoDeinput][error];
      }
    });
    return mensaje;
  }


