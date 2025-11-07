const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});
// header “stick” to the top of the page when you scroll down — a sticky navigation effect.

const toggleMenu = document.getElementById("toggleMenu");
toggleMenu.addEventListener("click", ()=> {
  const headerNav = document. getElementById("headerNav");
  headerNav.classList.toggle("active");
});