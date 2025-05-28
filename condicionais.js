const idade = 50;
const mensagem = `Idade: ${idade} anos`;

console.log(mensagem);

//if, else
if (idade >= 60) {
    console.log("Você é idoso");

 } else if (idade >= 12 && idade <= 18) {
        console.log("Aborrecente");
    }
else if (idade < 12) {
    console.log("Criança");
}
else {
    console.log("Adulto");
}