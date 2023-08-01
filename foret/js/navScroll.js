// ----------------------------------- NAV SCROLL

const navScroll = document.querySelector('.navBar');
let lastScroll = window.scrollY;
let scrollBar = document.getElementById('scrollBar');

window.addEventListener("scroll", () =>{
    if(lastScroll < window.scrollY){
        // navScroll.classList.remove("scrollDown");
        // navScroll.classList.remove("scrollAppear");
        // navScroll.classList.add("scrollDesappear");
        scrollBar.style.top = "-100px";
        scrollBar.style.transition = "all 0.5s";
    }
    else{
        // navScroll.classList.add("scrollDown");
        // navScroll.classList.add("scrollAppear");
        scrollBar.style.top = "0px";
        scrollBar.style.transition = "all 0.5s";
        console.log("non");
    }
    lastScroll = window.scrollY;
})