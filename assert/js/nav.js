
// // // contact js

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phonenumber = document.getElementById("phonenumber");
const text = document.getElementById("text");
const closebtn = document.getElementById("close");
const containerbx1 = document.getElementById("containerbx1");






form.addEventListener('submit', e => {
    e.preventDefault();
    checkInput();
});

function checkInput() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phonenumber.value.trim();
    const textValue = text.value.trim();

    //
    if (usernameValue === '') {
        setError(username, 'Please enter name.');
    } else {
        setSuccess(username);
    }
    //
    if (emailValue === '') {
        setError(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setError(email, 'Please enter correct e-mail.');
    } else {
        setSuccess(email);
    }


    //

    if (phoneValue === '') {
        setError(phonenumber, 'Phone number cannot be blank');
    } else if (!isNumber(phoneValue)) {
        setError(phonenumber, 'Please enter correct Number.');
    } else {
        setSuccess(phonenumber);
    }






    if (textValue === '') {
        setError(text, 'Please enter your message..');
    } else {
        setSuccess(text);
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


function isNumber(input_str) {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/; return re.test(input_str);
}




function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\@s"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0 - 9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        .test(email);
}

// close box
closebtn.addEventListener("click", () => {

    containerbx1.style.display = "none";
})




// contact box

const nav_link = document.getElementById('navlink');
const containerbox = document.getElementById('containerbx1');




nav_link.addEventListener('click', () => {

    containerbox.style.display = "flex";
});













