//--- --- ---  B A R R E . D E . N A V I G A T I O N . P O U R . P A G E . C O N N E C T E E --- --- --- //

// éléments du html + éléments créés

const navbar = document.querySelector(".navBar");
const connexionCompte = document.querySelector(".connexionCompte");
const btnCompte = document.querySelector(".btnCompte");
const arrow = document.createElement("div");
arrow.innerHTML = `&nbsp; <i class="fa-solid fa-caret-down"></i>`;
const p = document.createElement("p");
const box = document.createElement("div");
box.append(p, arrow);

// style ajouté 

box.style.display="flex";

btnCompte.style.cssText =`
width:100%;
font-size: 1.5em;
transform: scale(1);
display:inline-block;
`

// aller chercher le prénom de l'utilisateur dans les données Json

const url = "../json/data.json";
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
        p.innerText = `Bienvenue ${data.users[0].firstname}`;
    })
};
getName();

// mouse over pour scale

connexionCompte.addEventListener("mouseover", ()=>{
    btnCompte.style.cssText=`
    transform: scale(1.1);
    `
})
connexionCompte.addEventListener("mouseout", ()=>{
    btnCompte.style.cssText=`
    transform: scale(1);
    `
})


//--- ---  M E N U . O N . C L I C K . G E S T I O N . D U . C O M P T E . E T . D E C O N N E X I O N  --- --- //

// éléments créés

const menu = document.createElement("ul");
const gestion = document.createElement("li");
const deco = document.createElement("li");
// const backHome = document.createElement("a");
gestion.innerHTML=`<a>Modifier le profil</a>`;
deco.innerHTML=`<a href="airs.html">Déconnexion</a>`;
menu.append(gestion, deco);
btnCompte.append(box, menu);

// style ajouté 

    menu.style.width="100%";
    menu.style.borderRadius="1.5vh";

    gestion.classList.add("gestion");
    deco.classList.add("deco");

// mouse over pour affichage du menu

menu.classList.add("gestionNone");

btnCompte.addEventListener("mouseover", ()=>{
    menu.classList.remove("gestionNone");
    menu.classList.add("gestionCompte");
})
btnCompte.addEventListener("mouseout", ()=>{
    menu.classList.add("gestionNone");
})