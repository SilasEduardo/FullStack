 import fs from "fs";


//Tratando con async await


import {promises as fs} from 'fs';



writeReadJson();
init();

async function init(){
    try{
        await fs.writeFile("teste.txt", "bla val");
        await fs.appendFile("teste.txt", "\ndeu certo");
        const data = await fs.readFile("teste.txt", "utf-8");
        console.log(data)

    }catch(err){
        console.log(err)
    }
}



// Trabalhando com arquivos Json
async function writeReadJson(){
    try{
        const obj = {
            alunos: "alunos",
            professor: "profrssor",
            carros: ['Gol', 'savero', 'civic']
        };  

    await fs.writeFile('teste.json', JSON.stringify(obj));

      const readJson = await fs.readFile('teste.json');
      const data = JSON.parse(readJson)

      data.carros.push("Tigua")
      console.log(data)

    }catch(err){
        console.log(err)
    }
}








// Utilizando com Callbacks

// cria um conteudo
fs.writeFile('teste.txt', 'bla val', (err) => {
    if(err){
        throw err;  
    }else{

        // CONACTENA 
        fs.appendFile('teste.txt', "\nola mundo", (err)=>{
            if(err){
                throw err;
            }else{
                //     le um conteudo
                fs.readFile('teste.txt', "utf-8", (err, data)=>{
                    if(err){
                        throw err;
                    }else{
                        console.log(data);
                    }
                })
                
            }
        })
    } 
});

// Utilizando de forma sync  não recomendado

try{
    console.log('1');
    fs.writeFileSync('teste.txt', 'ola mundo');
    console.log('2');
    const data = fs.readFileSync("teste.txt", "utf-8");
    console.log(data)
    console.log('3')

}catch(err){
    throw err;
}