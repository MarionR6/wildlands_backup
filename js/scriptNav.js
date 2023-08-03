//--- --- ---  B A R R E . D E . N A V I G A T I O N . P O U R . P A G E . C O N N E C T E E --- --- --- //

// éléments du html + éléments créés
// const header = document.querySelector("header");
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
`

// aller chercher le prénom de l'utilisateur dans les données Json

const url = "json/data.json";
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
const panier = document.createElement("li");
const deco = document.createElement("li");
// const backHome = document.createElement("a");
gestion.innerHTML=`<a>Mon profil</a>`;
panier.innerHTML=`<a>Mon panier</a>`;
deco.innerHTML=`<a href="../index.html">Déconnexion</a>`;
menu.append(gestion, panier, deco);
btnCompte.append(box, menu);

// style ajouté 

    menu.style.width="100%";
    menu.style.borderRadius="1.5vh";
    gestion.classList.add("gestion");
    panier.classList.add("panier");
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


//--- ---  7 6 8 p x  . B O U T O N . M O N . C O M P T E . E T . M E N U  --- --- //

const connexionCompte2 = document.querySelector(".connexionCompte2");
const btnCompte2 = document.querySelector(".btnCompte2");
const arrow2 = document.createElement("div");
arrow2.innerHTML = `<i class="fa-solid fa-caret-down"></i>`;
const p2 = document.createElement("p");
const box2 = document.createElement("div");
box2.setAttribute("id","box2");
box2.append(p2, arrow2);

// style ajouté 
p2.style.marginRight = "1em"

box2.style.cssText = `
display: inline-flex;
align-item: center;
`

btnCompte2.style.cssText =`
width:100%;
transform: scale(1);
`

// aller chercher le prénom de l'utilisateur dans les données Json

const getName2 = async () =>{
    await fetch(url, {
        method : "GET",
        headers : {
            "Accept":"application/json"
        }
    })
    .then(response => response.json())
    .then(data=>{
        console.log(data);
        p2.innerText = `${data.users[0].firstname}`;
    })
};
getName2();

// mouse over pour scale

connexionCompte2.addEventListener("mouseover", ()=>{
    btnCompte2.style.cssText=`
    transform: scale(1.1);
    `
})
connexionCompte2.addEventListener("mouseout", ()=>{
    btnCompte2.style.cssText=`
    transform: scale(1);
    `
})


//--- ---  M E N U . O N . C L I C K . G E S T I O N . D U . C O M P T E . E T . D E C O N N E X I O N  --- --- //

// éléments créés

const menu2 = document.createElement("ul");
const gestion2 = document.createElement("li");
const deco2 = document.createElement("li");
// const backHome = document.createElement("a");
gestion2.innerHTML=`<a>Modifier le profil</a>`;
deco2.innerHTML=`<a href="../index.html">Déconnexion</a>`;
menu2.append(gestion2, deco2);
btnCompte2.append(box2, menu2);

// style ajouté 

    menu2.style.width="100%";
    menu2.style.borderRadius="1.5vh";

    gestion2.classList.add("gestion");
    deco2.classList.add("deco");

// mouse over pour affichage du menu

menu2.classList.add("gestionNone");

btnCompte2.addEventListener("mouseover", ()=>{
    menu2.classList.remove("gestionNone");
    menu2.classList.add("gestionCompte");
})
btnCompte2.addEventListener("mouseout", ()=>{
    menu2.classList.add("gestionNone");
})