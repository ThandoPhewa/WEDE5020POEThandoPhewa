// Lulu's Sugarcraft Studio - Enquiry Page JavaScript

// 1) Select the enquiry form and its message areas.
var enquiryForm = document.getElementById("enquiryForm");
var errorBox = document.getElementById("enquiryErrors");
var responseBox = document.getElementById("enquiryResponse");
var dateInput = document.getElementById("date");

// 2) Prevent customers from selecting a date in the past.
var today = new Date();
var localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000);
var todayString = localToday.toISOString().split("T")[0];
dateInput.min = todayString;

// 3) If a customer clicked an enquiry link on the Products page, select that product.
var requestedProduct = new URLSearchParams(window.location.search).get("product");
var productOptions = {
    "cake": "Custom cake",
    "cupcakes": "Cupcakes",
    "sweet-treats": "Sweet treats"
};

if (requestedProduct && productOptions[requestedProduct]) {
    document.getElementById("product").value = productOptions[requestedProduct];
}

// 4) Validate the form before sending it to Netlify.
enquiryForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    errorBox.textContent = "";
    responseBox.hidden = true;

    var phone = document.getElementById("phone").value.trim();
    var phonePattern = /^[0-9+()\s-]{9,16}$/;
    var errors = [];

    if (!enquiryForm.checkValidity()) {
        errors.push("Please complete all required fields using the correct formats.");
    }

    if (!phonePattern.test(phone)) {
        errors.push("Please enter a valid phone number.");
    }

    if (dateInput.value < todayString) {
        errors.push("Please choose today or a future date.");
    }

    if (errors.length > 0) {
        errorBox.textContent = errors.join(" ");
        enquiryForm.reportValidity();
        return;
    }

    // 5) Submit the validated form asynchronously (AJAX).
    var submitButton = enquiryForm.querySelector("button[type='submit']");
    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";

    try {
        var formData = new FormData(enquiryForm);
        var encodedData = new URLSearchParams(formData).toString();

        var result = await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encodedData
        });

        if (!result.ok) throw new Error("The form could not be submitted.");

        responseBox.textContent = "Thank you, " + document.getElementById("name").value.trim() + ". Your enquiry has been submitted. The studio will review your requirements and contact you to confirm availability and pricing.";
        responseBox.hidden = false;
        enquiryForm.reset();
        dateInput.min = todayString;
    } catch (error) {
        errorBox.textContent = "We could not submit your enquiry. Please check your internet connection or contact info@lulussugarcraftstudio.co.za.";
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = "Submit enquiry";
    }
});
