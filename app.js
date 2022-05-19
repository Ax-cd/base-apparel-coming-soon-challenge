document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const email = document.getElementById("email");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); //stop form submission
    let emailAdress = email.value;

    if (!checkValid(emailAdress) || email === "") {
      form.classList.add("error");
    } else {
      form.classList.remove("error");
    }
  });

  function checkValid(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
});
