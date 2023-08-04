// ----------------------------------- NAV SCROLL

const navScroll = document.querySelector('.navBar');
let lastScroll = window.scrollY;
let scrollBar = document.getElementById('scrollBar');
// ----------------------------------- NAV SCROLL

const navScroll = document.querySelector('.navBar');
let lastScroll = window.scrollY;
let scrollBar = document.getElementById('scrollBar');

window.addEventListener("scroll", () =>{
    if(lastScroll < window.scrollY){
        // navScroll.classList.remove("scrollDown");
        // navScroll.classList.remove("scrollAppear");
        scrollBar.style.top = "-100px";
        scrollBar.style.transition = "all 0.5s ease-in-out";
    }
    else{
        // navScroll.classList.add("scrollDown");
        // navScroll.classList.add("scrollAppear");
        scrollBar.style.top = "0px";
        scrollBar.style.transition = "all 0.5s";
    }
    lastScroll = window.scrollY;
})