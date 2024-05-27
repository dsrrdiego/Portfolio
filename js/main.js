///sector search Render
let tags = [{
    "nombre": 'Angular',
    "activo": false
}, {
    "nombre": 'C++',
    "activo": false
}, {
    "nombre": 'Java',
    "activo": false
}, {
    "nombre": 'JavaScript',
    "activo": false
}, {
    "nombre": 'Juego',
    "activo": false
}, {
    "nombre": 'OpenGL',
    "activo": false
}, {
    "nombre": 'astronómica',
    "activo": false
}];
let filtro = [];
let sectorTags = document.getElementById('sectionTags');
let btnsTag = [];

for (let i = 0; i < tags.length; i++) {
    let btn = document.createElement('button');
    btn.innerHTML = tags[i].nombre;
    btn.classList.add(`btnEnable${tags[i].activo}`);
    btn.addEventListener("click", () => btnTag(i));
    btnsTag.push(btn);
    sectionTags.appendChild(btn);
}
let buscarPalabra = document.createElement('input');
buscarPalabra.addEventListener("input", () => filtrar(buscarPalabra.value));

sectionTags.appendChild(buscarPalabra);

function btnTag(i) {
    tags[i].activo = !tags[i].activo;
    btnsTag[i].classList.remove('btnActivotrue');
    btnsTag[i].classList.remove('btnActivofalse');
    btnsTag[i].classList.add(`btnActivo${tags[i].activo}`);

    filtrar(buscarPalabra.value);

}
/// sector filtrado
let card = [];

function filtrar(palabra = '') {
    console.log(palabra);
    palabra = palabra.toLowerCase();
    card = [];
    for (const c of cards) {
        if (c.titulo == "GALAXY" || c.titulo.toLowerCase() == "carrera de caracoles") {
            let agregarXPalabra = true
            let agregarXTag = true
            if (palabra != '') {
                // if (!((c.titulo.toLowerCase().includes(palabra) || c.categoria.toLowerCase().includes(palabra) || c.descripcion.toLowerCase().includes(palabra) || c.fecha.toLowerCase().includes(palabra) || c.lenguaje.toLowerCase().includes(palabra)))) {
                if (!((c.titulo.toLowerCase().includes(palabra) || c.categoria.toLowerCase().includes(palabra) || c.descripcion.toLowerCase().includes(palabra) || c.fecha.toLowerCase().includes(palabra) || c.lenguaje.toLowerCase().includes(palabra)))) {
                    agregarXPalabra = false;
                    console.log('borrando ' + c.titulo);
                }
            }

            for (const t of tags) {
                if (t.activo) {
                    palabra = t.nombre.toLowerCase();
                    if (!(c.titulo.toLowerCase().includes(palabra) || c.categoria.toLowerCase().includes(palabra) || c.descripcion.toLowerCase().includes(palabra) || c.fecha.toLowerCase().includes(palabra) || c.lenguaje.toLowerCase().includes(palabra))) {
                        // if (!(c.titulo.toLowerCase().includes(palabra) || c.categoria.toLowerCase().includes(palabra) || c.descripcion.toLowerCase().includes(palabra) || c.fecha.toLowerCase().includes(palabra) || c.lenguaje.toLowerCase().includes(palabra))) {
                        agregarXTag = false;
                    }
                }

            }
            if (agregarXPalabra && agregarXTag) card.push(c);

        }
    }
    render()
}



///Sector cards Render
let section = document.getElementById('section');

function render() {
    section.innerHTML = "";
    card.forEach(card => {
        let string = '<article>';
        // if (card.video != "") string += '<div class="video"><iframe class="video" src="' + card.video + '" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div>';
        // else {
        //     string += '<img class="video" src="imagenes/' + card.imagen + '"></img>';
        // }
        string += '<div class="titulo"><h2>' + card.titulo + '</h2></div>';
        string += '<div class="datos"> <div class="categoria"> <h3>' + card.categoria + '</h3> </div>'
        string += '<div class="categoria fecha"><h5>' + card.fecha + '</h5></div>';
        string += '<div class="descripcion"><h4>' + card.descripcion + '</h4> </div> <br>';
        string += '<div class="lenguaje"> <h4>Lenguaje: ' + card.lenguaje + '</h4></div>';
        if (card.repo != "") string += '<div class="repo"><a target="_blank" class="repoLink" href="' + card.repo + '">Ir al Repositorio GitHub</a></h4></div>';
        if (card.link != "") string += '<button class="boton"> <a target="_blank" href="' + card.link + '">' + card.linkTexto + '</a> </button></div></article>';
        string += '</article>';
        section.innerHTML += string;
    })
}

filtrar();