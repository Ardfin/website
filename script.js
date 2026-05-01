
function goToPage(name) {
    // go to name.html
    window.location.href = name + ".html";
}

// Hamburger mobile menu toggle
function toggleMobileMenu() {
  const navUl = document.querySelector('nav ul');
  const hamburger = document.querySelector('.hamburger');
  navUl.classList.toggle('mobile-open');
  hamburger.classList.toggle('active');
}

// Close mobile menu when clicking a link
document.addEventListener('click', function(e) {
  if (e.target.tagName === 'A' && window.innerWidth <= 768) {
    const navUl = document.querySelector('nav ul');
    const hamburger = document.querySelector('.hamburger');
    navUl.classList.remove('mobile-open');
    hamburger.classList.remove('active');
  }
});

// Close menu on window resize >768px
window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    const navUl = document.querySelector('nav ul');
    const hamburger = document.querySelector('.hamburger');
    navUl.classList.remove('mobile-open');
    hamburger.classList.remove('active');
  }
});
