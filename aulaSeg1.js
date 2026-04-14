/* TAREFA 16: Criar um programa que pemita cadastrar 3 PRODUTOS, solicitando para cada um:
nome, preço e quantidade em estoque. Ao final, exibir todos os produtos cadastrados de 
forma organizada no terrminal.
(Criação de objeto, uso de array, laços de repetição e exibição formatadade informações)*/

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let produtos = [];
let i = 0;
function cadastrar() {
    if (i < 3) {
        rl.question("Nome do produto: ", (nome) => {
            rl.question("Preço: ", (preço) => {
                rl.question("Quantidade: ", (quantidade) => {
                    produtos.push({ nome, preço, quantidade });
                    i++;
                    
                    cadastrar();
                });
            });
        });
    } else {
        console.log("\nProdutos cadastrados:");
        
        for (let p of produtos) {
            console.log(`Produto: ${p.nome} | Preço: $ {p.preço} | Estoque: ${p.quantidade}`,);
    }
    rl.close();
}
}

cadastrar();
