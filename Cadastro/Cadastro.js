function concluirCadastro() {
    // Puxar valor inputs
    let campoNomeCadastro = document.getElementById("nameCadastro").value
    let campoEmailCadastro = document.getElementById("emailCadastro").value
    let campoSenhaCadastro = document.getElementById("senhaCadastro").value
    let campoSenhaConfirmCadastro = document.getElementById("senhaConfirmarCadastro").value

    let checkCadastro = document.getElementById("checkbox")

    // Variavel contendo os valores do cadastro
    let obj = {
        name: campoNomeCadastro,
        email: campoEmailCadastro,
        senha: campoSenhaCadastro,
        senhaconfirm: campoSenhaConfirmCadastro
    }

    // verificando se os input estão preenchidos
    if (campoNomeCadastro && campoEmailCadastro && campoSenhaCadastro && campoSenhaConfirmCadastro) {

        if(obj.email.includes("@") && obj.email.includes(".com")){
    
            // verificando se a senha está igual a do verificar senha
            if (campoSenhaCadastro == campoSenhaConfirmCadastro) {
                
                // termos de uso check
                if (checkCadastro.checked) {
                    
                    localStorage.setItem("bancoDados", JSON.stringify(obj));
                    
                    //faz o valor dos input voltarem a nulo (inutil eu acho)
                    document.getElementById('nameCadastro').value = '';
                    document.getElementById('emailCadastro').value = '';
                    document.getElementById('senhaCadastro').value = '';
                    document.getElementById('senhaConfirmarCadastro').value = '';
                    
                    window.location.href = "../Login/Login.html"
                    // document.addEventListener("keypress", function(event)){
                    //     if (event.key === "Enter") {
                    //         window.Location.href("../Login/Login.html")
                    //     }
                    // }
                } else {
                    alert("Aceite os termos de uso para prosseguir o cadastro.")
                }
            } else {
                alert("A senha está diferente!")
            }
        } else {
            alert("Insira um email valido")
        }
    } else {
        alert("Credenciais não inseridas!")
    }
 console.log(obj)
}


