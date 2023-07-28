// NBR DE NUITS

const nuitmoins = document.getElementById("nuitMoins");
const nuitplus = document.getElementById("nuitPlus");
const txtNights = document.getElementById("number");
console.log(nuitplus)
let night = 0;
txtNights.innerText=night;
nuitplus.addEventListener("click",()=>{
    night++;
    txtNights.innerText=night;
})
nuitmoins.addEventListener("click",()=>{
    if(night>0){
        night--;
        txtNights.innerText=night; 
    }
    
})
// LES DIFFERENTS PRIX
const prixParcAttractionAdulte = 50;
const prixParcAttractionEnfant = 30;
const prixParcNaturelAdulte = 75;
const prixParcNaturelEnfant = 40;
const prixDeuxParcsAdulte = 100;
const prixDeuxParcsEnfant = 70;
const chambre = 75;
const aventure=25;
const chalet=250;
const zero = 0;
let price = 0;
// poiur déterminer le prix final
const finalPrice=document.getElementById("price");
finalPrice.innerText=price;
//pour remettre à zero cet élément précis

// prix parc attraction
//version adulte
const attractionAdulteMoins = document.getElementById("attractionAdulteMoins");
const attractionAdulte = document.getElementById("attractionAdulte");
const attractionAdultePlus = document.getElementById("attractionAdultePlus");
let numberplaceAttractionAdulte = 0;
attractionAdulte.innerText=numberplaceAttractionAdulte;
attractionAdultePlus.addEventListener("click",()=>{
    numberplaceAttractionAdulte++;
    attractionAdulte.innerText=numberplaceAttractionAdulte;
    price+=prixParcAttractionAdulte
    finalPrice.innerText=price;
})
attractionAdulteMoins.addEventListener("click",()=>{
    if(numberplaceAttractionAdulte>0){
        numberplaceAttractionAdulte--;
        attractionAdulte.innerText=numberplaceAttractionAdulte;
        price-=prixParcAttractionAdulte;
        
        finalPrice.innerText=price;
    }
    
})

//version enfant
const attractionEnfantMoins = document.getElementById("attractionEnfantMoins");
const attractionEnfant = document.getElementById("attractionEnfant");
const attractionEnfantPlus = document.getElementById("attractionEnfantPlus");
let numberplaceAttractionEnfant = 0;
attractionEnfant.innerText=numberplaceAttractionEnfant;
attractionEnfantPlus.addEventListener("click",()=>{
    numberplaceAttractionEnfant++;
    attractionEnfant.innerText=numberplaceAttractionEnfant;
    price+=prixParcAttractionEnfant;
    finalPrice.innerText=price;
})
attractionEnfantMoins.addEventListener("click",()=>{
    if(numberplaceAttractionEnfant>0){
        numberplaceAttractionEnfant--;
        attractionEnfant.innerText=numberplaceAttractionEnfant;
        price-=prixParcAttractionEnfant;
        finalPrice.innerText=price;
    }
    
})

//version parc naturel
// adulte
const natureAdulteMoins = document.getElementById("natureAdulteMoins");
const natureAdulte = document.getElementById("natureAdulte");
const natureAdultePlus = document.getElementById("natureAdultePlus");
let numberplaceNatureAdulte = 0;
natureAdulte.innerText=numberplaceNatureAdulte;
natureAdultePlus.addEventListener("click",()=>{
    numberplaceNatureAdulte++;
    natureAdulte.innerText=numberplaceNatureAdulte;
    price+=prixParcNaturelAdulte
    finalPrice.innerText=price;
})
natureAdulteMoins.addEventListener("click",()=>{
    if(numberplaceNatureAdulte>0){
        numberplaceNatureAdulte--;
        natureAdulte.innerText=numberplaceNatureAdulte;
        price-=prixParcNaturelAdulte;
        
        finalPrice.innerText=price;
    }
    
})
// enfant
const natureEnfantMoins = document.getElementById("natureEnfantMoins");
const natureEnfant = document.getElementById("natureEnfant");
const natureEnfantPlus = document.getElementById("natureEnfantPlus");
let numberplaceNatureEnfant = 0;
natureEnfant.innerText=numberplaceNatureEnfant;
natureEnfantPlus.addEventListener("click",()=>{
    numberplaceNatureEnfant++;
    natureEnfant.innerText=numberplaceNatureEnfant;
    price+=prixParcNaturelEnfant
    finalPrice.innerText=price;
})
natureEnfantMoins.addEventListener("click",()=>{
    if(numberplaceNatureEnfant>0){
        numberplaceNatureEnfant--;
        natureEnfant.innerText=numberplaceNatureEnfant;
        price-=prixParcNaturelEnfant;
        finalPrice.innerText=price;
    }
    
})

//version two parcs
// adulte
const twoParcsAdulteMoins = document.getElementById("twoParcsAdulteMoins");
const twoParcsAdulte = document.getElementById("twoParcsAdulte");
const twoParcsAdultePlus = document.getElementById("twoParcsAdultePlus");
let numberplaceTwoParcsAdulte = 0;
twoParcsAdulte.innerText=numberplaceTwoParcsAdulte;
twoParcsAdultePlus.addEventListener("click",()=>{
    numberplaceTwoParcsAdulte++;
    twoParcsAdulte.innerText=numberplaceTwoParcsAdulte;
    price+=prixDeuxParcsAdulte
    finalPrice.innerText=price;
})
twoParcsAdulteMoins.addEventListener("click",()=>{
    if(numberplaceTwoParcsAdulte>0){
        numberplaceTwoParcsAdulte--;
        twoParcsAdulte.innerText=numberplaceNatureAdulte;
        price-=prixDeuxParcsAdulte;
        
        finalPrice.innerText=price;
    }
    
})
// enfant
const twoParcsEnfantMoins = document.getElementById("twoParcsEnfantsMoins");
const twoParcsEnfant = document.getElementById("twoParcsEnfants");
const twoParcsEnfantPlus = document.getElementById("twoParcsEnfantsPlus");
let numberplaceTwoParcsEnfant = 0;
twoParcsEnfant.innerText=numberplaceTwoParcsEnfant;
twoParcsEnfantPlus.addEventListener("click",()=>{
    numberplaceTwoParcsEnfant++;
    twoParcsEnfants.innerText=numberplaceTwoParcsAdulte;
    price+=prixDeuxParcsEnfant
    finalPrice.innerText=price;
})
twoParcsEnfantMoins.addEventListener("click",()=>{
    if(numberplaceTwoParcsEnfant>0){
        numberplaceTwoParcsEnfant--;
        twoParcsEnfant.innerText=numberplaceTwoParcsEnfant;
        price-=prixDeuxParcsEnfant;
        finalPrice.innerText=price;
    }
    
})