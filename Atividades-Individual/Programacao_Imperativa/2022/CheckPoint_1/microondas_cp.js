// Programação imperativa
// Checkpoint - 1 
// Aluna : Railana Ramos da Silva
// Turma = 3

// Atividade:

console.log(`
---------Bem vindos ao sistema de microondas da DH!---------------

Menu de comidas, por favor escolha um!

1 - Pipoca – 10 segundos (padrão);
2 - Macarrão – 8 segundos (padrão);
3 - Carne – 15 segundos (padrão);
4 - Feijão – 12 segundos (padrão);
5 - Brigadeiro – 8 segundos (padrão); 

Por favor, tente não adicionar um tempo maior do que a recomendação!`)

function microondas (comida,tempo){
    if (comida == 1){
            console.log ('Você selecionou Pipoca! Tempo recomendado de 10 segundos')
            if (tempo < 10){
                console.log ('Tempo insuficiente, por favor, tente novamente com um valor recomendado.')
            } else if (tempo < 19 ){
                console.log ('Tempo adicionado com sucesso, iniciando em 1...2...3...')
            } else if (tempo >= 20  && tempo <= 29 ) {
                console.log ('Sua comida queimou! Por favor, retire a comida do microondas!')
            } else if (tempo >= 30){
                console.log ('KABUUUM! Erro no sist..e...m...')
            } 
            if (tempo >=10 && tempo <=19){
                console.log ('Sua comida está pronta!')
            } else {
                console.log ('Tivemos um problema com o seu prato, por favor refaça o processo!')
            }
    }
     if (comida == 2 ){
            console.log ('Você selecionou Macarrão! Tempo recomendado de 8 segundos.') 
             if (tempo < 8){
                console.log ('Tempo insuficiente, por favor, tente novamente com um valor recomendado.')
            } else if (tempo < 15){
                console.log ('Tempo adicionado com sucesso, iniciando em 1...2...3...')
            } else if ( tempo >=16 && tempo <= 23){
                console.log ('Sua comida queimou! Por favor, retire a comida do microondas!')
            } else if (tempo >= 24){
                console.log ('KABUUUM! Erro no sist..e...m...')
            }
            if (tempo >=8 && tempo <=15){
                console.log ('Sua comida está pronta!')
            } else {
                console.log ('Tivemos um problema com o seu prato, por favor refaça o processo!')
            }
        } 
    if (comida == 3 ){
            console.log ('Você selecionou Carne! Tempo recomendado de 15 segundos.')
            if (tempo < 15){
                console.log ('Tempo insuficiente, por favor, tente novamente com um valor recomendado.')
            } else if (tempo < 29){
                console.log ('Tempo adicionado com sucesso, iniciando em 1...2...3...')
            } else if ( tempo >=30 && tempo <= 44){
                console.log ('Sua comida queimou! Por favor, retire a comida do microondas!')
            } else if (tempo >= 45){
                console.log ('KABUUUM! Erro no sist..e...m...')
            } 
            if (tempo >=15 && tempo <=29){
                console.log ('Sua comida está pronta!')
            } else {
                console.log ('Tivemos um problema com o seu prato, por favor refaça o processo!')
            }
        } 
    if (comida == 4 ){
            console.log ('Você selecionou Feijão! Tempo recomendado de 12 segundos.')
            if (tempo < 12){
                console.log ('Tempo insuficiente, por favor, tente novamente com um valor recomendado.')
            } else if (tempo < 23){
                console.log ('Tempo adicionado com sucesso, iniciando em 1...2...3...')
            } else if ( tempo >=24 && tempo <= 35){
                console.log ('Sua comida queimou! Por favor, retire a comida do microondas!')
            } else if (tempo >= 36){
                console.log ('KABUUUM! Erro no sist..e...m...')
            } 
            if (tempo >=12 && tempo <=24){
                console.log ('Sua comida está pronta!')
            } else {
                console.log ('Tivemos um problema com o seu prato, por favor refaça o processo!')
            }
        } 
    if (comida == 5 ){
             console.log ('Você selecionou Brigadeiro! Tempo recomendado de 8 segundos.')
             if (tempo < 8){
                console.log ('Tempo insuficiente, por favor, tente novamente com um valor recomendado.')
            } else if (tempo < 15){
                console.log ('Tempo adicionado com sucesso, iniciando em 1...2...3...')
            } else if ( tempo >=16 && tempo <= 23){
                console.log ('Sua comida queimou! Por favor, retire a comida do microondas!')
            } else if (tempo >= 24){
                console.log ('KABUUUM! Erro no sist..e...m...')
            }
            if (tempo >=8 && tempo <=15){
                console.log ('Sua comida está pronta!')
            } else {
                console.log ('Tivemos um problema com o seu prato, por favor refaça o processo!')
            }
        } 
    if (comida >=6){
        console.log ('Valor inválido, por favor, selecione um valor válido para seu prato!')
    }
        }

 microondas(2,20);