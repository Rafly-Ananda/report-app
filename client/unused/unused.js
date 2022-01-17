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

// function postRequest() {
//   const form = document.querySelector("#form");
//   form.addEventListener("submit", async (e) => {
//     try {
//       // e.preventDefault();
//       form.submit().then((res) => {
//         console.log(res);
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   });
// }

// ____________________Populate Form (testing tools)_________________________________ //

function placeholderVal() {
  const arr = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const randomData = Math.floor(Math.random() * arr.length);
  return arr[randomData];
}

function placeholderVal2() {
  const arr = [0, 1];
  const randomData = Math.floor(Math.random() * arr.length);
  return arr[randomData];
}

const generateData = document.querySelector(".populateData");
generateData.addEventListener("click", () => {
  function percentageRow() {
    for (let i = 1; i <= 11; i++) {
      for (let j = 1; j <= 6; j++) {
        if (!document.querySelector(`#row__${i}__input__${j}`)) {
          continue;
        } else {
          document.querySelector(`#row__${i}__input__${j}`).value =
            placeholderVal();
        }
      }
    }
  }

  function notPercentageRow() {
    for (let i = 1; i <= 11; i++) {
      for (let j = 1; j <= 6; j++) {
        if (!document.querySelector(`#row__${i}__input__${j}__spc`)) {
          continue;
        } else {
          document.querySelector(`#row__${i}__input__${j}__spc`).value =
            placeholderVal2();
        }
      }
    }
  }

  percentageRow();
  notPercentageRow();
});
