let number=0;
const plus = document.querySelectorAll(".over");
const moins = document.querySelectorAll(".under");
const nbArticle = document.querySelector(".nbArticle");

const nbProduits=()=>{
    plus.forEach((p)=>{
        p.addEventListener("click",()=>{
            number++;
            nbArticle.innerText=number;

        })
    })
    moins.forEach((m)=>{
        m.addEventListener("click",()=>{
            if (number>=1){
               number--;
                nbArticle.innerText=number; 
            }
            
        })
    })
}
nbProduits ()
