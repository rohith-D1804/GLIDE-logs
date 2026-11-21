
// =========================================
// GLIDE LOGISTICS
// MAIN JAVASCRIPT
// =========================================


// 1. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("mainNavigation");

menuToggle.addEventListener("click", () => {

    const isOpen = navigation.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.innerHTML = isOpen
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="menu"></i>';

    if (window.lucide) {
        lucide.createIcons();
    }

});


// 2. CLOSE MENU AFTER CLICKING A LINK

const navLinks = document.querySelectorAll(".nav-link, .header-cta");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");

        menuToggle.innerHTML = '<i data-lucide="menu"></i>';

        if (window.lucide) {
            lucide.createIcons();
        }

    });

});


// 3. DYNAMIC COPYRIGHT YEAR

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();


// 4. INITIALIZE ICONS

if (window.lucide) {
    lucide.createIcons();
}


// =========================================
// PREMIUM SCROLL HEADER
// =========================================

const siteHeader = document.querySelector(".site-header");

function updateHeader() {

    if (window.scrollY > 20) {
        siteHeader.classList.add("is-scrolled");
    } else {
        siteHeader.classList.remove("is-scrolled");
    }

}

window.addEventListener("scroll", updateHeader, {
    passive: true
});

// Set correct state when page loads
updateHeader();



// =========================================
// SCROLL-AWARE ACTIVE NAVIGATION
// =========================================

const pageSections = document.querySelectorAll(
    "#home, #about, #services, #fleet, #contact"
);

const navigationLinks = document.querySelectorAll(
    ".nav-link"
);

function updateActiveNavigation() {

    let currentSection = "home";

    pageSections.forEach((section) => {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= 160) {
            currentSection = section.id;
        }

    });

    // Handle reaching the bottom of the page
    if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5
    ) {
        currentSection = "contact";
    }

    navigationLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveNavigation, {
    passive: true
});

window.addEventListener("load", updateActiveNavigation);


// =========================================
// BOOKING FORM — FRONTEND DEMO ONLY
// =========================================

const bookingForm = document.getElementById("bookingForm");
const bookingDemoMessage = document.getElementById("bookingDemoMessage");

if (bookingForm && bookingDemoMessage) {
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!bookingForm.reportValidity()) {
            return;
        }

        bookingDemoMessage.hidden = false;
        bookingDemoMessage.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    });
}
