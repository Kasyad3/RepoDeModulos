const minimist = require('minimist');

const args = minimist(process.argv.slice(2)); // Pega os argumentos a partir do terceiro elemento (índice 2)
console.log(args); // Exibe os argumentos como um objeto

const nome = args["nome"]; // Pega o nome do usuário
console.log(`Meu nome é: ${nome}!`); // Exibe a mensagem formatada

const idade = args["idade"]; // Pega o nome do usuário
console.log(`Minha idade é: ${idade}!`); // Exibe a mensagem formatada

const profissao = args["profissao"]; // Pega a profissão do usuário
console.log(`Minha profissão é: ${profissao}!`); // Exibe a mensagem formatada