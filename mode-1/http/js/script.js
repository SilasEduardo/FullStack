window.addEventListener('load', ()=>{
    
    fetch('https://api.github.com/users/silasEduardo').then(res => {
        res.json().then(data =>{
          showData(data)
        })
    })
})

const showData = (data) =>{
    const showData = document.querySelector("#showData")
    showData.textContent = data.login +'\n'+ data.name
}