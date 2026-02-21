const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navMenu");
const menuOverlay = document.getElementById("menuOverlay");

if (toggle && nav) {
  const closeMenu = () => {
    nav.classList.remove("active");
    toggle.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
    if (menuOverlay) {
      menuOverlay.classList.remove("active");
    }
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("active");
    toggle.classList.toggle("active", isOpen);
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.classList.toggle("menu-open", isOpen);
    if (menuOverlay) {
      menuOverlay.classList.toggle("active", isOpen);
    }
  });

  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  document.addEventListener("click", (event) => {
    if (!nav.classList.contains("active")) {
      return;
    }
    const clickedInsideNav = nav.contains(event.target);
    const clickedToggle = toggle.contains(event.target);
    if (!clickedInsideNav && !clickedToggle && !menuOverlay?.contains(event.target)) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
      closeMenu();
    }
  });
}

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const resetScrollTop = () => {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};

window.addEventListener("load", resetScrollTop);
window.addEventListener("pageshow", resetScrollTop);

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const images = document.querySelectorAll(".clickable");
const closeBtn = document.querySelector(".close");

if (modal && modalImg && closeBtn && images.length) {
  const openModal = (imageSrc, imageAlt) => {
    modalImg.src = imageSrc;
    modalImg.alt = imageAlt || "Painting project preview";
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  };

  images.forEach((img) => {
    img.addEventListener("click", () => {
      openModal(img.src, img.alt);
    });
  });

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
}

const form = document.querySelector(".contact-form form");
if (form) {
  form.addEventListener("submit", () => {
    alert("Your email app will open so you can send this request.");
  });
}
