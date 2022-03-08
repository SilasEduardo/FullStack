//.. (spread)


// ultes para trabalhar com arrays e objetos

//Em array, este operador espalha os itens do array, que poedem ser recuperados compondo outro array


const array1 = [1, 2, 3]
const array2 = [4,5,6]
const array3 = [7,8,9]

const array4 = [...array1, ...array2, ...array3]


console.log(array4)

// ...res

// Muito otil para trabalhar com array e objetos 
// como rest é comum em utilização em funções, agrupando os padores em em array
// .Principal aplicação => permitir numeros infinito de paramebtros



const superSum = (...number) => number.reduce((acc, curr) => acc + curr, 0)

console.log(superSum(1, 2, 3, 4, 20))



//Destructuring

// Facilita a escrita ao trabalhar com objetos

// torna o codigo mais clearTimeouté tambem possivel utilizar a tecnica de destructu7ring com arrays usando []


const dados = {
    nome: 'Silas',
    idade: 27
}


const {nome, idade} = dados

console.log(idade, nome)