// https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo
let usersInfo = [];
let inpuntName = 'Araújo'
let male = null;
let famelr = null
let age = null
let avarageAge = null;
let input = document.querySelector('#inpunt').focus()

window.addEventListener('load', ()=>{
    fetchUsers()
    // nameFilter()
})

async function fetchUsers() {
    const res = await fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo')
    const json = await res.json()
  
    usersInfo = json.results.map(user => {
  
      const { name, picture, dob, gender } = user
  
      return {
        name: `${name.first} ${name.last}`,
        picture: picture.thumbnail,
        age: dob.age,
        gender
      }
    })
   console.log(usersInfo.name)

}

// nameFilter = () =>{
//     const foundeName = userFound.filter(
//        person =>{
//         return person.name.lest === 'Araújo';
//        } 
//     )

//     console.log(foundeName);
// }