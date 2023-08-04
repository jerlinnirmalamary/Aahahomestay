<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> contact Document</title>

    <link rel="stylesheet" href="./assert/css/contactstyle.css">
</head>

<body>
    <?php include("nav.php")?>
    <div class="container-fluid contbox">
        <form action="form">
            <h3 class="con">Contact Us</h3>
            <p class="pp">Please fill in the details below, submit the form and we will process your enquiry as quickly
                possible.</p>

            <input class="input1" type="text" placeholder="Full Name">
            <input class="input2" type="text" placeholder="Email Addreass">
            <input class="input3" type="text" placeholder="Phone Number">
            <textarea name="comments" id="text" cols="45" rows="4" class="textarea" placeholder="Message"></textarea>

            <div class="bttn">
                <button type="button" class="button1">Close</button>
                <input class="button2" type="Submit">

            </div>


        </form>
    </div>
</body>

</html>