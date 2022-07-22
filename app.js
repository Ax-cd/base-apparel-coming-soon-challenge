document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const email = document.getElementById("email");
  const btn = document.getElementById("btn");

  // working
  btn.addEventListener("click", function (event) {
    event.preventDefault(); //stop form submission
    let emailAdress = email.value;
    if (!checkValid(emailAdress) || email === "") {
      email.classList.add("error-input");
      form.classList.add("error-msg");
    } else {
      email.classList.remove("error-input");
      form.classList.remove("error-msg");
    }
  });
  function checkValid(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // // not working... but why?
  // function submitEmail(event) {
  //   let emailAdress = email.value;
  //   if (!checkValid(emailAdress) || email === "") {
  //     email.classList.add("error-input");
  //     form.classList.add("error-msg");
  //     console.log("invalid email");
  //   }
  //   event.preventDefault();
  // }
  // form.addEventListener("submit", submitEmail);
});
