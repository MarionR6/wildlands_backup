// ----------------------------------- NAV SCROLL

const navScroll = document.querySelector('.navBar');
let lastScroll = window.scrollY;

window.addEventListener("scroll", () =>{
    if(lastScroll < window.scrollY){
        navScroll.classList.remove("scrollDown");
        navScroll.classList.remove("scrollAppear");
        
    }
    else{
        navScroll.classList.add("scrollDown");
        navScroll.classList.add("scrollAppear");
        
    }
    lastScroll = window.scrollY;
})