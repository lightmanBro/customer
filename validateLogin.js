function login(event) {
          event.preventDefault(); // Prevent form submission
        
          // Get the input values
          var username = document.getElementById("username").value;
          var password = document.getElementById("password").value;
        
          // Perform login validation (dummy check for demonstration)
          if (username === "admin" && password === "password") {
            alert("Login successful!");
            // Redirect to another page or perform further actions
          } else {
            alert("Invalid username or password. Please try again.");
          }
        }
   
        