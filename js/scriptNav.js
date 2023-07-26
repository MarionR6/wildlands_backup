//--- --- ---  B A R R E . D E . N A V I G A T I O N --- --- --- //

// éléments du html + éléments créés

const navbar = document.querySelector(".navBar");
const monCompte = document.querySelector(".monCompte");
const btnCompte = document.querySelector(".btnCompte");
const arrow = document.createElement("div");
arrow.innerHTML = `&nbsp; <i class="fa-solid fa-caret-down"></i>`;
const p = document.createElement("p");
const box = document.createElement("div");
box.append(p, arrow);

// style ajouté 

box.style.display="flex";

btnCompte.style.cssText=`
width:100%;
font-size: 1.5em;
transform: scale(1);
display:inline-block;
`

// aller chercher le prénom de l'utilisateur dans les données Json

const url = "../js/data.json";
const getName = async () =>{
    await fetch(url, {
        method : "GET",
        headers : {
            "Accept":"application/json"
        }
    })
    .then(response => response.json())
    .then(data=>{
        console.log(data);
        p.innerText = `${data.users[1].firstname}`;
    })
};
getName();

// mouse over pour scale

monCompte.addEventListener("mouseover", ()=>{
    btnCompte.style.cssText=`
    transform: scale(1.1);
    `
})
monCompte.addEventListener("mouseout", ()=>{
    btnCompte.style.cssText=`
    transform: scale(1);
    `
})


//--- --- ---  M E N U . O N . C L I C K --- --- --- //

// éléments créés

const menu = document.createElement("ul");
const gestion = document.createElement("li");
const deco = document.createElement("li");
gestion.innerText="Mon profil";
deco.innerText="Déconnexion";
menu.append(gestion, deco);
btnCompte.append(box, menu);

// style ajouté 

    menu.style.width="100%";
    menu.style.borderRadius="1.5vh";

    gestion.style.cssText=`
    width:100%;
    margin-top:5%;
    background-color:#1F5180;
    opacity: 0.8;
    padding:5%;
    border: solid #bac7d6 1px;
    `
    deco.style.cssText=`
    width:100%;
    background-color:#1F5180;
    opacity: 0.8;
    padding:5%;
    border: solid #bac7d6 1px;
    `

// mouse over pour affichage du menu

menu.classList.add("gestionNone");

btnCompte.addEventListener("mouseover", ()=>{
    menu.classList.remove("gestionNone");
    menu.classList.add("gestionCompte");
})
btnCompte.addEventListener("mouseout", ()=>{
    menu.classList.add("gestionNone");
})