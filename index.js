//exercicio aula 10

//1-undefined,null,11,3,[3,19,5,6,7,8,9,10,11,12,13],9
//2-SUBI NUM ONIBUS EM MIRRICIS 27
//const frase = prompt("digite uma frase");
//console.log(frase.toLocaleUpperCase().replaceAll("A", "I"), frase.length);

//1-escrita de codigo
const nomeDoUsuario = prompt("digite seu nome");
const emailDoUsuario = prompt("digite seu email");
console.log(`O e-mail, ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`);
//2-escrita de codigo
const comidasPreferidas = ["Pizza", "sushi", "Hamburguer", "chocolate", "churrasco"];
console.log(comidasPreferidas);
console.log("Essas são as minhas comidas preferidas");
console.log(comidasPreferidas[0]);
console.log(comidasPreferidas[1]);
console.log(comidasPreferidas[2]);
console.log(comidasPreferidas[3]);
console.log(comidasPreferidas[4]);
const novaComida = prompt("digite uma comida preferida;");
comidasPreferidas[1] = novaComida;
console.log("Nova lista de comidas preferidas;", comidasPreferidas);
//3-escrita de codigo
//a
let listaDeTarefas = [];
//b
let tarefa1 = prompt("digite uma tarefa que voce realiza no dia a dia;");
listaDeTarefas.push(tarefa1);
let tarefa2 = prompt("digite outra tarefa que voce realiza no dia a dia;");
listaDeTarefas.push(tarefa2);
let tarefa3 = prompt("digite uma ultima tarefa que voce realiza no dia a dia;");
listaDeTarefas.push(tarefa3);
//c
console.log(listaDeTarefas);
//d
let indice = (prompt("Numerando as tarefas em 0,1,2 totalizando 3 tarefas, digite entre esses numeros a tarefa que voce ja realizou"));
//e
listaDeTarefas.splice(indice, 1);
//f
console.log(listaDeTarefas);

//DESAFIO:escreva um programa que recebe uma lista de palavras ,exibir as palavras em que os numeros de caracteres forem par;
let arrayPalavras = [];
let palavra1 = prompt("digite uma palavra");
arrayPalavras.push(palavra1);
let palavra2 = prompt("digite outra palavra");
arrayPalavras.push(palavra2);
let palavra3 = prompt("digite outra palavra");
arrayPalavras.push(palavra3);
let palavra4 = prompt("digite outra palavra");
arrayPalavras.push(palavra4);
let palavra5 = prompt("digite outra palavra");
arrayPalavras.push(palavra5);
console.log(arrayPalavras);
const palavrasPares = arrayPalavras.filter(e => (e.length % 2 === 0));
console.log(palavrasPares);
