class Carrusel {
    constructor(padre, cards) {
        this.carrusel = document.createElement('div');
        this.carrusel.classList.add('flex');
        this.btnMenos = document.createElement('button');
        this.btnMenos.innerHTML = "<";
        this.btnMenos.onclick = () => this.click(-1);
        this.btnMenos.classList.add('carruselBtn');
        this.btnMenos.classList.add('carruselBtnMenos');


        this.slide = document.createElement('div');
        this.slide.classList.add('flex');
        this.slide.classList.add('carruselSlide');
        this.slide.innerHTML = cards;


        this.btnMas = document.createElement('button');
        this.btnMas.innerHTML = ">";
        this.btnMas.onclick = () => this.click(1);
        this.btnMas.classList.add('carruselBtn');
        this.btnMas.classList.add('carruselBtnMas');


        this.carrusel.appendChild(this.btnMenos);
        this.carrusel.appendChild(this.slide);
        this.carrusel.appendChild(this.btnMas);
        padre.innerHTML = "";
        padre.appendChild(this.carrusel);
    }
    click(sentido) {
        let leftActual = this.slide.scrollLeft;
        let suma = leftActual + this.slide.clientWidth * 0.8 * sentido;
        if (leftActual + this.slide.clientWidth >= this.slide.scrollWidth) suma = 0;
        this.slide.scrollLeft = suma;
        console.log("left ", leftActual, "suma", suma, "scrollwidth", this.slide.scrollWidth, "anchoSlide", this.slide.clientWidth);
        console.log("left+ancho ", leftActual + this.slide.clientWidth);

    }

}