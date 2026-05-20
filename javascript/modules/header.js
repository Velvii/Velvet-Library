function createHeader(){
    let el = document.createElement("div");
    el.classList.add("header");
    $("body").append(el);
    $('.header').load("/html/modules/header.html");
    $('<link/>', {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/css/modules/header.css'
    }).appendTo('head');
}

let isMobile = false;
/*
let  isMobile = window.innerHeight < 1000
window.addEventListener("resize", () => {
    isMobile = window.innerHeight < 1000
    mobileFriendly(isMobile);
});
*/

function scrollFunction() {
    const buttons = document.querySelectorAll(".header button");
    if (isMobile){

    }
    else{
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            buttons.forEach((button) => {
                if (!isMobile){
                    button.getElementsByTagName("p")[0].style.fontSize = "18px";
                    button.getElementsByTagName("p")[0].style.opacity = ".4";
                }
                button.getElementsByTagName("img")[0].style.width = "20px";
                button.getElementsByTagName("img")[0].style.opacity = ".4";
                button.style.height = "10px";
            });
        } else {
            buttons.forEach((button) => {
                if (!isMobile){
                    button.getElementsByTagName("p")[0].style.fontSize = "30px";
                    button.getElementsByTagName("p")[0].style.opacity = "1";
                }
                button.getElementsByTagName("img")[0].style.width = "35px";
                button.getElementsByTagName("img")[0].style.opacity = "1";
                button.style.height = "30px";
            });
    }
}}

function mobileFriendly(isMobile){
    const buttons = document.querySelectorAll(".header button");

    if (isMobile) {
        buttons.forEach((button) => {
            const p = button.querySelector("p");
            if (p) p.style.display = "none"
            else p.style.display = "all";
        });
        document.querySelector(".header").style.removeProperty("top");
        document.querySelector(".header").style.bottom = "0px";
    } else {
        document.querySelector(".header").style.top = "0";
    }
}
createHeader()
mobileFriendly(isMobile);
window.onscroll = function() {scrollFunction()};