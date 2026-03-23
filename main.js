// ===== Mobile Navigation =====
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ===== Scroll Animations =====
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Add fade-up class to animatable elements
document.querySelectorAll(
  '.section-tag, .section-title, .about-text, .about-values, ' +
  '.research-card, .newsletter-text, .newsletter-form, ' +
  '.contact-text, .contact-form, .value-card'
).forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});

// ===== Newsletter Form =====
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('input[name="name"]').value;

  form.innerHTML = `
    <div class="form-success">
      <div class="form-success-icon">&#10003;</div>
      <h3>Welcome, ${escapeHtml(name)}!</h3>
      <p>You've been subscribed to the Noesis Forge newsletter.</p>
    </div>
  `;
});

// ===== Contact Form =====
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;

  form.innerHTML = `
    <div class="form-success">
      <div class="form-success-icon">&#10003;</div>
      <h3>Message sent!</h3>
      <p>Thank you for reaching out. We'll get back to you soon.</p>
    </div>
  `;
});

// ===== Utility =====
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
