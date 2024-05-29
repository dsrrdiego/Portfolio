class Carrusel {
    constructor(padre, cards) {
        this.carrusel = document.createElement('div');
        this.carrusel.classList.add('flex');


        this.btnMenos = document.createElement('button');
        this.btnMenos.innerHTML = "<";
        this.btnMenos.onclick = () => this.click(-1);
        this.btnMenos.classList.add('carruselBtn');


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
        this.ocultarBotones();
    }

    click(sentido) {
        let leftActual = this.slide.scrollLeft;
        let suma = leftActual + this.slide.clientWidth * 0.8 * sentido;
        if (leftActual + this.slide.clientWidth >= this.slide.scrollWidth) suma = 0;
        this.slide.scrollLeft = suma;
        this.ocultarBotones();
    }

    ocultarBotones() {
        this.btnMenos.classList.remove('carruselInvisible');
        this.btnMas.classList.remove('carruselInvisible');
        if (this.slide.scrollWidth == this.slide.clientWidth) {
            this.btnMenos.classList.add('carruselInvisible');
            this.btnMas.classList.add('carruselInvisible')
        }
    }

}