"use strict";

const inputSections = document.querySelectorAll(".input__section");
const nextBtn = document.querySelector("#next__btn");
const prevBtn = document.querySelector("#prev__btn");
const submitBtn = document.querySelector("#submit__btn");

function sectionNavigation() {
  let currSection = 1;
  let maxSection = inputSections.length;

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
}

function observerSubmit() {
  const options = {
    threshold: 0.25,
  };

  const observer = new IntersectionObserver((section) => {
    if (section[0].isIntersecting) {
      submitBtn.classList.remove("element-hidden");
      nextBtn.classList.add("element-hidden");
    } else {
      submitBtn.classList.add("element-hidden");
      nextBtn.classList.remove("element-hidden");
    }
  }, options);

  observer.observe(inputSections[10]);
}

submitBtn.addEventListener("click", () => {
  // ! Testing
  const form = document.querySelector(".form").submit();
});

function start() {
  observerSubmit();
  sectionNavigation();
}

start();
