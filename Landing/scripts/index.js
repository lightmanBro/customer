/*This script is connected to landing page html to receive form data, check and sanitize the input values then send it to the database.
The landing page send message form data to database.
this code is written by RM.
*/
const enquiry ={
    form :document.querySelector('#enquiry_form'),
    userName: document.querySelector('input[name="mailer_name"]'),
    userEmail:document.querySelector('input[name="email_address"]'),
    userPhone:document.querySelector('input[name="phone_number"]'),
    mailSubject: document.querySelector('input[name="mail_subject"]'),
    mailBody:document.querySelector('textarea[name="message"]'),
    submitBtn: document.querySelector('button[id="submit-btn"]'),
    incorrect: document.querySelector('.incorrect')
}


enquiry.incorrect.style.display = 'none';
enquiry.incorrect.style.color = 'red';

//Php file url path
const url = "database.php"

const testInputNum = function(input){
    let inputValue = input.value.trim();
    if(/^\d+$/.test(inputValue)){
       enquiry.submitBtn.disabled = false;
       enquiry.submitBtn.style.backgroundColor = "rgb(46, 204, 113)";
    //    enquiry.incorrect.style.display = 'none';
    }else{
        enquiry.submitBtn.disabled = true;
        enquiry.submitBtn.style.backgroundColor = "red";
        // enquiry.incorrect.style.display = 'block';
    }
}
const testInputSpecialChar = function(input){
    let inputValue = input.value.trim();
    if(!/[&<>'"`=]/.test(inputValue)){
        enquiry.submitBtn.disabled = false;
       enquiry.submitBtn.style.backgroundColor = "rgb(46, 204, 113)";
       enquiry.incorrect.style.display = 'none';
    }else{
        enquiry.submitBtn.disabled = true;
        enquiry.submitBtn.style.backgroundColor = "red";
        enquiry.incorrect.style.display = 'block';
    }
}
//////////////////////Checking input values///////////////////////////
// Put the whole input into an array and call a function on each of them.
const inputs = [
    enquiry.userName,
    enquiry.userPhone, 
    enquiry.userEmail,
    enquiry.mailSubject,
    enquiry.mailBody
]
//Testing if the input values that are not numbers does not contain html special characters.
inputs.forEach(input=>{
    input.addEventListener('input',(e)=>{
        testInputSpecialChar(e.target);
    });
});
//Checking if the data enterd into the phone number is a number
enquiry.userPhone.addEventListener('input',(e)=>{
    testInputNum(e.target);
})




enquiry.form.addEventListener('submit',(e)=>{
    e.preventDefault();
    //convert the form data into a form object then encode it as url, then send it to the database.
    const formData = new FormData();
    formData.append('mailer_name',enquiry.userName.value);
    formData.append('email_address',enquiry.userEmail.value);
    formData.append('phone_number',enquiry.userPhone.value);
    formData.append('subject',enquiry.mailSubject.value);
    formData.append('mail_body',enquiry.mailBody.value);
    const urlEncodedData = new URLSearchParams(formData).toString();
    console.log(urlEncodedData);
    sendToDb(url,urlEncodedData)
    
})

//Function to send the data to the database
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

