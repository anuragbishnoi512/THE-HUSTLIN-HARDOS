const menuicon = document.querySelector("#menuicon");
const menulist = document.querySelector(".menulist");

menuicon.addEventListener("click", function () {
    menulist.classList.toggle("showlist");
    menuicon.classList.toggle("fixed1")
});
$('.slider').slick({
    dots: false,
    infinite: true,
    prevArrow: ".prev",
    nextArrow: ".next",
    speed: 300,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.slider2').slick({
    dots: false,
    infinite: true,
    prevArrow: ".prev1",
    nextArrow: ".next1",
    speed: 300,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});


const btnsub = document.querySelector(".minus-btn");
const btnadd = document.querySelector(".adding-btn");
const number = document.querySelector(".number");

btnsub.addEventListener("click", function () {
    number.innerHTML = +number.innerHTML - 1;
});

btnadd.addEventListener("click", function () {
    number.innerHTML = +number.innerHTML + 1;
});


// accordion
const accordaon = document.querySelectorAll(".accordion-heading");

accordaon.forEach(acc => {
    acc.addEventListener("click", function () {
        const accacitve = document.querySelector(".accordion.acc-active");
        acc.parentElement.classList.toggle("acc-active");
        accacitve && accacitve.classList.remove("acc-active");
    });
});