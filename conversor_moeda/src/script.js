var nome = prompt ('Olá, qual o seu nome? ');

alert(nome + '\nBem vindo ao nosso Conversor de moedas! Para começarmos clique no botão [OK]');

var valorEmDolar = prompt('Digite o valor em Dolar que você quer converter para Real: ');

var cotacaoDoDolar = 4.87;
var valorEmReal = valorEmDolar * cotacaoDoDolar
valorEmReal = valorEmReal.toFixed(2);
alert(nome + '\n$ ' + valorEmDolar + ' fica R$ ' + valorEmReal);



