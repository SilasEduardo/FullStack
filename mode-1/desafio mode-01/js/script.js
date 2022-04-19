let namePeople= null;
let peopleFound = null;
let peopleFilter = null;
let peopleRander = '';
let contF = 0;
let contM = 0;
let agePeople = 0;
let btn =  document.getElementById("btn")
let masc = document.querySelector('#m')
let fame = document.querySelector('#f')

let peopleFoundHtml = document.querySelector('#peopleFoundHtml')
let agePeoples = document.querySelector('#age')
let inputName = document.querySelector("#inpunt")
let numberPeople = document.querySelector("#number")
let averageHTML = document.querySelector("#average")

let statisticPeople = document.querySelector('#statistic')


let avatar = null;
let statistics = [];

window.addEventListener('load', ()=>{
  
  doFachAsync()
  
})



async function doFachAsync(){
  const res = await fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo')
  const data = await res.json()

  doMAp = ()=>{
    peopleFound = data.results.map(person =>{
        return {
            lastName: person.name.last,
            firstName: person.name.first,
            avatar: person.picture.large,
            age: person.dob.age, 
            gender: person.gender
        }
    })
  }
doMAp()
}




inputName.addEventListener('keyup', handleTyping);
let cont = 0;
function handleTyping(event) {
  //Se a tecla digitada for o Enter do teclado
  if(event.key === 'Enter' && event.target.value.trim() !== ''){
    namePeople = event.target.value
    doFilter = () =>{
      peopleFilter = peopleFound.filter(
         person =>{
          return person.lastName === namePeople;
         }
      )

      function renderPeopleList() {
        let countriesHTML = '<div class="peoples">';
        peopleFilter.forEach(person => {
          const {
            lastName: lastName,
            firstName: firstName,
            avatar: avatar,
            age: age
          } = person;
          "<div>"
          const countryHTML = `
            <div class = 'people'>
              <div>
              <img src=${avatar}>
              </div>
              <div>
                <p>${firstName}</p>
              </div>
              <div>
              <div>
              <p>${lastName}</p>
              </div>
              </div>
              <div>
              <p>${age}
              </div>
            </div>

          `;
          peopleRander += countryHTML;

          numberPeople.innerHTML = peopleFilter.length;

        });
        countriesHTML += '</div>';
        peopleFoundHtml.innerHTML += peopleRander
        peopleRander = '';




        const list = peopleFoundHtml.classList;
        list.add("people");
        const list2 = peopleFoundHtml.classList;
        list2 .add("peoples");
        
      }
      peopleFoundHtml.innerHTML = '';
      renderPeopleList()
      const renderStatisticList = () => {
        for(i of peopleFilter){
          agePeople += i.age;
          if(i.gender == 'female'){
            contF ++
          }else{
            contM ++
          }
        } 

        averageHTML.innerHTML = agePeople / peopleFilter.length.toFixed(2);
        agePeoples.innerHTML = agePeople
        masc.innerHTML = contM
        fame.innerHTML = contF
          
      }
      renderStatisticList()
      }
      
    contF = 0;
    contM = 0;
    agePeople =0;

    doFilter()
  }
  
 
}













