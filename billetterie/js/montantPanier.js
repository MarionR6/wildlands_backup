

// LES DIFFERENTS PRIX
const prixParcAttractionAdulte = 50;
const prixParcAttractionEnfant = 30;
const prixParcNaturelAdulte = 75;
const prixParcNaturelEnfant = 40;
const prixDeuxParcsAdulte = 100;
const prixDeuxParcsEnfant = 70;
const chambre = 75;
const aventure=25;
const prixChalet=250;
let price = 0;
// poiur déterminer le prix final
const finalPrice=document.getElementById("price");
finalPrice.innerText=price;
//Fonction pour cacher le bouton moins
const cacher=(nombre,bouton)=>{
    if(nombre===0){
        bouton.classList.add("nonvisible")
    }else if (nombre===1){
        bouton.classList.replace("nonvisible","visible")
    }
}

// prix parc attraction
//version adulte
const attractionAdulteMoins = document.getElementById("attractionAdulteMoins");
const attractionAdulte = document.getElementById("attractionAdulte");
const attractionAdultePlus = document.getElementById("attractionAdultePlus");
let numberplaceAttractionAdulte = 0;
cacher(numberplaceAttractionAdulte,attractionAdulteMoins)
attractionAdulte.innerText=numberplaceAttractionAdulte;
attractionAdultePlus.addEventListener("click",()=>{
    numberplaceAttractionAdulte++;
    attractionAdulte.innerText=numberplaceAttractionAdulte;
    price+=prixParcAttractionAdulte
    finalPrice.innerText=price;
    cacher(numberplaceAttractionAdulte,attractionAdulteMoins)
})
attractionAdulteMoins.addEventListener("click",()=>{
    if(numberplaceAttractionAdulte>0){
        numberplaceAttractionAdulte--;
        attractionAdulte.innerText=numberplaceAttractionAdulte;
        price-=prixParcAttractionAdulte;
        cacher(numberplaceAttractionAdulte,attractionAdulteMoins)
        finalPrice.innerText=price;
    }
    
})

//version enfant
const attractionEnfantMoins = document.getElementById("attractionEnfantMoins");
const attractionEnfant = document.getElementById("attractionEnfant");
const attractionEnfantPlus = document.getElementById("attractionEnfantPlus");
let numberplaceAttractionEnfant = 0;
cacher(numberplaceAttractionEnfant,attractionEnfantMoins)
attractionEnfant.innerText=numberplaceAttractionEnfant;
attractionEnfantPlus.addEventListener("click",()=>{
    numberplaceAttractionEnfant++;
    attractionEnfant.innerText=numberplaceAttractionEnfant;
    price+=prixParcAttractionEnfant;
    finalPrice.innerText=price;
    cacher(numberplaceAttractionEnfant,attractionEnfantMoins)
})
attractionEnfantMoins.addEventListener("click",()=>{
    if(numberplaceAttractionEnfant>0){
        numberplaceAttractionEnfant--;
        attractionEnfant.innerText=numberplaceAttractionEnfant;
        price-=prixParcAttractionEnfant;
        finalPrice.innerText=price;
        cacher(numberplaceAttractionEnfant,attractionEnfantMoins)
    }
    
})

//version parc naturel
// adulte
const natureAdulteMoins = document.getElementById("natureAdulteMoins");
const natureAdulte = document.getElementById("natureAdulte");
const natureAdultePlus = document.getElementById("natureAdultePlus");
let numberplaceNatureAdulte = 0;
cacher(numberplaceNatureAdulte,natureAdulteMoins)
natureAdulte.innerText=numberplaceNatureAdulte;
natureAdultePlus.addEventListener("click",()=>{
    numberplaceNatureAdulte++;
    natureAdulte.innerText=numberplaceNatureAdulte;
    price+=prixParcNaturelAdulte
    finalPrice.innerText=price;
    cacher(numberplaceNatureAdulte,natureAdulteMoins)
})
natureAdulteMoins.addEventListener("click",()=>{
    if(numberplaceNatureAdulte>0){
        numberplaceNatureAdulte--;
        natureAdulte.innerText=numberplaceNatureAdulte;
        price-=prixParcNaturelAdulte;
        cacher(numberplaceNatureAdulte,natureAdulteMoins)
        finalPrice.innerText=price;
    }
    
})
// enfant
const natureEnfantMoins = document.getElementById("natureEnfantMoins");
const natureEnfant = document.getElementById("natureEnfant");
const natureEnfantPlus = document.getElementById("natureEnfantPlus");
let numberplaceNatureEnfant = 0;
cacher(numberplaceNatureEnfant,natureEnfantMoins)
natureEnfant.innerText=numberplaceNatureEnfant;
natureEnfantPlus.addEventListener("click",()=>{
    numberplaceNatureEnfant++;
    natureEnfant.innerText=numberplaceNatureEnfant;
    price+=prixParcNaturelEnfant
    finalPrice.innerText=price;
    cacher(numberplaceNatureEnfant,natureEnfantMoins)
})
natureEnfantMoins.addEventListener("click",()=>{
    if(numberplaceNatureEnfant>0){
        numberplaceNatureEnfant--;
        natureEnfant.innerText=numberplaceNatureEnfant;
        price-=prixParcNaturelEnfant;
        finalPrice.innerText=price;
        cacher(numberplaceNatureEnfant,natureEnfantMoins)
    }
    
})

