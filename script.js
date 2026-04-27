/*Para el menu, para que se ajuste al responsive mostrando un icono de tres rayitas horizontales*/

const menu_ = document.getElementById("menu_");
const navLinks = document.getElementById("navLinks");

menu_.addEventListener("click", () => {
  menu_.classList.toggle("active");
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    menu_.classList.remove("active");
    navLinks.classList.remove("active");
  });
});
