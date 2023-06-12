//This script is connected to the index.html.

const index = {
  userName:document.querySelector(".welcome p span"),
  userId:document.querySelector("#id p"),
  pending_loan: document.querySelector("#Amount"),
  active_loan: document.querySelector("#calendar"),
  overdue_loan: document.querySelector("#due"),
  total_loan: document.querySelector("#total"),
  completed_loan: document.querySelector("#interest"),
  total_active_loan: document.querySelector("#time"),
  loan_status: document.querySelector("#status"),
  total_customers: document.querySelector("#months"),
  //
  //Loan type box
  personal_loan_container: document.querySelector("#personal"),
  personal_apply: document.querySelector("#personal_apply"),

  house_loan_container: document.querySelector("#house"),
  house_apply: document.querySelector("#house_apply"),

  business_loan_container: document.querySelector("#bussiness"),
  business_apply: document.querySelector("#business_apply"),

  education_loan_container: document.querySelector("#education"),
  education_apply: document.querySelector("#education_apply"),
  //
  //modal box
  loan_create_title: document.querySelector(".Loan-create h2"),
  loan_type: document.querySelector("#loan_type"),
  loan_applicant_name: document.querySelector("#applicant"),
  loan_amount: document.querySelector("#amount"),
  loan_interest: document.querySelector("#loan_interest"),
  loan_duration: document.querySelector("#duration"),
  loan_total: document.querySelector("#loan_total"),
  loan_monthly_payment: document.querySelector("#monthly_due"),
  submitBtn: document.querySelector('input[value="Submit"]'),
};

//Mapping retrieved data from database to the page.
async function receivedFromDb(url) {
    try {
      let response = await fetch(url);
     
      let datas = await response.json();
      datas.forEach(data=>{
        //header
        index.userName.innerHTML = data.userName;
        index.userId.innerHTML = data.userId;
        sessionStorage.setItem('userName',data.userName);
        sessionStorage.setItem('userId',data.userId);
        //modal box values
        index.loan_applicant_name.value = data.userName;

        
        //Dashboard
        index.active_loan.innerHTML = data.active_loan;
        index.pending_loan.innerHTML= data.pending_loan;
        index.overdue_loan.innerHTML = data.overdue_loan;
        index.total_active_loan.innerHTML=data.total_active_loan;
        index.completed_loan.innerHTML = data.completed_loan;
        index.completed_loan.innerHTML = data.completed_loan;
        index.loan_status.innerHTML = data.loan_status;
        index.total_customers.innerHTML = data.total_customers;

        /*If there are more data to retrieve from the database then you can do it here */
      })
      
    } catch (error) {
      //handling the error;
      receiverName.innerHTML = ``;
    }
  }

//   receivedFromDb(url);


//mapping each loan container data to the modal container;
index.personal_apply.addEventListener("click", (e) => {
  index.loan_type.value = "Personal";
  index.loan_create_title.innerHTML = "Create new Personal loan";
});

index.house_apply.addEventListener("click", (e) => {
  index.loan_type.value = "House";
  index.loan_create_title.innerHTML = "Create new Housing loan";
});

index.business_apply.addEventListener("click", (e) => {
  index.loan_type.value = "Business";
  index.loan_create_title.innerHTML = "Create new Business loan";
});

index.education_apply.addEventListener("click", (e) => {
  index.loan_type.value = "Education";
  index.loan_create_title.innerHTML = "Create new Education loan";
});

const testInputNum = function (input) {
  let inputValue = input.value.trim();
  if (/^\d+$/.test(inputValue)) {
    index.submitBtn.disabled = false;
    index.submitBtn.style.backgroundColor = "rgb(46, 204, 113)";
  } else {
    index.submitBtn.disabled = true;
    index.submitBtn.style.backgroundColor = "red";
  }
};

const testInputSpecialChar = function (input) {
  let inputValue = input.value.trim();
  if (!/[&<>'"`=]/.test(inputValue)) {
    index.submitBtn.disabled = false;
    index.submitBtn.style.backgroundColor = "rgb(46, 204, 113)";
    //   index.passwordError.style.display = "none";
  } else {
    index.submitBtn.disabled = true;
    index.submitBtn.style.backgroundColor = "red";
    //   index.passwordError.style.display = "block";
  }
};

numbInputs = [
  index.loan_amount,
  index.loan_duration,
  index.loan_interest,
  index.loan_monthly_payment,
  index.loan_total,
];
numbInputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    testInputNum(e.target);
  });
});


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

const url = "";

index.submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("loanType", index.loan_type.value.trim());
  formData.append("ApplicantName", index.loan_applicant_name.value.trim());
  formData.append("Amount", index.loan_amount.value.trim());
  formData.append("Interest", index.loan_interest.value.trim());
  formData.append("Duration", index.loan_duration.value.trim());
  formData.append("Total", index.loan_total.value.trim());
  formData.append("MonthlyDue", index.loan_monthly_payment.value.trim());
  const urlEncodedData = new URLSearchParams(formData).toString();

  //Send data to the database;
  sendToDb(url, urlEncodedData);
  console.log(urlEncodedData);
  // window.location.href="./otp.html"
  index.loan_amount.value = "";
  index.loan_duration.value = "";
});
