"use strict";

const inputSection = document.querySelectorAll(".input__section");
const nextBtn = document.querySelector("#next__btn");
const prevBtn = document.querySelector("#prev__btn");
const submitBtn = document.querySelector("#submit__btn");

let currSection = 1;
let maxSection = inputSection.length;

const goToSection = (section) => {
  document.querySelector(`.input__row__${section}`).scrollIntoView({
    behavior: "smooth",
  });
};

const nextSection = () => {
  currSection === maxSection ? (currSection = 1) : currSection++;
  if (currSection === 11) submitBtn.classList.remove("element-hidden");
  goToSection(currSection);
};

const prevSection = () => {
  currSection === 1 ? (currSection = maxSection) : currSection--;
  goToSection(currSection);
};

nextBtn.addEventListener("click", () => {
  nextSection();
});

prevBtn.addEventListener("click", () => {
  prevSection();
});
