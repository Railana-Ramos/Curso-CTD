const participanteA =  [5, 8, 4, 9, 5]
const participanteB =  [8, 7, 8, 6, 8]
const participanteC =  [7, 5, 10, 8, 3]

function media(valores){
  let resultado = 0
  for (let i = 0; i < valores.length; i++) {
   resultado += valores[i]
}
    return resultado/valores.length
}

function pontuacaoMaior(valores){
    let resultado = 0
    for (let i = 0; i < valores.length; i++) {
    if (valores[i] > resultado){
        resultado = valores[i]
    }


}
    return resultado
}


console.log(media(participanteA))
console.log(media(participanteB))
console.log(media(participanteC))

console.log(pontuacaoMaior(participanteA))
console.log(pontuacaoMaior(participanteB))
console.log(pontuacaoMaior(participanteC))