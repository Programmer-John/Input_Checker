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

//exercício 4: Medidor de Velocidade

verificarVelocidade(80);

function verificarVelocidade(velocidade) {
    const velocidadeMax = 70;
    kmPorPonto = 5;
    if (velocidade <= velocidadeMax) {
        console.log('Ok');
    }
    else {
        const pontos = Math.floor(((velocidade - velocidadeMax) / kmPorPonto));
        if (pontos >= 12) {
            console.log('Carteira Suspensa');
        }
        else {
            console.log(pontos,'pontos');
        }

    }

}

//exercicio 5: Par ou Ímpar

parImpar(18);

function parImpar(number) {
        if (number % 2 === 0) {
            console.log(number,'Par!')
        }
        else if (number % 2 !== 0) {
            console.log(number,'Ímpar!')
        }
}

//exercício 6: Encontrar o String

let persona = {
    name: 'John',
    age: 18,
    city: 'cachoeirinha',
    work: 'programmer',
    cpf: 0000
};

exibirPropriedades(persona);
function exibirPropriedades(obj) {
    for (let prop in obj) {
        if (typeof obj[prop] === 'string') {
            console.log(prop,obj[prop]);
        }
    }

}

//exercício 7: Múltiplos de 3 e 5

somar(20);

function somar(limite) {
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;
    for (r = 0; r <= limite; r++) {
        if (r % 3 === 0) {
            multiplosDe3 += r;
            //console.log(multiplosDe3);
        }
        if (r % 5 === 0) {
            multiplosDe5 += r;
            //console.log(multiplosDe3);
        }
    }
    console.log(multiplosDe3 + multiplosDe5);
}

//exercício 8: Média Escolar

const array = [70,70,100];


console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    const media = calcularMedia(notas);

    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A';

}
function calcularMedia(array) {
    let soma = 0;
    for (let v of array) {
        soma += v;
    }
    return soma/(array.length);
}

//exercicio 9: Contador de asteristicos

exibirAsteristicos(10);

function exibirAsteristicos(linhas) {
//Primeira Forma

    //    let padrao = '';
//    for(let linha = 1; linha <= linhas; linha++) {
//        padrao += '*';
//        console.log(padrao);
//    }

//Segunda Forma

    for (let linha = 1; linha <= linhas; linha++) {
        let padrao = '';
        for (let q = 0; q < linha; q++) {
            padrao += '*';
        }
        console.log(padrao);
    }
}

//exercício 10: Exibir somente os números primos

exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite) {
    for (let value = 2; value <= limite; value++) {
        if (numerosPrimos(value)) {
            console.log(value);
        }
    }
}

function numerosPrimos(value) {
    for (let divisor = 2; divisor < value; divisor++) {    
        if (value % divisor === 0 ) {
            return false;
        }
    }
    return true;
}


//Factory Functions

//Dentro da função vai as variaveis que serão usadas somente na função
function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria) {
    return {
        //se a variavel for igual o texto basta fazer assim
        marcaCelular, //marcaCelular: marcaCelular
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo ligação...");
        }
    }
}
//agora é so usar essa função quando for criar um celular em vez de copiar e colar varias vezes as linhas de codigo
const celular1 = criarCelular('LG', 5.5, 5000);
console.log(celular1);

//Constructor Factory

function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function() {
        console.log("Fazendo Ligação...");
    }
}

const celular = new Celular('asus', 5.5, 5000);
console.log(celular);

//JS é muito dinâmico

const mouse = {
    cor: 'red',
    marca: 'dazz'
}
mouse.velocidade = 5000; //vai acrescentar o parâmetro velocidade dentro do objeto mouse
mouse.trocarDPI = function() {
    console.log('mudando DPI');
}
delete mouse.velocidade; //vai deletar o parâmetro velocidade dentro do objeto mouse
delete mouse.trocarDPI;
console.log(mouse);

//Clonando Objetos
//Clonei o objeto mouse

const novoObjeto = Object.assign({
    velocidade: 50 // Posso adicionar um novo parâmetro no objeto clonado
},mouse);
console.log(novoObjeto);

//Outro jeito de Clonar

const objeto2 = {...mouse}; //E para adicionar um novo parâmetro é só colocar um virgula depois do mouse e adicionar
console.log(objeto2)

//Math
Math.random() // Serve pra sortear um valor aleatório entre 0 e 1
Math.max() //Serve pra mostrar o maior valor, basta colocar varios valores dentro dos parenteses
Math.min() //Serve pra mostrar o menor valor, basta colocar varios valores dentro dos parenteses
//TEM VARIOS METODOS MATH NO SITE MDN

//String
//Tipo primitivo
const mensagem1 = 'mensagem';
//Tipo Objeto
const mensagem2 = new String('bom dia')

mensagem1.length //Serve para mostrar quantos caracteres tem na String
mensagem1[2] //Serve para mostrar a letra por posição, lembrando que começar pelo 0
mensagem1.includes('primeiro') //Serve para verificar se a palvra tem na String, nesse caso será falso, pois não tem primeiro na String
mensagem1.includes('mensagem') // True
mensagem1.startsWith('mensagem') //Serve para verificar a primeira palavra da String, nesse caso será True, pois a primeira palavra é mensagem
mensagem1.endsWith('Foto') //Serve para verificar a última palavra da String, nesse caso será False, pois a última palavra é mensagem
mensagem2.indexOf('dia') //Serve para saber em qual posição começa, nesse caso sera 4
mensagem2.replace('bom', 'boa') //Serve para alterar o texto da String, nesse caso ficará boa dia
mensagem2.trim() //Serve para quando você colocar espaço demais ai ele tira os espaços a mais
mensagem2.split() //Serve para mostrar quantas palavras tem
//TEM VARIOS METODOS STRING NO SITE MDN


//Template Literal

const menst = `oi tudo bem 'como' vai`;
//isso serve para escrever como quiser dentro da variável
//Caso queira usar variavel dentro da String pode assim:

const nome = 'Rafael';

const mens = `oi tudo bem 'como' vai ${nome}`;

//serve para colocar operações de matematica também


//Date
const data = new Date(); //serve para pegar a data
const data2 = new Date('March 06 2019 09:30'); //serve para definir uma data
//TEM VARIOS JEITOS DE DEFINIR UMA DATA É SÓ VER NO MDN