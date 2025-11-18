// Mobile Nav Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
      navLinks.classList.remove('active'); // close mobile menu
    }
  });
});

// Materials Data (Extendable!)
const materials = [
  { name: "Reinforced Concrete", desc: "High-strength, durable, fire-resistant.", img: "concrete.jpg" },
  { name: "Structural Steel", desc: "Lightweight, high tensile strength, recyclable.", img: "steel.jpg" },
  { name: "Brick Masonry", desc: "Thermal insulation, low maintenance, aesthetic.", img: "brick.jpg" },
  { name: "Timber", desc: "Renewable, easy to work with, natural look.", img: "timber.jpg" }
];

// Render Materials
const materialsGrid = document.getElementById('materialsGrid');
materials.forEach(mat => {
  const card = document.createElement('div');
  card.className = 'material-card';
  card.innerHTML = `
    <img src="assets/images/${mat.img}" alt="${mat.name}">
    <div class="content">
      <h4>${mat.name}</h4>
      <p>${mat.desc}</p>
    </div>
  `;
  materialsGrid.appendChild(card);
});

// Design Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active from all
    tabBtns.forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

    // Add active to clicked
    btn.classList.add('active');
    const targetTab = btn.getAttribute('data-tab');
    document.getElementById(targetTab).classList.add('active');
  });
});

// Form Submission (Basic Alert — Replace with real backend later)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you! Your message has been sent. We’ll contact you soon.');
  this.reset();
});

// Optional: Add scroll animation (e.g., fade-in on scroll)
// You can extend with libraries like AOS.js later.