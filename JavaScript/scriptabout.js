// Lulu's Sugarcraft Studio - About Page JavaScript

// 1) Select all the accordion buttons on the About page.
var accordionButtons = document.querySelectorAll(".accordion-button");

// 2) Add a click event to each button.
accordionButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        // Find the answer panel directly after the button.
        var panel = button.nextElementSibling;

        // Check whether the answer is already open.
        var isExpanded = button.getAttribute("aria-expanded") === "true";

        // Change the button state and show or hide the answer.
        button.setAttribute("aria-expanded", String(!isExpanded));
        panel.hidden = isExpanded;
    });
});
