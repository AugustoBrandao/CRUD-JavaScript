class Produto
{

    //Todos os atributos dentro do método constructor
    constructor()
    {
        this.id = 1;
        this.arrayProdutos = [];
    }

    readData(){
        let produto = {} //obj
        produto.id = this.id;
        produto.nome = document.getElementById('produto').value;
        produto.preco = document.getElementById('preco').value;

        return produto;
    }

    validateField(produto){
        let msg = '';

        //Se o usuário não preencheu algum campo
        if(produto.nome == ''){
            msg += "Informe o nome do produto \n";
        }

        if(produto.preco == ''){
            msg += "Informe o preço do produto \n";
        }

        //Se o usuário preencheu todos os campos
        if(msg != ''){
            alert(msg);
            return false
        }

        return true;
    }

    validateDuplicatedProduct(produto){
        let value = false;

        for(let i of this.arrayProdutos)
        {
            if(i.nome == produto.nome && i.preco == produto.preco){
                value = true;
                alert('Produto já criado!')
            }
        }

        return value;
    }

    listTable(){
        let tbody = document.getElementById('tbody');

        //Limpar os registros antes de listar
        tbody.innerText = ''; // Evitar duplicação de registros

        for(let i = 0; i < this.arrayProdutos.length; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nome;
            td_preco.innerText = this.arrayProdutos[i].preco;

            //Colocar botões de editar e excluir na linha
            let imgEdit = document.createElement('img');
            imgEdit.src = './images/edit.png';

            let imgDelete = document.createElement('img');
            imgDelete.src = './images/delete.png';

            td_acoes.appendChild(imgEdit);            
            td_acoes.appendChild(imgDelete);
        }
    }

    cancelar()
    {
        document.getElementById('produto').value = '';
        document.getElementById('preco').value = '';
    }

    salvar()
    {
        let produto = this.readData();
        
        if(this.validateField(produto) && this.validateDuplicatedProduct(produto) == false){
            this.adicionar(produto);
        }

        this.listTable();
        this.cancelar();
        console.log();
    }

    //Adicionar elemento no arrayProdutos
    adicionar(produto){
        this.arrayProdutos.push(produto);
        this.id ++;
    }
}

// Instanciar classe Produto para fazer a chamada no onclick
var produto = new Produto();