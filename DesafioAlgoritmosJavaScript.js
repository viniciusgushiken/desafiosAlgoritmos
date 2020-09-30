/*
Desafio 1
Crie um programa que leia 6 valores. Você poderá receber valores negativos e/ou positivos como entrada, devendo desconsiderar os valores nulos. Em seguida, apresente a quantidade de valores positivos digitados.

Entrada
Você receberá seis valores, negativos e/ou positivos.

Saída
Exiba uma mensagem dizendo quantos valores positivos foram lidos assim como é exibido abaixo no exemplo de saída. Não esqueça da mensagem "valores positivos" ao final.

 
Exemplo de Entrada
7
-5
6
-3.4
4.6
12

Exemplo de Saída
4 valores positivos
*/
let valor1 = parseFloat(gets());
let valor2 = parseFloat(gets());
let valor3 = parseFloat(gets());
let valor4 = parseFloat(gets());
let valor5 = parseFloat(gets());
let valor6 = parseFloat(gets());

let valores = [valor1, valor2, valor3, valor4, valor5, valor6];

let positivo = [];
let numero = [];

for (numero of valores) {
  if (numero > 0) {
    positivo.push(numero)
  }
};
    
console.log(positivo.length + " valores positivos");

/*
Desafios 2
Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.

Entrada
Você receberá 1 valor inteiro N, onde N > 0.

Saída
Exiba todos os números pares até o valor de entrada, sendo um em cada linha. 

 
Exemplo de Entrada	
6	
Exemplo de Saída
2
4
6
*/
let N = parseInt(gets())

if (N % 2 === 0){
    for (var i=0; i <= N; i++){
      if (i % 2 === 0 && i != 0){
        console.log(i)
      }}}
else {
      for (var i=0; i < N; i++){
        if (i % 2 === 0 && i != 0){
        console.log(i)
        }}}

/*
Desafio 3
Você deve fazer a leitura de 5 valores inteiros. Em seguida mostre quantos valores informados são pares, quantos valores informados são ímpares, quantos valores informados são positivos e quantos valores informados são negativos.

Entrada
Você receberá 5 valores inteiros.

Saída
Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem por linha e não esquecendo o final de linha após cada uma.

 
Exemplo de Entrada	
-5
0
-3
-4
12

Exemplo de Saída
3 valor(es) par(es)
2 valor(es) impar(es)
1 valor(es) positivo(s)
3 valor(es) negativo(s)
*/
let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let valor3 = parseInt(gets());
let valor4 = parseInt(gets());
let valor5 = parseInt(gets());

let valores = [valor1, valor2, valor3, valor4, valor5];

let par = [];
let impar = [];
let positivo = [];
let negativo = [];
var numero;

for (numero of valores){
    if(numero % 2 === 0){
        par.push(numero)
    }
    else{
        impar.push(numero)
    }
};

for (numero of valores){
    if(numero > 0){
        positivo.push(numero)
    }
    else if (numero < 0 && numero != 0){
        negativo.push(numero)
    }
};

console.log(par.length + " valor(es) par(es)");
console.log(impar.length + " valor(es) impar(es)");
console.log(positivo.length + " valor(es) positivo(s)");
console.log(negativo.length + " valor(es) negativo(s)");

/*
Desafio
Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto. As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na sequência mostre o valor lido e a relação de notas necessárias.

Entrada
Você receberá um valor inteiro N (0 < N < 1000000).

Saída
Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, seguindo o exemplo de saída abaixo. Após cada linha deve ser imprimido o fim de linha, caso contrário será apresentada a seguinte mensagem: “Presentation Error”.

 
Exemplo de Entrada	
576
Exemplo de Saída
576
5 nota(s) de R$ 100,00
1 nota(s) de R$ 50,00
1 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
1 nota(s) de R$ 5,00
0 nota(s) de R$ 2,00
1 nota(s) de R$ 1,00

Exemplo de Entrada
11257
Exemplo de Saída
11257
112 nota(s) de R$ 100,00
1 nota(s) de R$ 50,00
0 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
1 nota(s) de R$ 5,00
1 nota(s) de R$ 2,00
0 nota(s) de R$ 1,00

Exemplo de Entrada
503
Exemplo de Saída
503
5 nota(s) de R$ 100,00
0 nota(s) de R$ 50,00
0 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
0 nota(s) de R$ 5,00
1 nota(s) de R$ 2,00
1 nota(s) de R$ 1,00
*/
let nota = parseInt(gets())

let notas_100 = Math.trunc(nota/100)
let resto_100 = (nota % 100)
console.log(notas_100 + " nota(s) de R$ 100,00")

let notas_50 = Math.trunc(resto_100/50)
let resto_50 = (resto_100 % 50)
console.log(notas_50 + " nota(s) de R$ 50,00")

let notas_20 = Math.trunc(resto_50/20)
let resto_20 = (resto_50 % 20)
console.log(notas_20 + " nota(s) de R$ 20,00")

let notas_10 = Math.trunc(resto_20/10)
let resto_10 = (resto_20 % 10)
console.log(notas_10 + " nota(s) de R$ 10,00")

let notas_5 = Math.trunc(resto_10/5)
let resto_5 = (resto_10 % 5)
console.log(notas_5 + " nota(s) de R$ 5,00")

let notas_2 = Math.trunc(resto_5/2)
let resto_2 = (resto_5 % 2)
console.log(notas_2 + " nota(s) de R$ 2,00")

let notas_1 = Math.trunc(resto_2/1)
let resto_1 = (resto_2 % 1)
console.log(notas_1 + " nota(s) de R$ 1,00")

/*
Desafio
Você deve calcular o consumo médio de um automóvel onde será informada a distância total percorrida (em Km) e o total de combustível consumido (em litros).

Entrada
Você receberá dois valores: um valor inteiro X com a distância total percorrida (em Km), e um valor real Y que representa o total de combustível consumido, com um dígito após o ponto decimal.

Saída
Exiba o valor que representa o consumo médio do automóvel (3 casas após a vírgula), incluindo no final a mensagem "km/l".

 
Exemplo de Entrada	
500
35.0
Exemplo de Saída
14.286 km/l
Exemplo de Entrada
2254
124.4
Exemplo de Saída
18.119 km/l
Exemplo de Entrada
4554
464.6
Exemplo de Saída
9.802 km/l
*/
let X = parseInt(gets())
let Y = parseFloat(gets())

let consumo = X / Y

console.log(consumo.toFixed(3) + " km/l")