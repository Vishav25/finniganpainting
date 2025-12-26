window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  nav.style.boxShadow = window.scrollY > 10
    ? "0 4px 12px rgba(0,0,0,0.15)"
    : "0 2px 10px rgba(0,0,0,0.08)";
});
