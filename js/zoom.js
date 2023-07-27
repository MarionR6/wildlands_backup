const txtPlus = document.querySelector('.zoomPlus');
const txtMoins = document.querySelector('.zoomMoins');

const widthMax = 4;
const difference = 0.1;

const zoomPlus = () => {
    if(widthMax < 5){
        widthMax += difference;
        document.querySelector('.zoomPlus').style.width = widthMax;
    }
}