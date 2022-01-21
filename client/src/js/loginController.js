"use stric";

import axios from "axios";

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const loginBtn = document.querySelector(".login__btn");

const loginHandler = (uname, passwd) => {
  axios.post("/login", {
    username: uname.value,
    password: passwd.value,
  });
  // .then((res) => {
  //   const username = Object.values(JSON.parse(res.config.data))[0];
  //   // window.location = "/view";
  //   console.log(res);
  // });
};

// loginBtn.addEventListener("click", () => {
//   //   loginHandler(username, password);

// });
