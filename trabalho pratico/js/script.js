let inputRangeRed = null;
let inputRangeGreen = null;
let inputRangeBlue = null;


let inputTextRed = null;
let inputTextGreen= null;
let inputTextBlue = null;

let divSquare = null;

let  r = 0;
let g = 0;
let b = 0;

window.addEventListener('load', () =>{
    mapElement();
    syncDiv();
});


function mapElement(){
    inputRangeRed = document.querySelector('#inputRangeRed');
    inputRangeGreen = document.querySelector('#inputRangeGreen');
    inputRangeBlue = document.querySelector('#inputRangeBlue');

    inputTextRed = document.querySelector('#inputTextRed')
    inputTextGreen = document.querySelector('#inputTextGreen');
    inputTextBlue = document.querySelector('#inputTextBlue');
    

    console.log(inputTextRed.value)
    
    divSquare = document.querySelector('#divSquare')

    

    inputRangeGreen.addEventListener('change', handleinputRangeChange);
    inputRangeRed.addEventListener('change', handleinputRangeChange);
    inputRangeBlue.addEventListener('change', handleinputRangeChange);

    


}

function handleinputRangeChange(event){
    const value = event.target.value
    const id = event.target.id
     
    


    switch(id){
        case "inputRangeRed":
             r = value;
             break;
        case "inputRangeGreen":
             g = value;
             break;
        case "inputRangeBlue":
             b = value;
             break;
    }
    syncDiv()

}

function syncDiv(){
    divSquare.style.backgroundColor = `rgb(${r},${g},${b})`;

    inputTextRed.value = r
    inputTextGreen.value = g
    inputTextBlue.value = b

   
}