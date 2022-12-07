const hamburgerBtn = document.querySelector(".hamburger-btn");
const wrap1 = document.querySelector(".wrap_1");
const wrap2 = document.querySelector(".wrap_2");
const navBar = document.querySelector(".nav");
const navLinks = document.querySelector("#nav-links");
const closeIcon = document.querySelector("#close-btn");
const logo = document.querySelector(".logo");
const darkDiv = document.querySelector("#dark");
const screenWidth = screen.width;
const desktopImges = document.querySelectorAll(".desktop-img");
const smallImages = document.querySelectorAll(".sm-img");
const texts = document.querySelector(".slider-text").children;
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const title = document.querySelector(".about-head");
const totalSlides = desktopImges.length;
let index = 0;

let newTitle = title.innerHTML.toUpperCase();
title.innerHTML = newTitle;

hamburgerBtn.addEventListener("click", () => {
  // wrap1.classList.add("darker");
  // wrap2.classList.add("darker");
  darkDiv.classList.add("darken");
  logo.classList.add("nodisplay");
  navLinks.classList.add("nav-links-sm");
  hamburgerBtn.classList.add("unshowed");
  navBar.classList.add("nav_sm");
  closeIcon.classList.remove("unshowed");
  closeIcon.classList.add("showed");
});

closeIcon.addEventListener("click", function () {
  darkDiv.classList.remove("darken");
  logo.classList.remove("nodisplay");
  hamburgerBtn.classList.toggle("unshowed");
  navLinks.classList.toggle("nav-links-sm");
  navBar.classList.remove("nav_sm");
  closeIcon.classList.remove("showed");
  closeIcon.classList.add("unshowed");
});

function slideShow(direction) {
  if (direction == "next") {
    index++;
    if (index == totalSlides) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalSlides - 1;
    } else {
      index--;
    }
  }

  for (i = 0; i < totalSlides; i++) {
    screenWidth > 600
      ? desktopImges[i].classList.add("nodisplay")
      : smallImages[i].classList.remove("main");
    texts[i].classList.add("nodisplay");
  }
  screenWidth > 600
    ? desktopImges[index].classList.remove("nodisplay")
    : smallImages[index].classList.add("main");

  texts[index].classList.remove("nodisplay");
}
