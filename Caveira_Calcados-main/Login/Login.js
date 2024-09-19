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
    if (Bancodados == null) {
        alert("Nenhum usuário cadastrado!")
    } else {
        if (campoNomeLogin && campoEmailLogin && campoSenhaLogin) {
            if (obj.NomeLogin != Bancodados.name || obj.EmailLogin != Bancodados.email || obj.SenhaLogin != Bancodados.senha) {
                alert("Alguma Informação está errada!!!")
            } else {
                if (obj.NomeLogin == Bancodados.name && obj.EmailLogin == Bancodados.email && obj.SenhaLogin == Bancodados.senha) {
                    window.location.href = "../Pagina-principal/pagina_principal.html"
                }
            }
        } else {
            alert("Credenciais não inseridas!")
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