const arrayObj = [
    {id: 1, nome: "Produto 1", preco: 255},
    {id: 2, nome: "Produto 2", preco: 256},
    {id: 3, nome: "Produto 3", preco: 257},
    {id: 4, nome: "Produto 4", preco: 258},
];

const objeto = {id: 1, nome: "Produto 2", preco: 256};

for(let i of arrayObj){
    if(i.nome == objeto.nome && i.preco == objeto.preco){
       return console.log('duplicado');
    }else{
        console.log('não duplicado');
    }
}

