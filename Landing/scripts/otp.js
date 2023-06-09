
const otp = {
    inputs:document.querySelectorAll("input[type='text']"),
    form:document.querySelector("#otpForm"),
    submitBtn:document.querySelector('button[type="submit"]')
}
console.log(otp.form);

function moveFocus(event) {
    var currentInput = event.target;
    var maxLength = parseInt(currentInput.getAttribute("maxlength"));
    
    if (currentInput.value.length === maxLength) {
        var nextInput = currentInput.nextElementSibling;
        if (nextInput !== null) {
            nextInput.focus();
        }
    }
}
const testInputNum = function (input) {
    let inputValue = input.value.trim();
    if (/^\d+$/.test(inputValue)) {
        inputValues.push(inputValue);
        otp.submitBtn.disabled = false;
        otp.submitBtn.style.backgroundColor = "rgb(46, 204, 113)";
    } else {
        inputValues.pop(inputValue);
        otp.submitBtn.disabled = true;
        otp.submitBtn.style.backgroundColor = "red";
    }
  };

const inputValues = [];
otp.inputs.forEach(inputs=>{
    inputs.addEventListener("input",(e)=>{
        moveFocus(e);
        testInputNum(e.target);
       
    });
})

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

  otp.form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("otp", `${inputValues.toString().split(',').join('')}`);
    const urlEncodedData = new URLSearchParams(formData).toString();
    window.location.href="../index.html"
    // sendToDb(url,urlEncodedData);
  })