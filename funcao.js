function verificarIdade(idade) {
    if (typeof idade !== 'string') {
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
    } else {
        console.log("Por favor, insira um número válido para a idade.");
    }
}


verificarIdade(10);
                