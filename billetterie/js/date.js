
const date=()=>{
    const now = new Date();
    let day = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();
    month++
    if(month<10){
        month =`0${month}`;
    }
    if(day<10){
        day=`0${day}`;
    }
    let min = `${year}-${month}-${day}`;
    return min
}

const calendrier = document.getElementById("calendrier");
calendrier.min=date();
calendrier.value=date()




    

