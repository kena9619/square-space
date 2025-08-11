document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  const auth = document.querySelector(".auth-buttons");

  toggle.addEventListener("click", () => {
    const isVisible = nav.style.display === "flex";
    nav.style.display = isVisible ? "none" : "flex";
    auth.style.display = isVisible ? "none" : "block";
  });
});
