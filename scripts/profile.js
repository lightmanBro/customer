const profile = {
  //User
  userName: document.querySelector(".welcome p span"),
  userId: document.querySelector(".id"),

  //profile summary
  client_company: document.querySelectorAll(".client-details h4"),

  //Profile details
  user: {
    Phone: document.querySelector("#summary li .phone"),
    Email: document.querySelector("#summary li .email"),
    Birthday: document.querySelector("#summary li .birthday"),
    Address: document.querySelector("#summary li .address"),
    Gender: document.querySelector("#summary li .gender"),
    Employment: document.querySelector("#summary li .employment"),
  },

  //Bank Details
  bank: {
    name: document.querySelector("#bank li .bankName"),
    acccountNumber: document.querySelector("#bank li .accountNumber"),
    accountName: document.querySelector('#bank li .accountName'),
    bvn: document.querySelector('#bank li .bvn'),
    bankCode: document.querySelector('#bank li .bankCode'),
    accountType: document.querySelector('#bank li .accountType')
  },

  //KYC
  kyc:{
    idType:document.querySelector('#KYC li .idType'),
    idNumber:document.querySelector('#KYC li .idNumber'),
    satus:document.querySelector('#KYC li .status')
  },
  //Guarantor One
  guarantorOne:{
    name:document.querySelector('#guarantor_one li #guarantor_one_name'),
    phone:document.querySelector('#guarantor_one li #guarantor_one_phone'),
    email:document.querySelector('#guarantor_one li #guarantor_one_email'),
    birthday:document.querySelector('#guarantor_one li #guarantor_one_birthday'),
    address:document.querySelector('#guarantor_one li #guarantor_one_address'),
    gender:document.querySelector('#guarantor_one li #guarantor_one_gender'),
    work:document.querySelector('#guarantor_one li #guarantor_one_work')

  },
  //Guarantir two
  guarantorTwo:{
    name:document.querySelector('#guarantor_two li #guarantor_two_name'),
    phone:document.querySelector('#guarantor_two li #guarantor_two_phone'),
    email:document.querySelector('#guarantor_two li #guarantor_two_email'),
    birthday:document.querySelector('#guarantor_two li #guarantor_two_birthday'),
    address:document.querySelector('#guarantor_two li #guarantor_two_address'),
    gender:document.querySelector('#guarantor_two li #guarantor_two_gender'),
    work:document.querySelector('#guarantor_two li #guarantor_two_work')
  }

};

console.log("🚀 ~ file: profile.js:2 ~ profile:", profile);

userName = sessionStorage.getItem("userName");
userId = sessionStorage.getItem("userId");


/*
1.Retrieve data from the database and map it to the innrHtml

2.Retrieve the data from the input modal boxes, sanitize the data and send it to the database.
*/

//1
async function sendToDb(url,formData) {
    try {
        let response = await fetch(url);
        let data =await  response.json();
            console.log(data);
    
    } catch (error) {
        
        receiverName.innerHTML= ``;
    }
}




//2
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

