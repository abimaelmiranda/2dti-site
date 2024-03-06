(function () {
    function criarCarrossel(elemento, wrapperClass) {
        const imgs = document.querySelector(elemento);
        const img = document.querySelectorAll(`${elemento} img`);
        const firstImgClone = img[0].cloneNode(true);
        imgs.appendChild(firstImgClone);

        const currentWidth = () => {
            const wrapper = document.querySelector(wrapperClass);
            const style = window.getComputedStyle(wrapper);
            return parseFloat(style.getPropertyValue('width'));
        }

        let id = 0;

        function carrossel() {
            id++;
            imgs.style.transition = 'transform 0.5s ease-in-out';
            imgs.style.transform = `translateX(${-id * currentWidth()}px)`;

            if (id == img.length) {
                setTimeout(() => {
                    imgs.style.transition = 'none';
                    id = 0;
                    imgs.style.transform = `translateX(0)`;
                    setTimeout(() => {
                        imgs.style.transition = 'transform 0.5s ease-in-out';
                    }, 50);
                }, 500);
            }
        }

        setInterval(carrossel, 1800);
    }


    criarCarrossel('.gallery', '.gallery-wrapper');

    criarCarrossel('.carousel', '.carousel-wrapper');
})();
