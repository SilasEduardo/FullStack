window.addEventListener('load', start);


function start(){
    var nameimput = document.querySelector('#nameinput');
    nameimput.addEventListener('keyup', countName);


    var form = document.querySelector('form');
    form.addEventListener('submit', preventSubmit);  
}

function countName(event){
    var count = event.target.value;

    var span = document.querySelector('#nameLength');
    span.textContent = count.length;
}

function preventSubmit(event){
    event.preventDefault();

    var nameimput = document.querySelector('#nameinput');
    alert(nameimput.value + ' Cadastrado com sucesso');
}