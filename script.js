document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });

    const navbar = document.querySelector('.navbar');
    const homeSection = document.querySelector('#home');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navbar.classList.remove('navbar-scrolled');
            } else {
                navbar.classList.add('navbar-scrolled');
            }
        });
    }, { threshold: 0.2 });

    observer.observe(homeSection);

    // Section observer for active navbar link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => sectionObserver.observe(section));

    particlesJS('particles-js', {
        particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: ['#ff9900', '#e50914', '#b0bec5'] },
            shape: { type: ['circle', 'triangle'] },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 100, color: '#b0bec5', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: 'none', random: true, straight: false, out_mode: 'out' }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' } },
            modes: { grab: { distance: 120, line_linked: { opacity: 0.6 } }, push: { particles_nb: 3 } }
        },
        retina_detect: true
    });

    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");
    const textArray = ["Data Analyst", "Data Engineer", "Gen AI Engineer", "ML Enthusiast"];
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            textArrayIndex = (textArrayIndex + 1) % textArray.length;
            setTimeout(type, 200);
        }
    }

    type();

    // Tag cloud animation
    const tags = document.querySelectorAll('.tag');
    tags.forEach((tag, index) => {
        setTimeout(() => {
            tag.style.animation = `rotateTag 10s linear infinite`;
            tag.style.animationDelay = `${index * 0.5}s`;
        }, 0);
    });

    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
        max: 10,
        speed: 300,
        glare: true,
        "max-glare": 0.2
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('timeline-item-visible');
            }
        });
    }, { threshold: 0.1 });

    timelineItems.forEach(item => timelineObserver.observe(item));
});