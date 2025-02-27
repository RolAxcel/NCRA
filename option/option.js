document.addEventListener("DOMContentLoaded", function () {
    // Select the button inside the "2 MILLION ABOVE" box
    const aboveButton = document.querySelector(".box1 .icon-btn");
    const loadingScreen = document.getElementById("loading-screen");

    // Redirect when the button is clicked
    aboveButton.addEventListener("click", function () {
        // Show the loading screen
        loadingScreen.style.display = "flex";

        // Wait for 3 seconds before redirecting
        setTimeout(function () {
            window.location.href = '/assesment_record/assessRecord.html'; // Change this to your target page
        }, 3000); // 3000 milliseconds = 3 seconds
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Select the button inside the "2 MILLION ABOVE" box
    const aboveButton = document.querySelector(".box2 .icon-btn");
    const loadingScreen = document.getElementById("loading-screen");

    // Redirect when the button is clicked
    aboveButton.addEventListener("click", function () {
        // Show the loading screen
        loadingScreen.style.display = "flex";

        // Wait for 3 seconds before redirecting
        setTimeout(function () {
            window.location.href = '/assesment_record/assessRecord.html'; // Change this to your target page
        }, 3000); // 3000 milliseconds = 3 seconds
    });
});
