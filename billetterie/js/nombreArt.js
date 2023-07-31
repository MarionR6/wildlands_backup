let number=0;
const plus = document.querySelectorAll(".over");
const moins = document.querySelectorAll(".under");
const nbArticle = document.querySelector(".nbArticle");
nbArticle.classList.add("nonvisible")
const nbProduits=()=>{
    plus.forEach((p)=>{
        p.addEventListener("click",()=>{
            number++;
            if(number>0 && price>0){
                nbArticle.classList.replace("nonvisible","visible")
            }
            nbArticle.innerText=number;
            // permet de l'afficher si l'article passe au moins à 1
        })
    })
    moins.forEach((m)=>{
        m.addEventListener("click",()=>{
            if (number>0){
               number--;
                nbArticle.innerText=number;
                //n'affiche plus la bulle si ===0
                if(price==0 || number==0){
                    nbArticle.classList.replace("visible","nonvisible")
                }
            }
            
        })
    })
    nuitMoins.addEventListener("click",()=>{
        if (price===0){
            nbArticle.classList.replace("visible","nonvisible")
        }
    })
    nuitPlus.addEventListener("click",()=>{
        if (price>0){
            nbArticle.classList.replace("nonvisible","visible")
        }
})
}
nbProduits ()

