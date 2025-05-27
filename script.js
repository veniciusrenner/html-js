////let nome = prompt("Qual é o seu nome?");
//
//let idade = prompt("Qual é a sua idade?");
//
//
//alert(`Olá, ${nome}! você tem ${idade} anos!`)
//
//confirm()
//
//let resposta = confirm("Você tem certeza que deseja sair?");
//console.log(resposta);//

//const nomeDoUsuario = prompt("Qual é o seu nome?");
//const profissaoDoUsuario = prompt("Qual é a sua profissão?");
//
//alert(`Olá, ${nomeDoUsuario}! Que interessante saber que voçê trabalha como ${profissaoDoUsuario}`);

//let idade = 9;
//
//if (idade >= 18) {
//    console.log("Você é maior de idade.");
//}
//else

//let nota = 50;
//
//
//    console.log("Aprovado com exelência.");
//}else if (nota >= 60) {
//    console.log("Aprovado.");
//}else {
//    console.log("Reprovado.");
//}

//let idade = 18;
//let possuiCarteira = true;
//
//if (idade >= 18 && possuiCarteira) {
//    console.log("Pode dirigir.");
//} else if (idade >= 18 && !possuiCarteira) {
//    console.log("precisa tirar a carteira.");
//} else {
//    console.log("menor de idade.");
//}

//let nomeDoUsuario = pompt("Qual é o seu nome?");
//let idade = prompt("Qual é a sua idade?");
//
//if (idade >= 18) {
//    alert(`Olá, ${nomeDoUsuario}! Você é maior de idade.`);
//}else {
//    alert(`${nomeDoUsuario}! Você não pode dirigir.`);
//}


//let temperatura = Number(prompt("Qual é a temperatura local e atual?"));
//
//if (temperatura > 35) {
//    alert("Calor extremo.")
//} else if (temperatura >= 25 && temperatura <= 35) {
//    alert("Clima quente.")
//} else if (temperatura >= 15 && temperatura <= 24){
//    alert("Clima agradavel.")
//} else if (temperatura >= 5 && temperatura <= 14){
//    alert("Clima frio.")
//} else {
//    alert("frio intenso.")
//}


//let numero = Number(prompt("Digite um número:"));
//let resultado = numero % 2 === 0 ? "par" : "ímpar";
//
//alert(`O número ${numero} é ${resultado}.`);
//
//let numero1 =Number(prompt("Digite o número:"));
//
//let resultado1
//
//if (numero1 % 2 === 0) {
//    resultado1 = "par";
//}else {
//    resultado1 = "ímpar";
//}
//
//alert(`O número ${numero1} é ${resultado1}.`);

//let cor = 'vermelho';
//
//switch (cor) {
//    case 'vermelho':
//        console.log('pare')
//        break;
//    case 'amarelo':
//        console.log('atenção')
//        break;
//    case 'verde':
//        console.log('pode passar')
//        break;
//    default:
//        console.log('cor inválida')
//        break;
//}

//
// let cor = prompt("Digite uma cor do semaforo (Vermelho, amarelo ou verde):").toLowerCase();
//

//
// switch (cor) {
//
//     case 'vermelho':
//
//         alert('pare');
//
//         break;
//
//     case 'amarelo':
//
//         alert('atenção');
//
//         break;
//
//     case 'verde':
//
//         alert('pode passar');
//
//         break;
//
//     default:
//
//         alert('cor inválida');
//
//         break;
//


//let operacao = prompt("Escolha uma operação: +, -, *, /");
//let n1 = Number(prompt("Digite o primeiro número:"));
//let n2 = Number(prompt("Digite o segundo número:"));
//let resultado;
//
//switch (operacao) {
//    case '+':
//        resultado = n1 + n2;
//        break;
//        case '-':
//        resultado = n1 - n2;    
//        break;
//        case '*':
//        resultado = n1 * n2;
//        break;
//        case '/':
//            resultado = n2 !== 0 ? n1 / n2 : "Erro : Divisão por zero";
//            break;
//        default:
//            resultado = "Operação inválida";
//            break;
//}
//alert("resultado: " + resultado);

//let opcao = Number(prompt('Escolha uma opcao:\n1 - Saque: \n2 - Transferencia:\n3 - saldo:\n4 - Extrato'));
//
//switch (opcao) {
//    case 1:
//        alert('Voçê escolheu: Saque')
//        break;
//
//        case 2:
//        alert('Voçê escolheu: Transferencia')
//        break;
//        case 3:
//        alert('Voçê escolheu: Saldo')
//        break;  
//        case 4:
//            alert('Voçê escolheu: Extrato')
//            break;
//        default:
//            alert('Opção inválida. tente novamente.')
//            break;

//for (let i = 10; i >= 1; i--) {
//    console.log(i);
//}

//for (let i = 2; i <= 20; i += 2) {
//    console.log("passo " + i);
//}
//for (let i = 1; i <= 30; i++) {
//    if (i % 2 === 0)
//        console.log(i);
//}

//let numero = Number(prompt("Digite um número para ver a tabuada:"));
//let tabuada = ""; // string acumuladora
//
//for (let i = 1; i <= 10; i++) {
//    tabuada += `${numero} x ${i} = ${numero * i}\n`; // adiciona cada linha com quebra
//}
//alert(tabuada); // exibe a tabuada completa

//let senha = Number(prompt("Digite sua senha:"));
//
//while (senha !== 1234) {
//    senha = Number(prompt("Senha invalida. Tente novamente:"));
//
//}
//alert("Acesso concedido.");

//let palavra = prompt("Digite uma palavra:");
//let resultado = "";
//for (let i = 1 ; i <= 5 ; i++){
//
//resultado += ` ${i} - ${palavra} \n`;
//}
//    alert(resultado);
//

while (numero > 0) {
    if (numero % 2 === 0) {
        console.log(`Numero par: ${numero}`)
    }else {
        console.log(`Numero impar: ${numero}`)
    }
    numero
}
