function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play(); //toca o som da tecla pom
}

//CRIEI UMA REFERÊNCIA
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; //usando o classList eu acessei a lista de classe do elemento que selecionei uma o listaDeTeclas[contador]

    //TEPLATE STRING
    const idAudio = `#som_${instrumento}`;

    //console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio)
    }; //criei uma funcao anonima

    contador++;

    //console.log(contador);
}