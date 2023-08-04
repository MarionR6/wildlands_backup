const corbeille = document.querySelector(".corbeille");
const finalPrice2=document.getElementById("price");
corbeille.addEventListener("click",()=>{
    // remise à zéro du prix
    price=0;
    finalPrice2.innerText=price;
    // remise à 0 du nb d'articles
    number = 0;
    nbArticle.innerText=number;
    // remise à zéro des places de parc d'attractions
    numberplaceAttractionAdulte = 0;
    attractionAdulte.innerText=numberplaceAttractionAdulte;
    numberplaceAttractionEnfant=0;
    attractionEnfant.innerText=numberplaceAttractionEnfant;
    // remise à zéro parc naturel
    numberplaceNatureAdulte=0;
    natureAdulte.innerText=numberplaceNatureAdulte;
    numberplaceNatureEnfant=0;
    natureEnfant.innerText=numberplaceNatureEnfant;
    //remise à zero deux parcs
    numberplaceTwoParcsAdulte=0;
    twoParcsAdulte.innerText=numberplaceTwoParcsAdulte;
    numberplaceTwoParcsEnfant=0;
    twoParcsEnfant.innerText=numberplaceTwoParcsEnfant;
    // partie résa Parc
    // nombre de nuit
    night=0
    txtNight.innerText=night
    //hotel
    nbHotel=0;
    hotel.innerText=nbHotel
    // console.log(nbHotel)
    //partie eau
    nbHotelEau=0;
    hotelEau.innerText=nbHotelEau;
    nbHamacs=0;
    hamacs.innerText=nbHamacs;
    //partie foret
    nbChalet=0;
    chalet.innerText=nbChalet;
    nbCamping=0;
    camping.innerText=nbCamping;
    //partie airs
    nbBulles=0;
    bulles.innerText=nbBulles;
    nbArticle.classList.replace("visible","nonvisible");
    attractionAdulteMoins.classList.replace("visible","nonvisible");
    attractionEnfantMoins.classList.replace("visible","nonvisible");
    natureAdulteMoins.classList.replace("visible","nonvisible");
    natureEnfantMoins.classList.replace("visible","nonvisible");
    twoParcsAdulteMoins.classList.replace("visible","nonvisible");
    twoParcsEnfantsMoins.classList.replace("visible","nonvisible");
    nuitMoins.classList.replace("visible","nonvisible");
    hotelMoins.classList.replace("visible","nonvisible");
    hotelEauMoins.classList.replace("visible","nonvisible");
    hamacsMoins.classList.replace("visible","nonvisible");
    chaletMoins.classList.replace("visible","nonvisible");
    campingMoins.classList.replace("visible","nonvisible");
    bullesMoins.classList.replace("visible","nonvisible");
    console.log("nuit=", night)
})