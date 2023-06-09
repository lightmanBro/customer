const login = {
  form: document.querySelector("#registrationForm"),
  email: document.querySelector('input[id="email"]'),
  password: document.querySelector('input[id="password"]'),
  confirmPassword: document.querySelector("input[id='confirmPassword']"),
  passwordError: document.querySelector('#passwordError'),
  submitBtn:document.querySelector('#submit-btn'),
  incorrect:document.querySelector('#passwordError')
};

login.incorrect.style.display = "none";

const testInputSpecialChar = function (input) {
  let inputValue = input.value.trim();
  if (!/[&<>'"`=]/.test(inputValue)) {
    login.submitBtn.disabled = false;
    login.submitBtn.style.backgroundColor = "rgb(46, 204, 113)";
    login.incorrect.style.display = "none";
  } else {
    login.submitBtn.disabled = true;
    login.submitBtn.style.backgroundColor = "red";
    login.incorrect.style.display = "block";
  }
};

function validateForm(event) {
  event.preventDefault();
  if (login.password.value !== login.confirmPassword.value) {
    login.passwordError.textContent = "Passwords does not match.";
  } else {
    passwordError.textContent = "";
    document.getElementById("registrationForm").submit();
  }
}


//Function to send data to database
async function sendToDb(url,formData) {
    try {
        let response = await fetch(url, {
            method: 'POST',
            body:formData
        });
        if (response.ok) {
            let data =await  response.json();
            console.log(data);
        }
    } catch (error) {
        
        receiverName.innerHTML= ``;
    }
}


// Put the whole input into an array and call a function on each of them.
const inputs = [login.password, login.confirmPassword, login.email];
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    testInputSpecialChar(e.target);
  });
});
login.form.addEventListener("submit", (e) => {
  validateForm(e.target);
});


const url = '/login.php';

login.form.addEventListener('submit',(e)=>{
    const formData = new FormData();
    formData.append('userEmail',login.email);
    formData.append('password',login.password);
    formData.append('confirm_password',login.confirmPassword);
    const urlEncodedData = new URLSearchParams(formData).toString();
    console.log(urlEncodedData);

    sendToDb(url,urlEncodedData)
})


