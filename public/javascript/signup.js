async function signupFormHandler(event) {
  event.preventDefault();
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const location = document.querySelector("#location-signup").value.trim()
  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "Post",
      body: JSON.stringify({
        username,
        email,
        location,
        password,
        
      }),
      headers: { "Content-Type": "application/json" },
    });
    //check the response status
    if (response.ok) {
      console.log(response);
      console.log("success");
    } else {
      alert(response.statusText);
    }
  }
}


document.querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);