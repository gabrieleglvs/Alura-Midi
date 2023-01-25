function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play(); //toca o som da tecla pom
}

//CRIEI UMA REFERÊNCIA
const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; //usando o classList eu acessei a lista de classe do elemento que selecionei uma o listaDeTeclas[contador]

    //TEPLATE STRING
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio)
    }; //criei uma funcao anonima

    tecla.onkeydown = function () {
        tecla.classList.add('ativa');
    }
}
