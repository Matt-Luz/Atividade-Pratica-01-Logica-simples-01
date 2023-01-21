// Atividade 01 - 01

/* 

    Desenvolva um algoritmo que armazene o valor 10 em uma variável
    A e o valor 20 em uma variável B. A seguir (utilizando apenas
    atribuições entre variáveis) troque os seus conteúdos fazendo com
    que o valor que está em A passe para B e vice-versa. Ao final,
    escrever os valores que ficaram armazenados nas variáveis.

*/

let a = 10;
let b = 20;

console.log('O valor de a é igual a: ', a);
console.log('O valor de b é igual a: ', b);

let aux = 200;

// console.log('O valor da auxiliar é igual a: ', aux);

aux = a;

console.log('O valor de auxiliar é igual a: ', aux);

a = b;

console.log('O valor de a é igual a: ', a);

b = aux;

console.log('O valor de b é igual a: ', b)
console.log('O valor do auxiliar é igual a: ', aux);



// Atividade 01 - 02

/* 

    Desenvolva um algoritmo para ler o número total de eleitores de um
    município, o número de votos brancos, nulos e válidos. Calcular e
    escrever o percentual que cada um representa em relação ao total
    de eleitores.


    Passo 01:
    Somar os votos
    Brancos: 755
    Nulos: 898
    Válidos: 15743
    Total de eleitores = brancos + nulos + válidos

    Passo 02:
    Percentual de válidos = validos/total*100
    Percentual de nulos = nulos/total*100
    Percentual de brancos = brancos/total*100

    Passo 03:
    Escrever resultados

*/

let brancos = 755;
let nulos = 898;
let validos = 17748;
let total = brancos + nulos + validos;

console.log(`Temos um total de ${total} eleitores válidos no munucípio`);

let xBrancos = (brancos/total)*100;
let xNulos = (nulos/total)*100;
let xValidos = (validos/total)*100;

console.log(`Desse total, ${xBrancos}% são brancos`);
console.log(`${xNulos}% são nulos`);
console.log(`e ${xValidos}% são válidos`);


// Atividade 01 - 03

/*

    O custo de um carro novo ao consumidor é a soma do custo de
    fábrica com a porcentagem do distribuidor e dos impostos
    (aplicados ao custo de fábrica). Supondo que o percentual do
    distribuidor seja de 28% e os impostos de 45%, escrever um
    algoritmo para ler o custo de fábrica de um carro,calcular e escrever
    o custo final ao consumidor.


    -- Variaveis

    Impostos = 45%
    Porcentagem = 28%
    Custo de fábrica = 45000

    Preço final = fabrica * (1 + 0.28 + 0.45)

    -- Passos

    Definir variaveis a serem utilizadas
    Inserir valor de fabrica pra pré definição
    Ler variaveis
    Escrever variaveis

    Calcular preço final
    Ler e escrever

*/

let custoFabrica = 45000;
let imposto = custoFabrica * 0.45;
let custoDistribuidor = custoFabrica * 0.28;

console.log('Valor do imposto ', imposto);
console.log('Custo do distribuidor ', custoDistribuidor);

let precoFinal = custoDistribuidor + imposto + custoFabrica;
// let precoFinal = custoFabrica * (1 + 0.45 + 0.28);
/* Variavel acima reduz pra calculo unico */

console.log('Preço final ', precoFinal);


// Atividade 01 - 04

/*

    Uma revendedora de carros usados paga a seus funcionários
    vendedores um salário fixo por mês, mais uma comissão também
    fixa para cada carro vendido e mais 5% do valor das vendas por ele
    efetuadas. Escrever um algoritmo que leia o número de carros por
    ele vendidos, o valor total de suas vendas, o salário fixo e o valor que
    ele recebe por carro vendido. Calcule e escreva o salário final do
    vendedor.


    -- Variaveis

    Salário fixo = 1500
    Comissão fixa = 200 por carro
    Comissão = 5% de 200000
    Carros vendidos = 10
    Valor total = 200000

*/

