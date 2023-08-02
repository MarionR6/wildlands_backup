const nombrePhotos=6;
let position=0;
const container=document.getElementById("container");
const g = document.getElementById("g");
const d = document.getElementById("d");
const images=[
    {
        image:"url(https://i.goopics.net/cdj6ng.jpg)"
    },
    {
        image:"url(https://i.goopics.net/yuukqt.jpg)"
    },
    {
        image:"url(https://i.goopics.net/38g26e.jpg)"
    },
    {
        image:"url(https://i.goopics.net/n3d5bp.jpg)"
    },
    {
        image:"url(https://i.goopics.net/xndwxw.jpg)"
    },
    {
        image:"url(https://i.goopics.net/4s8ncb.jpg)"
    }
]


//au chargement de la page on souhaite créer une div par photo;

container.style.width=`${100*nombrePhotos}%`
images.map(e=>{
    let div=document.createElement("div");
    div.className="photo";
    div.style.backgroundImage=e.image;
    div.style.backgroundSize="cover";
    div.style.backgroundPosition="center"
    container.append(div)
})
const carrousel=()=>{
    d.addEventListener("click",()=>{
    if(position<nombrePhotos-1){
        position++;
        container.style.transform=`translateX(${-50*position}vw)`;
        container.style.transition="all .5s ease";;
    }else{
            position=0;
            container.style.transform=`translateX(${-50*position}vw)`;
            container.style.transition="all 1s ease";
    }
})
    g.addEventListener("click",()=>{
    if(position>0){
        position--;
        container.style.transform=`translateX(${-50*position}vw)`;
        container.style.transition="all .5s ease";
    }else{
        position=5;
        container.style.transform=`translateX(${-50*position}vw)`;
        container.style.transition="all 1s ease";
    }
})
}
carrousel()

