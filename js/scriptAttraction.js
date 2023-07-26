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

//---------------------------------- MENU BURGER
const menuBurger = () => {
    const toggle = document.getElementById('toggle');
    const navigation = document.getElementById('navigation');
    document.onclick = function(e) {
        if(e.target.id !== 'toggle' && e.target.id !== 'navigation'){
            toggle.classList.remove('active');
            navigation.classList.remove('active');
        }
    }
    toggle.onclick = function(){
        toggle.classList.toggle('active')
        navigation.classList.toggle('active')
    } 
}
menuBurger()
