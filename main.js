const form = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
    
});

const checkInputs = () => {
    const usuarioValue = usuario.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if ( usuarioValue === '' ) {
        setErrorFor(usuario, 'Debe llenar el campo usuario.')
    }else {
        setSuccessFor(usuario);
    }

    if ( emailValue === '') {
        setErrorFor(email, 'Debe llenar el campo de email')
    }else if ( !isEmail( emailValue ) ) {
        setErrorFor(email, 'No ingreso un email valido')
    }else {
        setSuccessFor(email)
    }

    if ( password === '' ) {
        setErrorFor(password, 'Debe llenar el campo password.')
    }else {
        setSuccessFor(password);
    }

    if ( password2 === '' ) {
        setErrorFor(password2, 'Debe llenar el campo password2.')
    } else if ( passwordValue !== password2Value ) {
        setErrorFor(passsword2, 'Passwords no coinciden :(');
    }else {
        setSuccessFor(password2);
    }
}

const setErrorFor = ( input, message ) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

const setSuccessFor = () => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

const isEmail = (email) => {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}