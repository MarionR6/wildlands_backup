
const zoomPlus = () => {
    const txtPlus = document.querySelector('.zoomPlus');
    setInterval( () => {
        txtPlus.style.transform = "scale(1.5)";
        txtPlus.style.transition = "all 2s";
    },1000)
    setInterval( () => {
        txtPlus.style.transform = "scale(1)";
        txtPlus.style.transition = "all 2s";
    },2000)
}
zoomPlus()

const zoomMoins = () => {
    const txtMoins = document.querySelector('.zoomMoins');
    setInterval( () => {
        txtMoins.style.transform = "scale(0.5)";
        txtMoins.style.transition = "all 3s";
    },1000)
    setInterval( () => {
        txtMoins.style.transform = "scale(1)";
        txtMoins.style.transition = "all 3s";
    },2000)
}
zoomMoins()

// changement dans le SCSS : lgn 164
//.bannerTitle .h2 {
//     overflow-y: hidden;
//     display : flex
//     .zoomPlus{
//         display: block;
//     }
//     .zoomMoins{
//         display: block;
//     }
// }