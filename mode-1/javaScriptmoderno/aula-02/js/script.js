window.addEventListener('load', ()=>{
    
// pricipais metodos de arrays com ES6+

    doMAp();
    doFilter();
    doForEach();
    doReduce();
    doFind();
    doSome();
    doEvery();
    doSort();
})


//MAP -> Rega um novo array transformando os dados

doMAp = ()=>{
    const nameEmailarray = people.results.map(person =>{
        return {
            name: person.name,
            email: person.email
        }
    })
    console.log(nameEmailarray)
    return nameEmailarray
}

// filter -> gera um novo array filtrando os elementos com base em proposição

doFilter = () =>{
    const olderThan50 = people.results.filter(
       person =>{
        return person.dob.age > 50;
       } 
    )
    console.log(olderThan50);
}

//forEach -> percorre todos os elementos do arrays, aplicando logica

doForEach = () =>{
    const meppedPeople = doMAp();


    meppedPeople.forEach(person =>{
            person.nameSize = person.name.title.length + person.name.first.length + person.name.last.length
        });
     console.log(meppedPeople);
 }


// reduce -> realiza cálculo iterativo com base nos elementos

const doReduce = () =>{
    const totalAges = people.results.reduce((accumulator, current)=>{
        return accumulator + current.dob.age;
    }, 0)
    console.log(totalAges)
    // reduce substite o for
    // console.log(totalAges)
    // let sum = 0
    // for(let i = 0; i < people.results.length; i++ ){
    //     var conrrent = people.results[i]
    //     sum += conrrent.dob.age
    // }
    // console.log(sum)
}
//find -> encontra elementos com base em proposição

doFind = () =>{
    const found = people.results.find(person =>{
        return person.location.state === 'Minas Gerais';
    } )

    console.log(found)

}

//some -> verifica se a elementos que a tenda a preposição

doSome = () =>{
 const found = people.results.some(person =>{
     return person.location.state === 'Silas';
 })
 console.log(found)
}

// every -> verifica se todos os elementos atendem  a preposição

doEvery = () =>{
 const every = people.results.every(person =>{
     return person.nat === 'BR';
 })

 console.log(every)
}

// sorte -> ort -> ordema os elementos com base em um criterio

doSort = () =>{
    const mapeedName = people.results.map(person =>{
      return{
        name: person.name.first

      }  

 }).filter(person =>{
         return person.name.startsWith('A')
        
     }).sort((a, b)=>{

       return a.name.localeCompare(b.name) && a.name.length - b.name.length

     })
    console.log(mapeedName)

}

