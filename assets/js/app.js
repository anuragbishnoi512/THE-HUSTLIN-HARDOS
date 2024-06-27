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
    autoplay: true,
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

$('.slider1').slick({
    dots: false,
    infinite: true,
    prevArrow: ".prev1",
    nextArrow: ".next1",
    speed: 300,
    autoplay: true,
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