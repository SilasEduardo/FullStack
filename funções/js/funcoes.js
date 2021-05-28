//funções em javascript

function sum(a, b){
    return a + b;
}

console.log(sum(4, 8));


function compareNumbers(a, b){

   // return a > b ? 1 : a < b ? -1 : 0;

   return a - b;
    

}

console.log(compareNumbers(8, 4));
console.log(compareNumbers(2, 4));
console.log(compareNumbers(4, 4));


function superSum(from, upto){
    var sum = 0;

    for(var i = from; i <= upto; i++){
        sum += i;
    };
    return sum
    
}

console.log(superSum(1,10));

