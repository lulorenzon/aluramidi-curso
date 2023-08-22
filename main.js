// function tocaSom (seletorAudio) {
//     const elemento = document.querySelector(seletorAudio);

//     if (elemento && elemento.localName === 'audio') {
//         elemento.play();
//     }
//     else {
//         //alert('Elemento não encontrado');
//         console.log('Elemento não encontrado ou seletor inválido');
//     }

// }

// const listaDeTeclas = document.querySelectorAll('.tecla');

// //para
// for (let contador = 0; contador < listaDeTeclas.length; contador++) {

//     const tecla = listaDeTeclas[contador];
//     const instrumento = tecla.classList[1];
//     const idAudio = `#som_${instrumento}`; //template string

//     tecla.onclick = function () {
//         tocaSom(idAudio);
//     }

//     tecla.onkeydown = function (evento) {

//         if (evento.code === 'Space' || evento.code === 'Enter') {
//             tecla.classList.add('ativa');
//         }

//     }

//     tecla.onkeyup = function () {
//         tecla.classList.remove('ativa');
//     }

// }



palavraPalindromo()

function  palavraPalindromo () {
  const palavra = "rever";
  const separandoPalavra = palavra.split ("");
  const palavraInvertida = separandoPalavra.reverse()
  palavraInvertida = palavraInvertida,join("");

  if (palavra == palavraInvertida){
    console.log("palavra invertida" + palavra + "é um polindromo");
  } else {
    console.log("palavra invertida" + palavra + "é um polindromo");
  }
  }