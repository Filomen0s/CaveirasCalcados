let produtoEditando = null;


function cadastrarProduto() {
            // Puxando os valores dos inputs
            const nome = document.getElementById('nome').value;
            const preco = document.getElementById('preco').value;
            const descricao = document.getElementById('descricao').value;
            const urlImage = document.getElementById('urlImage').value;
            const urlImageExibir1 = document.getElementById("urlImageExibicao1").value;
            const urlImageExibir2 = document.getElementById("urlImageExibicao2").value;
            const tipo = document.querySelector('input[name="escolha"]:checked').value;

            // Objeto do produto cadastrado
            const produto = {
                nome,
                preco,
                descricao,
                urlImage,
                tipo,
                urlImageExibir1,
                urlImageExibir2
            };
        
            // Cadastrando produtos
            if (produto.nome && produto.preco && produto.descricao && produto.tipo) {

                // Colocando produtos cadastrados nos respectivos local storages

                //Tenis
                if(produto.tipo == "tenis"){
                    let produtosTenis = JSON.parse(localStorage.getItem('produtosTenis')) || [];
                    if(produtoEditando !== null){
                        produtosTenis[produtoEditando] = produto;
                        produtoEditando = null;
                    } else {
                        produtosTenis.push(produto);
                    } 
                    localStorage.setItem('produtosTenis', JSON.stringify(produtosTenis));
                    
                    limparFormulario();
                    exibirProdutos();

                    //Chuteira
                }else if(produto.tipo == "chuteira"){
                    let produtosChuteiras = JSON.parse(localStorage.getItem('produtosChuteiras')) || [];
                    if(produtoEditando !== null){
                        produtosChuteiras[produtoEditando] = produto;
                        produtoEditando = null;
                    } else {
                        produtosChuteiras.push(produto);
                    }
                    localStorage.setItem('produtosChuteiras', JSON.stringify(produtosChuteiras));

                    limparFormulario();
                    exibirProdutos();

                    //Coturno
                } else if (produto.tipo == "coturno"){
                    let produtosCoturnos = JSON.parse(localStorage.getItem('produtosCoturnos')) || [];
                    if(produtoEditando !== null){
                        produtosCoturnos[produtoEditando] = produto;
                        produtoEditando = null;
                    } else {
                        produtosCoturnos.push(produto);   
                    }
                    localStorage.setItem('produtosCoturnos', JSON.stringify(produtosCoturnos));

                    limparFormulario();
                    exibirProdutos();
                }
            } else {
                alert('Preencha todos os campos para cadastrar o produto!');
            }

        }

        function limparFormulario() {
            window.location.reload(true)
            document.getElementById('nome').value = '';
            document.getElementById('preco').value = '';
            document.getElementById('descricao').value = '';
            document.getElementById('urlImage').value = '';
            document.getElementById("urlImageExibicao1").value = '';
            document.getElementById("urlImageExibicao2").value = '';
            document.querySelector('escolha').value = '';

        }
