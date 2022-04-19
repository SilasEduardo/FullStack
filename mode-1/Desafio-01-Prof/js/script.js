let inputSearch = null, 
buttonSearch =null,
panelUsers = null,
penalStatistics = null;
let users = [];
let divSpinner = null;
let divInteraction = null;


window.addEventListener('load', async ()=>{
    mapElements();
   await fetchUsers()
   addEvents()
})

function mapElements(){
inputSearch = document.querySelector('#inputSearch')
buttonSearch = document.querySelector('#buttonSearch');
panelUsers = document.querySelector('#panelUsers');
penalStatistics = document.querySelector('#panelStatistics')
divSpinner = document.querySelector('#divSpinner');
divInteraction = document.querySelector('#divInteraction');



}

async function fetchUsers(){
    
    const res = await fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo')
    const json = await res.json();

    users = json.results.map(({login, name, dob, gender, picture}) =>{
        const fullName = `${name.first} ${name.last}`;
        return{
            id: login.uuid,
            name: fullName,
            nameLowerCase: fullName.toLowerCase(),
            age: dob.age,
            gender: gender,
            picture: picture.large,
        }
    }).sort((a,b)=>{
        return a.name.localeCompare(b.name)
    });
    showInteraction();
}

function showInteraction(){
    divSpinner.classList.add('hidden');
    divInteraction.classList.remove('hidden');
}

function addEvents(){
    inputSearch.addEventListener('keyup', handleKeyup)
}

function handleKeyup(event){
 if(event.key !== 'Enter'){
     return;
   }

   const filterText = event.target.value

   if(filterText.trim() !== ''){

       filterUsers(filterText)
   }
 }

 function filterUsers(filterText){
    const filterTextLowercase = filterText.toLowerCase()


    const filterUsers = users.filter(user =>{
        return user.nameLowerCase.includes(filterTextLowercase)
    })
    renderUsers(filterUsers);
    renderStatistics(filterUsers);
 }

 function renderUsers(users){
     panelUsers.innerHTML = '';

    const h2 = document.createElement('h2');
    h2.textContent = `${users.length} usuários(s) encontrado(s)`

    const ul = document.createElement('ul')

        users.forEach( (user) =>{
        
            const li = document.createElement('li')
            li.classList.add('flex-row')

            const img = `<img src="${user.picture}" alt="${user.name}"></img>`;
            const userData = `<span>${user.name}, ${user.age} anos</span>`;

            li.innerHTML = `${img} ${userData}`






            ul.appendChild(li)
        });

    panelUsers.appendChild(h2)
    panelUsers.appendChild(ul)
 }

 function renderStatistics(user){

    let countMale = user.filter((user)=> user.gender === 'male').length;
    let femaleMale = user.filter((user)=> user.gender === 'female').length;
    let suMAge = user.reduce((acc, curr)=>{
        return acc + curr.age
    }, 0)

    let averageAges = suMAge / user.length || 0;

    penalStatistics.innerHTML =
    `
    <h2>Estatísticas</h2>

    <ul>
        <li>Masculeno: <strong>${countMale}</strong></li>
        <li>Feminino:<strong>${femaleMale}</strong></li>
        <li>Soma das idades: <strong>${suMAge}</strong></li>
        <li>Média das idades: <strong>${averageAges.toFixed(1)}</strong></li>
    </ul>

    `

 }