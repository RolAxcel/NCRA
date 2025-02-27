function toggleDrawer() {
    const drawer = document.getElementById("drawer");
    drawer.classList.toggle("open"); // Use class for toggling visibility
}

// Close sidebar when clicking outside
document.addEventListener("click", function (event) {
    let drawer = document.getElementById("drawer");
    let drawerIcon = document.querySelector(".drawer-icon");

    if (!drawer || !drawerIcon) return;

    // If sidebar is open and click is outside both sidebar and icon, close it
    if (drawer.classList.contains("open") && !drawer.contains(event.target) && !drawerIcon.contains(event.target)) {
        drawer.classList.remove("open");
    }
});

// Close sidebar when clicking an item inside
document.querySelectorAll("#drawer .items").forEach(function (item) {
    item.addEventListener("click", function () {
        let drawer = document.getElementById("drawer");
        drawer.classList.remove("open");
    });
});

// Logout section
function showCustomLogoutModal() {
    let modal = document.getElementById("customLogoutModal");
    modal.style.display = "flex"; // Show modal when clicking Logout
}

// Handle logout confirmation
function confirmCustomLogout(isConfirmed) {
    let modal = document.getElementById("customLogoutModal");
    let drawer = document.getElementById("drawer");
    let drawerIcon = document.querySelector(".drawer-icon");

    if (isConfirmed) {
        // Show loading screen
        let loadingScreen = document.getElementById("loadingScreen");
        loadingScreen.style.display = "block";

        // Hide the drawer icon
        if (drawerIcon) {
            drawerIcon.style.display = "none";
        }

        // Wait for 3 seconds before redirecting
        setTimeout(function () {
            // Redirect to login page
            window.location.href = "/index.html";
        }, 3000);
    } else {
        modal.style.display = "none"; // Close modal when clicking "No"
        if (drawer && drawer.classList.contains("open")) {
            drawer.classList.remove("open");
        }
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    let modal = document.getElementById("customLogoutModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Ensure modal is hidden on page load
window.onload = function () {
    document.getElementById("customLogoutModal").style.display = "none";
};

// Prevent back navigation after logout
window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.href = "/index.html";
    }
};
