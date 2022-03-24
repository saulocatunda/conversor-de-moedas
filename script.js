function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5;

  // Falta saber a formula da conversão
  var valorEmBitcoin = 0.0000048 * valorEmReal;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var elementoValorConvertidoBitcoin = document.getElementById(
    "valorConvertidoBitcoin"
  );

  var valorConvertido = "O resultado em real é R$: " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;

  var valorConvertidoBitcoin = valorEmBitcoin;
  elementoValorConvertidoBitcoin.innerHTML =
    "O valor em bitcoin é de: " + valorEmBitcoin;
}

// Saulo Catunda