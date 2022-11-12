# PP1-CRUD de Produtos 1.0

- ****Objetivo do Projeto:** Implementar um sistema de cadastro, edição e exclusão local de produtos, sem a interação com um banco de dados utilizando JavaScript puro e orientado à objetos.
- **Tecnologias Utilizadas:**
    - HTML5
    - CSS3
    - JavaScript
- **Data de Início:** 08/11/2022
- **Data de Término:** 12/11/2022

## Layout

![Untitled](PP1-CRUD%20de%20Produtos%201%200%2007714ab5f4034328a35585e9f1b23cea/Untitled.png)

Basicamente esse é o layout principal e único da aplicação, no qual será capaz de cadastrar o nome do produto e o seu respectivo preço.

Na parte de ações, é possível realizar a edição e a exclusão da linha respectivamente clicando nos ícones de lápis e da lata de lixo.

A aplicação se resume no botão de salvar, que executa uma variável chamada **produto que é responsável por instanciar a classe Produtos e seus métodos internos, como salvar() e cancelar().**

![Untitled](PP1-CRUD%20de%20Produtos%201%200%2007714ab5f4034328a35585e9f1b23cea/Untitled%201.png)

![Untitled](PP1-CRUD%20de%20Produtos%201%200%2007714ab5f4034328a35585e9f1b23cea/Untitled%202.png)

## Método salvar()

![Untitled](PP1-CRUD%20de%20Produtos%201%200%2007714ab5f4034328a35585e9f1b23cea/Untitled%203.png)

método **salvar()**

Primeiro os dados inseridos no campo são lidos pelo método **readData(),** que é responsável por criar um objeto de produto, inserindo os campos preenchidos nos campos do objeto, retornando esse objeto na variável produto.

Depois é verificado se o método **validateField()** retorna true. Caso positivo o método **adicionar()** é acionado, mas em caso negativo é retornado um alert informando os campos a serem preenchidos. 

![Untitled](PP1-CRUD%20de%20Produtos%201%200%2007714ab5f4034328a35585e9f1b23cea/Untitled%204.png)

Isso ocorre pois quando o método é chamada dentro do **if**, além de ser verificado o retorno, também ocorre a execução desse método **validateField()**. 

Vamos analisar cada um deles de modo mais detalhado ainda, para deixarmos a documentação bem completa.

## **Método readData()**

![Untitled](PP1-CRUD%20de%20Produtos%201%200%2007714ab5f4034328a35585e9f1b23cea/Untitled%205.png)

Responsável por criar um objeto de produto, inserindo os campos preenchidos em HTML nos campos do objeto.

## Método validateField()

![Untitled](PP1-CRUD%20de%20Produtos%201%200%2007714ab5f4034328a35585e9f1b23cea/Untitled%206.png)

Recebe um produto como parâmetro.

Se algum dos campos não estiver preenchido, um alert é emitido na tela e o retorno será false; caso contrário retorna o valor booleano true.

## Método adicionar()

![Untitled](PP1-CRUD%20de%20Produtos%201%200%2007714ab5f4034328a35585e9f1b23cea/Untitled%207.png)

No método construtor, criamos dois atributos: o id e um array que irá listar todos os objetos de Produtos que forem criados.

![Untitled](PP1-CRUD%20de%20Produtos%201%200%2007714ab5f4034328a35585e9f1b23cea/Untitled%208.png)

O método **readData()** realiza a criação do objeto Produto que será enviado como parâmetro para o método **adicionar()** .

Chamamos o atributo de arrayProdutos e adicionamos o objeto no último item da lista e incrementamos o id.

Após a criação do método **salvar()** conseguimos concluir a nossa primeira etapa no projeto: adicionar um objeto na lista utilizando array.

Na próxima etapa iremos listar os itens do array na tabela, ou seja, gerar uma nova linha assim que o produto for salvo.

## listTable()

```jsx
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
```

Esse é o método principal para a listagem das linhas na tabela.

Primeiro capturamos o elemento **tbody** da tabela e inicializamos ele vazio para evitar duplicações de registros no momento de salvar o produto.

Em seguida percorremos a mesma quantidade de elementos que o **arrayProdutos**  possui para inserir os **trs e tds utilizando o DOM,** além de colocar os ícones de editar e excluir.

## cancelar()

Responsável por limpar os campos assim que o produto é criado.

```jsx
cancelar()
    {
        document.getElementById('produto').value = '';
        document.getElementById('preco').value = '';
    }
```

## validateDuplicatedProduct()

```jsx
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
```

