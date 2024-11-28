    // Modal
    const btnAbrir = document.getElementById("abrirModal")
    const modal = document.getElementById("modal")
    const fade = document.getElementById("fade")
    const nomeUsuario = document.getElementById("nomeUsuario")
    const emailUsuario = document.getElementById("emailUsuario")
    const senhaUsuario = document.getElementById("senhaUsuario")
    const naoLogado = document.getElementById("alerta") 
    const infoUser = JSON.parse(localStorage.getItem("infoUser"))

    const toggleModal = () => {
        modal.classList.toggle("esconder");
        fade.classList.toggle("esconder");
    };

    [btnAbrir, fade].forEach((el) => {
        el.addEventListener("click", () => toggleModal());
    });

    if(infoUser != null){
        naoLogado.style.display = 'none'
        nomeUsuario.innerHTML = `Nome: ${infoUser.nomeUser}`
        senhaUsuario.innerHTML = `Senha: ${infoUser.senhaUser}`
        emailUsuario.innerHTML = `Email: ${infoUser.emailUser}`
    }

    function MostrarProdutosDestaque(){

        MostrarProdutosRecentes()

        const produtosdestaque = JSON.parse(localStorage.getItem("destaque"));

        const nomeDestaque1 = document.getElementById("nomeDestaque1")
        const precoDestaque1 = document.getElementById("precoDestaque1")
        const imgDestaque1 = document.getElementById("imgDestaque1")
        const divDestaque1 = document.querySelector(".produtoDestaque1")

        const nomeDestaque2 = document.getElementById("nomeDestaque2")
        const precoDestaque2 = document.getElementById("precoDestaque2")
        const imgDestaque2 = document.getElementById("imgDestaque2")
        const divDestaque2 = document.querySelector(".produtoDestaque2")

        const nomeDestaque3 = document.getElementById("nomeDestaque3")
        const precoDestaque3 = document.getElementById("precoDestaque3")
        const imgDestaque3 = document.getElementById("imgDestaque3")
        const divDestaque3 = document.querySelector(".produtoDestaque3")

        if(produtosdestaque !=null){
            if(produtosdestaque[0] != null){
                nomeDestaque1.innerHTML = produtosdestaque[0].nome
                precoDestaque1.innerHTML = `R$ ${produtosdestaque[0].preco}`
                imgDestaque1.src = produtosdestaque[0].url
                divDestaque1.style.display = "block"
            }
            if(produtosdestaque[1] != null){
                    nomeDestaque2.innerHTML = produtosdestaque[1].nome
                    precoDestaque2.innerHTML = `R$ ${produtosdestaque[1].preco}`
                    imgDestaque2.src = produtosdestaque[1].url
                    divDestaque2.style.display = "block"
            }

            if(produtosdestaque[2] != null){
                        nomeDestaque3.innerHTML = produtosdestaque[2].nome
                        precoDestaque3.innerHTML = `R$ ${produtosdestaque[2].preco}`
                        imgDestaque3.src = produtosdestaque[2].url
                        divDestaque3.style.display = "block"
            }
        }
    
}

// Fazendo os produtos da parte "Mais Recentes" aparecerem 
function MostrarProdutosRecentes(){
    const produtosTenis = JSON.parse(localStorage.getItem("produtosTenis"));
    const produtosChuteiras = JSON.parse(localStorage.getItem("produtosChuteiras"));
    const produtosCoturnos = JSON.parse(localStorage.getItem("produtosCoturnos"));

    // Puxando tags do primeiro produto
        const nomeProdRec1 = document.getElementById("nomeRecente1");
        const precoProdRec1 = document.getElementById("precoRecente1");
        const imgProdRec1 = document.getElementById("imgRecente1");
        const divProdRec1 = document.querySelector(".produtoRecente1");

    // Puxando tags do segundo produto
        const nomeProdRec2 = document.getElementById("nomeRecente2");
        const precoProdRec2 = document.getElementById("precoRecente2");
        const imgProdRec2 = document.getElementById("imgRecente2");
        const divProdRec2 = document.querySelector(".produtoRecente2");

    // Puxando tags do terceiro produto
        const nomeProdRec3 = document.getElementById("nomeRecente3");
        const precoProdRec3 = document.getElementById("precoRecente3");
        const imgProdRec3 = document.getElementById("imgRecente3");
        const divProdRec3 = document.querySelector(".produtoRecente3");

    // Definindo qual produto vai aparecer em cada local
    if(produtosTenis != null){
        if(produtosTenis[2] != null){
            nomeProdRec1.innerHTML = produtosTenis[2].nome
            precoProdRec1.innerHTML = `R$ ${produtosTenis[2].preco}`
            imgProdRec1.src = produtosTenis[2].urlImage
            divProdRec1.style.display = "block"
        } else if (produtosTenis[1] != null) {
            nomeProdRec1.innerHTML = produtosTenis[1].nome
            precoProdRec1.innerHTML = `R$ ${produtosTenis[1].preco}`
            imgProdRec1.src = produtosTenis[1].urlImage
            divProdRec1.style.display = "block"
        }else if (produtosTenis[0] != null) {
            nomeProdRec1.innerHTML = produtosTenis[0].nome
            precoProdRec1.innerHTML = `R$ ${produtosTenis[0].preco}`
            imgProdRec1.src = produtosTenis[0].urlImage
            divProdRec1.style.display = "block"
        }
    }

        if(produtosChuteiras != null){
            if(produtosChuteiras[2] != null){
                nomeProdRec2.innerHTML = produtosChuteiras[2].nome
                precoProdRec2.innerHTML = `R$ ${produtosChuteiras[2].preco}`
                imgProdRec2.src = produtosChuteiras[2].urlImage
                divProdRec2.style.display = "block"
            } else if(produtosChuteiras[1] != null){
                nomeProdRec2.innerHTML = produtosChuteiras[1].nome
                precoProdRec2.innerHTML = `R$ ${produtosChuteiras[1].preco}`
                imgProdRec2.src = produtosChuteiras[1].urlImage
                divProdRec2.style.display = "block"
            } else if(produtosChuteiras[0] != null){
                nomeProdRec2.innerHTML = produtosChuteiras[0].nome
                precoProdRec2.innerHTML = `R$ ${produtosChuteiras[0].preco}`
                imgProdRec2.src = produtosChuteiras[0].urlImage
                divProdRec2.style.display = "block"
            }
        }

        if(produtosCoturnos !=null){
            if(produtosCoturnos[2] != null){
                nomeProdRec3.innerHTML = produtosCoturnos[2].nome
                precoProdRec3.innerHTML = `R$ ${produtosCoturnos[2].preco}`
                imgProdRec3.src = produtosCoturnos[2].urlImage
                divProdRec3.style.display = "block"
            } else if(produtosCoturnos[1] != null){
                nomeProdRec3.innerHTML = produtosCoturnos[1].nome
                precoProdRec3.innerHTML = `R$ ${produtosCoturnos[1].preco}`
                imgProdRec3.src = produtosCoturnos[1].urlImage
                divProdRec3.style.display = "block"
            } else if(produtosCoturnos[0] != null){
                nomeProdRec3.innerHTML = produtosCoturnos[0].nome
                precoProdRec3.innerHTML = `R$ ${produtosCoturnos[0].preco}`
                imgProdRec3.src = produtosCoturnos[0].urlImage
                divProdRec3.style.display = "block"
            }
        }
}

