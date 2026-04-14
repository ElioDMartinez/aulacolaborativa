
/* Crie um programa que tenha um menu com as opções de "Cadastrar Alunos" 
e "Listar Alunos".*/
// O aluno deve conter, nome, idade e o nome do curso que está fazendo. 
// Ao cadastrar um novo inserir o objeto em um array e voltar para o menu inicial.
// Utilizar console.table() para listar os alunos.
// Ter uma opção para encerrar o progrrama


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const alunos = [];

function exibirMenu() {
    console.log("\n--- SISTEMA DE CADASTRO ---");
    console.log("1. Cadastrar Aluno");
    console.log("2. Listar Aluno");
    console.log("3. Sair");
    
    rl.question("\nEscolha uma opção:",
        (opcao) => {
        switch (opção){
            case'1':
            cadastrarAluno()
            break;
            case '2':
                listarAlunos()
                break;
                case '3':
                    console.log("Enserrando Programa...");
                    rl,close();
                    break;
                    default:
                        console.log("Opção invalida!");
                        exibirMenu();
                        break;
                    }
                });
            }

function cadastrarAluno() {
    rl.question("Nome do Aluno:", (nome) => {
        rl.question("Idade:", (idade) => {
            rl.question("Nome do Curso:", (curso) => {
                const novoAluno = {
                    Nome: nome,
                    Idade: parselnt(idade),
                    Curso: curso
                };

                alunos.push(novoAluno);
                console.log("\n Aluno cadastrado com sucesso!");
                exibirMenu();
            });
        });
    });
}

function listarAlunos(){
    if (alunos.length === 0){
        console.log("\n Nenhum Aluno cadastrado ainda");
    } else {
        console.log("\n--- LISTA DE ALUNOS ---");
        console.table(alunos);
    }
    exibirMenú();
}

 exibirMenú();