
// ==========================
// MOBILE NAVIGATION
// ==========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    const opened = navLinks.classList.toggle("active");

    menuBtn.setAttribute("aria-expanded", opened);

    menuBtn.innerHTML = opened
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';

});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    });

});


// ==========================
// DARK / LIGHT MODE
// ==========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const lightMode = document.body.classList.contains("light");

    themeBtn.innerHTML = lightMode
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';

    localStorage.setItem("theme", lightMode ? "light" : "dark");

});


// LOAD SAVED THEME

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light");

    themeBtn.innerHTML = '<i class="fas fa-sun"></i>';

}


// ==========================
// BACK TO TOP
// ==========================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==========================
// AUTOMATIC COPYRIGHT YEAR
// ==========================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ==========================
// HEADER SCROLL EFFECT
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    header.style.boxShadow = window.scrollY > 50
        ? "0 5px 30px rgba(0,0,0,.2)"
        : "none";

});
