// POP UP CONNEXION

const popup = document.getElementById('popup');
const connexion = document.getElementById ('email');
const password = document.getElementById ('password');
const btnMonCompte = document.getElementById ('moncompte');
const btnMonCompte768 = document.getElementById ('moncompte2');
const main = document.querySelector('main');
const header = document.querySelector('header');
const closePopup = document.getElementById('closepopup');
const SignUpButton = document.getElementById('minscrire');
const popupSignUp = document.getElementById('popupsignup');
const submitSignUp = document.getElementById('submitsignup');
const closePopupSignUp = document.getElementById('closepopupsignup');

btnMonCompte.addEventListener("click", () =>{
    if(popup.classList.contains("popupdisplay")){
        popup.classList.remove("popupdisplay");
        main.style.filter = "blur(0.5em)";
        header.style.filter = "blur(0.5em)";
        header.style.pointerEvents = "none";

        SignUpButton.addEventListener("click", () =>{
            popup.classList.add("popupdisplay");
            popupSignUp.classList.remove("signupdisplay");

            closePopupSignUp.addEventListener("click", () =>{
                popupSignUp.classList.add("signupdisplay");
                main.style.filter = "none";
                main.style.pointerEvents = "initial";
                main.style.transition = ".5s all";
                header.style.filter = "none";
                header.style.transition = ".5s all";
                header.style.pointerEvents = "initial";
            })


        })

        closePopup.addEventListener("click", () =>{
            popup.classList.add("popupdisplay");
            main.style.filter = "none";
            main.style.pointerEvents = "initial";
            main.style.transition = ".5s all";
            header.style.filter = "none";
            header.style.transition = ".5s all";
            header.style.pointerEvents = "initial";
        })

        document.addEventListener("keyup", (e) => {
            console.log(e);
            if(e.key  === "Escape"){
                popup.classList.add("popupdisplay");
                popupSignUp.classList.add("signupdisplay");
                main.style.filter = "none";
                main.style.pointerEvents = "initial";
                main.style.transition = ".5s all";
                header.style.filter = "none";
                header.style.transition = ".5s all";
                header.style.pointerEvents = "initial";
            }
        })
        
    }
})

// meme fonctionnalité pour l'icone mon compte à partir de 768 px
btnMonCompte768.addEventListener("click", () =>{
    if(popup.classList.contains("popupdisplay")){
        popup.classList.remove("popupdisplay");
        main.style.filter = "blur(0.5em)";
        header.style.filter = "blur(0.5em)";
        header.style.pointerEvents = "none";

        SignUpButton.addEventListener("click", () =>{
            popup.classList.add("popupdisplay");
            popupSignUp.classList.remove("signupdisplay");

            closePopupSignUp.addEventListener("click", () =>{
                popupSignUp.classList.add("signupdisplay");
                main.style.filter = "none";
                main.style.pointerEvents = "initial";
                main.style.transition = ".5s all";
                header.style.filter = "none";
                header.style.transition = ".5s all";
                header.style.pointerEvents = "initial";
            })


        })

        closePopup.addEventListener("click", () =>{
            popup.classList.add("popupdisplay");
            main.style.filter = "none";
            main.style.pointerEvents = "initial";
            main.style.transition = ".5s all";
            header.style.filter = "none";
            header.style.transition = ".5s all";
            header.style.pointerEvents = "initial";
        })

        document.addEventListener("keyup", (e) => {
            console.log(e);
            if(e.key  === "Escape"){
                popup.classList.add("popupdisplay");
                popupSignUp.classList.add("signupdisplay");
                main.style.filter = "none";
                main.style.pointerEvents = "initial";
                main.style.transition = ".5s all";
                header.style.filter = "none";
                header.style.transition = ".5s all";
                header.style.pointerEvents = "initial";
            }
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
        connexion.placeholder = `${data.users[1].email}`;
        password.placeholder = `${data.users[1].password}`;
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