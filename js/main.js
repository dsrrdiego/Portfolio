renderFiltros(tags);




let slide = document.getElementById('slide');
document.getElementById('btnSlideMenos').addEventListener('click', () => btnSlide(-1));
document.getElementById('btnSlideMas').addEventListener('click', () => btnSlide(1));
/// sector filtrado
// let card = [];

filtrar();
render()




///Sector cards Render


function render() {
    slide.innerHTML = "";

    for (let i = 0; i < card.length; i++) {
        let c = crearCard(card[i]);
        slide.innerHTML += c;
    }

}

function btnSlide(sentido) {
    // indice[i] += sentido;
    // if (indice[i] == -1) indice[i] = carruseles[i].cards.length - 1;
    // if (indice[i] == carruseles[i].cards.length) indice[i] = 0;
    // console.log(indice[i]);
    // const sli = document.getElementById("slide" + i);
    slide.scrollLeft += 100 * sentido;
    // slide.scrollLeft = indice[i] * sli.offsetWidth;
    // }

    //     // document.getElementById("enviar").addEventListener("click", enviar);
    //     // document.getElementById("mensaje");

    //     // function enviar() {
    //     //     var link =
    //     //         "https://wa.me/" +
    //     //         "+5492983606824" +
    //     //         "?text=" +
    //     //         encodeURIComponent(mensaje.value);
    //     //     window.open(link);
}



function crearCard(card) {
    let string = '<article>creada';
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
    return string;
}