/* ATIVIDADE 1: Crie um programa que receba (via prompt-sync ou stdin) o genero do 
filme escolhido: "Ação", "Comedia", "Terror", "ou "Animação". 
Use a estrutura switch para imprimir em qual sala o filme passará: 
1- Ação: "Sala 1"
2- Comédia: "Sala 2"
3- Terror: "Sala 3"
4- Animação: "Sala 4"
5- Caso padrão (default): "Genero não encontrado. Verifique as opções validas"*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('Genero do filme: ');
rl.prompt();

let generodoFilme = '';
rl.on('line', (input) => {
    generodoFilme = input.toString().trim().toLowerCase();
    console.log('Sua Sala');
    
switch (generodoFilme){
    case 'ação':
        case "acao":
        console.log("Sala 1");
        break;
    case 'comedia':
        console.log("Sala 2");
        break;
    case 'terror':
        console.log("Sala 3");
        break;
    case 'animação':
        console.log("Sala 4");
        break;
    default:
        console.log("Genero não encontrado. Verifique as opções validas,");

    }
rl.close();
})