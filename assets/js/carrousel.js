const imgs = document.querySelector(`.carousel`);
const img = document.querySelectorAll(`.carousel img`);

let id = 0;

function carrousel() {
    id++;

    if(id > img.length - 1){
        id = 0;
    }

    imgs.style.transform = `translateX(${-id * 30}rem)`
    
}

setInterval(carrousel, 1800);