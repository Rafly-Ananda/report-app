"use strict";

const inputSection = document.querySelectorAll(".input__section");
const nextBtn = document.querySelector("#next__btn");
const prevBtn = document.querySelector("#prev__btn");
const submitBtn = document.querySelector("#submit__btn");
// const observer = new IntersectionObserver((section) => {
//   console.log(section);
// });

// observer.observe(inputSection[10]);

let currSection = 1;
let maxSection = inputSection.length;

const goToSection = (section) => {
  document.querySelector(`.input__row__${section}`).scrollIntoView({
    behavior: "smooth",
  });
};

const nextSection = () => {
  currSection === maxSection ? (currSection = 1) : currSection++;
  if (currSection === 11) {
    nextBtn.classList.add("element-hidden");
    submitBtn.classList.remove("element-hidden");
  }
  prevBtn.classList.remove("element-hidden");
  goToSection(currSection);
};

const prevSection = () => {
  currSection === 1 ? null : currSection--;
  if (currSection === 1) {
    prevBtn.classList.add("element-hidden");
  }
  nextBtn.classList.remove("element-hidden");
  submitBtn.classList.add("element-hidden");
  goToSection(currSection);
};

nextBtn.addEventListener("click", () => {
  nextSection();
});

prevBtn.addEventListener("click", () => {
  prevSection();
});
