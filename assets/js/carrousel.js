(function () {
    const imgs = document.querySelector(`.carousel`);
    const img = document.querySelectorAll(`.carousel img`);

    let id = 0;

    function carrouselSol() {
        id++;

        if (id > img.length - 1) {
            id = 0;
        }

        imgs.style.transform = `translateX(${-id * 30}rem)`

    }

    setInterval(carrouselSol, 1800);
})();

(function () {

        const imgs = document.querySelector(`.gallery`);
        const img = document.querySelectorAll(`.gallery img`);

        let id = 0;

        function carrouselClientes() {
            id++;

            if (id > img.length - 1) {
                id = 0;
            }

            imgs.style.transform = `translateX(${-id * 50}rem)`

        }

    setInterval(carrouselClientes, 1800);


})();