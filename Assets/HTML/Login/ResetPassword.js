import { ManageAccount } from "./FirebaseConfi.js";

document.getElementById("form-Recuperar").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;

    const account = new ManageAccount();

    account.resetPassword(email);

});

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.Recuperar-contraseña', {delay:100});