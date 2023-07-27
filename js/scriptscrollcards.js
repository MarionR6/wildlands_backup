// REVEAL CARDS FROM LEFT AND RIGHT

const options = {
    root: null,
    rootMargin: '0px',
    treshold: .1
}

const handleIntersect = (entries, observer) =>{
    entries.forEach((entry) => {
        console.log(entry.intersectionRatio);
    });
    console.log(handleIntersect);
}

const observer = new IntersectionObserver (handleIntersect, options);
observer.observe(document.querySelector('.revealleft'))
// observer.observe(document.querySelector('.revealright'))
