// Modal
const botaoAbrir = document.querySelector("#abrirModal");
const botaoFechar = document.querySelector("#fecharModal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    modal.classList.toggle("esconder");
    fade.classList.toggle("esconder");
}

[botaoAbrir, botaoFechar, fade].forEach ((el) =>{
    el.addEventListener("click", () =>toggleModal());
});

function concluirLogin() {
    const campoNomeLogin = document.getElementById("nameLogin").value
    const campoEmailLogin = document.getElementById("emailLogin").value
    const campoSenhaLogin = document.getElementById("senhaLogin").value

    const obj = {
        NomeLogin: campoNomeLogin,
        EmailLogin: campoEmailLogin,
        SenhaLogin: campoSenhaLogin
    }
    
    const Bancodados = JSON.parse(localStorage.getItem("bancoDados"));
    if(obj.NomeLogin == "admin123" && obj.SenhaLogin == "admin123" && obj.EmailLogin == "admin123@admin123.com"){
        window.location.href = "/GenrenciarArmazenamento/GenrenciarArmazenamento.html"
    } else{
    if (Bancodados == null) {
        alert("Nenhum usuário cadastrado!")
    } else {
        if (campoNomeLogin && campoEmailLogin && campoSenhaLogin) {

            if (obj.NomeLogin != Bancodados.name || obj.EmailLogin != Bancodados.email || obj.SenhaLogin != Bancodados.senha) {
                alert("Alguma Informação está errada!!!")
            } else {
                if (obj.NomeLogin == Bancodados.name && obj.EmailLogin == Bancodados.email && obj.SenhaLogin == Bancodados.senha) {
                    window.location.href = "../Pagina-principal/pagina_principal.html"

                    let nomeUser = obj.NomeLogin
                    let emailUser = obj.EmailLogin
                    let senhaUser = obj.SenhaLogin

                    const user = {
                        nomeUser: nomeUser,
                        emailUser: emailUser,
                        senhaUser: senhaUser
                    }

                    localStorage.setItem("infoUser", JSON.stringify(user));

                    }
                }
            }else{
            alert("Credenciais não inseridas")    
            } 
        }
    }
}

// função que troca de página
function irParaCadastro() {
    window.location.href = "../Cadastro/Cadastro.html"
}

function irParaInicio(){
    window.location.href = "../Pagina-principal/pagina_principal.html"
}

function esqSenha(){


    let esqSenha = document.getElementById("novaSenha").value
    let confirmEsqSenha = document.getElementById("confirmNovaSenha").value
    let esqNome
    let esqEmail

    let objEsqSenha = {
        name: esqNome,
        email: esqEmail,
        senha: esqSenha,
        senhaConfirm: confirmEsqSenha
    }

    let Bancodados = JSON.parse(localStorage.getItem("bancoDados"));

    if(Bancodados == null){
        alert("Nenhum usuário cadastrado!")

        //código repetido nessa parte para permitir que o modal feche apos clicar no botão
        const toggleModal = () => {
            modal.classList.toggle("esconder");
            fade.classList.toggle("esconder");
        }
        
        [botaoAbrir, botaoFechar, fade].forEach ((el) =>{
            el.addEventListener("click", () =>toggleModal());
        });

    }else if(esqSenha && confirmEsqSenha){
        if(objEsqSenha.senha == objEsqSenha.senhaConfirm){

            Bancodados.senha = objEsqSenha.senha;
            Bancodados.senhaconfirm = objEsqSenha.senhaConfirm;
            objEsqSenha.name = Bancodados.name
            objEsqSenha.email = Bancodados.email
        
        
            localStorage.setItem("bancoDados", JSON.stringify(objEsqSenha));

            modal.classList.toggle("esconder");
            fade.classList.toggle("esconder");

        }else{
            alert("A senha está errada!")
        }
    }else{
        alert("Credenciais não inseridas!")
    }
    
    // codigo que fecha o modal
    const toggleModal = () => {
        modal.classList.toggle("esconder");
        fade.classList.toggle("esconder");
    }
    
    [botaoAbrir, botaoFechar, fade].forEach ((el) =>{
        el.addEventListener("click", () =>toggleModal());
    });

}

window.onload = User;