// code to toggle the button //

// function toggleButtons() {
//     var button1 = document.getElementById("button1");
//     var button2 = document.getElementById("button2");
//     var body = document.getElementsByClassName("body2")
    
//     button1.classList.toggle("active", function(){
//       body.style.display = "none"
//     });
//     button2.classList.toggle("active");
//   }


// code to toggle the table //

window.addEventListener('load', function() {
    // var tableContent = document.getElementsByClassName('home');
    // var tableHeaders = document.getElementsByClassName('button');
    // tableContent[0].classList.add('show');
    // tableHeaders[0].classList.add('active1');
    // console.log(tableContent);
    // for (var i = 0; i < tableHeaders.length; i++) {
    //   tableHeaders[i].addEventListener('click', function() {
    //     var colIndex = Array.prototype.indexOf.call(tableHeaders, this);
    //     for (var j = 0; j < tableContent.length; j++) {
    //       if (j !== colIndex) {
    //         tableContent[j].classList.remove('show');
    //       }
    //     }
    //     for (var j = 0; j < tableHeaders.length; j++) {
    //       if (j !== colIndex) {
    //         tableHeaders[j].classList.remove('active1');
    //       }
    //     }
    //     tableContent[colIndex].classList.toggle('show');
    //     tableHeaders[colIndex].classList.add('active1');
    //   });
    // }
  });
  
  
// pop up 

function showModal() {
  var modal = document.getElementById("profile");
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("profile");
  modal.style.display = "none";
}

function showModal1() {
  var modal = document.getElementById("bank");
  modal.style.display = "block";
}

function closeModal1() {
  var modal = document.getElementById("bank");
  modal.style.display = "none";
}

function showModal2() {
  var modal = document.getElementById("kyc");
  modal.style.display = "block";
}

function closeModal2() {
  var modal = document.getElementById("kyc");
  modal.style.display = "none";
}
function showModal3() {
  var modal = document.getElementById("guarantor");
  modal.style.display = "block";
}

function closeModal3() {
  var modal = document.getElementById("guarantor");
  modal.style.display = "none";
}
// loan modal
function showAP() {
  var modal = document.getElementById("approve");
  modal.style.display = "block";
}
function closeAP() {
  var modal = document.getElementById("approve");
  modal.style.display = "none";
}
function showModalA() {
  var modal = document.getElementById("loan2");
  modal.style.display = "block";
}
function closeModalA() {
  var modal = document.getElementById("loan2");
  modal.style.display = "none";
}
// 
function closeModalC() {
  var modal = document.getElementById("loan1");
  modal.style.display = "none";
}
function showModalC() {
  var modal = document.getElementById("loan1");
  modal.style.display = "block";
}

function closeModalC() {
  var modal = document.getElementById("loan1");
  modal.style.display = "none";
}
// create loan modal
function showModalL() {
  var modal = document.getElementById("loan");
  modal.style.display = "block";
}

function closeModalL() {
  var modal = document.getElementById("loan");
  modal.style.display = "none";
}
// personal loan modal
function showModalP() {
  var modal = document.getElementById("personal-loan");
  modal.style.display = "block";
}

function closeModalP() {
  var modal = document.getElementById("personal-loan");
  modal.style.display = "none";
}
// house loan
function showModalH() {
  var modal = document.getElementById("house-loan");
  modal.style.display = "block";
}

function closeModalH() {
  var modal = document.getElementById("house-loan");
  modal.style.display = "none";
}
// business loan
function showModalB() {
  var modal = document.getElementById("business-loan");
  modal.style.display = "block";
}

function closeModalB() {
  var modal = document.getElementById("business-loan");
  modal.style.display = "none";
}
// education loan
function showModalE() {
  var modal = document.getElementById("education-loan");
  modal.style.display = "block";
}

function closeModalE() {
  var modal = document.getElementById("education-loan");
  modal.style.display = "none";
}
// password modal
function showModalW() {
  var modal = document.getElementById("password");
  modal.style.display = "block";
}

function closeModalW() {
  var modal = document.getElementById("password");
  modal.style.display = "none";
}


// loan history


// window.addEventListener('load', function() {
//   var tableContent = document.getElementsByClassName('table-history');
//   var tableHeaders = document.getElementsByClassName('loan');
//   tableContent[1].classList.add('show');
//   tableHeaders[1].classList.add('active1');
  
//   for (var i = 1; i < tableHeaders.length; i++) {
//     tableHeaders[i].addEventListener('click', function() {
//       var colIndex = Array.prototype.indexOf.call(tableHeaders, this);
//       for (var j = 1; j < tableContent.length; j++) {
//         if (j !== colIndex) {
//           tableContent[j].classList.remove('show');
//         }
//       }
//       for (var j = 1; j < tableHeaders.length; j++) {
//         if (j !== colIndex) {
//           tableHeaders[j].classList.remove('active');
//         }
//       }
//       tableContent[colIndex].classList.toggle('show');
//       tableHeaders[colIndex].classList.add('active');
//     });
//   }
// });

var openPopupBtn = document.getElementById("openPopup");
var closePopupBtn = document.getElementById("closePopup");
var popupContainer = document.getElementById("popupContainer");
var overlay = document.getElementById("overlay");

openPopupBtn.addEventListener("click", function() {
  popupContainer.style.display = "block";
  overlay.style.display = "block"
});

closePopupBtn.addEventListener("click", function() {
  popupContainer.style.display = "none";
  overlay.style.display = "none";
});

overlay.addEventListener("click", function() {
  popupContainer.style.display = "none";
  overlay.style.display = "none";

});

  

window.addEventListener('DOMContentLoaded', function() {
  var dateElement = document.getElementById('date');
  var currentDate = new Date();
  dateElement.textContent = currentDate.toDateString();
});
