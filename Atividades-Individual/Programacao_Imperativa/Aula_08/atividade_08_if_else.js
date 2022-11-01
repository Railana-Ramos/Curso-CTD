console.log(`

  Bem-vindo ao nosso cardápio digital: 

  Temos as seguintes opções:

  1 - Pizza
  2 - Hamburguer
  7 - Tapioca Recheada
`);

let opcao = '12';

if  (opcao == 1){
    console.log (`Sua opção é a ${opcao}, ou seja, você escolheu Pizza`)
}
else if (opcao == 2) {
    console.log (`Sua opção é a ${opcao}, ou seja, você escolheu Hamburguer`)
}
else if (opcao == 7){
    console.log (`Sua opção é a ${opcao}, ou seja, você escolheu Tapioca Recheada` )
}
else {
    console.log(`Sua opção é a ${opcao} e não temos ainda esse número no cardápio, pode tentar novamente em alguns dias. Boa noite! :D`)
}

