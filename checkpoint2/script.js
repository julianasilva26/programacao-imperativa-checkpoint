//Avaliação Programação Imperativa (2° Checkpoint)

// Questão 1

/*function soma(a=1, b=3) {
    return a+b;
}

console.log(soma());
console.log(soma(3));
console.log(soma(1,2));*/

// Questão 3

/*let numeros= [10, 8, 7, 99, 0, 1, 6];

let result = numeros.sort(function(a,b){return b-a;})
console.log(result);*/

// Questão 4

/*var z=0;

for (var i=20; i<50; i+=10) {
    z+=i;    
}
console.log(z)*/

//Questão 7

let frutasV = ['morango', 'maçã']

frutas = frutasV.map(fruta => fruta.toUpperCase());

// Questão 12

/*let frutas = ['maçã', 'limão']
let [fruta1, fruta2] = frutas

console.log(fruta1);
console.log(fruta2);*/

// Questão 13

/*let x = 5;
let y = x++ + ++x;
console.log("y = " + y);

x = 3;
y = x*(x + 1)*x++;
x = 5;
y = 3;
y *= x + 1;

console.log("x = " + x);
console.log("y = " + y);*/

// Questão 14

/*function testConditionalIf(a) {
    if(a=2){
        console.log("sim")
    }    
}

testConditionalIf(2) // saída --> sim
testConditionalIf(30) // saída --> sim*/

// Questão 15

/*for (var i=0; i<50; i+=10) {
    console.log(i);
}

console.log(i)*/

// Questão 18

/*function soletrar(texto) {
    console.log(texto.replace('-', '').toLocaleUpperCase().split("").join("-"));
    
}

soletrar("digital-house");
soletrar("ctd");*/