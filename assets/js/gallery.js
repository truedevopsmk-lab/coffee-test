document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("gallery-lightbox");
  const lightboxImage = document.getElementById("gallery-lightbox-image");
  const lightboxCaption = document.getElementById("gallery-lightbox-caption");
  const triggerButtons = document.querySelectorAll(".gallery-trigger");
  const closeButtons = document.querySelectorAll("[data-gallery-close]");

  if (!lightbox || !lightboxImage || !lightboxCaption || triggerButtons.length === 0) {
    return;
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImage.src = "";
    lightboxImage.alt = "";
    lightboxCaption.textContent = "";
    document.body.style.overflow = "";
  }

  function openLightbox(imageSrc, captionText) {
    lightboxImage.src = imageSrc;
    lightboxImage.alt = captionText;
    lightboxCaption.textContent = captionText;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }

  triggerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openLightbox(button.dataset.galleryImage || "", button.dataset.galleryCaption || "");
    });
  });

  closeButtons.forEach((element) => {
    element.addEventListener("click", closeLightbox);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }
  });
});
