"use strict";

import axios from "axios";

const inputSections = document.querySelectorAll(".input__section");
const nextBtn = document.querySelector("#next__btn");
const prevBtn = document.querySelector("#prev__btn");
const submitBtn = document.querySelector("#submit__btn");

function sectionNavigation() {
  let currSection = 0;
  let maxSection = inputSections.length;

  const goToSection = (section) => {
    document.querySelector(`.input__row__${section}`).scrollIntoView({
      behavior: "smooth",
    });
  };

  const nextSection = () => {
    currSection === maxSection ? (currSection = 0) : currSection++;
    if (currSection === 12) {
      nextBtn.classList.add("element-hidden");
      submitBtn.classList.remove("element-hidden");
    }
    prevBtn.classList.remove("element-hidden");
    goToSection(currSection);
  };

  const prevSection = () => {
    currSection === 0 ? null : currSection--;
    if (currSection === 0) {
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

  observer.observe(inputSections[11]);
}

function postRequest() {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    const inputs = document.getElementsByTagName("input");

    for (let key of inputs) {
      console.log(key);
    }
    // ? checking key & values
    // for (var [key, value] of formData.entries()) {
    //   console.log(key + ":" + value);
    // }
    // const formProps = Object.fromEntries(formData);
    // ? post request
    // axios.post("/upload", formData).then((res) => {
    //   console.log(res);
    // });
  });
}

function start() {
  observerSubmit();
  sectionNavigation();
  // postRequest();
}

start();

// submitBtn.addEventListener("click", () => {
//   console.log("clicked");
// });

// ____________________Populate Form (testing tools)_________________________________ //

function placeholderVal() {
  const arr = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const randomData = Math.floor(Math.random() * arr.length);
  return arr[randomData];
}

const generateData = document.querySelector(".populateData");
generateData.addEventListener("click", () => {
  for (let i = 1; i <= 11; i++) {
    for (let j = 1; j <= 6; j++) {
      document.querySelector(`#row__${i}__input__${j}`).value =
        placeholderVal();
    }
  }
});
