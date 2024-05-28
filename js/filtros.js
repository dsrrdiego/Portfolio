function renderFiltros(tags) {
    let sectorTags = document.getElementById('sectionTags');
    let filtro = [];
    let btnsTag = [];
    let buscarPalabra = document.createElement('input');
    buscarPalabra.addEventListener("input", () => filtrar(buscarPalabra.value));
    buscarPalabra.placeholder = "buscar"
    sectionTags.appendChild(buscarPalabra);

    for (let i = 0; i < tags.length; i++) {
        let btn = document.createElement('button');
        btn.innerHTML = tags[i].nombre;
        btn.classList.add(`btnActivo${tags[i].activo}`);

        btn.addEventListener("click", () => btnTag(i));
        btnsTag.push(btn);
        sectionTags.appendChild(btn);
    }

    sectorTags.classList.toggle('inVisible');
    let bt = document.getElementById('btnBuscar').addEventListener('click', () => sectorTags.classList.toggle('inVisible'));

    function btnTag(i) {
        tags[i].activo = !tags[i].activo;
        btnsTag[i].classList.remove('btnActivotrue');
        btnsTag[i].classList.remove('btnActivofalse');
        btnsTag[i].classList.add(`btnActivo${tags[i].activo}`);

        filtrar();

    }

}

function filtrar(palabraDelInput = '') {

    let palabrasABuscar = [''];
    palabrasABuscar.push(palabraDelInput);
    for (const tag of tags)
        if (tag.activo) palabrasABuscar.push(tag.nombre);

    card = filtrado(cards, palabrasABuscar);


}



function filtrado(cards, claves) {
    let filtradas = [];
    for (const c of cards) {
        let agregar = false;
        for (let p of claves) {
            p = p.toLowerCase();
            for (let attr in c) {
                if (c[attr].toLowerCase().includes(p)) {
                    agregar = true;
                    break;
                }
                agregar = false;
            }
            if (!agregar) break;
        }
        if (agregar) filtradas.push(c);
    }
    return filtradas;
}