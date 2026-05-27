/**
 * Portfolio Website - Main JavaScript
 * Features: Theme toggle, Mobile menu, Scroll animations
 */

// ============ THEME TOGGLE ============
(function initTheme() {
  try {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      const themeBtn = document.getElementById('themeBtn');
      if (themeBtn) themeBtn.textContent = '☀️';
    }
  } catch (e) {
    console.warn('localStorage not available:', e);
  }
})();

window.toggleTheme = function() {
  const html = document.documentElement;
  const btn = document.getElementById('themeBtn');
  const isDark = html.getAttribute('data-theme') === 'dark';
  
  // Add transition class
  document.body.classList.add('theme-transition');
  
  if (isDark) {
    html.removeAttribute('data-theme');
    if (btn) btn.textContent = '🌙';
    try { localStorage.setItem('theme', 'light'); } catch (e) {}
  } else {
    html.setAttribute('data-theme', 'dark');
    if (btn) btn.textContent = '☀️';
    try { localStorage.setItem('theme', 'dark'); } catch (e) {}
  }
  
  // Remove transition class after animation
  setTimeout(() => {
    document.body.classList.remove('theme-transition');
  }, 300);
};

// ============ MOBILE MENU ============
window.toggleMenu = function() {
  const menu = document.getElementById('mobileMenu');
  if (menu) {
    menu.classList.toggle('open');
  }
};

window.closeMenu = function() {
  const menu = document.getElementById('mobileMenu');
  if (menu) {
    menu.classList.remove('open');
  }
};

// Close menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});

// ============ INTERSECTION OBSERVER FOR ANIMATIONS ============
function initIntersectionObserver() {
  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, options);

  // Observe skill cards for animation
  document.querySelectorAll('.skill-card').forEach(card => {
    observer.observe(card);
  });
}

// Initialize observer when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initIntersectionObserver);
} else {
  initIntersectionObserver();
}

// ============ SMOOTH SCROLL BEHAVIOR ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      closeMenu();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ============ KEYBOARD ACCESSIBILITY ============
// Allow theme toggle with keyboard
document.addEventListener('keydown', function(e) {
  const themeBtn = document.getElementById('themeBtn');
  if (e.key === 't' && e.ctrlKey && themeBtn) {
    toggleTheme();
  }
});

// Close menu on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeMenu();
  }
});
