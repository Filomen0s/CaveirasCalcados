function mostrarItens(){
const produtosCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    if(produtosCarrinho != null){

        const listaProdutos = document.getElementById('listaProdutos');
        listaProdutos.innerHTML = '';

        for (let i in produtosCarrinho) {
            const produto = produtosCarrinho[i];
            const li = document.createElement('li');

            li.classList.add('li');
            
            const img = document.createElement('img');

            img.src = produto.img;
            img.classList.add('imgProduto');
            img.style.margin = '10px'; 
            img.style.width = '350px'; 
            img.style.height = 'auto';

            li.textContent = `${produto.nome} - R$${produto.preco} - Tamanho: ${produto.tamanho}`;
            // li.textContent.className("conteudoLista")
    
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Tirar do carrinho';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.onclick = () => excluirProdutoCarrinho(i);

            li.prepend(img);
            li.appendChild(deleteBtn);
            listaProdutos.appendChild(li);
        }
    }else {
        const tituloCarrinho = document.getElementById('tituloCarrinho');
        tituloCarrinho.innerHTML = 'Sem produtos aqui';
    }

}

// Modala
const modal = document.getElementById("modal");
const fade = document.getElementById("fade");
const btnAbrir = document.getElementById("abrirModal");

const toggleModal = () => {
    modal.classList.toggle("esconder");
    fade.classList.toggle("esconder");
};
  
[btnAbrir, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});

// Fim do modall

function excluirProdutoCarrinho(index){
    let produtosCarrinho = JSON.parse(localStorage.getItem('carrinho'));
    produtosCarrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(produtosCarrinho));
    mostrarItens();
}

function esvaziarCarrinho() {
    window.location.reload(true)
    localStorage.removeItem('carrinho');
    mostrarItens();
}

function voltar(){
    window.location.href = "../index.html"
}

window.onload = mostrarItens;