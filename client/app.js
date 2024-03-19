const form = document.getElementById("messageForm");

// when the form is submitted we run this function
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // console.log("the form has been comitted");   in console

  const formData = new FormData(form);

  const formValues = Object.fromEntries(formData);

  // we are going to give form Values to our API
  // our API will accept this object and does something with it
  // the smt in this case is just snding it back
  // in future we will add an entry to the DATABASE with our FormValues
  console.log(formValues); // remove with, but stay in brackets

  fetch("http://localhost:8080/messages", {
    // in the curlies is an optional property
    method: "POST",
    headers: {
      "Content-Type": "application/json", // json
    },
    body: JSON.stringify(formValues),
  });
});