const salarioFixo = 1500;
let carrosVendidos = 10;
let comissaoFixa = 200 * carrosVendidos;
let valorDeVendas = 200000;
let comissaoVendas = 0.05 * valorDeVendas;

let salarioFinal = salarioFixo + comissaoFixa + comissaoVendas;

console.log('O salário do vendedor é: ', salarioFinal);



// Atividade 01 - 05

/* 

    Escreva um algoritmo para ler uma temperatura em graus Celsius,
    calcular e escrever o valor correspondente em graus Fahrenheit.


    -- Variaveis

    tempC = 35
    tempF = (tempC*1.8)+32

*/

let tempC = 35;
let tempF = (tempC*1.8)+32;

console.log('O valor da temperatura em graus celsius é de: ', tempC);

console.log('O valor da temperatura em graus fahrenheit é de: ', tempF);



// Atividade 01 - 06

/* 
    
    Desenvolva um algoritmo para ler dois valores e imprimir uma das
    três mensagens a seguir:

    a. ‘Números iguais’, caso os números sejam iguais;
    b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
    c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.


    -- Variaveis

    const num1 = 1
    const num2 = 2

*/

const num1 = 2;
const num2 = 2;

if (num1 == num2) {
    console.log('Números iguais');    
} else if (num1 > num2) {
    console.log('Primeiro é maior');
} else {
    console.log('Segundo é maior');
}



// Atividade 01 - 07

/* 

    As maçãs desta estação custam R$0,30 se forem compradas
    menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
    doze. Desenvolva um algoritmo que leia o número de maçãs
    compradas, calcule e escreva o valor total da compra.


    -- Vairaveis

    const maca = 1
    let menorDoze = 0.30
    let maiorDoze = 0.25
    

*/

const maca = 12;
let menorDoze = (maca) * 0.30;
let maiorDoze = (maca) * 0.25;

if (maca <= 11) {
    console.log(`O valor para sua quantidade de maças é de: R$ ${menorDoze}`);
} else {
    console.log(`O valor para sua quantidade de maças é de: R$ ${maiorDoze}`);
}



// Atividade 01 - 08

/* 

    Escreva um algoritmo que tenha como valores de entradas o nome
    e idade do usuário e imprima no terminal o nome e a quantidade de
    letras que o nome possui, bem como a idade e o ano de nascimento
    do usuário. Ex: “Nome: Pedro, 5 letras. Idade: 22 anos, nasceu em
    2000”.


    const nome = Matheus
    const idade = 28
    const letrasNome = nome.length
    const nascimento = (Usar 2022 como base pra bater o ano devido a data de aniversário - idade)

*/

const nome = 'Matheus';
const idade = 28;
const letrasNome = nome.length;
const nascimento = (2022 - idade);

console.log(`O nome ${nome}, possui ${letrasNome} letras. ${nome} possui ${idade} anos e nasceu no ano de ${nascimento}.`);



// Atividade 01 - 09

/* 

    Crie um algoritmo que armazene um número inteiro positivo, e gere
    um alerta com as seguintes mensagens:

    a. “Número é par!”, se o valor armazenado for par;
    b. “Número é impar!”, se o valor armazenado for ímpar;


    const numPos = 22 

*/

const numPos = 22;

if (numPos % 2 == 0) {
    alert('O número é par');
} else {
    alert('O número é impar');
}



// Atividade 01 - 10

/*

    Escreva um algoritmo que armazene o ano atual e o ano de
    nascimento de uma pessoa. Escrever uma mensagem no console
    que diga se ela poderá ou não votar este ano (não é necessário
    considerar o mês em que a pessoa nasceu).


    const nascimento = 2005
    const anoAtual = 2023
    const votar = (nascimento - anoAtual)

*/

const anoNascimento = 2019;
const anoAtual = 2023;
const votar = (anoAtual - anoNascimento);

if (votar > 16) {
    console.log('A pessoa pode votar.');
} else {
    console.log('A pessoa não pode votar.');
}