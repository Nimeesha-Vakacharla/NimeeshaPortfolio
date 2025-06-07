document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
            navLinks.forEach(link => link.classList.add('nav-link-scrolled'));
        } else {
            navbar.classList.remove('navbar-scrolled');
            navLinks.forEach(link => link.classList.remove('nav-link-scrolled'));
        }

        let currentSection = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    if (document.getElementById('particles-js')) {
        particlesJS("particles-js", {
            particles: {
                number: { value: 60, density: { enable: true, value_area: 1000 } },
                color: { value: var(--node-color) },
                shape: { type: "circle", stroke: { width: 0, color: var(--node-color) } },
                opacity: { value: 0.6, random: true },
                size: { value: 4, random: true },
                line_linked: {
                    enable: true,
                    distance: 120,
                    color: var(--node-color),
                    opacity: 0.5,
                    width: 1.5
                },
                move: {
                    enable: true,
                    speed: 4,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "grab" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    grab: { distance: 300, line_linked: { opacity: 0.7 } },
                    push: { particles_nb: 3 }
                }
            },
            retina_detect: true
        });
    } else {
        console.log("Particles.js container not found.");
    }
});