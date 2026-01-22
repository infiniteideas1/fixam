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
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(5, 5, 17, 0.9)';
      nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    } else {
      nav.style.background = 'rgba(15, 16, 33, 0.6)';
      nav.style.boxShadow = '0 10px 40px rgba(0,0,0,0.3)';
    }
  });

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
});

