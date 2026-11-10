// Lulu's Sugarcraft Studio - Products Page JavaScript

// 1) Get the search, filter, sort and product elements from the HTML page.
var productSearch = document.getElementById("productSearch");
var productFilter = document.getElementById("productFilter");
var productSort = document.getElementById("productSort");
var productGrid = document.getElementById("productGrid");
var searchStatus = document.getElementById("searchStatus");
var noProducts = document.getElementById("noProducts");

// 2) This function searches, filters and sorts the products.
function updateProducts() {
    var searchText = productSearch.value.toLowerCase().trim();
    var selectedCategory = productFilter.value;
    var sortOrder = productSort.value;
    var cards = Array.from(productGrid.querySelectorAll(".product-card"));

    // Sort product cards by their heading when requested.
    cards.sort(function (cardA, cardB) {
        var nameA = cardA.querySelector("h3").textContent.toLowerCase();
        var nameB = cardB.querySelector("h3").textContent.toLowerCase();

        if (sortOrder === "az") return nameA.localeCompare(nameB);
        if (sortOrder === "za") return nameB.localeCompare(nameA);
        return 0;
    });

    // Check each product to see whether it matches the search and category.
    var visibleCount = 0;

    cards.forEach(function (card) {
        var categoryMatches = selectedCategory === "all" || card.dataset.category === selectedCategory;
        var searchMatches = card.dataset.name.includes(searchText) || card.textContent.toLowerCase().includes(searchText);
        var shouldShow = categoryMatches && searchMatches;

        card.hidden = !shouldShow;
        if (shouldShow) visibleCount++;
        productGrid.appendChild(card);
    });

    searchStatus.textContent = visibleCount + " product(s) found.";
    noProducts.hidden = visibleCount !== 0;
}

// 3) Run the product search when the user types or changes a selection.
productSearch.addEventListener("input", updateProducts);
productFilter.addEventListener("change", updateProducts);
productSort.addEventListener("change", updateProducts);
updateProducts();

// 4) Lightbox: display a larger version of a product image when clicked.
var lightbox = document.getElementById("lightbox");
var lightboxImage = document.getElementById("lightboxImage");
var closeLightboxButton = document.getElementById("closeLightbox");
var galleryImages = document.querySelectorAll(".gallery-image");

function closeLightbox() {
    lightbox.hidden = true;
    lightboxImage.src = "";
}

galleryImages.forEach(function (image) {
    image.addEventListener("click", function () {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightbox.hidden = false;
        closeLightboxButton.focus();
    });
});

closeLightboxButton.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) closeLightbox();
});

// The Escape key also closes the lightbox.
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
});
