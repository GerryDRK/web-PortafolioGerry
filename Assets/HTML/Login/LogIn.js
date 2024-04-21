import { ManageAccount } from "./FirebaseConfi.js";
document.getElementById("formulario-sesion").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const account = new ManageAccount();

    account.authenticate(email, password);

});

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.Fomulario-Ingresar', {delay:100});