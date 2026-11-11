
document.addEventListener("DOMContentLoaded", function () {

    const images = document.querySelectorAll(".screen-card img");
    const lightbox = document.getElementById("imageLightbox");
    const previewImage = document.getElementById("lightboxImage");
    const closeButton = document.getElementById("closeLightbox");

    // Open image
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

    // Click outside image to close
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closePreview();
        }
    });

    // Escape key to close
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closePreview();
        }
    });

});
