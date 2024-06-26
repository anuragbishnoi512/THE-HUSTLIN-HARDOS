const menuicon = document.querySelector("#menuicon");
const menulist = document.querySelector(".menulist");

menuicon.addEventListener("click", function () {
    menulist.classList.toggle("showlist");
    menuicon.classList.toggle("fixed1")
});