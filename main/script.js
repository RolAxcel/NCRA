import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6FbfRSvUFBa5gdoYViLbzlz1GB3EGYbw",
    authDomain: "nrca-446be.firebaseapp.com",
    projectId: "nrca-446be",
    storageBucket: "nrca-446be.firebasestorage.app",
    messagingSenderId: "955938777275",
    appId: "1:955938777275:web:0ca1a628ba8cd09ff9a19e",
    measurementId: "G-SQSE3PFW9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Allowed admin emails (only these users can log in)
const allowedAdmins = ["admin", "admin123"];

document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();

    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            if (allowedAdmins.includes(user.email)) {
                alert("Login successful! Welcome Admin.");
                window.location.href = "/assesment_record/assessRecord.html"; // Redirect to admin panel
            } else {
                alert("Access Denied: You are not an admin.");
                auth.signOut();
            }
        })
});
