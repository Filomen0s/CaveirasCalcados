function ExibirProduto(){
    const produtos = JSON.parse(localStorage.getItem("destaque"))

    const nomeProduto = document.getElementById("nomeProduto");
    const precoProduto = document.getElementById("precoProduto");
    const descProduto = document.getElementById("descProduto");
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");

    nomeProduto.innerHTML = produtos[0].nome
    precoProduto.innerHTML = `R$ ${produtos[0].preco}`
    descProduto.innerHTML = produtos[0].descricao
    img1.src = produtos[0].urlImageExibir1
    img2.src = produtos[0].urlImageExibir2
}

// variavel que recebe o tamanho do tenis (NÃO PODE ESTAR EM UMA FUNÇÃO)
let tamanhoSelecionado = null;


// Função que muda a cor do botão de tamanho e add o valor na variavel
function selecionarTamanho(size) {

    const botoesTamanho = document.querySelectorAll('.numeroTenis');
    botoesTamanho.forEach(botoesTamanho => {
        botoesTamanho.style.backgroundColor = ''; 
    });

    const botaoSelecionado = document.getElementById(size);
    botaoSelecionado.style.backgroundColor = '#DAA520';

    tamanhoSelecionado = size;
}


// finaliza a compra
function ComprarProduto() {
    let infoUser = JSON.parse(localStorage.getItem("infoUser"));

    if(infoUser == null){
        alert("Não foi possível adicionar o produto ao carrinho pois você não possui uma conta!\nEntre em uma conta ou crie uma para continuar com sua compra!")
        window.location.href = "../../Login/Login.html"
    } else{

        if (tamanhoSelecionado !== null) {

            const produtos = JSON.parse(localStorage.getItem("destaque"))
            
            const carrinho ={
                nome: produtos[0].nome,
                preco: produtos[0].preco,
                tamanho: tamanhoSelecionado,
                img: produtos[0].url
            }
            
            let produtosCarrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

            produtosCarrinho.push(carrinho);
            localStorage.setItem("carrinho", JSON.stringify(produtosCarrinho)) || [];

            alert("Você adicionou esse item ao carrinho");


        } else {
            alert("Por favor, selecione um tamanho antes de comprar.");
        }
    }

}

function VoltarPaginaPrincipal(){
    window.location.href = "../../index.html"
}



window.onload = ExibirProduto;