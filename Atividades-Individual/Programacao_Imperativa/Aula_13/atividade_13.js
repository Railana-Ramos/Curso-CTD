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

function competicao(p1,p2,p3){

  pontuacaoMaior(p1)
  pontuacaoMaior(p1)
  pontuacaoMaior(p3)
  media(p1)
  media(p2)
  media(p3)

 let resultadoFinal = "A maior pontuacao foi "+ Math.max(pontuacaoMaior(p1), pontuacaoMaior(p2), pontuacaoMaior(p3)) +" e a maior média foi " + Math.max(media(p1), media(p2), media(p3)) 

return resultadoFinal
}

console.log(competicao(participanteA,participanteB,participanteC))