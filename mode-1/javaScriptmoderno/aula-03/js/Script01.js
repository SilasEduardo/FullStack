window.addEventListener('load', ()=>{
     doSpread()
     doRest();
     doDestructuring()

});

//SPREAD

const doSpread = () =>{
     const marrieMen = people.results.filter(person =>(person.name.title === 'Mr'))
     const marrieWomen = people.results.filter(person =>(person.name.title === 'Ms'))
     
const marridPeople = [...marrieMen, ...marrieWomen, {msg: 'oi'}]

console.log(marridPeople)
}

//REST

const doRest = () =>{
     console.log(infiniteSum(1 ,2 , 100))


}

const infiniteSum = (...number) =>{
     return number.reduce((acc, curr) => acc + curr, 0)
}

//DESTRUCTURING

const doDestructuring = () =>{
     const first = people.results[1]

     // const username = first.login.username
     // const password = first.login.username

     

     // usando destructuring


     const {username, password} = first.login

     console.log(username, password)
}

