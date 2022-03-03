'use strict'; // o javascript acusa mais erros

console.log('Hello World');


// var x let


// var tem escopo abragente
//let escopo reduzido



function withVar(){
    for(var i = 0;i < 10; i++){
        console.log(i)
    }
    i=20;
    console.log(i)

}

function withLet(){
    for(let i = 0;i < 10; i++){
        console.log('let ' + i)
    }
    //i=20;
    //console.log(i)

}

withVar();
withLet();


// const não pode reatribuir valores
//c = 20


const d = [];
console.log[d]
d.push(1)

console.log(d)

function sum(a, b){
    return a + b
}

const sum2 = function(a, b){return a + b}


const sum3 = (a, b) => a + b

console.log(sum(2, 3));
console.log(sum2(2, 3));
console.log(sum3(2, 3));


/// template literals



const nome = 'Silas';

const idade = '27';

const cor = 'Negra';

const nacionalidade = 'Brasileiro';


console.log(`datos pessoais ${nome} ${idade}\n ${cor} ${nacionalidade}` )



const sum4 = (a, b = 10) => a +b;

console.log(sum4(2));


