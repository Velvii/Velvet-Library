const siteRoot = window.location.pathname.includes("/html/pages/") ? "../../" : "./";

function createHeader(){
    let el = document.createElement("div");
    el.classList.add("header");
    $("body").append(el);
    $('.header').load(`${siteRoot}html/modules/header.html`, () => {
        document.querySelectorAll(".header button[data-target]").forEach((button) => {
            button.onclick = () => {
                window.location.href = siteRoot + button.dataset.target;
            };
        });

        document.querySelectorAll(".header img[data-icon]").forEach((image) => {
            image.src = `${siteRoot}assets/header-icons/${image.dataset.icon}`;
        });
    });
    $('<link/>', {
        rel: 'stylesheet',
        type: 'text/css',
        href: `${siteRoot}css/modules/header.css`
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