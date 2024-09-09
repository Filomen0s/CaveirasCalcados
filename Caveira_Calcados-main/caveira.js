function Logar() {
    let campoNomeLogin = document.getElementById("nameLogin")
    let campoEmailLogin = document.getElementById("emailLogin")
    let campoSenhaLogin = document.getElementById("senhaLogin")

    let NomeLogin = campoNomeLogin.value
    let EmailLogin = campoEmailLogin.value
    let SenhaLogin = campoSenhaLogin.value

    let Bancodados = JSON.parse(localStorage.getItem("bancoDados"));
    if (BancoDados = null) {
        alert("Nenhum usário cadastrado no momemnto")
    } else {
        if (NomeLogin == NomeCadastro && EmailLogin == EmailCadastro && SenhaLogin == SenhaConfirmCadastro) {
            window.location.href = "/Pagina-principal/pagina_principal.html"
        } else {
            alert("Alguma das coisas ta errada!!")
        }
    }

}

// função que troca de página
function Cadastro() {
    window.location.href = "/Cadastro/Cadastro.html"
}

function concluirCadastro() {
    // Puxar valor inputs
    let campoNomeCadastro = document.getElementById("nameCadastro").value
    let campoEmailCadastro = document.getElementById("emailCadastro").value
    let campoSenhaCadastro = document.getElementById("senhaCadastro").value
    let campoSenhaConfirmCadastro = document.getElementById("senhaConfirmarCadastro").value

    let checkCadastro = document.getElementById("checkbox")

    if(checkCadastro.checked){
    if(campoSenhaCadastro != campoSenhaConfirmCadastro){
        alert("A senha está errada!")
    } else if (campoSenhaCadastro.value == campoSenhaConfirmCadastro.value){
        const objeto = {
        name:  campoNomeCadastro,
        email: campoEmailCadastro,
        senha: campoSenhaConfirmCadastro
    };

    localStorage.setItem("Cadastro", JSON.stringify(objeto));
    
    alert("Login efetuado")
    
    window.location.href = "/Login/Login.html"
    
}
} else{
    alert("Para cadastrar uma conta você deve concordar com os Termos de uso e Segurança da Cavaeira Calçado's")
}

}
    



