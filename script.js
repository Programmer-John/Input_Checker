//variables
let name = 'Rafael';
let age = 15;
let social = 'married';
let city = 'Fortaleza';
//array
let family = ['John', 'Gustavo', 'Mariana']
console.log(family);

//object
let people = {
    name: 'Rafael',
    age: 15,
    social: 'married',
    city: 'Fortaleza',
};
console.log(people);

//function
//realiza uma tarefa e não devolve nada
function dizerNome(){
    console.log('John');
}
dizerNome();

//realiza uma tarefa e pode ser usada em outras variáveis
function multiplicar (valor){
    return valor * 2;
}
let resultado = multiplicar(6);
console.log(resultado);

//exercício 1: trocar as variavéis

let a = 'vermelho';
let b = 'azul';

/*let c = a;
a = b;
b = c;*/

console.log(a);
console.log(b);

//if...else

let hora = 0;

if (hora>=6 && hora<12) {
    console.log('Bom dia');
}
else if (hora>=12 && hora<18) {
    console.log('Boa Tarde');
}
else {
    console.log('Boa Noite');
}

//switch...case

let permissao;

switch (permissao) {
    case 'comum':
    console.log('usuário comum');
    //Serve para parar a operação e esperar a próxima condição
    break;

    case 'gerente':
    console.log('usuário comum');
    break;

    case 'diretor':
    console.log('usuário comum');
    break;

    //serve como um else
    default:
        console.log('Usuário não reconhecido')
}

//repetição
//for

for (let i = 0; i < 5; i++) {
    console.log('Estou aprendendo!',i);
}

//while

let i = 5;

while (i>=1) {
    console.log(i);
    i--;
}

//do...while

let x = 0;

do {
    console.log('Digitando',x);
    x++;
}while(x < 10);

//for...in

const pessoa = {
    name: 'John',
    age: 18
};

for(let chave in pessoa) {
    console.log(chave,pessoa['name']);
}

const cores = ['red','blue','verde'];

for (let indice in cores) {
    console.log(indice,cores[indice])
}

//for...of

for (let cor of cores) {
    console.log(cor);
}

//exercício 2: Escreva uma função que usa dois números e retorna o maior entre eles

//meu código
let k = 15;
let l = 10;

function valorMaior() {
    if (k > l) {
        console.log(k,' é maior que ', l);
    } else if (k < l) {
        console.log(l, ' é maior que', k);
    }else {
        console.log('Os valores são iguais');
    }
}

console.log(valorMaior());

//código da aula
let maiorValor = max(10,5);
console.log(maiorValor);

function max(numero1,numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}

//exercício 3: fizzBuzz

const resol = fizzBuzz(11);
console.log(resol);

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number'){
        return 'Não é um número'
    }

    if (entrada % 3 === 0 && entrada % 5 === 0) {
        return 'FizzBuzz';
    }

    if (entrada % 3 === 0) {
        return 'Fizz';
    }

    if (entrada % 5 === 0) {
        return 'Buzz';
    }

    if (!entrada % 3 === 0 && !entrada % 5 === 0 ) {
        return entrada;
    }
    
}