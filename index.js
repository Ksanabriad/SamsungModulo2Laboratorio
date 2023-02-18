const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const clave = document.getElementById("clave");
const confirme_clave = document.getElementById("confirme_clave");
const form_register = document.getElementsByClassName("form_register");


form.addEventListener('button', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    var error = false;

    // trim to remove the whitespaces
    const nombreValue = nombre.value.trim();
    const emailValue = email.value.trim();
    const claveValue = clave.value.trim();
    const confirme_claveValue = confirme_clave.value.trim();


    if (nombreValue === '') {
        error = true;
        setErrorFor(nombre, 'El campo nombre es obligatorio');
    }
    else {
        setSuccessFor(nombre);
    }

    if (emailValue === '') {
        error = true;
        setErrorFor(email, 'El campo email es obligatorio');
    } else if (!isEmail(emailValue)) {
        error = true;
        setErrorFor(email, 'No ingreso un email válido');
    } else {
        setSuccessFor(email);
    }

    if (claveValue === '') {
        error = true;
        setErrorFor(clave, 'El campo clave es obligatorio.');
    } else if (!isClave(claveValue)) {
        error = true;
        setErrorFor(clave, 'La clave debe contener al menos una letra en mayúscula, una en minúscula. Máximo 8 caracteres');
    } 
    else {
        setSuccessFor(clave);
    }

    if (confirme_claveValue === '') {
        error = true;
        setErrorFor(confirme_clave, 'El campo de confirme su clave es obligatorio.');
    } else if (claveValue !== confirme_claveValue) {
        error = true;
        setErrorFor(confirme_clave, 'Las claves no coinciden');
    } else {
        setSuccessFor(confirme_clave);
    }

    // Si error es true, es porque se ha producido un error en algun campo.
    if (error == false){
        alert('La inscripción ha sido correcta.');
    } else {
        nombre.focus();
    }
}

function setErrorFor(input, message) {
    const formRegister = input.parentElement;
    const small = formRegister.querySelector('small');
    formRegister.className = 'form_group error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formRegister = input.parentElement;
    formRegister.className = 'form_group success';
}

function isNombre(nombreValue) {
    return /^[a-zA-Z]$/.test(nombreValue);
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isClave(clave) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/.test(clave);
}