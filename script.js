let numeros = [];
let valoresUnicos = [];

function identificar(){
    let valor = parseFloat(document.querySelector("#numero").value);

    if(isNaN(valor)){
        alert("Número não válido, digite um número");
    }
    else{
        if(!numeros.includes(valor)){
            numeros.push(valor);
            valoresUnicos.push(valor);
        }
        else{
            numeros.push(valor);
        }
    }

    document.querySelector("#output").innerHTML = "Lista original: " + numeros.slice(0, 10) + "<br>";
    document.querySelector("#output").innerHTML += "Lista sem números duplicados: " + valoresUnicos;
}

function resetar(){
    numeros = [];
    valoresUnicos = [];

    document.querySelector("#output").innerHTML = numeros;
    document.querySelector("#output").innerHTML += valoresUnicos;
}