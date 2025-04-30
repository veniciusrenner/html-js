//1- Crie uma função que calcule a some de 3 numeros exiba no console e a media.

console.log(A soma é: + somar3numeros(234, 567, 890))

//2- Crie uma duas função que calcule a soma e a média de 3 números exiba no console o resultado da soma e de media
function soma(n1, n2, n3) {
    const soma= n1 + n2 + n3;
    return soma;
}

function media(n1, n2, n3) {
    const adicao= n1 + n2 + n3;
    const media = soma / 3

    return "a soma é," + adicao + "a media é," + media;
    }

    console.log(media(234, 567, 890))