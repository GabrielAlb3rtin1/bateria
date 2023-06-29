function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);

    if (elemento != null && elemento.localName === 'audio') {   // && significa and
        elemento.play();
    }
    else {
        alert('Elemento não encontrado ou seletor inválido');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para = for
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1] //classList é a lista do elemento
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {  //onkeydown - quando a tecla estiver pressionada

        if (evento.code === 'Space' || evento.code === 'Enter') { // || significa ou - or
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () { //onkeyup - quando solta a tecla
        tecla.classList.remove('ativa');
    }


}



/* document.querySelector('.tecla_pom').onclick = tocaSom; para tocar a tecla POM

function tocaSomClap() {                - DO ZERO PARA TOCAR A TECLA CLAP
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_clap').onclick = tocaSomClap;
*/