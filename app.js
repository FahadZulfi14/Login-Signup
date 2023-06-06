var adminEmail = document.getElementById('email');
var adminPass = document.getElementById('password');
var btnClear = document.getElementById('btn-clear');
var btn = document.getElementById('btn');
localStorage.setItem("email","abc@gmail.com");
localStorage.setItem("Pasword","1234");

var form_wrapper = document.querySelector('.form_wrapper  form')
btn.addEventListener("click", () => {
    event.preventDefault();
    

    var email = "abc@gmail.com";
    var pass = "1234";
    var emailError = document.getElementById('emailError');
    var passError = document.getElementById('passError');
    var both = document.getElementById('both');

    if (email == adminEmail.value && pass == adminPass.value) {
        emailError.style.display = "none";
        passError.style.display = "none";
        both.style.display = "none";
        swal("congrats!", "Logged In Successfully", "success");
    }
    else if (adminPass.value.trim() === "" && adminEmail.value.trim() === "") {
        emailError.style.display = "none";
        passError.style.display = "none";
        both.style.display = "block";
        both.innerHTML = "<b>Error:</b>The Email & Password field is empty.";
    } else if (email != adminEmail.value || pass != adminPass.value) {
        emailError.style.display = "none";
        passError.style.display = "none";
        both.style.display = "none";
        swal("GetOut!", "wrong", "warning");
    }

})

btnClear.addEventListener("click", () => {
    event.preventDefault();
    adminEmail.value = "";
    adminPass.value = "";
    localStorage.removeItem("email");
    localStorage.removeItem("Pasword");

})