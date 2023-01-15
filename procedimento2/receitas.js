var receitas = [{
    titulo: "Arroz de Couve-Flor",
    imagem: "imagens/arroz-de-couve-flor.png",
    ingredientes: ["Arroz", "Couve-Flor", "Cebola Média", "Azeite"],
    preparo: "Deixe a couve-flor picada. Adicione os ingredientes e refogue bem. Adicione sal, tampe a panela e deixe cozinhar."
},{
    titulo: "Bolo de Café",
    imagem: "imagens/bolo-de-cafe.webp",
    ingredientes: ["Farinha de Trigo", "Açúcar", "Café Coado", "Chocolate em Pó", "Ovos"],
    preparo: "Bata o açúcar, as gemas e o café. Adicione farinha e chocolate e mexa bem. Bata as claras e junte à mistura."
},{
    titulo: "Coxinha de Brigadeiro",
    imagem: "imagens/coxinha-de-brigadeiro.png",
    ingredientes: ["Leite Condensado", "Chocolate em Pó", "Manteiga", "Morango", "Chocolate Granulado"],
    preparo: `<p>Junte o leite condensado, chocolate em pó e manteiga.</p>
        <p>Aqueça no fogo baixo.</p>
        <p>Envolva os morangos e passe no granulado.</p>`
},{
    titulo: "Arroz de Couve-Flor",
    imagem: "imagens/arroz-de-couve-flor.png",
    ingredientes: ["Arroz", "Couve-Flor", "Cebola Média", "Azeite"],
    preparo: "Deixe a couve-flor picada. Adicione os ingredientes e refogue bem. Adicione sal, tampe a panela e deixe cozinhar."
},{
    titulo: "Bolo de Café",
    imagem: "imagens/bolo-de-cafe.webp",
    ingredientes: ["Farinha de Trigo", "Açúcar", "Café Coado", "Chocolate em Pó", "Ovos"],
    preparo: "Bata o açúcar, as gemas e o café. Adicione farinha e chocolate e mexa bem. Bata as claras e junte à mistura."
},{
    titulo: "Coxinha de Brigadeiro",
    imagem: "imagens/coxinha-de-brigadeiro.png",
    ingredientes: ["Leite Condensado", "Chocolate em Pó", "Manteiga", "Morango", "Chocolate Granulado"],
    preparo: `<p>Junte o leite condensado, chocolate em pó e manteiga.</p>
        <p>Aqueça no fogo baixo.</p>
        <p>Envolva os morangos e passe no granulado.</p>`
}];

function getListaIngredientes(receita) {
    var html = "<ul>";
    receita.ingredientes.forEach(ingrediente => {
        html += "<li>"+ ingrediente +"</li>";
    });
    html += "</ul>";
    return html;
}

function getCard(receita) {
    var html =
        `<img class="card-img-top" src="`+ receita.imagem + `"/>
        <div class="card-body">
            <h2 class="card-title">`+ receita.titulo + `</h2>
            <div class="card-text">
               `+ getListaIngredientes(receita) + ` 
            </div>
            <hr/>
            <div class="descricao">`+ receita.preparo + `</div>
        </div>`;
    var card = document.createElement('div');
    card.classList.add("card");
    card.innerHTML = html.trim();
    return card;
}

function preencheCatalog() {
    var pnlCatalogo = document.getElementById('pnlCatalogo');
    receitas.forEach(receita => {
        var card = getCard(receita);
        pnlCatalogo.appendChild(card);
    });
}

