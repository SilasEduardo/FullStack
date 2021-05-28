var a = 2;
var b = 8;


if (a > b) {
    console.log(a + ' é maior que ' + b);
} else {

    if (a < b) {
        console.log(a + ' é menor que ' + b);


    } else {
        console.log(a + ' e ' + ' são iguais');

    }
}
//quando o if e em bloco podemos retirar as aspas.
if (a > b)
    console.log(a + ' é maior que ' + b);
else

    if (a < b)
        console.log(a + ' é menor que ' + b);


    else
        console.log(a + ' e ' + ' são iguais');




//if e else aninhados exemplo.

//exemplo switch


var dia = 8;

switch (dia) {
    case 1: dia = 'Domindo'; break;
    case 2: dia = 'Segunda'; break;
    case 3: dia = 'Terça'; break;
    case 4: dia = 'Quarta'; break;
    case 5: dia = 'Quinta'; break;
    case 6: dia = 'Sexta'; break;
    case 7: dia = 'Sábado'; break;

    default: dia = 'Dia invalido';

}

console.log(dia);

// O perdador tenario

var a = 4;
var b = 6;

var resposta = a > b ? 'A é maior' : b > a ? 'B é maior' : 'Iguais';

console.log(resposta);

dia = 4


var dias =
    dia === 1
    ? 'Domingo'
    : dia === 2
    ? 'Segunda'
    : dia === 3
    ? 'Terça'
    :dia === 4
    ? 'Quarta'
    :dia === 5
    ? 'Quinta'
    : dia === 6
    ? 'Sexta'
    : dia === 7
    ? 'Sabado'
    : 'Dia Invalido';

console.log(dias);