const form1 = document.getElementById('formm1');
const email1 = document.getElementById('email1');
const Password = document.getElementById('Password');
const login = document.getElementById('login');


// function myFunction() {
//     if (form1.checkValidity()) {
//         alert("Invalid login creational..!");
//     }
// }



form1.addEventListener('submit', e => {
    e.preventDefault();
    checkInput();


});

function checkInput() {
    const emailValue1 = email1.value.trim();
    const PasswordValue1 = Password.value.trim();

    //
    if (emailValue1 === '') {
        setError(email1, 'Please Enter your Email Id correctly');
    } else if (!isEmail(emailValue1)) {
        setError(email1, 'Please enter correct e-mail.');
    } else {
        setSuccess(email1);
    }

    //
    if (PasswordValue1 === '') {
        setError(Password, 'Please Enter your Password correctly');
    } else {
        setSuccess(Password);
    }


}


function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email1) {
    return /^(([^<>()\[\]\\.,;:\@s"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0 - 9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        .test(email1);
}




//

document.getElementById("formm1").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get input values

    const email = document.getElementById("email1").value;
    const Password = document.getElementById("Password").value;


    // Perform validation
    if (email === "" || Password === "") {
        alert("Please fill out all fields.");
    } else {
        alert("Invalid login creational..!");
    }
});



