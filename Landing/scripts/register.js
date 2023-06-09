const register = {
  form: document.querySelector("#registrationForm"),
  name: document.querySelector('input[id="name"]'),
  email: document.querySelector('input[id="email"]'),
  phone: document.querySelector('input[id="Phone"]'),
  address: document.querySelector('input[id="address"]'),
  city: document.querySelector('input[id="city"]'),
  state: document.querySelector('input[id="State"]'),
  password: document.querySelector('input[id="password"]'),
  confirmPassword: document.querySelector("input[id='confirmPassword']"),
  passwordError: document.querySelector("#passwordError"),
  submitBtn: document.querySelector('button[type="submit"]'),
  incorrect: document.querySelector("#passwordError1"),
};

register.passwordError.style.display = "none";
register.incorrect.style.display = "none";

const testInputNum = function (input) {
  let inputValue = input.value.trim();
  if (/^\d+$/.test(inputValue)) {
    register.submitBtn.disabled = false;
    register.submitBtn.style.backgroundColor = "rgb(46, 204, 113)";
  } else {
    register.submitBtn.disabled = true;
    register.submitBtn.style.backgroundColor = "red";
  }
};

const testInputSpecialChar = function (input) {
  let inputValue = input.value.trim();
  if (!/[&<>'"`=]/.test(inputValue)) {
    register.submitBtn.disabled = false;
    register.submitBtn.style.backgroundColor = "rgb(46, 204, 113)";
    register.passwordError.style.display = "none";
  } else {
    register.submitBtn.disabled = true;
    register.submitBtn.style.backgroundColor = "red";
    register.passwordError.style.display = "block";
  }
};

function validatePassword(e) {
  e.preventDefault();
}

//Function to send data to database
async function sendToDb(url, formData) {
  try {
    let response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      let data = await response.json();
      console.log(data);
    }
  } catch (error) {
    receiverName.innerHTML = ``;
  }
}

// Put the whole input into an array and call a function on each of them.
const inputs = [
  register.name,
  register.email,
  register.address,
  register.city,
  register.phone,
  register.password,
];
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    testInputSpecialChar(e.target);
  });
});

//Checking the input value of the phone if it's a number
register.phone.addEventListener("input", (e) => {
  testInputNum(e.target);
});

//php file path
const url = "/login.php";

register.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("userEmail", register.email.value);
  formData.append("password", register.password.value);
  formData.append("name", register.name.value);
  formData.append("state", register.state.value);
  formData.append("city", register.city.value);
  formData.append("phone", register.phone.value);
  formData.append("confirm_password", register.confirmPassword.value);
  const urlEncodedData = new URLSearchParams(formData).toString();

  if (register.phone.value.length < 11 || register.phone.value.length > 11) {
    alert("phone number cannot be lesser or greater then 11");
  } else if (register.password.value !== register.confirmPassword.value) {
    register.incorrect.style.display = "block";
    register.incorrect.innerHTML = "password does not match";
  } else {
    sendToDb(url, urlEncodedData);
    console.log("sent");
    window.location.href="./otp.html"
  }
});
