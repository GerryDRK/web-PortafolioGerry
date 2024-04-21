//Se están importando las funciones necesarias del SDK de Firebase para la inicialización de la aplicación y 
//la autenticación de usuarios. Esto proporciona las herramientas necesarias para interactuar con Firebase Authentication.



  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD8NgHK79S4j4c5YBDzhMhxDCsXbA6cHa8",
    authDomain: "actportafolio.firebaseapp.com",
    projectId: "actportafolio",
    storageBucket: "actportafolio.appspot.com",
    messagingSenderId: "851684994589",
    appId: "1:851684994589:web:cf476e64f73bc487f1a0f4",
    measurementId: "G-EE71JFZ80X"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

//Se define la configuración de Firebase, que incluye información como la clave de API, 
//el dominio de autenticación, el ID del proyecto, etc. Luego, se inicializa la aplicación de Firebase con esta configuración y se obtiene una instancia de autenticación.


//Se define una clase ManageAccount que contiene métodos para manejar la cuenta de usuario, incluyendo el registro, la autenticación y el cierre de sesión.
export class ManageAccount {

    // Métodos para registrar, autenticar y cerrar sesión en la cuenta de usuario

    // Método para registrar un nuevo usuario con correo electrónico y contraseña

    register(email, password) {
        //Este método toma un correo electrónico y una contraseña como argumentos y 
        //utiliza la función createUserWithEmailAndPassword para registrar un nuevo usuario en Firebase Authentication.
      createUserWithEmailAndPassword(auth, email, password)
        .then((_) => {
          window.location.href = "LogIn.html";
          // Mostrar alerta de registro exitoso
          alert("Registro exitoso. Serás redirigido a la página de inicio de sesión.");
        })
        .catch((error) => {
          console.error(error.message);
              // Mostrar alerta de error de registro
              alert("Error al registrar: " + error.message);
        });
    }
    // Método para autenticar a un usuario existente con correo electrónico y contraseña

    authenticate(email, password) {

      signInWithEmailAndPassword(auth, email, password)
      //Este método toma un correo electrónico y una contraseña como argumentos y utiliza la función signInWithEmailAndPassword para autenticar al usuario en Firebase Authentication.
        .then((_) => {
          window.location.replace("./inde.html");
          // Mostrar alerta de inicio de sesión exitoso
          alert("Has iniciado sesión correctamente. Serás redirigido a la página principal.");
        })
        .catch((error) => {
          console.error(error.message);
                  // Mostrar alerta de error de inicio de sesión
                  alert("Error al iniciar sesión: " + error.message);
        });
    }
    // Método para cerrar sesión de un usuario autenticado
    signOut() {
        //Este método utiliza la función signOut para cerrar sesión de un usuario autenticado en Firebase Authentication.
      signOut(auth)
        .then((_) => {
          window.location.href = "../index.html";
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
    // Método para cerrar sesión de un usuario autenticado
    resetPassword(email) {
      sendPasswordResetEmail(auth, email)
        .then((_) => {
          // Mostrar alerta de correo electrónico enviado con éxito
          alert("Se ha enviado un correo electrónico para restablecer tu contraseña.");
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
}
