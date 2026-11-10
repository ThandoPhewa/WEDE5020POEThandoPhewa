/*Lulu's Sugarcraft Studio Homepage JavaScript*/

// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {

    // Get the welcome button
    var welcomeButton = document.getElementById("welcomeButton");

    // Get the welcome message
    var welcomeMessage = document.getElementById("welcomeMessage");

    // Display a welcome message when clicked
    if (welcomeButton && welcomeMessage) {

        welcomeButton.addEventListener("click", function () {

            welcomeMessage.textContent =
                "Welcome to Lulu's Sugarcraft Studio!";

        });

    }

    // Display the current year
    var year = document.getElementById("copyrightYear");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});
