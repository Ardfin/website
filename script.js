
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
document.addEventListener('click', function (e) {
  if (e.target.tagName === 'A' && window.innerWidth <= 768) {
    const navUl = document.querySelector('nav ul');
    const hamburger = document.querySelector('.hamburger');
    navUl.classList.remove('mobile-open');
    hamburger.classList.remove('active');
  }
});

// Close menu on window resize >768px
window.addEventListener('resize', function () {
  if (window.innerWidth > 768) {
    const navUl = document.querySelector('nav ul');
    const hamburger = document.querySelector('.hamburger');
    navUl.classList.remove('mobile-open');
    hamburger.classList.remove('active');
  }
});


const texts = [
  "Helping you to grow your wealth",
  "We provide right product for your need"
];

const speed = 50;
const eraseSpeed = 30;
const delay = 1200;

function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function type(el, text) {
  el.classList.add("typing");
  for (let i = 0; i < text.length; i++) {
    el.textContent += text[i];
    await sleep(speed);
  }
  el.classList.remove("typing");
}

async function erase(el) {
  el.classList.add("typing");
  while (el.textContent.length > 0) {
    el.textContent = el.textContent.slice(0, -1);
    await sleep(eraseSpeed);
  }
  el.classList.remove("typing");
}

async function loop() {
  const el = document.getElementById("text");
  let i = 0;

  while (true) {
    await type(el, texts[i]);
    await sleep(delay);
    await erase(el);

    i = (i + 1) % texts.length; // switch line
  }
}

texts2 = [
  "personalized.",
  "unbiased.",
  "for every goal of life."
];

async function loop2() {
  const el = document.getElementById("text2");
  let i = 0;

  while (true) {
    await type(el, texts2[i]);
    await sleep(delay);
    await erase(el);

    i = (i + 1) % texts2.length; // switch line
  }
}