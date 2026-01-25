/* Initialize AOS (Animate On Scroll) */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        mirror: false,
        offset: 120
    });

    // Numerical Counter Animation Logic
    const counters = document.querySelectorAll('.counter');
    const counterObserverOptions = {
        threshold: 1,
        rootMargin: "0px 0px -50px 0px"
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const duration = 2000; // 2 seconds animation
                const startTime = performance.now();

                function updateCounter(currentTime) {
                    const elapsedTime = currentTime - startTime;
                    const progress = Math.min(elapsedTime / duration, 1);
                    const currentValue = Math.floor(progress * target);

                    counter.innerText = currentValue;

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target;
                    }
                }

                requestAnimationFrame(updateCounter);
                observer.unobserve(counter); // Only animate once
            }
        });
    }, counterObserverOptions);

    counters.forEach(counter => counterObserver.observe(counter));

    // FAB Toggle Logic
    const fabMain = document.getElementById('fab-main');
    const fabContainer = document.querySelector('.fab-container');

    if (fabMain && fabContainer) {
        fabMain.addEventListener('click', (e) => {
            e.stopPropagation();
            fabContainer.classList.toggle('active');

            const icon = fabMain.querySelector('i');
            if (fabContainer.classList.contains('active')) {
                icon.classList.remove('fa-comment-dots');
                icon.classList.add('fa-times');
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-comment-dots');
                icon.style.transform = 'rotate(0deg)';
            }
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!fabContainer.contains(e.target) && fabContainer.classList.contains('active')) {
                fabContainer.classList.remove('active');
                const icon = fabMain.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-comment-dots');
                icon.style.transform = 'rotate(0deg)';
            }
        });
    }

    // Scroll Navbar Effect
    const nav = document.querySelector('nav');
    const isInternalNav = nav.classList.contains('internal-nav');

    function updateNav() {
        // We only toggle transparency for pages that are NOT marked internal-nav (like index.html)
        if (!isInternalNav) {
            if (window.scrollY > 50) {
                nav.style.background = 'var(--midnight-blue)';
                nav.style.borderBottom = '2px solid var(--primary-red)';
                nav.style.position = 'fixed';
            } else {
                nav.style.background = 'transparent';
                nav.style.borderBottom = 'none';
                nav.style.position = 'absolute';
            }
        }
    }

    window.addEventListener('scroll', updateNav);
    updateNav(); // Initial check

    // Mobile Menu Logic
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', (e) => {
            e.preventDefault();
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeMenuBtn && mobileMenu) {
        closeMenuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto'; // Restore scroll
        });
    }
    // Scroll to Top Logic
    const scrollTopBtn = document.getElementById('scroll-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* Typewriter Effect with Rotating Tips */
    const typewriterElement = document.getElementById('typewriter-text');
    if (typewriterElement) {
        const tips = [
            "Enable Two-Factor Authentication (2FA) on all accounts.",
            "Use strong, unique passwords for every platform.",
            "Be wary of unsolicited 'password reset' emails.",
            "Review your active login sessions regularly.",
            "Avoid clicking suspicious links in DMs.",
            "Set your social media profiles to private.",
            "Update your recovery email and phone number.",
            "Never share your OTP codes with anyone.",
            "Revoke access for unused third-party apps.",
            "Backup your important data and chats frequently."
        ];

        // Initialize
        typewriterElement.innerHTML = ''; // Use innerHTML to clear
        const cursor = document.createElement('span');
        cursor.className = 'typewriter-cursor';
        typewriterElement.appendChild(cursor);

        let tipIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 50;

        function type() {
            const currentTip = tips[tipIndex];

            // Safe substring logic
            if (isDeleting) {
                charIndex = Math.max(0, charIndex - 1);
            } else {
                charIndex = Math.min(currentTip.length, charIndex + 1);
            }

            const displayedText = currentTip.substring(0, charIndex);
            typewriterElement.textContent = displayedText;
            typewriterElement.appendChild(cursor); // Re-append cursor

            if (!isDeleting && charIndex === currentTip.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                tipIndex = (tipIndex + 1) % tips.length;
                typeSpeed = 500;
            } else {
                typeSpeed = isDeleting ? 30 : 50;
            }

            setTimeout(type, typeSpeed);
        }

        type(); // Start immediately
    }

    /* Initialize Particles.js */
    if (document.getElementById('particles-js')) {
        const isMobile = window.innerWidth <= 768;
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": isMobile ? 30 : 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.2,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 4,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.3,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1.5,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 0.5
                        }
                    }
                }
            },
            "retina_detect": true
        });
    }
});
