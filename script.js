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
mensagem1.includes('primeiro') //Serve para verificar se a palavra tem na String, nesse caso será falso, pois não tem primeiro na String
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

//exercicio 11: Montador de Endereço

const endereco = {
    rua: 'Loteamento',
    cidade: 'cachoeirinha',
    cep: 5538000
};

function exibirEndereco(endereco) {
    for (let chave in endereco) {
        console.log(chave,endereco[chave]);
    } 
}

exibirEndereco(endereco);

//exercicio 12: Igualdade dos Objetos

function Endereco(rua,cidade,cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}
const endereco1 = new Endereco('a', 'b' ,'c');
const endereco2 = new Endereco('a', 'b', 'c');

function saoIguais(endereco1,endereco2) {
    return endereco1.rua === endereco2.rua &&
            endereco1.cidade === endereco2.cidade &&
            endereco1.cep === endereco2.cep
}
    console.log(saoIguais(endereco1, endereco2));

function temEnderecoMemoriaIguais(endereco1, endereco2) {
    return endereco1 === endereco2;
    //ou seja ela não ocupa o mesmo espaço na mémoria
}
    console.log(temEnderecoMemoriaIguais(endereco1, endereco2));




//exercicio 13: Montador de Postagem de Blog

let post = {
    titulo: 'Hello World',
    mensagem: 'Olá Mundo',
    autor: 'John',
    visualizacoes: '700',
    //Serve pra colocar um array num parametro de um objeto
    comentarios: [{autor: 'John', mensagem: 'Olá Mundo'}],
    estaAoVivo: true
}

console.log(post);

function Post(titulo,mensagem,autor) {
    this.titulo = titulo;
    this.mensagem = mensagem;
    this.autor = autor;
    this.visualizacao = 0;
    this.comentarios = [];
    this.estaaovivo = false;
}

let postNew = new Post('a','b','c');
console.log(postNew);


//exercicio 14: Faixa de Preço igual a do mercado livre

//Primeira opção
let faixas = [
    {tooltip: 'até R$700', minimo: 0, maximo: 700},
    {tooltip: 'de R$700 a R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'de R$1000 ou mais', minimo: 1000, maximo: 99999999}
];

//Segunda opção (Factory Function)
function criaFaixaPreco(tooltip,minimo,maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criaFaixaPreco('a',0,700),
    criaFaixaPreco('b',700,1000),
    criaFaixaPreco('c',1000,99999),
];

//Terceira opção (Constructor Function)
function FaixaPreco(tooltip,minimo,maximo) {
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas3 = [
    new FaixaPreco('d',0,700),
    new FaixaPreco('e',700,1000),
    new FaixaPreco('f',1000,99999)
];

console.log(faixas); //primeira opção
console.log(faixas2); //segunda opção
console.log(faixas3); //terceira opção

//Arrays
//Adicionando Elementos
const numeros = [1,2,3];
numeros.unshift(0); //adicionando valor no inicio do array
numeros.splice(1,0,'c') //adicionando valor no meio do array, onde o primerio valor é o espaço que o valor vai ocupar, o segundo valor é se quer deletar algum espaço do array e o terceiro é o valor que vai ocupar
numeros.push(5); //adicionando o valor no final do array
console.log(numeros);

//Encontrando Elementos do tipo primitivo
const valores = [1,2,3,4,4];
console.log(valores.indexOf(4)); //Serve para saber se o valor passado tem no array e em qual posição ele está, caso não tenha o valor ele retorna -1
console.log(valores.lastIndexOf(4)); //Serve do mesmo jeito que o index, porém se por exemplo tiver dois 1, ele mostrará o espaço do ultimo 1
console.log(numeros.includes(2)); //forma mais facil e atualizada de saber se existe o valor dentro do array

//Encontrando Elementos do tipo referência
const marcas = [
    {id:1, nome:'a'},
    {id:2, nome:'b'},
];

const marca = marcas.find(function(marca) { //o find serve para encontrar elementos no array dento do objeto
    return marca.nome === 'a';
});

console.log(marca);

//arrow functions(versão atualizada do exemplo acima)

const tvs = [
    {id:1, nome:'a'},
    {id:2, nome:'b'},
]; //criei um objeto com arrays


console.log(tvs.find(tv => tv.nome === 'b'));

//Removendo Elementos

const values = [1,2,3,4];

const ultimo = values.pop(); //remove o ultimo numero
console.log(ultimo);
console.log(values);

const primeiro = values.shift(); //remove o primeiro numero
console.log(primeiro);
console.log(values);

const meio = values.splice(0,1); //primeiro valor é o indice(lugar) e o segundo valor é quantos numeros
console.log(meio);
console.log(values);

//Esvaziando Arrays

let numbers = [1,2,3,4,5];
let outros = numbers;
//solução 1
//numbers = []; vai esvaziar essa variavel
//console.log(outros); e vai pra a variavel 'outros'

//solução 2 (melhor forma)
numbers.length = 0; //isso apaga todas as referencias do array, ou seja mesmoq ue for passado pra outra variavel, ja vai está apagado, ou seja vai passar um array vazio
console.log(numbers);
console.log(outros);

//solução 3
numbers.splice(0,numbers.length); //o primeiro parametro deifne o local do valor e o segundo parametro quantos valores quer apagar, dai o length significa quantidade que foi passado que tem que ser 0, ou seja ira apagar tudo
console.log(numbers);
console.log(outros);


//Combinando Array

const one = [1,2,3];
const secound = [4,5,6];

const combinado = one.concat(secound); //o concat serve para juntar um array com outro
console.log(combinado);

const cortado = combinado.slice(2); //o slice serve para dividir o array, se deixa vazio ele passa todo o array para a variavel, se colocar algum valor ele corta a partir desse valor
console.log(cortado);

//Spread (versão mais atualizada do exemplo a cima)

const combinado1 = [...one,10,20,...secound]; //o spread é os 3 pontinhos, após a virgula pode adicionar valores também
console.log(combinado1)

const clonado = [...combinado1]; //Se adicionar a uma variavel a variavel que juntou os arrays, da pra clonar
console.log(clonado);

//Foreach

const numbers2 = [1,2,3,4,5];

numbers2.forEach((numero,indice) => console.log(numero,indice));

//Combinando Arrays

const values2 = [1,2,3,4,5];

const combinado2 = values2.join('.'); //O join separa cada valor pelo parametro passado
console.log(combinado2); 

const frase = "ola bem vindo ao curso";
const re = frase.split(' ') //Split vai separar cada palavra após o espaço, retornando quantas palavras tem
console.log(re);
console.log(re.join('-'));

//exercicio
//Meu Jeito

/*function botaoAlterar() {
    let friends = document.getElementById('friend').value;
    if (friends === 'John') {
        document.getElementById('mudando').innerText = ('Você pode Entrar');
    } else {
        document.getElementById('mudando').innerText = ('Você não pode Entrar');
    }
};*/

//Jeito do Professor

function botaoAlterar() {
    friends = document.getElementById('friend').value;
    convidadosCristian = ['Amanda', 'Sabrina', 'John'];
    if (convidadosCristian.includes(friends)) {
        document.getElementById('mudando').innerText = ('Você pode Entrar');
    } else {
        document.getElementById('mudando').innerText = ('Você não pode Entrar');
    }
};
