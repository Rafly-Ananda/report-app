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
    if (currSection === 2) {
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

  observer.observe(inputSections[1]);
}

// form post
function postRequest() {
  const form = document.querySelector("#form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(form);

    console.log(form.elements);

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
