palavraPalindromo()

function  palavraPalindromo () {
  var palavra = "rever";
  var separandoPalavra = palavra.split ("");
  var palavraInvertida = separandoPalavra.reverse();
  palavraInvertida = palavraInvertida.join("");

  if (palavra == palavraInvertida){
    console.log("palavra invertida " + palavra + " é um polindromo");
  }
    
  else {
    console.log("palavra invertida " + palavra + " nao é um polindromo");
  }
  
}


const essaPalavraPalindromo = function () {
  var palavra = "subinoonibus";
  var separandoPalavra = palavra.split ("");
  var palavraInvertida = separandoPalavra.reverse();
  palavraInvertida = palavraInvertida.join("");

  if (palavra == palavraInvertida){
    console.log("palavra invertida " + palavra + " é um polindromo");
  }
    
  else {
    console.log("palavra invertida " + palavra + " nao é um polindromo");
  }
  
}
essaPalavraPalindromo()


const palavraPalindromo = function () {
    var palavra = "escola";
    var separandoPalavra = palavra.split ("");
    var palavraInvertida = separandoPalavra.reverse();
    palavraInvertida = palavraInvertida.join("");
  
    if (palavra == palavraInvertida){
      console.log("palavra invertida " + palavra + " é um polindromo");
    }
      
    else {
      console.log("palavra invertida " + palavra + " nao é um polindromo");
    }
    
  }
  palavraPalindromo()
