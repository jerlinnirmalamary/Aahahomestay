document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get input values
    const name = document.getElementById("uname").value;
    const number = document.getElementById("mNumber").value;
    const Aadhar = document.getElementById("Aadhar").value;
    const email = document.getElementById("eaddress").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

    // Perform validation
    if (name === "" || email === "" || number === "" || Aadhar === "" || checkin === "" || checkout === "") {
        alert("Please fill out all fields.");
    } else {
        alert("Your Booking is placed successfully..!");
    }
});















// const bookbtn = document.getElementById("bookbtn");
// const fbox = document.getElementByClassName('fbox');


// bookbtn.addEventListener("submit", () => {

//     if (!fbox.checkValidity()) {
//         return false;
//     } else {
//         alert("You booking is placed successfully....!")
//     }
// });


