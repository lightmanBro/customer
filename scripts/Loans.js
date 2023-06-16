

fetch("./db/dummyData.json")
.then(response => response.json())
.then(data => {
    data.forEach(element => {
        processData(element);  
    });
    console.log(data);
})
.catch(error => {
    console.error("Error reading JSON file:", error);
});

` "merchant": "ABC Company",
"amountdue": "300,000",
"loanInterest": "30,000",
"dueDate": "12-10-2023",
"total": "330,000",
"monthlyPayback": "5,000",
"status": "Pending",
"duration": "18 months",
"LoanType":"Education",
"loanDate": "05-11-2021"`

function processData(data) {
// Process the data from the JSON file or data received from the database
//Please not all the data is correctly mapped so please map the rest of the dynamic data to the html string
   const pendingData=
    `<tr>
    <td hidden>${data.merchant}</td>
    <td>${data.LoanType}</td>
    <td>${data.amountdue}</td>
    <td>${data.loanInterest}</td>
    <td>${data.total}</td>
    <td>${data.monthlyPayback}</td>
    <td>${data.duration}</td>
    <td hidden>${data.dueDate}</td>
    <td><span>${data.status}</span></td>
    <td id="dueBtn"> <i onclick="showModalC()" class="fa-solid fa-eye"></i></td>

  </tr>`
  document.querySelector('#loanTable tbody').innerHTML += pendingData;
};

console.log(document.querySelector('#loanTable tbody'))




setTimeout(() => {
    document.querySelectorAll('#dueBtn').forEach(element => {
        element.addEventListener('click',(e)=>{
            let modal = e.target.parentElement.parentElement.querySelectorAll('td')
            console.log(modal)
            
            // 
            modalData = document.querySelectorAll('.Active-loan-receipt-content p span');
            console.log(modalData);
             modalData[0].innerText= modal[0].innerText;//Merchant
             modalData[1].innerText = modal[1].innerText;//loan type
             modalData[2].innerText = modal[2].innerText;//Loan Amount
             modalData[3].innerText = modal[3].innerText;//Loan Interest
             modalData[4].innerText = modal[4].innerText;//Loan Total
             modalData[5].innerText = modal[6].innerText;//Loan Duration in months
             modalData[6].innerText = modal[5].innerText;//Montly payment
             modalData[7].innerText = modal[7].innerText;//Due date
             modalData[8].innerText = modal[8].innerText;//Status
            // console.log(modalData[0],modalData);
            // console.log(e.target.parentElement.parentElement)
            // console.log(e.target.parentElement.parentElement)
        })
    });
}, 1000);


//Session data
  userName = sessionStorage.getItem("userName");
  userId = sessionStorage.getItem("userId");


//creating a new loan and sending the data to the db
const loanModal = {
  loanType:document.querySelector('#createLoan select'),
  loanAmount:document.querySelector('#createLoan #amount'),
  loanInterest:document.querySelector('#createLoan #interestRate'),
  loanDuration:document.querySelector('#createLoan #duration'),
  loanPayback:document.querySelector('#createLoan #totalPayback'),
  loanMonthlyPayback:document.querySelector('#createLoan #monthlyPayback'),
  button:document.querySelector('#createLoan input[type="submit"]')
  
}
const checkinput = [
document.querySelector('#createLoan select'),
document.querySelector('#createLoan #amount'),
document.querySelector('#createLoan #interestRate'),
document.querySelector('#createLoan #duration'),
document.querySelector('#createLoan #totalPayback'),
document.querySelector('#createLoan #monthlyPayback')
]
//Checking and sanitizing the input values
checkinput.forEach(input=>{
  input.addEventListener('input',(e)=>{
    testInputNum(e.target,loanModal.button);
  })
})

const testInputNum = function (input,inputBtn) {
  let inputValue = input.value.trim();
  if (/^\d+$/.test(inputValue)) {
    inputBtn.disabled = false;
    inputBtn.style.backgroundColor = "rgba(0, 0, 0, 0.87)";
  } else {
    inputBtn.disabled = true;
    inputBtn.style.backgroundColor = "red";
  }
};

//Calculating the loan amount by input values
loanModal.loanAmount.addEventListener('input',(e)=>{
  loanModal.loanInterest.value = (e.target.value * 0.1).toFixed(3);
  loanModal.loanPayback.value = (loanModal.loanAmount.value *1 + loanModal.loanAmount.value * 0.1).toFixed(3);
})

//Calculation for the monthly payback
loanModal.loanDuration.addEventListener('input',(e)=>{
  loanModal.loanMonthlyPayback.value = (loanModal.loanPayback.value*1/e.target.value*1).toFixed(3);
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






loanModal.button.addEventListener('click',(e)=>{
  e.preventDefault();
  let formData = new FormData();

  formData.append('userId',userId);//Taken from the session id
  formData.append('Type',loanModal.loanType.value);
  formData.append('amount',loanModal.loanAmount.value);
  formData.append('Interest',loanModal.loanInterest.value);
  formData.append('Duration',loanModal.loanDuration.value);
  formData.append('TotalPayback',loanModal.loanPayback.value);
  formData.append('MonthlyPayback',loanModal.loanMonthlyPayback.value);
  const urlEncodedData = new URLSearchParams(formData).toString();
  console.log(urlEncodedData);
  // sendToDb(url,formData);
})