;
        function exibirProdutos() {
          const produtosTenis = JSON.parse(localStorage.getItem('produtosTenis')) || [];
          const produtosChuteiras = JSON.parse(localStorage.getItem('produtosChuteiras')) || [];
          const produtosCoturnos = JSON.parse(localStorage.getItem('produtosCoturnos')) || [];
          
          const listaProdutos = document.getElementById('listaProdutos');
          listaProdutos.innerHTML = '';

          //tenis
          for (let i in produtosTenis) {
            const produto = produtosTenis[i];
            const li = document.createElement('li');
            
            // Criar container para botões
            const botoesContainer = document.createElement('div');
            botoesContainer.className = 'linha-botoes';
            
            // Botão Editar
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Editar';
            editBtn.classList.add('edit-btn');
            editBtn.onclick = () => editarProdutoTenis(i);
            
            // Botão Destaque
            const destaqueBtnTenis = document.createElement('button');
            destaqueBtnTenis.textContent = 'Destaque';
            destaqueBtnTenis.classList.add('destaque-btn');
            destaqueBtnTenis.onclick = () => destacarProdutoTenis(i);
            
            // Botão Tirar Destaque
            const tirarDestaquebtnTenis = document.createElement('button');
            tirarDestaquebtnTenis.textContent = 'Tirar Destaque';
            tirarDestaquebtnTenis.classList.add('tirarDestaque');
            tirarDestaquebtnTenis.onclick = () => tirarDestaqueTenis(produto.nome);
            
            // Botão Deletar
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Deletar';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.onclick = () => deletarProdutoTenis(produto.nome);
            
            // Adiciona botões ao container
            botoesContainer.appendChild(editBtn);
            botoesContainer.appendChild(destaqueBtnTenis);
            botoesContainer.appendChild(tirarDestaquebtnTenis);
            botoesContainer.appendChild(deleteBtn);
            
            // Criar container para imagens
            const imagensContainer = document.createElement('div');
            imagensContainer.className = 'linha-imagens';
            
            // Criar imagens
            const img = document.createElement('img');
            img.src = produto.urlImage;
            img.style.width = '100px';
            img.style.margin = '5px';
            
            const imgExib1 = document.createElement('img');
            imgExib1.src = produto.urlImageExibir1;
            imgExib1.style.width = '100px';
            imgExib1.style.margin = '5px';
            
            const imgExib2 = document.createElement('img');
            imgExib2.src = produto.urlImageExibir2;
            imgExib2.style.width = '100px';
            imgExib2.style.margin = '5px';
            
            // Adiciona imagens ao container
            imagensContainer.appendChild(img);
            imagensContainer.appendChild(imgExib1);
            imagensContainer.appendChild(imgExib2);
            
            // Criar container para texto
            const textoContainer = document.createElement('div');
            textoContainer.className = 'linha-texto';
            textoContainer.textContent = `${produto.nome} - R$${produto.preco} - ${produto.descricao} - ${produto.tipo}`;
            
            // Montar a li final
            li.appendChild(botoesContainer);
            li.appendChild(imagensContainer);
            li.appendChild(textoContainer);
            
            // Adicionar ao DOM
            listaProdutos.appendChild(li);
          }


          //chuteira
          for (let i in produtosChuteiras) {
            const produto = produtosChuteiras[i];
            const li = document.createElement('li');
            
            // Criar container para botões
            const botoesContainer = document.createElement('div');
            botoesContainer.className = 'linha-botoes';
            
            // Botão Editar
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Editar';
            editBtn.classList.add('edit-btn');
            editBtn.onclick = () => editarProdutoChuteira(i);
            
            // Botão Destaque
            const destaqueBtnTenis = document.createElement('button');
            destaqueBtnTenis.textContent = 'Destaque';
            destaqueBtnTenis.classList.add('destaque-btn');
            destaqueBtnTenis.onclick = () => destacarProdutoChuteiras(i);
            
            // Botão Tirar Destaque
            const tirarDestaquebtnTenis = document.createElement('button');
            tirarDestaquebtnTenis.textContent = 'Tirar Destaque';
            tirarDestaquebtnTenis.classList.add('tirarDestaque');
            tirarDestaquebtnTenis.onclick = () => tirarDestaqueChuteira(produto.nome);
            
            // Botão Deletar
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Deletar';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.onclick = () => deletarProdutoChuteira(produto.nome);
            
            // Adiciona botões ao container
            botoesContainer.appendChild(editBtn);
            botoesContainer.appendChild(destaqueBtnTenis);
            botoesContainer.appendChild(tirarDestaquebtnTenis);
            botoesContainer.appendChild(deleteBtn);
            
            // Criar container para imagens
            const imagensContainer = document.createElement('div');
            imagensContainer.className = 'linha-imagens';
            
            // Criar imagens
            const img = document.createElement('img');
            img.src = produto.urlImage;
            img.style.width = '100px';
            img.style.margin = '5px';
            
            const imgExib1 = document.createElement('img');
            imgExib1.src = produto.urlImageExibir1;
            imgExib1.style.width = '100px';
            imgExib1.style.margin = '5px';
            
            const imgExib2 = document.createElement('img');
            imgExib2.src = produto.urlImageExibir2;
            imgExib2.style.width = '100px';
            imgExib2.style.margin = '5px';
            
            // Adiciona imagens ao container
            imagensContainer.appendChild(img);
            imagensContainer.appendChild(imgExib1);
            imagensContainer.appendChild(imgExib2);
            
            // Criar container para texto
            const textoContainer = document.createElement('div');
            textoContainer.className = 'linha-texto';
            textoContainer.textContent = `${produto.nome} - R$${produto.preco} - ${produto.descricao} - ${produto.tipo}`;
            
            // Montar a li final
            li.appendChild(botoesContainer);
            li.appendChild(imagensContainer);
            li.appendChild(textoContainer);
            
            // Adicionar ao DOM
            listaProdutos.appendChild(li);
          }
            
            //Coturno
            for (let i in produtosCoturnos) {
                const produto = produtosCoturnos[i];
            const li = document.createElement('li');
            
            // Criar container para botões
            const botoesContainer = document.createElement('div');
            botoesContainer.className = 'linha-botoes';
            
            // Botão Editar
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Editar';
            editBtn.classList.add('edit-btn');
            editBtn.onclick = () => editarProdutoCoturno(i);
            
            // Botão Destaque
            const destaqueBtnTenis = document.createElement('button');
            destaqueBtnTenis.textContent = 'Destaque';
            destaqueBtnTenis.classList.add('destaque-btn');
            destaqueBtnTenis.onclick = () => destacarProdutoCoturnos(i);
            
            // Botão Tirar Destaque
            const tirarDestaquebtnTenis = document.createElement('button');
            tirarDestaquebtnTenis.textContent = 'Tirar Destaque';
            tirarDestaquebtnTenis.classList.add('tirarDestaque');
            tirarDestaquebtnTenis.onclick = () => tirarDestaqueCoturno(produto.nome);
            
            // Botão Deletar
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Deletar';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.onclick = () => deletarProdutoCoturno(produto.nome);
            
            // Adiciona botões ao container
            botoesContainer.appendChild(editBtn);
            botoesContainer.appendChild(destaqueBtnTenis);
            botoesContainer.appendChild(tirarDestaquebtnTenis);
            botoesContainer.appendChild(deleteBtn);
            
            // Criar container para imagens
            const imagensContainer = document.createElement('div');
            imagensContainer.className = 'linha-imagens';
            
            // Criar imagens
            const img = document.createElement('img');
            img.src = produto.urlImage;
            img.style.width = '100px';
            img.style.margin = '5px';
            
            const imgExib1 = document.createElement('img');
            imgExib1.src = produto.urlImageExibir1;
            imgExib1.style.width = '100px';
            imgExib1.style.margin = '5px';
            
            const imgExib2 = document.createElement('img');
            imgExib2.src = produto.urlImageExibir2;
            imgExib2.style.width = '100px';
            imgExib2.style.margin = '5px';
            
            // Adiciona imagens ao container
            imagensContainer.appendChild(img);
            imagensContainer.appendChild(imgExib1);
            imagensContainer.appendChild(imgExib2);
            
            // Criar container para texto
            const textoContainer = document.createElement('div');
            textoContainer.className = 'linha-texto';
            textoContainer.textContent = `${produto.nome} - R$${produto.preco} - ${produto.descricao} - ${produto.tipo}`;
            
            // Montar a li final
            li.appendChild(botoesContainer);
            li.appendChild(imagensContainer);
            li.appendChild(textoContainer);
            
            // Adicionar ao DOM
            listaProdutos.appendChild(li);
            }
        }

        // Colocar e tirar um tenis dos destaques
        function destacarProdutoTenis(index){
            const produto = JSON.parse(localStorage.getItem('produtosTenis')) || [];

            
            destaque = {
                nome: produto[index].nome,
                url: produto[index].urlImage,
                preco: produto[index].preco,
                descricao:produto[index].descricao,
                urlImageExibir1: produto[index].urlImageExibir1,
                urlImageExibir2: produto[index].urlImageExibir2
            }
    
            let destaqueProdutos = JSON.parse(localStorage.getItem('destaque')) || [];
            destaqueProdutos.push(destaque)
            localStorage.setItem('destaque', JSON.stringify(destaqueProdutos)) || [];

            alert("Produto adicionado aos destaques com sucesso!")
            
        }

        function destacarProdutoChuteiras(index){
            const produto = JSON.parse(localStorage.getItem('produtosChuteiras')) || [];

            destaque = {
                nome: produto[index].nome,
                url: produto[index].urlImage,
                preco: produto[index].preco,
                descricao:produto[index].descricao,
                urlImageExibir1: produto[index].urlImageExibir1,
                urlImageExibir2: produto[index].urlImageExibir2
            }

            let destaqueProdutos = JSON.parse(localStorage.getItem('destaque')) || [];
            destaqueProdutos.push(destaque)
            localStorage.setItem('destaque', JSON.stringify(destaqueProdutos)) || [];

            alert("Produto adicionado aos destaques com sucesso!") 
        }

        function destacarProdutoCoturnos(index){
            const produto = JSON.parse(localStorage.getItem('produtosCoturnos')) || [];

            destaque = {
                nome: produto[index].nome,
                url: produto[index].urlImage,
                preco: produto[index].preco,
                descricao:produto[index].descricao,
                urlImageExibir1: produto[index].urlImageExibir1,
                urlImageExibir2: produto[index].urlImageExibir2
            }

            let destaqueProdutos = JSON.parse(localStorage.getItem('destaque')) || [];
            destaqueProdutos.push(destaque)
            localStorage.setItem('destaque', JSON.stringify(destaqueProdutos)) || [];
            
            alert("Produto adicionado aos destaques com sucesso!")
            
        }

        function tirarDestaqueCoturno(nome){
            let produtosDestaque = JSON.parse(localStorage.getItem('destaque')) || [];
            produtosDestaque = produtosDestaque.filter(produto => produto.nome !== nome);
            localStorage.setItem('destaque', JSON.stringify(produtosDestaque));
            alert("Produto retirado dos destaques com sucesso!");
        }

        function tirarDestaqueChuteira(nome){
            let produtosDestaque = JSON.parse(localStorage.getItem('destaque')) || [];
            produtosDestaque = produtosDestaque.filter(produto => produto.nome !== nome);
            localStorage.setItem('destaque', JSON.stringify(produtosDestaque));
            alert("Produto retirado dos destaques com sucesso!");
        }

        function tirarDestaqueTenis(nome){
            let produtosDestaque = JSON.parse(localStorage.getItem('destaque')) || [];
            produtosDestaque = produtosDestaque.filter(produto => produto.nome !== nome);
            localStorage.setItem('destaque', JSON.stringify(produtosDestaque));
            alert("Produto retirado dos destaques com sucesso!"); 
        }

        function deletarProdutoTenis(nome){
            //tenis

            let produtosTenis = JSON.parse(localStorage.getItem('produtosTenis')) || [];
            produtosTenis = produtosTenis.filter(produto => produto.nome !== nome);
            localStorage.setItem('produtosTenis', JSON.stringify(produtosTenis));

            let produtosDestaque = JSON.parse(localStorage.getItem('destaque')) || [];
            produtosDestaque = produtosDestaque.filter(produto => produto.nome !== nome);
            localStorage.setItem('destaque', JSON.stringify(produtosDestaque)); 

            tirarDestaqueTenis(nome);
            exibirProdutos();
        }

        function deletarProdutoChuteira(nome){
            //chuteira
            let produtosChuteiras = JSON.parse(localStorage.getItem('produtosChuteiras')) || [];
            produtosChuteiras = produtosChuteiras.filter(produto => produto.nome !== nome);
            localStorage.setItem('produtosChuteiras', JSON.stringify(produtosChuteiras)); 

            let produtosDestaque = JSON.parse(localStorage.getItem('destaque')) || [];
            produtosDestaque = produtosDestaque.filter(produto => produto.nome !== nome);
            localStorage.setItem('destaque', JSON.stringify(produtosDestaque)); 

            tirarDestaqueChuteira(nome);
            exibirProdutos();
        }

        function deletarProdutoCoturno(nome){
            //coturno
            let produtosCoturnos = JSON.parse(localStorage.getItem('produtosCoturnos')) || [];
            produtosCoturnos = produtosCoturnos.filter(produto => produto.nome !== nome);
            localStorage.setItem('produtosCoturnos', JSON.stringify(produtosCoturnos));

            let produtosDestaque = JSON.parse(localStorage.getItem('destaque')) || [];
            produtosDestaque = produtosDestaque.filter(produto => produto.nome !== nome);
            localStorage.setItem('destaque', JSON.stringify(produtosDestaque)); 

            tirarDestaqueCoturno(nome);
            exibirProdutos();
        }
        
        function limparLista() {
            localStorage.removeItem('produtosTenis');
            localStorage.removeItem('produtosChuteiras');
            localStorage.removeItem('produtosCoturnos');
            localStorage.removeItem('destaque');
            exibirProdutos();
        }
        
        function editarProdutoTenis(index) {
            let produtosTenis = JSON.parse(localStorage.getItem('produtosTenis'));
            const produto = produtosTenis[index];

            document.getElementById('nome').value = produto.nome;
            document.getElementById('preco').value = produto.preco;
            document.getElementById('descricao').value = produto.descricao;
            document.getElementById('urlImage').value = produto.urlImage;
            document.getElementById("urlImageExibicao1").value = produto.urlImageExibir1;
            document.getElementById("urlImageExibicao2").value = produto.urlImageExibir2;

            produtoEditando = index
        }
        
        function editarProdutoChuteira(index) {
            let produtosChuteiras = JSON.parse(localStorage.getItem('produtosChuteiras'));
            const produto = produtosChuteiras[index];

            document.getElementById('nome').value = produto.nome;
            document.getElementById('preco').value = produto.preco;
            document.getElementById('descricao').value = produto.descricao;
            document.getElementById('urlImage').value = produto.urlImage;
            document.getElementById("urlImageExibicao1").value = produto.urlImageExibir1;
            document.getElementById("urlImageExibicao2").value = produto.urlImageExibir2;

            produtoEditando = index
        }       
        
        function editarProdutoCoturno(index) {
            let produtosCoturnos = JSON.parse(localStorage.getItem('produtosCoturnos'));
            const produto = produtosCoturnos[index];

            document.getElementById('nome').value = produto.nome;
            document.getElementById('preco').value = produto.preco;
            document.getElementById('descricao').value = produto.descricao;
            document.getElementById('urlImage').value = produto.urlImage;
            document.getElementById("urlImageExibicao1").value = produto.urlImageExibir1;
            document.getElementById("urlImageExibicao2").value = produto.urlImageExibir2;

            produtoEditando = index
        }        

        function voltarInicial(){
            window.location.href = "../index.html"
        }
        
        window.onload = exibirProdutos;