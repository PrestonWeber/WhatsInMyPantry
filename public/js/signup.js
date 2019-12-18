$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("#signup-submit");
  var emailInput = $("#email-input");
  var passwordInput = $("#password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      EnterLoginCredentials();
    } else {
      $.post("/api/signup", userData, function() {
        console.log(userData);
      });
      emailInput.val("");
      passwordInput.val("");
    }
    // If we have an email and password, run the signUpUser function
    // signUpUser(userData.email, userData.password);
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  // function signUpUser(email, password) {
  //   $.post("/api/signup", {
  //     email: email,
  //     password: password
  //   })
  //     // If there's an error, handle it by throwing up a bootstrap alert
  //     .catch(handleLoginErr);
  // }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }

  function EnterLoginCredentials() {
    alert("Enter login credentials");
  }
});
