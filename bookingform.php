<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>booking Document</title>
    <link rel="stylesheet" href="./assert/css/bookingstyle.css">

</head>

<body>


    <?php include("nav.php")?>

    <div class="container-fluid p-0 bookbox">

        <form class="fbox" id="myForm">
            <h1>BOOKING FORM</h1>
            <input type="text" placeholder="Name" id="uname" required>
            <input type="text" placeholder="Mobile Number" id="mNumber" required>
            <input type="text" name="number" placeholder="Aadhar Number" id="Aadhar" required>
            <input type="email" placeholder="Email Address" id="eaddress" required>
            <input class="light" type="date" placeholder="Check-in" id="checkin" required>
            <input class="light" type="date" placeholder="Check-out" id="checkout" required>
            <button class="btnbk" id="bookbtn" type="submit">BOOK</button>

        </form>


    </div>

    <div class="container-fluid p-0 footer">

        <h5>AAHA HOMESTAY</h5>
        <h6>12'th Cross Street Anna Nagar, Pondicherry 605005 India</h6>
        <h6>Phone: +91-8098299921</h6>
        <h6>WhatsApp: +91-8098299921</h6>
    </div>

    <script src="./assert/js/bookingscripts.js"></script>
</body>

</html>