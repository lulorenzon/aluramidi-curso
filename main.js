function tocaSomPiano (seletorAudio) {
    //seletorAudio como nem tem tag 
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } //se a seleção achar a tag da o play no som
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

// atributo classList acessa todas as classes do elemento do array [0] 
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSomPiano(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
        // onkeydown quando clica nas teclas e dipara o evento  com a tecla space  ou enter 

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
    // logica para quando o usuario solta a tecla do teclado onkeyup  

}



