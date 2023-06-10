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
  }
};

console.log("🚀 ~ file: profile.js:2 ~ profile:", profile);





userName = sessionStorage.getItem("userName");
userId = sessionStorage.getItem("userId");
