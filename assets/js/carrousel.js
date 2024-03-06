(function () {
    const imgs = document.querySelector(`.carousel`);
    const img = document.querySelectorAll(`.carousel img`);
    const currentWidth = () =>{
        const wrapper = document.querySelector(".carousel-wrapper");
        const style = window.getComputedStyle(wrapper);
        const width = style.getPropertyValue(`width`);

        const widthNum = parseFloat(width);
        return widthNum;
    }
    let id = 0;

    function carrouselSol() {
        id++;

        if (id > img.length - 1) {
            id = 0;
        }

        imgs.style.transform = `translateX(${-id * currentWidth()}px)`

    }

    setInterval(carrouselSol, 1800);
})();

(function () {
    const imgs = document.querySelector(`.gallery`);
    const img = document.querySelectorAll(`.gallery img`);
    const currentWidth = () =>{
        const wrapper = document.querySelector(".gallery-wrapper");
        const style = window.getComputedStyle(wrapper);
        const width = style.getPropertyValue(`width`);

        const widthNum = parseFloat(width);
        return widthNum;
    }
     
    let id = 0;

    function carrouselClientes() {
        id++;

        if (id > img.length - 1) {
            id = 0;
        }

        imgs.style.transform = `translateX(${-id * currentWidth()}px)`

    }

    setInterval(carrouselClientes, 1800)


})();