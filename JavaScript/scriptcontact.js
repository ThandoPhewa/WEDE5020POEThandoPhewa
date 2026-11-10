// Lulu's Sugarcraft Studio - Contact Page JavaScript

// 1) Select the contact form and its error message area.
var contactForm = document.getElementById("contactForm");
var errorBox = document.getElementById("contactErrors");

// 2) Validate the general message before preparing an email.
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    errorBox.textContent = "";

    if (!contactForm.checkValidity()) {
        errorBox.textContent = "Please complete all required fields and check your email address.";
        contactForm.reportValidity();
        return;
    }

    // 3) Collect the information entered by the customer.
    var senderName = document.getElementById("contactName").value.trim();
    var senderEmail = document.getElementById("contactEmail").value.trim();
    var messageType = document.getElementById("contactType").value;
    var message = document.getElementById("contactMessage").value.trim();

    // 4) Prepare the subject and message for the studio email address.
    var subject = encodeURIComponent("Website message: " + messageType);
    var body = encodeURIComponent(
        "Name: " + senderName + "\n" +
        "Email: " + senderEmail + "\n" +
        "Message type: " + messageType + "\n\n" +
        "Message:\n" + message
    );

    // 5) Open the customer's default email application.
    window.location.href = "mailto:info@lulussugarcraftstudio.co.za?subject=" + subject + "&body=" + body;
});
