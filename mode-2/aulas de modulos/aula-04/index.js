import readline from "readline";  // pedir numero para o usuario

const rl = readline.createInterface({ //O readline e obrigado ter esses parametros 
    input: process.stdin,
    output: process.stdout,
});

// Criar uma função com readLine que pergunta um numero para o usuario e depois emprimir o multplo de 3 e 5 deste numero apra de pedir quando aperta -1

operacao()
function operacao(){
    rl.question("Digite um número: ", n=>{
        if(parseInt(n) === -1){
            rl.close()
        }else{
         let mult = []
         for(let i = 3; i <= n; i++){
            if((i % 3 === 0) || (i % 5 === 0)){
                mult.push(i)
            }
          }
          console.log(mult)
          operacao();
        }
    }) 

}
