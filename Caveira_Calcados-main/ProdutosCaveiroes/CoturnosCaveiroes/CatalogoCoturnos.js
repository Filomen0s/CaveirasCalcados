function MostrarItens() {
    // Puxando os produtos do local storage
    let produtos = JSON.parse(localStorage.getItem("produtosCoturnos"))

    // Informações do produto 1
    let nomeProduto1 = document.getElementById("nomeProduto1")
    let precoProduto1 = document.getElementById("precoProduto1")
    let imgProduto1 = document.getElementById("imgProduto1")

    // Informaçõe sdo produto 2
    let nomeProduto2 = document.getElementById("nomeProduto2")
    let precoProduto2 = document.getElementById("precoProduto2")
    let imgProduto2 = document.getElementById("imgProduto2")

    // Informações do produto 3
    let nomeProduto3 = document.getElementById("nomeProduto3")
    let precoProduto3 = document.getElementById("precoProduto3")
    let imgProduto3 = document.getElementById("imgProduto3")

    // Puxando o valor das tags "p" para verificar se estão vazias
    let valorNomeProduto1 = document.getElementById("nomeProduto1").value
    let valorNomeProduto2 = document.getElementById("nomeProduto2").value
    let valorNomeProduto3 = document.getElementById("nomeProduto3").value

    let espacoProd1 = document.querySelector(".produto1")
    let espacoProd2 = document.querySelector(".produto2")
    let espacoProd3 = document.querySelector(".produto3")

    // Fazendo o primeiro produto cadastrado no local storage aparecer na área de do produto 1
    if(valorNomeProduto1 == null || valorNomeProduto1 == ""){
        nomeProduto1.innerHTML = produtos[0].nome
        precoProduto1.innerHTML = `R$ ${produtos[0].preco}`
        imgProduto1.src = produtos[0].urlImage
        espacoProd1.style.display = "block"
    }


    if(valorNomeProduto2 == null || valorNomeProduto2 == ""){
        nomeProduto2.innerHTML = produtos[1].nome
        precoProduto2.innerHTML = `R$ ${produtos[1].preco}`
        imgProduto2.src = produtos[1].urlImage 
        espacoProd2.style.display = "block"
    }


    if(valorNomeProduto3 == null || valorNomeProduto3 == ""){
        nomeProduto3.innerHTML = produtos[2].nome
        precoProduto3.innerHTML = `R$ ${produtos[2].preco}`
        imgProduto3.src = produtos[2].urlImage
        espacoProd3.style.display = "block"
    }

}

function VoltarPaginaPrincipal(){
    window.location.href = "../../Pagina-principal/pagina_principal"
}

function PaginaCoturno_1(){
    window.location.href = "Coturno_1/Coturno_1.html"
}

function PaginaCoturno_2(){
    window.location.href = "Coturno_2/Coturno_2.html"
}

function PaginaCoturno_3(){
    window.location.href = "Coturno_3/Coturno_3.html"
}

function IrParaTenis(){
    window.location.href = "../TenisCaveiroes/CatalogoTenis.html"
}

function IrParaChuteiras(){
    window.location.href = "../ChuteirasCaveiroes/CatalogoChuteiras.html"
}

window.onload = MostrarItens;