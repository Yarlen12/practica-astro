const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
  hamburger.classList.toggle("ri-close-large-fill");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-fill");
  });
});

// SHOW SCROLL UP
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");

  if (window.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
};

window.addEventListener("scroll", scrollUp);

// CHANGE BACKGROUND HEADER
const scrollHeader = () => {
  const header = document.getElementById("navbar");

  if (window.scrollY >= 250) {
    header.classList.add("border-b", "border-yellow-500");
  } else {
    header.classList.remove("border-b", "border-yellow-500");
  }
};

window.addEventListener("scroll", scrollHeader);

// SWIPER
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// SCROLL SECTION
const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLink = document.querySelectorAll(".nav-link");

  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((item) => {
    item.classList.remove("active");

    if (item.href.includes(current)) {
      item.classList.add("active");
    }
  });
};

window.addEventListener("scroll", activeLink);

// SCROLL REVEAL ANIMATION
import ScrollReveal from "../js/scrollreveal.min.js";
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset: true,
});

console.log(document.querySelector(".home_data")); // Debe imprimir el elemento o 'null'
console.log(document.querySelector(".home_image"));

sr.reveal(".home_data, .about_top");
sr.reveal(".home_image", { delay: 500, scale: 0.5 });

sr.reveal(".service_card", { interval: 100 });

sr.reveal(".about_leaf", { delay: 1000, origin: "right" });
sr.reveal(".about_item-1-content, .about_item-2-img", {
  origin: "right",
});
sr.reveal(".about_item-2-content, .about_item-1-img", {
  origin: "left",
});
