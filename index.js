// Atividade 01 - 01

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