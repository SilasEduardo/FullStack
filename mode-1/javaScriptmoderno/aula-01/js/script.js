'use strict'; //o Javascript acusa mais erros

// var escopo abragente
// let escopo reduzido


function withVar(){
    for (var i = 0; i < 10; i++){
        console.log('var '+ i);
    }
    i = 20;
    console.log(i)
}
function withLet(){
    for (let i = 0; i < 10; i++){
        console.log('var '+ i);
    }
    
    //i = 20;
    
}
withVar();
withLet();

/*const nome = 22; //const não eixa reatribuir valor
nome = 3

console.log(nome)*/


const d = [];
// d = 'silas'; nesta caso da erro
d.push('silas'); // para inserir uma variavel no vetor

console.log(d); 


 function sun (a, b){
     return a + b
 }

 

 const sun2 = function(a, b){  //função anonima
     return a + b;
 } 

 
 //arrow function

 const sun3 = (a, b) =>{
    return a + b;
 }
 //arrow function reduzida

 const sun4 = (a, b) => 2 + 4;
console.log(sun3(2, 3))
 console.log(sun(2, 3));
 console.log(sun2(2, 3));
 console.log(sun4(2, 3));

//templete literals


const name1 = 'Silas';
const surName = 'Eduardo';
const text1 ='meu nome é ' + name1 +' ' + surName;
const text2 = `meu nome é ${name1} ${surName}`;

console.log(text2);
console.log(text2);

const sun5 = (a, b = 1) => a + b;

console.log(sun5(2, 3));

d.push('e');

console.log(d)