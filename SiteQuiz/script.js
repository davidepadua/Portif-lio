function check() {
    let allInputs = document.getElementsByName("flag");
    let selecionados = [];
    let naoSelecionados =[];
    let corretos = [];    
    for (let i = 0; i<allInputs.length ;i++){
        if (allInputs[i].checked == true){
        selecionados.push(allInputs[i]); 
            for (let i= 0; i<selecionados.length; i++){
            if (selecionados[i].value === 'Certo'){
            corretos.push(selecionados[i])
            break                                           
        }
        else { 
            naoSelecionados.push(allInputs[i]);            
        }
    }
}}
alert('Voce acertou'+'  ' + corretos.length + '  entre 9!');
}

