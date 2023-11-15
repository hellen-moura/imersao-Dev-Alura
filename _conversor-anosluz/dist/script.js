var valorAnosLuz = 3 * 10 ** 8;
var segundosAnoLuz = 365.25 * 24 * 60 * 60;
var distEmAnoLuz = Number(prompt("Digite um vamos em Anos Luz: "));

distEmMetrosLuz = distEmAnoLuz * (valorAnosLuz * segundosAnoLuz);

alert("O valor de anos luz para metros é: " + distEmMetrosLuz + " metros");