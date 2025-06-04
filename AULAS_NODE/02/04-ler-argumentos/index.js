console.log(process.argv); // Exibe todos os argumentos passados na linha de comando

const args = process.argv.slice(2); // Pega os argumentos a partir do terceiro elemento (índice 2)
console.log(args); // Exibe os argumentos a partir do terceiro elemento

const nome = args[0].split('=')[1]; // Pega o nome do usuário
const idade = args[1].split('=')[1]; // Pega a idade do usuário

console.log(`Olá ${nome}, você tem ${idade} anos!`); // Exibe a mensagem formatada