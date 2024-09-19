function concluirCadastro() {
    // Puxar valor inputs
    let campoNomeCadastro = document.getElementById("nameCadastro").value
    let campoEmailCadastro = document.getElementById("emailCadastro").value
    let campoSenhaCadastro = document.getElementById("senhaCadastro").value
    let campoSenhaConfirmCadastro = document.getElementById("senhaConfirmarCadastro").value

    let checkCadastro = document.getElementById("checkbox")

    const obj = {
        name: campoNomeCadastro,
        email: campoEmailCadastro,
        senha: campoSenhaCadastro,
        senhaconfirm: campoSenhaConfirmCadastro
    }

    if (checkCadastro.checked) {
        if (campoNomeCadastro && campoEmailCadastro && campoSenhaCadastro && campoSenhaConfirmCadastro) {
            if (campoSenhaCadastro != campoSenhaConfirmCadastro) {
                alert("A senha inserida está incorreta!")
            } else {


                localStorage.setItem("bancoDados", JSON.stringify(obj));
                document.getElementById('nameCadastro').value = '';
                document.getElementById('emailCadastro').value = '';
                document.getElementById('senhaCadastro').value = '';
                document.getElementById('senhaConfirmarCadastro').value = '';

                window.location.href = "../Login/Login.html"

            }
        } else {
            alert("Credenciais não inseridas!")
        }
    } else {
        alert("Aceite os termos de uso para prosseguir o cadastro.")
    }

}