document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello World!");

  const form = document.getElementById("form");
  const email = document.getElementById("email");
  let input = email.value;
  //error msg "Please provide a valid email" + error icon when input field is empty || email address not formatted correctly

  form.addEventListener("submit", (event) => {
    // event.preventDefault();
    console.log(input);
  });

  // checkValidEmail = (input) => {
  //   let
  // };

  // let errorMsg = document.createElement("span");
  // errorMsg.id = "error-msg";
  // errorMsg.innerHTML = "Please provide a valid email";
  // document.body.appendChild(errorMsg);
});
