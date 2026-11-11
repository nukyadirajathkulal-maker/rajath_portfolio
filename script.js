document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // MOBILE NAVIGATION
    // =========================

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {
            const isOpen = navMenu.classList.toggle("show");

            menuToggle.setAttribute("aria-expanded", isOpen);
            menuToggle.textContent = isOpen ? "✕" : "☰";
        });

        document.querySelectorAll("#navMenu a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("show");
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }


    // =========================
    // ACTIVE NAVIGATION
    // =========================

    const sections = document.querySelectorAll("main section");
    const navLinks = document.querySelectorAll("#navMenu a");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting && entry.target.id) {

                    const currentId = entry.target.id;

                    navLinks.forEach(link => {
                        link.classList.toggle(
                            "active",
                            link.getAttribute("href") === `#${currentId}`
                        );
                    });

                }

            });

        }, {
            rootMargin: "-30% 0px -60% 0px"
        });

        sections.forEach(section => observer.observe(section));
    }


    // =========================
    // FULL SCREEN UI PREVIEW
    // =========================

    const screenImages = document.querySelectorAll(".screen-card img");
    const imageLightbox = document.getElementById("imageLightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeLightbox = document.getElementById("closeLightbox");

    if (imageLightbox && lightboxImage && closeLightbox) {

        // Open selected image
        screenImages.forEach(image => {

            image.addEventListener("click", () => {

                imageLightbox.classList.add("active");
                lightboxImage.src = image.src;
                lightboxImage.alt = image.alt;

                document.body.style.overflow = "hidden";
            });

        });

        // Close preview
        function closePreview() {
            imageLightbox.classList.remove("active");
            lightboxImage.src = "";
            document.body.style.overflow = "";
        }

        closeLightbox.addEventListener("click", closePreview);

        // Close by clicking outside image
        imageLightbox.addEventListener("click", event => {
            if (event.target === imageLightbox) {
                closePreview();
            }
        });

        // Close using Escape key
        document.addEventListener("keydown", event => {
            if (event.key === "Escape" &&
                imageLightbox.classList.contains("active")) {
                closePreview();
            }
        });

    }

});
```