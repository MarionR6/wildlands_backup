// REVEAL CARDS FROM LEFT AND RIGHT

const ratio = .15;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = (entries, observer) =>{
    entries.forEach((entry) => {
        if(entry.intersectionRatio > ratio){
            console.log('visible');
            entry.target.classList.add('revealvisible');
        }else{
            entry.target.classList.remove('revealvisible')
        }
    });
}

const observer = new IntersectionObserver (handleIntersect, options);
document.querySelectorAll('.revealleft').forEach((r) => {
    observer.observe(r)
})
document.querySelectorAll('.revealright').forEach((r) =>{
    observer.observe(r)
})