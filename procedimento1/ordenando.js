swap = (vetor, posicao1, posicao2) => {
    let temp = vetor[posicao1]; 
    vetor[posicao1] = vetor[posicao2];
    vetor[posicao2] = temp;
}

shuffle = (vetor, trocas) => {
    //...
}

bubble_sort = (vetor) => {
    let troca = false;
    for(var i = 0; i <= vetor.length-1; i++){
        troca = false;
        for(var j = 0; j < ( vetor.length - i -1); j++){
            // Compara os dois números adjacentes e verifica se
            // o primeiro é maior que o segundo
            if(vetor[j] > vetor[j+1]){
                // Troca eles se a condição for verdadeira
                swap(vetor, j, j+1);
                troca = true;
            }
        }

        if(troca == false) return;
    }
}

selection_sort = (vetor) => {
    //...
} 

quick_sort = (vetor, posicaoInicial, posicaoFinal) => {
    //...
}

particionamento = (vetor, posicaoInicial, posicaoFinal, valorPivot) => {
    //...
}

function add () {
    var valor = document.getElementById("valor").value;
    var valores = document.getElementById("valores");
    var node = document.createElement("li");
    var texto = document.createTextNode(valor);
    node.appendChild(texto);
    valores.appendChild(node);
}

function ordenar () {
    var algoritmo = document.getElementById("algoritmo").value;
    var valores = document.getElementById("valores");
    var vetorValores = Array.from(valores.children).map(e => parseInt(e.innerHTML));
    eval(algoritmo + "(vetorValores)");
    valores.innerHTML = "";
    vetorValores.map(i => {
        var node = document.createElement("li");
        var texto = document.createTextNode(i);
        node.appendChild(texto);
        valores.appendChild(node);
    });
}

function misturar () {
    alert("apertei misturar");
}

