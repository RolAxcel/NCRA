import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6FbfRSvUFBa5gdoYViLbzlz1GB3EGYbw",
    authDomain: "nrca-446be.firebaseapp.com",
    projectId: "nrca-446be",
    storageBucket: "nrca-446be.appspot.com",
    messagingSenderId: "955938777275",
    appId: "1:955938777275:web:0ca1a628ba8cd09ff9a19e",
    measurementId: "G-SQSE3PFW9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Allowed admin emails (only these users can log in)
const allowedAdmins = ["citytreasurer2025@gmail.com"]; // Use full email addresses

// Function to check internet connectivity
function isOnline() {
    return navigator.onLine;
}

// Function to show a dialog/modal
function showDialog(message) {
    alert(message); // Replace with a custom modal/dialog if needed
}

// Listen for online/offline events
window.addEventListener("online", () => {
    showDialog("You are back online. You can now log in.");
});

window.addEventListener("offline", () => {
    showDialog("You are not connected to the internet. Please make sure you are connected.");
});

// Handle login button click
document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();

    // Check if the user is online
    if (!isOnline()) {
        showDialog("You are not connected to the internet. Please make sure you are connected.");
        return; // Stop further execution
    }

    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log("Attempting to log in with:", email, password); // Debugging

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user; // ✅ Fix: Define 'user' correctly
            console.log("Login successful. User:", user);

            if (allowedAdmins.includes(user.email)) {
                alert("Login successful! Welcome Admin.");

                // Add a 5-second delay before redirecting
                setTimeout(() => {
                    window.location.href = "/option/option.html"; // Redirect to admin panel
                }, 2000); // 5000 milliseconds = 5 seconds
            } else {
                alert("Access Denied: You are not an admin.");
                auth.signOut(); // Sign out the user if they are not an admin
            }
        })
        .catch((error) => {
            // Handle errors here
            console.error("Error during login:", error);
            alert("Login failed: " + error.message); // Show error message to the user
        });
});
