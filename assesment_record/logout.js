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

// logout section

// Show the logout modal
function showCustomLogoutModal() {
    document.getElementById("customLogoutModal").style.display = "flex";
}

// Handle logout confirmation
function confirmCustomLogout(isConfirmed) {
    let modal = document.getElementById("customLogoutModal");
    let drawer = document.getElementById("drawer");

    if (isConfirmed) {
        // User clicked "Yes" - Logout and redirect
        window.location.href = "/index.html"; // Change this to your actual logout page
    } else {
        // User clicked "No" - Close modal and close drawer
        modal.style.display = "none";
        if (drawer.classList.contains("open")) {
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


