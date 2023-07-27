// ----------------------------------- NAV SCROLL

const navScroll = document.querySelector('.navBar');
let lastScroll = window.scrollY;

window.addEventListener("scroll", () =>{
    if(lastScroll < window.scrollY){
        navScroll.classList.remove("scrollDown");
    }
    else{
        
        navScroll.classList.add("scrollDown");
        //navScroll.classList.add("scrollUp");
    }
    lastScroll = window.scrollY;
})

//---------------------------------- MENU BURGER

//----------------------------------- Transition header

// const attractionScroll = document.querySelector('petiteA');

// window.addEventListener("scroll", () =>{
//     if(window.scrollY > 100){
        
//     }
// })