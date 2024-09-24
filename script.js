let numeros = []

function escrever(mensagem){
    let output = document.querySelector("#output");
    output.innerHTML = mensagem;
}

function identificar(){
    let valor = parseFloat(document.querySelector("#numero").value);
    if(!numeros.includes(valor)){
        numeros.push(valor);
        let conjunto = new Set(numeros);
        let listaNumerosUnicos = Array.from(conjunto);
        escrever("Valores únicos: " + listaNumerosUnicos.slice(0, 10));
    }
    else{
        alert("Número repetido");
    }
}

function resetar(){
    numeros = [];
    escrever(numeros);
}