window.addEventListener('load', start);

var globalNames =['Um', 'Dois', 'Três', 'Quatro'];
var inputName = null;
var isEditing = false;
var currentIndex = null;

function start(){
    inputName = document.querySelector('#inputName'); 
    preventFormSubmit(); // evitar que o form seja recarregado 
    activanteInput(); // cursor no input
    render()
}


 function preventFormSubmit() {
    function hendleFormSubmit(event) {
        event.preventDefault(); //previne o recarregamento da tela
    }
    var form = document.querySelector('form');
    form.addEventListener('submit', hendleFormSubmit)

}

function activanteInput(){
    function insartName(newName){
            globalNames.push(newName)
    };
    function updateName(newName){
        globalNames[currentIndex] = newName
        render()
    }
    function handletping(event){
        if(event.key === 'Enter' && event.target.value.trim() !== ''){
            if(isEditing){
                
                updateName(event.target.value)
            }else{
               
                insartName(event.target.value)
                render() 
            }
            isEditing = false; 
            clear()   
        } 
    }
    inputName.focus() // foca o curso
    inputName.addEventListener('keyup'/*keyup capitura o evento da tecla*/, handletping);
} 

function render(){
        function createDeleteButten(index){ // deletar o botão
            function deleteName(){
                globalNames.splice(index, 1)
                render();
            }

            var button = document.createElement('button')
            button.classList.add('deleteButton')
            button.textContent = 'x';
            button.addEventListener('click', deleteName)
            return button
        };

        function createSpan(name, index){
            function aditTtem(){
                inputName.value = name
                inputName.focus();
                isEditing = true;
                currentIndex = index;
            }
            var span = document.createElement('span')
            span.classList.add('clickable')
            span.textContent = name;
            span.addEventListener('click', aditTtem)

            return span
        }


        var divNames = document.querySelector('#names');
        divNames.innerHTML = '';
        //criar Ul
        //Fazer n li 's, conforme o tamanho do globalnames

        var ul = document.createElement('ul') //criando ul

        for(var i = 0; i < globalNames.length; i++){
            var currentName = globalNames[i]
            var li = document.createElement('li')
            var span = createSpan(currentName, i)
            
           var button = createDeleteButten(i)

            
            li.appendChild(button);
            li.appendChild(span);
            ul.appendChild(li)
       }
    

        divNames.appendChild(ul);
        clear()
}

function clear(){
    inputName.value = '';
    inputName.focus();

    


}

