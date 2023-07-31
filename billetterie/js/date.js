
const date=()=>{
    const now = new Date();
    let day = now.getDay();
    let month = now.getMonth();
    let year = now.getFullYear();
    day.toString();
    month.toString();
    year.toString();

    let min = `${year}-${month}-${day}`;
    console.log(min);
    return min
}

const calendrier = document.getElementById("calendrier");
calendrier.value=date()
calendrier.min=date();

console.log(calendrier)



    

