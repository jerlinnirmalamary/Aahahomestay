<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./assert/css/navstyle.css" />


    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous">
    </script>
</head>

<body>
    <header>
        <nav class="navbar navbar-expand-lg fixed-top navbar1" id="nav">
            <!-- <div class=""> -->


            <a href="" class="navbar-brand names">AAHA HOMESTAY</a>


            <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#myNavBar"
                aria-controls="myNavBar" aria-expanded="false" aria-label="Toggle-navigation">
                <span class="navbar-toggler-icon"></span>

            </button>



            <div class="collapse navbar-collapse" id="myNavBar">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item active text-center">
                        <a class="hi" href="./index.php" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item text-center">
                        <a class="hi" href="./gallery.php" class="nav-link">Gallery</a>
                    </li>
                    <li class="nav-item text-center">
                        <a class="hi" href="./ourprice.php" class="nav-link">Our
                            Prices</a>
                    </li>
                    <li class="nav-item text-center">
                        <button class="hi " id="navlink">Contact Us</button>

                    </li>


                    <li class="nav-item text-center">
                        <a class="hi" href="./admin.php" class="nav-link">Admin</a>
                    </li>


                </ul>
            </div>
            <!-- </div> -->
        </nav>
    </header>


    <div class="container-fluid containerbx1" id="containerbx1" onclick="fun(event)">
        <div class="boxx1" id="boxx1">
            <div class="header">
                <h3 class="con">Contact Us</h3>
                <p class="pp">Please fill in the details below, submit the form and we will process your enquiry as
                    quickly
                    possible.</p>
            </div>
            <form class="form" id="form">


                <div class="form-control">

                    <input type="text" placeholder="Full Name" id="username">
                    <i class="fa-solid fa-square-check"></i>
                    <i class="fa-solid fa-info"></i>
                    <small>Error msg</small>
                </div>


                <div class="form-control">

                    <input type="text" placeholder="Email Addreass" id="email">
                    <i class="fa-solid fa-square-check"></i>
                    <i class="fa-solid fa-info"></i>
                    <small>Error msg</small>
                </div>


                <div class="form-control">

                    <input type="text" placeholder="Phone Number" id="phonenumber">
                    <i class="fa-solid fa-square-check"></i>
                    <i class="fa-solid fa-info"></i>
                    <small>Please Enter Phone number</small>
                </div>

                <div class="form-control">
                    <textarea name="comments" id="text" cols="45" rows="3" class="textarea"
                        placeholder="Message"></textarea>
                    <i class="fa-solid fa-square-check"></i>
                    <i class="fa-solid fa-info"></i>
                    <small>Error msg</small>
                </div>



                <div class="bttn">
                    <button type="button" class="button1" id="close">Close</button>
                    <button type="submit" class="button2" id="submit">Submit</button>

                </div>

            </form>

        </div>

    </div>



    <script src="./assert/js/nav.js"></script>

</body>



</html>