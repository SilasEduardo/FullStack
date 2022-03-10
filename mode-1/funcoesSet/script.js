// setTimeout 
window.addEventListener('load', ()=>{

    const timer = document.querySelector("#timer")
    let count = 0;


    const Interval = setInterval(()=>{
        timer.textContent = ++count
        
        if( count === 20){
            this.clearInterval(Interval)
        }

        if (count % 5 === 0){
            setTimeout(()=>{
                timer.textContent = count + ',5'
            },  500)
        }

    }, 1000)
    
})


//Utiliza para postergar uma execução de uma função
//tempo de atraso configura em milessegundos


//setInterval

// semanhante a o timeout ´so que executa a cada x milhessegundos
// pode ser cancelada com o clearinterval
//para isso deve se quarda a referencia em uma vareavel

//exemplo contador que mostar números de um em um a cada segundo e
//quando o número for um multiplo de 5, mostra +0.5 após meio segundo
//Criar botão para cancelar execução.

