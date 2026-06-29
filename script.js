// ==========================
// SRIMA PAINT HOUSE
// script.js
// ==========================


// --------------------------
// Reveal Sections on Scroll
// --------------------------

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.15

});

hiddenElements.forEach((el) => observer.observe(el));


// --------------------------
// Scroll To Top Button
// --------------------------

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.pageYOffset > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// --------------------------
// Executive Card Animation
// --------------------------

const cards = document.querySelectorAll(".executive-card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});


// --------------------------
// Brand Card Hover Effect
// --------------------------

const brands = document.querySelectorAll(".brand-grid a");

brands.forEach((brand) => {

    brand.addEventListener("mouseenter", () => {

        brand.style.transform = "translateY(-10px)";

    });

    brand.addEventListener("mouseleave", () => {

        brand.style.transform = "translateY(0px)";

    });

});


// --------------------------
// Smooth Fade-in on Page Load
// --------------------------

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});


// --------------------------
// Hero Logo Animation
// --------------------------

const logo = document.querySelector(".logo");

if (logo) {

    setInterval(() => {

        logo.animate([

            {

                transform: "rotate(0deg)"

            },

            {

                transform: "rotate(2deg)"

            },

            {

                transform: "rotate(-2deg)"

            },

            {

                transform: "rotate(0deg)"

            }

        ], {

            duration: 2500

        });

    }, 3000);

}


// --------------------------
// Button Ripple Effect
// --------------------------

const buttons = document.querySelectorAll(".whatsapp-btn");

buttons.forEach((button) => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(button.clientWidth, button.clientHeight);

        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;

        circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;

        circle.style.top = `${e.clientY - button.offsetTop - radius}px`;

        circle.classList.add("ripple");

        const ripple = button.getElementsByClassName("ripple")[0];

        if (ripple) {

            ripple.remove();

        }

        button.appendChild(circle);

    });

});


// --------------------------
// Console Message
// --------------------------

console.log("%cSRIMA PAINT HOUSE WEBSITE LOADED",
"color:gold;font-size:18px;font-weight:bold;");