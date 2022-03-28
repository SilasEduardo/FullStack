window.addEventListener('load', ()=>{
    // fetch('https://api.github.com/users/silasEduardo').then(res => {
    //     res.json().then(data =>{
    //         console.log(data)
    //     })
    // }).catch(erro => {
    //     console.log('Erro na requisição')
    // })
    divisionPromise(8, 4).then(res =>{
        console.log(res)
    })
 
    exucuteDivisionPromise()
    exucuteDivisionPromiseasyncawait()
    doFach()
    doFachAsync()
})

const divisionPromise = (a, b) =>{
    return new Promise((resolve, reject)=>{
        if(b===0){
           reject('Não é possiovel dividir por 0') 
        }
        resolve(a/b)
    })
}

const exucuteDivisionPromise = () =>{
    divisionPromise(02, 0).then(res =>{
        console.log(res)
    }).catch(err =>{
        console.log('Falha na divisão')
    })
}
async function exucuteDivisionPromiseasyncawait(){
    const division = await divisionPromise(12, 2);

    console.log( 'Async ' + division)
   
}

function doFach(){
    fetch('https://api.github.com/users/silasEduardo').then(res => {
        res.json().then(data =>{
            console.log(data)
        })
    }).catch(erro => {
        console.log('Erro na requisição')
    })
}

async function doFachAsync(){
    const res = await fetch('https://api.github.com/users/silasEduardo')
    const data = await res.json()
    console.log(data)
}

