var swiper = new Swiper('.swiper-container', {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          },
      });
// scroll
var navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    var targetId = link.getAttribute("href");
    var targetElement = document.querySelector(targetId);
    var offsetTop = targetElement.offsetTop;
    

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  });
});

// navbar
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




// Loan Calculator Form
document.getElementById("calculate-btn").addEventListener("click", function() {
          var loanAmount = parseInt(document.getElementById("loan-amount").value);
          var loanDuration = parseInt(document.getElementById("loan-duration").value);
          var loanCategory = document.getElementById("loan-category").value;
        
          var interestRate = 10.5; // 10.5% fixed rate
        
          var monthlyRate = interestRate / 100 / 12;
          var totalAmount = loanAmount + (loanAmount * interestRate / 100);
          var monthlyPayment = totalAmount / loanDuration;
        
          // Update the result
          document.getElementById("result-category").textContent = loanCategory;
          document.getElementById("result-amount").textContent = "$" + loanAmount;
          document.getElementById("result-duration").textContent = loanDuration + " Months";
          document.getElementById("result-rate").textContent = interestRate + "%";
          document.getElementById("result-total").textContent = "$" + totalAmount.toFixed(2);
          document.getElementById("result-monthly").textContent = "$" + monthlyPayment.toFixed(2) ;
        });
        
        // Update Loan Amount Value
        document.getElementById("loan-amount").addEventListener("input", function() {
          var loanAmountValue = document.getElementById("loan-amount").value;
          document.getElementById("loan-amount-value").textContent = "$" + loanAmountValue;
        });
        
        // Update Loan Duration Value
        document.getElementById("loan-duration").addEventListener("input", function() {
          var loanDurationValue = document.getElementById("loan-duration").value;
          document.getElementById("loan-duration-value").textContent = loanDurationValue + " months";
        });


        var swiper = new Swiper('.swiper-containers', {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-paginations',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-nexts',
            prevEl: '.swiper-button-prevs'
          }
        });
        


