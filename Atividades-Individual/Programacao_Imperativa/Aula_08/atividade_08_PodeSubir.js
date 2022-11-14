function podeSubir(altura,acompanhante){
    if (altura >=1.41 && altura < 2.00){
        console.log ('Pode subir, divirta-se')
    } else if (altura  <= 1.40 && acompanhante == 'Sim'){
        console.log ('Você está acompanhado, pode subir, divirta-se!')
    } else if (altura  <= 1.40 && acompanhante == 'Nao'){
        console.log ('Você não está acompanhado, desculpe não poderá subir!')
    } else if (altura < 1.20){
        console.log ('Desculpe, você não tem tamanho suficiente, volte daqui a alguns anos quando tiver maior, agradecemos sua preferência!')
    } else {
        console.log ('Tivemos algum problema com sua altura ou seu acompanhante, por favor procure um funcionário para informa-lo o motivo!')
    }
}

podeSubir (1.68, 'Sim')