function irParaLogin(){
    window.location.href = "../Login/Login.html"
}

function PaginaRecenteTenis(){
    const produtosTenis = JSON.parse(localStorage.getItem("produtosTenis"))
    const nomeProdRec1 = document.getElementById("nomeRecente1");

    if(produtosTenis != null){
        if(produtosTenis[0].nome == nomeProdRec1.innerHTML){
            window.location.href = "../ProdutosCaveiroes/TenisCaveiroes/Tenis_1/Tenis_1.html"  
        }else if(produtosTenis[1].nome == nomeProdRec1.innerHTML){
            window.location.href = "../ProdutosCaveiroes/TenisCaveiroes/Tenis_2/Tenis_2.html"
        } else if(produtosTenis[2].nome == nomeProdRec1.innerHTML){
            window.location.href = "../ProdutosCaveiroes/TenisCaveiroes/Tenis_3/Tenis_3.html"
        }
    }
}

function PaginaRecenteChuteira(){
    const produtosChuteiras = JSON.parse(localStorage.getItem("produtosChuteiras"))
    const nomeProdRec2 = document.getElementById("nomeRecente2");

    if(produtosChuteiras != null){
        if(produtosChuteiras[0].nome == nomeProdRec2.innerHTML){
            window.location.href = "../ProdutosCaveiroes/ChuteirasCaveiroes/Chuteira_1/Chuteira_1.html"
        }else if(produtosChuteiras[1].nome == nomeProdRec2.innerHTML){
            window.location.href = "../ProdutosCaveiroes/ChuteirasCaveiroes/Chuteira_2/Chuteira_2.html"
        } else if(produtosChuteiras[2].nome == nomeProdRec2.innerHTML){
            window.location.href = "../ProdutosCaveiroes/ChuteirasCaveiroes/Chuteira_3/Chuteira_3.html"
        }
    }
}

function PaginaRecenteCoturno(){
    const produtosCoturnos = JSON.parse(localStorage.getItem("produtosCoturnos"))
    const nomeProdRec3 = document.getElementById("nomeRecente3");

    if(produtosCoturnos != null){
        if(produtosCoturnos[0].nome == nomeProdRec3.innerHTML){
            window.location.href = "../ProdutosCaveiroes/CoturnosCaveiroes/Coturno_1/Coturno_1.html"
        }else if(produtosCoturnos[1].nome == nomeProdRec3.innerHTML){
            window.location.href = "../ProdutosCaveiroes/CoturnosCaveiroes/Coturno_2/Coturno_2.html"
        } else if(produtosCoturnos[2].nome == nomeProdRec3.innerHTML){
            window.location.href = "../ProdutosCaveiroes/CoturnosCaveiroes/Coturno_3/Coturno_3.html"
        }
    }
}

function PaginaDestaque1(){
    window.location.href = '../Paginas_Destaque/Destaque1/Destaque1.html'
}

function PaginaDestaque2(){
    window.location.href = '../Paginas_Destaque/Destaque2/Destaque2.html'
}

function PaginaDestaque3(){
    window.location.href = '../Paginas_Destaque/Destaque3/Destaque3.html'
}

function IrParaTenis(){
    window.location.href = "../ProdutosCaveiroes/TenisCaveiroes/CatalogoTenis.html"
}

function IrParaCuturnos(){
    window.location.href = "../ProdutosCaveiroes/CoturnosCaveiroes/CatalogoCoturnos.html"
}

function IrParaChuteiras(){
    window.location.href = "../ProdutosCaveiroes/ChuteirasCaveiroes/CatalogoChuteiras.html"
}
    
function irParaCarrinho(){
    window.location.href = "../Carrinho/Carrinho.html"
}


    window.onload = MostrarProdutosDestaque;
