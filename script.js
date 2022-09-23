"use strict";

function showNav() {
  document.querySelector(".hamburger").classList.toggle("nav__open");
  document.querySelector(".nav__mobile").classList.toggle("nav__active");
  document.querySelector(".overlay").classList.toggle("hidden");
}

const dropArrow = document.querySelectorAll(".arrow__down");
const list = document.querySelectorAll(".dropdown__list");
const openArrow = document.querySelectorAll(".arrow__up");
for (let i = 0; i < list.length; i++) {
  dropArrow[i].addEventListener("click", function () {
    list[i].classList.remove("hidden");
    dropArrow[i].classList.add("hidden");
    openArrow[i].classList.remove("hidden");
  });

  openArrow[i].addEventListener("click", function () {
    list[i].classList.add("hidden");
    dropArrow[i].classList.remove("hidden");
    openArrow[i].classList.add("hidden");
  });
}
