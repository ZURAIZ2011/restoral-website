const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentSlide = 0;
let autoSlide;


/* Show Slide */

function showSlide(index) {

    if (index >= slides.length) {
        currentSlide = 0;
    }

    if (index < 0) {
        currentSlide = slides.length - 1;
    }

    if (index >= 0 && index < slides.length) {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.toggle(
            "active",
            i === currentSlide
        );
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle(
            "active",
            i === currentSlide
        );
    });
}


/* Next */

next.addEventListener("click", () => {

    showSlide(currentSlide + 1);

    resetAutoSlide();

});


/* Previous */

prev.addEventListener("click", () => {

    showSlide(currentSlide - 1);

    resetAutoSlide();

});


/* Dots */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showSlide(index);

        resetAutoSlide();

    });

});


/* Auto Slide */

function startAutoSlide() {

    autoSlide = setInterval(() => {

        showSlide(currentSlide + 1);

    }, 4000);

}


/* Reset */

function resetAutoSlide() {

    clearInterval(autoSlide);

    startAutoSlide();

}


/* Start */

showSlide(0);

startAutoSlide();