import { ManageAccount } from "./FirebaseConfi.js";
document.getElementById("close").addEventListener("submit", (event) => {
    event.preventDefault();

    const account = new ManageAccount();
    account.signOut();

});

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
});

const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
});

srRight.reveal('.BNV-login',{delay:100});
srLeft.reveal('.Nombre-login',{delay:100});
sr.reveal('.LogOut',{delay:100});

srRight.reveal('.imagen-esquina',{delay:200});