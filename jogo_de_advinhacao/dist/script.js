var jogar = prompt ('Bora jogar?(sim/não)');
if (jogar == 'sim') {
  var numeroSecreto = 10
  parseInt(Math.random() * (1001 - 1) + 1);
  var iterador = 0;
  
  while(chute != numeroSecreto){
    
    if(iterador != 0){
      alert('Você ja fez ' + iterador + 'tentativas!')
  }
    
var chute = prompt('Mostre um número 1 e 1000');
if (chute == numeroSecreto){
  alert('Acertou!!');
  } else if (chute > numeroSecreto){
     alert('O número secreto é menor que ' + chute);
  } else if (chute < numeroSecreto){
      alert('O número secreto é maior que ' + chute);
  }
iterador += 1;
  }
}