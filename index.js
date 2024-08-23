const form = document.querySelector(".login-form");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        // const errorMessage = document.querySelector('#error-message');
        if (email === "" || password === "") {
          document.getElementById("error-message").style.display = "block";
          document.getElementById("error-message").innerHTML =
            "Please enter Email ID and Password";
        }
        console.log(email, password);
        if (email === "albionecotech@gmail.com" && password === "albion@21#") {
          // Create a cookie
          const token = "jjwekisi832h3bjd8982yhhejdi783yhg3ui89d873yuh";
          const d = new Date();
          d.setTime(d.getTime() + 3 * 24 * 60 * 60 * 1000); //3days
          let expires = "expires=" + d.toUTCString();
          document.cookie = "token=" + token + ";" + expires + ";path=/";

          // Check if the cookie is created
          if (document.cookie.includes(`token=${token}`)) {
            // Navigate to calc.html
            window.location.href = "calc.html";
          } else {
            document.getElementById("error-message").style.display = "block";
            document.getElementById("error-message").innerHTML =
              "Something went wrong Try Again";
          }
        } else {
          document.getElementById("error-message").style.display = "block";
          document.getElementById("error-message").innerHTML =
            "Invalid Email ID or Password";
        }
      });
