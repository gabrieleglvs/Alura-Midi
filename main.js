function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio); //toca o som da tecla pom

    if(elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }  else {
        alert('Elemento não encontrado ou seletor inválido');
        console.log('Elemento não encontrado');
    }
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

    tecla.onkeydown = function (evento) {
        if(evento.code === 'Space' || evento.code === "Enter") {
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
