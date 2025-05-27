let nome = 'Venicius'
let sobrenome = 'Renner';

let funcao = 'Professor';
//como eu sei
//console.log(funcao + ':', nome.toUpperCase(), sobrenome.toUpperCase());
//melhorando

let  nome_usuario =  nome + '.' + sobrenome;
//console.log(nome_usuario.toLowerCase())

//interpolação de strings
let user = `${nome}.${sobrenome}`;
let mensagem = `Nome de Usuário: ${user.toLowerCase()}`;
console.log(mensagem)

//nome de usurio: venicius renner