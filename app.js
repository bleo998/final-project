// SWITCH BETWEEN FORMS
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const switchToLogIn = document.getElementById("switchToLogIn");
const switchToRegister = document.getElementById("switchToRegister");
let regForm = document.getElementById("regForm");
let logForm = document.getElementById("logForm");

switchToRegister.addEventListener("click", (event) => {
  event.preventDefault();
  registerForm.classList.add("d-block");
  registerForm.classList.remove("d-none");
  loginForm.classList.add("d-none");
});
switchToLogIn.addEventListener("click", (event) => {
  event.preventDefault();
  loginForm.classList.add("d-block");
  loginForm.classList.remove("d-none");
  registerForm.classList.add("d-none");
});
let users = [
  {
    firstName: "Leo",
    lastName: "Bajramov",
    email: "leo@example.com",
    password: "13371337",
  },
];

// let fetchUsers = fetch(
//   "https://66c3da32d057009ee9c15c17.mockapi.io/users"
// ).then((response) =>
//   response.json().then((data) => {
//     users = data;
//   })
// );

// REGISTER FORM

regForm.addEventListener("submit", (event) => {
  event.preventDefault();

  checkInputs(users);
});

async function checkInputs() {
  let errorName = document.getElementById("errorName");
  let errorLastName = document.getElementById("errorLastName");
  let errorEmail = document.getElementById("errorEmail");
  let errorPassword = document.getElementById("errorPassword");

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let registerEmail = document.getElementById("registerEmail").value;
  let registerPassword = document.getElementById("registerPassword").value;
  let errorMessage = document.getElementById("errorMessage");
  let validRegister = true;

  if (firstName.length < 3) {
    errorName.textContent = "Name must be at least 3 characters.";
    validRegster = false;
  } else {
    errorName.textContent = "";
  }

  if (lastName.length < 3) {
    errorLastName.textContent = "Your Last Name is too short!";
    validRegister = false;
  } else {
    errorLastName.textContent = "";
  }

  if (!registerEmail.includes("@") || registerEmail.length < 3) {
    errorEmail.textContent = "Please enter valid email";
    validRegister = false;
  } else {
    errorEmail.textContent = "";
  }

  if (registerPassword.length < 8) {
    errorPassword.textContent = "Your password must be atleast 8 characters!";
    validRegister = false;
  } else {
    errorPassword.textContent = "";
  }

  if (validRegister) {
    let userInfo = {
      firstName: firstName,
      lastName: lastName,
      email: registerEmail,
      password: registerPassword,
    };
    users.push(userInfo);
    console.log(users);

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("registerEmail").value = "";
    document.getElementById("registerPassword").value = "";
    document.getElementById("successRegister").textContent =
      "Registration successfuly, Thank you!";
  }
  function checkIf() {
    if (validRegister) {
      regForm.innerHTML = `<h5 class="my-5 text-success text-center d-flex flex-column">
      You will be redirected to
      <br> Log in page in 5 seconds
      </h5>`;
      setTimeout(function redirectFunc() {
        registerForm.classList.add("d-none");
        loginForm.classList.add("d-block");
        loginForm.classList.remove("d-none");
      }, 5000);
    }
  }
  setTimeout(checkIf, 2000);

  const response = await fetch(
    "https://66c3da32d057009ee9c15c17.mockapi.io/users",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(users),
    }
  );
}

// LOGIN FORM
logForm.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;
  const errorLogin = document.getElementById("errorLogin");
  const login = users.find(
    (user) => user.email === loginEmail && user.password === loginPassword
  );

  if (login) {
    window.location.replace("cities.html");
    errorLogin.innerText = "";
  } else {
    errorLogin.innerText = "Invalid email or password!";
  }
});