//version two parcs
// adulte
const twoParcsAdulteMoins = document.getElementById("twoParcsAdulteMoins");
const twoParcsAdulte = document.getElementById("twoParcsAdulte");
const twoParcsAdultePlus = document.getElementById("twoParcsAdultePlus");
let numberplaceTwoParcsAdulte = 0;
cacher(numberplaceTwoParcsAdulte,twoParcsAdulteMoins)
twoParcsAdulte.innerText=numberplaceTwoParcsAdulte;
twoParcsAdultePlus.addEventListener("click",()=>{
    numberplaceTwoParcsAdulte++;
    twoParcsAdulte.innerText=numberplaceTwoParcsAdulte;
    price+=prixDeuxParcsAdulte
    finalPrice.innerText=price;
    cacher(numberplaceTwoParcsAdulte,twoParcsAdulteMoins)
})
twoParcsAdulteMoins.addEventListener("click",()=>{
    if(numberplaceTwoParcsAdulte>0){
        numberplaceTwoParcsAdulte--;
        twoParcsAdulte.innerText=numberplaceNatureAdulte;
        price-=prixDeuxParcsAdulte;
        cacher(numberplaceTwoParcsAdulte,twoParcsAdulteMoins)
        finalPrice.innerText=price;
    }
    
})
// enfant
const twoParcsEnfantsMoins = document.getElementById("twoParcsEnfantsMoins");
const twoParcsEnfant = document.getElementById("twoParcsEnfants");
const twoParcsEnfantsPlus = document.getElementById("twoParcsEnfantsPlus");
let numberplaceTwoParcsEnfant = 0;
cacher(numberplaceTwoParcsEnfant,twoParcsEnfantsMoins)
twoParcsEnfant.innerText=numberplaceTwoParcsEnfant;
twoParcsEnfantsPlus.addEventListener("click",()=>{
    numberplaceTwoParcsEnfant++;
    twoParcsEnfant.innerText=numberplaceTwoParcsEnfant;
    price+=prixDeuxParcsEnfant
    finalPrice.innerText=price;
    cacher(numberplaceTwoParcsEnfant,twoParcsEnfantsMoins)
})
twoParcsEnfantsMoins.addEventListener("click",()=>{
    if(numberplaceTwoParcsEnfant>0){
        numberplaceTwoParcsEnfant--;
        twoParcsEnfant.innerText=numberplaceTwoParcsEnfant;
        price-=prixDeuxParcsEnfant;
        finalPrice.innerText=price;
        cacher(numberplaceTwoParcsEnfant,twoParcsEnfantsMoins)
    }
    
})

