(() => {
  const carousel = document.querySelector(".portfolio-carousel");
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
  const dots = Array.from(carousel.querySelectorAll(".carousel-dots button"));
  const status = carousel.querySelector(".carousel-status");
  let current = 0;

  function showSlide(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.hidden = slideIndex !== current;
    });
    dots.forEach((dot, dotIndex) => {
      if (dotIndex === current) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
    status.textContent = `${current + 1} / ${slides.length}`;
  }

  carousel.querySelector("[data-carousel-previous]").addEventListener("click", () => showSlide(current - 1));
  carousel.querySelector("[data-carousel-next]").addEventListener("click", () => showSlide(current + 1));
  dots.forEach((dot, index) => dot.addEventListener("click", () => showSlide(index)));

  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") showSlide(current - 1);
    if (event.key === "ArrowRight") showSlide(current + 1);
  });
})();
