let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let navLinks = document.querySelectorAll("header nav a");
let sections = document.querySelectorAll("section");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
  if (navbar.classList.contains("active")) {
    navLinks.forEach((link) => link.classList.remove("active"));
  }
};

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => link.classList.remove("active"));
      document
        .querySelector('header nav a[href*="' + id + '"]')
        .classList.add("active");
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  if (!navbar.classList.contains("active")) {
    menuIcon.classList.remove("fa-xmark");
  }
  navbar.classList.remove("active");
};

// Corrected the initialization of scrollReveal
ScrollReveal().reveal(".home-content, .heading", {
  origin: "top",
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom", distance: "80px", duration: 2000, delay: 200 }
);
ScrollReveal().reveal(".home-contact h1, .about-img", {
  origin: "left",
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-contact p, .about-content", {
  origin: "right",
  distance: "80px",
  duration: 2000,
  delay: 200,
});
 
const typed=new Typed('.multiple-text',{
    strings:['MERN Stack Developer','Web Designer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
})