const priceNight=()=>{
    // NBR DE NUITS
    const nuitmoins = document.getElementById("nuitMoins");
    const nuitplus = document.getElementById("nuitPlus");
    const txtNights = document.getElementById("number");
    let night = 0;
    let nbHotel=0;
    let nbHotelEau=0;
    let nbHamacs=0;
    let nbChalet = 0;
    let nbCamping=0;
    let nbBulles=0;
    txtNights.innerText=night;
    finalPrice.innerText=price
    cacher(night,nuitmoins)
    nuitplus.addEventListener("click",()=>{
        night++;
        txtNights.innerText=night;
        cacher(night,nuitmoins)
        price+=(nbHotel*chambre)+(nbHotelEau*chambre)+(nbHamacs*aventure)+(nbChalet*prixChalet)+(nbCamping*aventure)+(nbBulles*chambre)
        finalPrice.innerText=price;

        
    })
    nuitmoins.addEventListener("click",()=>{
            night--;
            txtNights.innerText=night;
            cacher(night,nuitmoins)
            price-=(nbHotel*chambre)+(nbHotelEau*chambre)+(nbHamacs*aventure)+(nbChalet*prixChalet)+(nbCamping*aventure)+(nbBulles*chambre)
            finalPrice.innerText=price;
            
            
    })
    //RESERVATION LOGEMENT


    const hotel = document.getElementById("hotel");
    const hotelMoins = document.getElementById("hotelMoins");
    const hotelPlus = document.getElementById("hotelPlus");
    hotel.innerText=nbHotel;
    cacher(nbHotel,hotelMoins)
    hotelPlus.addEventListener("click",()=>{
        nbHotel++;
        hotel.innerText=nbHotel;
        price+=(chambre*night);
        finalPrice.innerText=price;
        cacher(nbHotel,hotelMoins)
    })
    hotelMoins.addEventListener("click",()=>{
        if(nbHotel>0){
            nbHotel--;
            hotel.innerText=nbHotel;
            price-=(chambre*night);
            finalPrice.innerText=price;
            cacher(nbHotel,hotelMoins)
        }
    })

    const hotelEau = document.getElementById("hotelEau");
    const hotelEauMoins = document.getElementById("hotelEauMoins");
    const hotelEauPlus = document.getElementById("hotelEauPlus");
    hotelEau.innerText=nbHotelEau;
    cacher(nbHotelEau,hotelEauMoins)
    hotelEauPlus.addEventListener("click",()=>{
        nbHotelEau++;
        hotelEau.innerText=nbHotelEau;
        price+=(night*chambre);
        finalPrice.innerText=price;
        cacher(nbHotelEau,hotelEauMoins)
    })
    hotelEauMoins.addEventListener("click",()=>{
        if(nbHotelEau>0){
            nbHotelEau--;
            hotelEau.innerText=nbHotelEau;
            price-=(night*chambre);
            finalPrice.innerText=price;
            cacher(nbHotelEau,hotelEauMoins)
        }
    })

    const hamacs = document.getElementById("hamacs");
    const hamacsMoins = document.getElementById("hamacsMoins");
    const hamacsPlus = document.getElementById("hamacsPlus");
    hamacs.innerText=nbHamacs;
    cacher(nbHamacs,hamacsMoins)
    hamacsPlus.addEventListener("click",()=>{
        nbHamacs++;
        hamacs.innerText=nbHamacs;
        price+=(night*aventure)
        finalPrice.innerText=price;
        cacher(nbHamacs,hamacsMoins)
    })
    hamacsMoins.addEventListener("click",()=>{
        if(nbHamacs>0){
            nbHamacs--;
            hamacs.innerText=nbHamacs;
            price-=(night*aventure)
            finalPrice.innerText=price;
            cacher(nbHamacs,hamacsMoins)
        }
    })

    const chalet = document.getElementById("chalet");
    const chaletMoins = document.getElementById("chaletMoins");
    const chaletPlus = document.getElementById("chaletPlus");
    chalet.innerText=nbChalet;
    cacher(nbChalet,chaletMoins)
    chaletPlus.addEventListener("click",()=>{
        nbChalet++;
        chalet.innerText=nbChalet;
        price+=(night*prixChalet);
        finalPrice.innerText=price;
        cacher(nbChalet,chaletMoins)
    })
    chaletMoins.addEventListener("click",()=>{
        if(nbChalet>0){
            nbChalet--;
            chalet.innerText=nbChalet;
            price-=night*prixChalet;
            finalPrice.innerText=price;
            cacher(nbChalet,chaletMoins)
        }
    })
        const camping = document.getElementById("camping");
        const campingMoins = document.getElementById("campingMoins");
        const campingPlus = document.getElementById("campingPlus");
        camping.innerText=nbCamping;
        cacher(nbCamping,campingMoins)
        campingPlus.addEventListener("click",()=>{
            nbCamping++;
            camping.innerText=nbCamping;
            price+=aventure*night
            finalPrice.innerText=price;
            cacher(nbCamping,campingMoins)
        })
        campingMoins.addEventListener("click",()=>{
        if(nbCamping>0){
            nbCamping--;
            camping.innerText=nbCamping;
            price-=aventure*night
            finalPrice.innerText=price;
            cacher(nbCamping,campingMoins)
            }
        })
        const bulles = document.getElementById("bulles");
        const bullesMoins = document.getElementById("bullesMoins");
        const bullesPlus = document.getElementById("bullesPlus");
        bulles.innerText=nbBulles;
        cacher(nbBulles,bullesMoins)
        bullesPlus.addEventListener("click",()=>{
            nbBulles++;
            bulles.innerText=nbBulles;
            price+=chambre*night;
            finalPrice.innerText=price;
            cacher(nbBulles,bullesMoins)
        })
        bullesMoins.addEventListener("click",()=>{
            if(nbBulles>0){
                nbBulles--;
                bulles.innerText=nbBulles;
                price-=(chambre*night);
                finalPrice.innerText=price;
                cacher(nbBulles,bullesMoins)
        }
    })
}

priceNight();

