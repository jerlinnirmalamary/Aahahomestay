// const form = document.getElementById("form");
// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const phonenumber = document.getElementById("phonenumber");
// const text = document.getElementById("text");
// const closebtn = document.getElementById("close");
// const containerbx1 = document.getElementById("containerbx1");
// // const Password = document.getElementById("Password");
// // const Password2 = document.getElementById("Password2");




// form.addEventListener('submit', e => {
//     e.preventDefault();
//     checkInput();
// });

// function checkInput() {
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const phoneValue = phonenumber.value.trim();
//     const textValue = text.value.trim();
//     // const PasswordValue = Password.value.trim();
//     // const Password2Value = Password2.value.trim();
//     //
//     if (usernameValue === '') {
//         setError(username, 'Please enter name.');
//     } else {
//         setSuccess(username);
//     }
//     //
//     if (emailValue === '') {
//         setError(email, 'Email cannot be blank');
//     } else if (!isEmail(emailValue)) {
//         setError(email, 'Please enter correct e-mail.');
//     } else {
//         setSuccess(email);
//     }


//     //


//     // /////
//     // var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
//     // if (phonenumber.value.match(phoneno)) {
//     //     return true;
//     // } else {

//     //     return false;
//     // }

//     //

//     // if (!value) return value;
//     // const phoneNumber = value.replace(/[^\d]/g, '');
//     // const phoneNumberLeagth = phoneNumber.phoneNumberLeagth;

//     // if (phoneNumberLeagth < 4) return phoneNumber;
//     // if (phoneNumberLeagth < 7) {
//     //     return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3)}`;
//     // }
//     // return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(
//     //     3,
//     //     6,)}-${phoneNumber.slice(6,9)}`;
//     // //



//     if (textValue === '') {
//         setError(text, 'Please enter your message..');
//     } else {
//         setSuccess(text);
//     }


// }


// // function phoneNumberFormatter() {
// //     // const inputFiled = document.getElementById('phonenumber');
// //     const formatedInputValue = document.formatePhoneNumber(phoneValue.value);
// //     phoneValue.value = formatedInputValue;
// // }

// function setError(input, message) {
//     const formControl = input.parentElement;
//     const small = formControl.querySelector('small');
//     formControl.className = 'form-control error';
//     small.innerText = message;
// }


// function setSuccess(input) {
//     const formControl = input.parentElement;
//     formControl.className = 'form-control success';
// }


// function isEmail(email) {
//     return /^(([^<>()\[\]\\.,;:\@s"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0 - 9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//         .test(email);
// }

    // closebtn.addEventListener("click", () => {
    //     containerbx1.style.display = "none";
    // })