function check(){
    let allInputs = document.getElementsByName("flag");
    let selecionados = [];
    let naoSelecionados =[];
    let corretos = [];
    let incorretos = [];

    for (let i = 0; i<18 ;i++){
        if (allInputs[i].checked === true){
        selecionados.push(allInputs[i]); 
            for (let x= 0; x<selecionados.length; x++){
            if (selecionados[x].value === 'Certo' ){
            corretos.push(selecionados[x]);
            alert('Voce acertou'+'  ' + corretos.length + '  entre 10!')
        }               
        
        
        else { 
            naoSelecionados.push(allInputs[i])
            console.log(naoSelecionados);
        }
    }
}}}
    
    
    /*
    var results = [];
    for(var x=0;x<18;x++)
        if(allInputs[x].value == 'Certo')
            results.push(allInputs[x]);
            console.log(results);
    return results;    
}

function check() {
        if (){        
        console.log('Tudo preenchido');
    }else {  
        console.log('Nada preenchido');
}}*/
