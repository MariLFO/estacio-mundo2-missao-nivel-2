swap = (vetor, posicao1, posicao2) => {
    // ...
}

shuffle = (vetor, trocas) => {
    //...
}

bubble_sort = (vetor) => {
    //...
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
    alert("apertei ordenar");
}

function misturar () {
    alert("apertei misturar");
}

