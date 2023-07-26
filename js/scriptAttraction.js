// ----------------------------------- NAV SCROLL

const navScroll = document.querySelector('.navBar')
let lastScroll = window.scrollY;

window.addEventListener("scroll", () =>{
    if(lastScroll < window.scrollY){
        navScroll.classList.add("scrollDown");
    }
    else{
        navScroll.classList.remove("scrollDown");
        //navScroll.classList.add("scrollUp");
    }
    lastScroll = window.scrollY;
})