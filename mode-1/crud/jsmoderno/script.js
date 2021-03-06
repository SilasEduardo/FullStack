let globalNames = ['Ricardo', 'Márcia', 'Maria Cecília'];

let inputName = null;
let isEditing = false;
let currentIndex = null;

window.addEventListener('load', () =>{
    inputName = document.querySelector('#inputName');

    preventFormSubmit();
    activateInput();
    render();

});

const preventFormSubmit = () => {
    
    const handleFormSubmit = (event) => {
        
        //evita o request da página
        event.preventDefault();
    }

    var form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
}

const activateInput = () => {

    const insertName = (newName) => {
        
        //globalNames.push(newName);

        globalNames = [...globalNames, newName]
        
        //render();
    }

    const updateName = (newName) => {
        globalNames[currentIndex] = newName;

        //render();
    }

    const handleTyping = (event) => {

        var hasText = !!event.target.value && event.target.value.trim() !== '';
        console.log(hasText);
        //Se não tiver algo digitado não continua
        if(!hasText){

            clearInput();

            return;
        }

        //Se a tecla digitada for o Enter do teclado
        if(event.key === 'Enter' && event.target.value.trim() !== ''){

            //Se verdadeiro faz a edição
            if(isEditing){
                updateName(event.target.value);
            }
            else{
                insertName(event.target.value);
            }

            render();

            isEditing = false;

            clearInput();
        }
    }

    inputName.addEventListener('keyup', handleTyping);    
    inputName.focus();
}

const render = () => {

    const createDeleteButton = (index) => {

        const deleteName = () =>{
            
            //remove um item do array
            // globalNames.splice(index, 1);
        //   globalNames = globalNames.filter((name, i)=>{
            //   if(i === index){
            //       return false;
            //   }
            //   return true;
            // return i !== index
        //   })

        //     render();
        // }

        globalNames = globalNames.filter((_, i)=> i !== index);
        render();
        }
        var button = document.createElement('button');
        
        button.classList.add('deleteButton');
        button.textContent = 'x';

        button.addEventListener('click', deleteName);

        return button;
    }

    const createSpan = (name, index) =>{

        const editItem = () => {

            inputName.value = name;
            inputName.focus();

            isEditing = true;

            currentIndex = index;
        }

        var span = document.createElement('span');
        
        span.classList.add('clickable');

        span.textContent = name;

        span.addEventListener('click', editItem);

        return span;
    }
    
    var divNames = document.querySelector('#names');

    divNames.innerHTML = '';

    var ul = document.createElement('ul');

    for(var i = 0; i < globalNames.length; i++) {

        var currentName = globalNames[i];

        var li = document.createElement('li');

        var button = createDeleteButton(i);
        var span = createSpan(currentName, i);

        li.appendChild(button);
        li.appendChild(span);

        ul.appendChild(li);
    }

    divNames.appendChild(ul);
    clearInput();
}

const clearInput = () => {
    inputName.value = '';
    inputName.focus();
}
