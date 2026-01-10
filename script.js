/* ================= MOBILE MENU TOGGLE ================= */

const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navMenu");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggle.classList.toggle("active");
});

/* Close menu when clicking a nav link (mobile UX) */
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    toggle.classList.remove("active");
  });
});

/* ================= IMAGE MODAL ================= */

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const images = document.querySelectorAll(".clickable");
const closeBtn = document.querySelector(".close");

/* Open modal */
images.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

/* Close modal */
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

/* Close modal when clicking outside image */
modal.addEventListener("click", () => {
  modal.style.display = "none";
});

const form = document.querySelector(".contact-form form");

form.addEventListener("submit", function() {
  alert("Your email app will open to send your request.");
});
