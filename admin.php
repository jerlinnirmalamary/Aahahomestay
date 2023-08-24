<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>admin Document</title>
    <link rel="stylesheet" href="./assert/css/adminstyle.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
</head>

<body>
    <?php include("nav.php")?>

    <div class="conbox" id="boxmain">
        <div class="box1">
            <div class="header">
                <h3 class="wd1">Admin Login</h3>
                <p class="wd2">Enter yout details to get sign in to your account</p>
            </div>

            <form class="form1" id="formm1">


                <div class="form-Controll">
                    <input type="email" placeholder="Email" id="email1">
                    <i class="fa-solid fa-square-check"></i>
                    <i class="fa-solid fa-info"></i>
                    <small>Error msg</small>
                </div>

                <div class="form-Controll">

                    <input type="Password" placeholder="Password" id="Password">
                    <i class="fa-solid fa-square-check"></i>
                    <i class="fa-solid fa-info"></i>
                    <small>Error msg</small>
                </div>


                <div class="bttnn">

                    <button type="submit" onclick="myFunction()" class="buttonn" id="login">Login</button>
                </div>

            </form>
        </div>
    </div>






    <script src="./assert/js/admin.js"></script>



</body>

</html>