Simplesmente verifica se há duplicidade de produtos na hora de criar um produto.

## Remover Elementos e Objetos do Array

Primeiro criaremos a função deletar:

```jsx
deletar(id)
    {
        let tbody = document.getElementById('tbody');

        for(let i = 0; i < this.arrayProdutos.length; i++)
        {
            if(this.arrayProdutos[i].id == id)
            {
                this.arrayProdutos.splice(i,1);
                tbody.deleteRow(i);
            }
        }
        
        console.log(this.arrayProdutos);
    }
```

O tbody é o ID que se encontra no corpo da tabela no arquivo HTML

```html
<div class="content">
            <table border="1">
                <thead>
                    <th>Id</th>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Ações</th>
                </thead>

                <tbody id="tbody">
                </tbody>
            </table>
        </div>
```

No método **deletar(),** o elemento **tbody** é identificado, e depois percorremos a mesma quantidade de elementos do arrayProdutos para verificar se o id do array é igual ao id que passamos como parâmetro; se for, utilizamos o método splice para deletar apenas um elemento, que é o id selecionado, e deletamos a linha também utilizando o **tbody**.

No método **listTable()**, precisamos colocar um atributo dentro do ícone afim de chamar o método **deletar().**

Faremos isso utilizando o ***setAttribute(’par1’, ‘par2’);***  onde estamos criando a imagem da lixeira. Colocaremos no setAttribute dois parâmetros, que seria um evento e o nome da função que iremos ativar.

```jsx
let imgDelete = document.createElement('img');
imgDelete.src = './images/delete.png';
imgDelete.setAttribute("onclick","produto.deletar("+ this.arrayProdutos[i].id +")");
```

## Editar Itens do Array e Exibir no HTML com JSON

Quando apertar no botão de editar teremos que trazer os dados do array para os campos, e depois temos que atualizar os registros dentro do array.

A primeira coisa a se fazer é colocar um ***setAtributte()*** embaixo do **imgEdit.** Em seguida, teremos que converter o array em string utilizando JSON.stringify() dentro do parâmetro produto.edition, que será acionado pelo onclick().

```jsx
let imgEdit = document.createElement('img');
imgEdit.src = './images/edit.png';
//converter array em string
imgEdit.setAttribute("onclick","produto.edition("+ JSON.stringify(this.arrayProdutos[i])+")"); 
```

Em seguida criaremos o método **edition(),** que tem como função passar os dados do objeto que está dentro do array para os campos em HTML através do DOM.

Criamos também o atributo **editId,** para evitar a duplicidade de registros na hora de clicar no botão de atualizar.

```jsx
//Todos os atributos dentro do método constructor
    constructor()
    {
        this.id = 1;
        this.arrayProdutos = [];
        this.editId = null; // editId != null -> inserção de dados na tabela
    }
```

```jsx
edition(dados)
    {
       this.editId = dados.id;

       document.getElementById('produto').value = dados.nome;
       document.getElementById('preco').value = dados.preco;

       //Alterar o botão de Salvar para Atualizar
       document.getElementById('btn1').innerText = 'Atualizar';
    }
```

Para realizar essa verificação, precisamos fazer uma condição no método **salvar().**

Após validar se todos os campos estão preenchidos com o método ********************************validateField()******************************** , precisamos verificar se o campo **this.editId** continua nulo, ou seja, se não está em edição. 

```jsx
salvar()
    {
        let produto = this.readData();
        
        if(this.validateField(produto))
        {
            if(this.editId == null )
            {
                this.adicionar(produto)
            }else
            {
                this.update(this.editId, produto);
            }
        }

        this.listTable();
        this.cancelar();
        console.log();
    }
```

Se estiver em edição, nós executamos o método update logo abaixo, que percorre o **arrayProdutos**, verifica se o id é igual ao id passado no parâmetro, e atribui os campos de nome e preço.

```jsx
update(id, produto)
    {
        for(let i = 0; i < this.arrayProdutos.length; i++)
        {
            if(this.arrayProdutos[i].id == id ){
                this.arrayProdutos[i].nome = produto.nome;
                this.arrayProdutos[i].preco = produto.preco;
            }
        }
    }
```

O **this.editId** recebe o valor de um ID no método **edition(),** que está no exemplo de código abaixo.

```jsx
edition(dados)
    {
       this.editId = dados.id;

       document.getElementById('produto').value = dados.nome;
       document.getElementById('preco').value = dados.preco;

       //Alterar o botão de Salvar para Atualizar
       document.getElementById('btn1').innerText = 'Atualizar';
    }