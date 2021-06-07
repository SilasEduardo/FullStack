window.addEventListener('load', start);

//VARIAVEIS GLOBAIS

var globalNames = ['Um', 'Dois', 'Três', 'Quatro', 'cinco']; //arrey de dados
var inputName = null;
var isEditing = false;
var currentIndex = null;

//FUNÇÃO START INICIALIZANDO TUDO AO CARREGAR A PÁGINA

function start(){ 
    inputName = document.querySelector('#inputName');
    preventFormSubmit();
    activateInput();
    render();  
}


   

function preventFormSubmit(){
    function handleFormSubmit(event){
        event.preventDefault();
    }

    var form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);

}

function  activateInput(){
     //INSERT
    function insertName(newName){
        globalNames.push(newName);
        render();
    }
    //
    
    function updateName(newName){
        globalNames[currentIndex] = newName
        render();
    }         

    function handletyping(event){

        var hasText = !!event.target.value && event.target.value.trim() !== '';
        if(!hasText){
            clearInput();
            return;
        }

        if(event.key === 'Enter'){
            if(isEditing){
                updateName(event.target.value);

            }
            else{
                insertName(event.target.value);
            }
            
           isEditing = false; 
           clearInput();
        }



    }
    inputName.addEventListener('keyup', handletyping);
    inputName.focus();
}

function render(){
   function createDeleteButten(index){
       //DELETE
        function deleteName(){
            globalNames.splice(index, 1);
            render();
        }
        
        //Criação do botão delete
        var button = document.createElement('button');
        button.classList.add('deleteButton');
        button.textContent = 'x'
        button.addEventListener('click', deleteName)
        return button;
     }

     //edição

     function cleateSpan(name, index){
        var span = document.createElement('span');
        function editItem(){
            inputName.value = name;
            inputName.focus();
            isEditing = true;
            currentIndex = index;

        }
        span.classList.add('clickable');
        span.textContent = name;
        span.addEventListener('click', editItem)

        return span;
     }

     var divNames = document.querySelector('#names');
    divNames.innerHTML = ''

 
//crição ul
//fazer n li s conforme o tamanho do evetor globalNmames
    var ul = document.createElement('ul');

        for(var i = 0; i < globalNames.length; i++){
            var currentName = globalNames[i];

            var li = document.createElement('li');
            var button = createDeleteButten(i);
            var span = cleateSpan(currentName, i);

           
            li.appendChild(button);
            li.appendChild(span);
            ul.appendChild(li);
        }

    divNames.appendChild(ul);
    clearInput();
   
}

function clearInput(){
    inputName.value = '';
    inputName.focus();

}
