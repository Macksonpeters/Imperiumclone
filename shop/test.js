let hotdealcart = document.querySelector('.hotdealcart1');
let hotdealcart2 = document.querySelector('.hotdealcart2');
let hotdealcart3 = document.querySelector('.hotdealcart3');
let hotdealcart4 = document.querySelector('.hotdealcart4');
let hotdealpackage = document.querySelector('.card');




function hotdealscart() {
    hotdealcart.style.display = 'inline-block';
}

function hotdealnoscart() {
    hotdealcart.style.display = 'none';
}
function hotdealscart2() {
    hotdealcart2.style.display = 'inline-block';
}

function hotdealnoscart2() {
    hotdealcart2.style.display = 'none';
}
function hotdealscart3() {
    hotdealcart3.style.display = 'inline-block';
}

function hotdealnoscart3() {
    hotdealcart3.style.display = 'none';
}
function hotdealscart4() {
    hotdealcart4.style.display = 'inline-block';
}

function hotdealnoscart4() {
    hotdealcart4.style.display = 'none';
}














<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ImperiumShop</title>
    <link rel="stylesheet" href="/imperiumclone.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
</head>
</head>
<body>
    
    <div id="imperium" class="imperiumcontainer">
        <div class="container-xxl pb-3">
            <!-- header -->
           <header>
                <!-- marquee top section -->
                <div class="marqueecontainer">
                    <marquee>
                        At checkout, you could take advantage of our Lease to Own financing option to buy your choice of products and solution. Terms and conditions apply. 
                    </marquee>
                </div>

                <!-- navbar -->
                <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                  <a class="navbar-brand col-md-2 col-xl-7 mx-2" href="#"><img width="100" height="50"  src="/images/imperium_logo.png" class="img-fluid" alt=""></a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="" ><i class="bi bi-list text-secondary display-6 border-none"></i></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav pt-3">
                      <li class="nav-item">
                        <a class="nav-link  " aria-current="page" href="/imperium/about.html">About</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link " href="">Calculator</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Shop</a>
                     </li>
                    </ul>
                  </div>
                </div>
                </nav>
           </header>
        </div>

        <section id="" class=" mt-5 ">
           <div class="pt-3 mx-5" id="shop">
                <div class="row justify-content-center align-items-center pb-5">
                    <div class="col-12 col-lg-6 px-5">
                        <h2 class="fw-bold text-black display-5  text-center text-lg-start col-lg-10">Solar Power for Your Daily Needs.</h2>
                        <p class="small mt-3 text-center text-lg-start col-lg-7">Choose a package that suits you and make payment in installments.</p>
                        <p class="text-center text-lg-start">
                            <a href="" class="btn bg-success py-2 px-4 fw-bold text-white rounded-base">Browse Special Offer</a>
                    
                        </p>
                    </div>
                    <div class=" col-12 mt-4 mt-lg-0 col-lg-6 text-center">
                        <img src="/images/header-img.png" width="80%" alt="" class="img-fluid">
                    </div>
                </div>
           </div>


           <div id="gotocalculator" class="mb-3 text-white">
            <div class="row container-fluid py-3 pt-4">
                <div class="col-12 small mx-3 col-lg-8">
                    <p class="d-flex"><span><img class="pe-2 " src="/images/light-outline.svg" alt=""></span> <span class="mt-lg-2 ms-lg-2 mt-0"> Let’s help you calculate your current energy consumption and recommend the best product for you</span></p>
                </div>
                <div class="col-12 text-center text-lg-end px-5 mb-3 mb-lg-0 col-lg-3">
                    <a href="/imperium/energycalculator.html" class="fw-bold text-decoration-none p-3">Go To Calculator</a>
                </div>
            </div>
           </div>

           <div id="solutionstypes" class="">
                <div class="row text-center">
                    <div id="completesolution" class="col-12 col-lg-4 text-center">
                        <a class="text-decoration-none" href="">
                            <h6 class="text-success fw-bold">Complete Solutions</h6>
                            <span class="fw-bold text-dark mt-3 px-4">Choose A Package That Suits You From Our Varieties Of Special Offer Products</span>
                            <span id="viewallproducts" class="mt-3 lead text-success">View all products <i class="bi bi-arrow-right"></i><span>
                            <span class="pt-5"><img src="/images/product-3.png" width="230" class="img-fluid" alt=""></span>
                        </a>
                    </div>

                    <div id="" class="col-12 col-lg-5">
                        <a class="text-decoration-none" href="">
                            <div id="solarpaneldiv" class="row pb-5 justify-content-center px-0">
                                <div class="col-5 "><img src="/images/solar-panel.png" class="img-fluid" width="120" alt=""></div>
                                <div class="col-7 text-start">
                                    <h6 class="text-success fw-bold">Solar Panel Systems</h6>
                                    <span class="fw-bold text-dark  mt-3">High output and efficiency performance</span>
                                    <span id="viewallproducts" class="mt-3 lead text-success">View all products <i class="bi bi-arrow-right"></i><span>
                                 
                                </div>
                            </div>
                            <div id="solarpanelsinverter" class="row pb-5 justify-content-center px-0">
                                <div class="col-7 text-start px-5">
                                    <h6 class="text-success fw-bold">Inverter Systems</h6>
                                    <span class="fw-bold text-dark  mt-3">High output and efficiency performance</span>
                                    <span id="viewallproducts" class="mt-3 lead text-success">View all products <i class="bi bi-arrow-right"></i><span>
                                </div>
                                <div class="col-5"><img src="/images/inverter.png" class="img-fluid" width="100" alt=""></div>
                            </div>
                        </a>
                    </div>
                    <div id="completesolution" class="col-12 col-lg-3 text-center">
                        <a class="text-decoration-none" href="">
                            <h6 class="text-success fw-bold">Battery Systems</h6>
                            <span class="fw-bold text-dark mt-3 px-4">High Output And Efficient Performance</span>
                            <span id="viewallproducts" class="mt-3 lead text-success">View all products <i class="bi bi-arrow-right"></i><span>
                            <span class="pt-5"><img src="/images/battery.png" width="200" class="img-fluid" alt=""></span>
                        </a>
                    </div>
                 
                </div>

           </div>

           <div id="hotdeals" class="py-5">
                <div class="text-center">
                    <div><img src="/images/hot-deal.svg" alt=""></div>
                    <div>
                        <h2 class="text-success py-4 pb-2">Hot Deals</h2>
                    </div>
                    <span class=" small">Power your home with our range of products</span>
                </div>
                <div class="row justify-content-center text-center px-2 ">
                    <div id="hotdealpackage" onmouseover="hotdealscart()" onmouseout="hotdealnoscart()"  class="card bg-white col-12 mt-5 mx-2 p-5 col-lg-1" style="width: auto;">
                        <div class="text-end">
                            <span id="hotdealcart" class=" hotdealcart1 btn border-success border-2 fw-bold p-2 rounded-circle"><i class="bi bi-cart3 h3 text-success"></i></span>
                        </div>
                       <a href="" class="text-decoration-none text-dark">
                        <img src="/images/hdd.png" class="img-fluid " width="200" alt="...">
                        <div class="card-body">
                          <h6 class="card-text ">Basic Package (1.5KV)</h6>
                          <h6 class="card-text mt-3">NGN 1,252,860</h6>
                        </div>
                       </a>
                    </div>
                    <div id="hotdealpackage" onmouseover="hotdealscart2()" onmouseout="hotdealnoscart2()" class="card bg-white col-12 mt-5 mx-2 p-5 col-lg-1" style="width: auto;">
                        <div class="text-end">
                            <span id="hotdealcart" class="hotdealcart2 btn border-success border-2 fw-bold p-2 rounded-circle"><i class="bi bi-cart3 h3 text-success"></i></span>
                        </div>
                       <a href="" class="text-decoration-none text-dark">
                        <img src="/images/hdd.png" class="img-fluid " width="200" alt="...">
                        <div class="card-body">
                          <h6 class="card-text ">Basic Package (1.5KV)</h6>
                          <h6 class="card-text mt-3">NGN 1,252,860</h6>
                        </div>
                       </a>
                    </div>
                    <div id="hotdealpackage" onmouseover="hotdealscart3()" onmouseout="hotdealnoscart3()" class="card bg-white col-12 mt-5 mx-2 p-5 col-lg-1" style="width: auto;">
                        <div class="text-end">
                            <span id="hotdealcart" class="hotdealcart3 btn border-success border-2 fw-bold p-2 rounded-circle"><i class="bi bi-cart3 h3 text-success"></i></span>
                        </div>
                       <a href="" class="text-decoration-none text-dark">
                        <img src="/images/hdd.png" class="img-fluid " width="200" alt="...">
                        <div class="card-body">
                          <h6 class="card-text ">Basic Package (1.5KV)</h6>
                          <h6 class="card-text mt-3">NGN 1,252,860</h6>
                        </div>
                       </a>
                    </div>
                    <div id="hotdealpackage" onmouseover="hotdealscart4()" onmouseout="hotdealnoscart4()" class="card bg-white col-12 mt-5 mx-2 p-5 col-lg-1" style="width: auto;">
                        <div class="text-end">
                            <span id="hotdealcart" class="hotdealcart4 btn border-success border-2 fw-bold p-2 rounded-circle"><i class="bi bi-cart3 h3 text-success"></i></span>
                        </div>
                       <a href="" class="text-decoration-none text-dark">
                        <img src="/images/hdd.png" class="img-fluid " width="200" alt="...">
                        <div class="card-body">
                          <h6 class="card-text ">Basic Package (1.5KV)</h6>
                          <h6 class="card-text mt-3">NGN 1,252,860</h6>
                        </div>
                       </a>
                    </div>
                </div>
           </div>


        
        </section>

        <footer id="storefooter" class="pb-2">
          <section class="">
             <div class=" mx-3 row">
                 <div class="pt-5 col-6 col-lg-3">
                     <h4 class="text-success pt-5 fw-bold pb-2">Company</h4>
                     <p class="text-black  "><a href="">Blogs</a></p>
                     <p class="text-black "><a href="">About us</a></p>
                     <p class="text-black "><a href="">Contact us</a></p>
                     <p class="text-black "><a href="">How to Buy and Sell on Imperium</a></p>
                     <p class="text-black "><a href="">Become a vendor</a></p>
                     <p class="text-black "><a href="">Terms & conditions</a></p>
                     <p class="text-black "><a href="">Privacy policy</a></p>
                 </div>
                 <div class="pt-5 col-6 col-lg-3">
                     <h4 class="text-success pt-5 fw-bold pb-2">Offerings</h4>
                     <p class="text-black  "><a href="">Energy Calculator</a></p>
                     <p class="text-black "><a href="">Power as a service</a></p>
                 </div>    
                 <div class="pt-5 col-6 col-lg-3">
                     <h4 class="text-success pt-5 fw-bold pb-2">Get in touch</h4>
                     <p class="text-black  "><a href="">FAQS</a></p>
                     <p class="text-black ">20, Marina, Lagos State</p>
                     <p class="text-black "><a href="tel:+234 (081) 6413 3937">+234 (081) 6413 3937</a></p>
                     <p class="text-black "> <a href="tel:+234 (081) 3547 3439">+234 (081) 3547 3439</a> </p>
                     <p class="text-black "><a href="mailto:info@imperiumng.com">info@imperiumng.com</a></p>
                 </div>
                 <div class="pt-5 col-6 col-lg-3">
                     <h4 class="text-success pt-5 fw-bold pb-2">Follow us</h4>
                     <p class="text-black h5 pb-3  "><a href=""><i class="bi bi-twitter"></i> <a href=""><i class="bi bi-facebook"></i><a href=""><i class="bi bi-envelope-fill"></i><a href=""><i class="bi bi-linkedin"></i></a></a></a></a></p>
                     <span class="text-black py-5">Can't find what you are looking for?</span>
                     <dl class="pt-4"><a href="mailto:info@imperiumng.com">Send Us An Email</a></dl class="pt-3">


                     <p class="text-end pt-5"><a href="#imperium"><i class="bi bi-arrow-up-circle display-6"></i></a></p>     
                 </div> 
             </div>
         </section>       
     </footer>
        


    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    <script src="/shop/shop.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>