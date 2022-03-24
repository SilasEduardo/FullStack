window.addEventListener('load', ()=>{
    
    fetch('https://api.github.com/users/silasEduardo').then(res => {
        res.json().then(data =>{
          showData(data)
        })
    }).catch(erro => {
        console.log('Erro na requisição')
    })
})

const showData = (data) =>{
    const showData = document.querySelector("#showData")
    showData.textContent = data.login +'\n'+ data.name
}