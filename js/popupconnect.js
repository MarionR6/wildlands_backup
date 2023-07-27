// --- --- --- P O P . U P . C O N N E X I O N --- --- --- //

const popup = document.getElementById('popup');
const connexion = document.getElementById ('email');
const password = document.getElementById ('password');
const btnMonCompte = document.getElementById ('moncompte');
const main = document.querySelector('main');
const header = document.querySelector('header');
const closePopup = document.getElementById('closepopup');

btnMonCompte.addEventListener("click", () =>{
    if(popup.classList.contains("popupdisplay")){
        popup.classList.remove("popupdisplay");
        main.style.filter = "blur(0.5em)";
        main.style.pointerEvents = "none";
        header.style.filter = "blur(0.5em)";
        header.style.pointerEvents = "none";
        closePopup.addEventListener("click", () =>{
            popup.classList.add("popupdisplay");
            main.style.filter = "none";
            main.style.pointerEvents = "initial";
            main.style.transition = ".5s all";
            header.style.filter = "none";
            header.style.transition = ".5s all";
            header.style.pointerEvents = "initial";
        })
        
    }
})

// FETCH

const dataUser = "json/data.json"

const fetchUser = async () => {
    const response = await fetch (dataUser, {
        method:"GET",
        headers:{
            "Accept" : "application/json"
        },
    })
    .then(response => response.json())
    .then (data => {
        connexion.placeholder = `${data.users[0].email}`;
        password.placeholder = `${data.users[0].password}`;
    })
}

fetchUser()

const checkbox = document.getElementById('checkbox');
const emaildisable = document.getElementById("emaildisable");
const passworddisable = document.getElementById("passworddisable");

checkbox.addEventListener("change", () =>{
    if(checkbox.checked){
        emaildisable.classList.add("emaildisable");
        passworddisable.classList.add("passworddisable");
    }else{
        emaildisable.classList.remove("emaildisable");
        passworddisable.classList.remove("passworddisable");
    }
})