/* ======================================================
   MacBook Pro M4 Landing Page
   JavaScript
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       Mobile Menu Toggle
    =============================== */

    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuBtn && mobileMenu) {

        menuBtn.addEventListener("click", () => {

            mobileMenu.classList.toggle("hidden");

        });

    }

    /* ===============================
       FAQ Accordion
    =============================== */

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {

        question.addEventListener("click", () => {

            const answer = question.nextElementSibling;
            const icon = question.querySelector("span");

            document.querySelectorAll(".faq-answer").forEach(item => {

                if (item !== answer) {

                    item.classList.add("hidden");

                }

            });

            document.querySelectorAll(".faq-question span").forEach(item => {

                if (item !== icon) {

                    item.textContent = "+";

                }

            });

            answer.classList.toggle("hidden");

            icon.textContent =
                answer.classList.contains("hidden") ? "+" : "−";

        });

    });

    /* ===============================
       Back To Top Button
    =============================== */

    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            backToTop.classList.remove("hidden");

        } else {

            backToTop.classList.add("hidden");

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

    /* ===============================
       Active Navbar Link
    =============================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("text-black", "font-bold");

            if (link.getAttribute("href") === "#" + current) {

            link.classList.add("text-black", "font-bold");

            }

        });

    });

    /* ===============================
       Scroll Reveal Animation
    =============================== */

    const revealElements = document.querySelectorAll("section");

    function revealOnScroll() {

        const windowHeight = window.innerHeight;

        revealElements.forEach(element => {

            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {

                element.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();

});