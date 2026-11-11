
document.addEventListener("DOMContentLoaded", function () {

    const images = document.querySelectorAll(".screen-card img");
    const lightbox = document.getElementById("imageLightbox");
    const previewImage = document.getElementById("lightboxImage");
    const closeButton = document.getElementById("closeLightbox");

    // Open image when clicked
    images.forEach(function (img) {

        img.addEventListener("click", function () {

            previewImage.src = img.src;
            previewImage.alt = img.alt;

            lightbox.classList.add("active");
            document.body.style.overflow = "hidden";

        });

    });

    // Close preview
    function closePreview() {
        lightbox.classList.remove("active");
        previewImage.src = "";
        document.body.style.overflow = "";
    }

    closeButton.addEventListener("click", closePreview);

    // Close when clicking outside the image
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closePreview();
        }
    });

    // Close using Escape key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closePreview();
        }
    });

});
