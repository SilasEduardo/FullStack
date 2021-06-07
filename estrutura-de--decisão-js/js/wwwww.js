window.addEventListener('load', start);

var globalNames = ['Um', 'Dois', 'Três', 'Quatro', 'cinco']; //arrey de dados
var inputName = null; //variavel global 

function start(){ //função que vai iniciar o javascript depois do html
    inputName = document.querySelector('#inputName'); //selecionando elemento do html

    preventFormSubmit(); // selecionando e tirando o reflexe da pagina.
    activateInput(); //ativando o input
    render();  
}
   

function preventFormSubmit(){ //tirando o reflexe da pagina.
    function handleFormSubmit(event){
        event.preventDefault();

    }

    var form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);

}

function  activateInput(){//ativando o input
    function insertName(newName){
        globalNames.push(newName);
        render();  
         
    }
    function handletyping(event){
        if(event.key === 'Enter'){
            insertName(event.target.value);
            
        }



    }
    inputName.addEventListener('keyup', handletyping);
    inputName.focus();
}

function render(){
   function createDeleteButten(index){
        function deleteName(){
            globalNames.splice(index, 1);
            render();
        }
        var button = document.createElement('button');
        button.classList.add('deleteButton');
        button.textContent = 'x'

        button.addEventListener('click', deleteName)

        return button;


     }
     var divNames = document.querySelector('#names');

    divNames.innerHTML = ''
    //criar ul
    //fazer numero lista , conformr tamanho do global name

    var ul = document.createElement('ul');

        for(var i = 0; i < globalNames.length; i++){
            
            var correntName = globalNames[i];

            var li = document.createElement('li');
            var button = createDeleteButten(i);

            
            var span = document.createElement('span');
            span.textContent = correntName;

            li.appendChild(button);
            li.appendChild(span);
            ul.appendChild(li);
        }

     
    /*var li1 = document.createElement('li');
    var li2 = document.createElement('li');
    li1.textContent = 'primeiro';
    li2.textContent = 'segundo';

    ul.appendChild(li1);
    ul.appendChild(li2);*/

    divNames.appendChild(ul);
    clearInput();
   
}

function clearInput(){
    inputName.value = '';
    inputName.focus();

}
