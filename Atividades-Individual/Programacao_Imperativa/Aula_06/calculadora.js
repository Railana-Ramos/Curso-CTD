// Atividade part 1 

function adicionar (num1,num2){
    return num1 + num2;
}

function subtracao (num1, num2){
    return num1 - num2;
}

function multiplicacao (num1, num2){
    return num1 * num2;
}

function divisao (num1, num2){
    return num1 / num2;
}

// Atividade parte 2

console.log ("Teste de operações / Calculadora ");

console.log (adicionar (10,20));
console.log (subtracao (30,10));
console.log (multiplicacao (10,20));
console.log (divisao (10,0));


// Atividade parte 3

function quadradoDoNumero (num1){
    return multiplicacao(num1,num1);
}

function mediaDeTresNumeros (num1,num2,num3){
    let somaMedia = adicionar(adicionar(num1,num2),num3);
    return divisao(somaMedia,3);
}

function calculaPorcentagem (num1,num2){
    let divisaoPor = divisao(num1,100);
    return multiplicacao (divisaoPor,num2)
}

function geradorDePorcentagem(num1,num2){
    let geradorPor = divisao (100, num2)
    return multiplicacao (geradorPor,num1)
}


console.log (quadradoDoNumero(10));
console.log (mediaDeTresNumeros(9,11,14));
console.log (calculaPorcentagem(10,75))
console.log (geradorDePorcentagem(15,125))