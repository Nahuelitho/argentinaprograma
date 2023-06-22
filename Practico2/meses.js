const readlineSync = require('readline-sync');
//let meses = {'Enero': 31, 'Febrero': 28, 'Marzo': 31, 'Abril': 30, 'Mayo': 31, 'Junio': 30, 'Julio': 31, 'Agosto': 31, 'Septiembre': 30, 'Octubre': 31, 'Noviembre': 30, 'Diciembre': 31};
let mesesArray= [
    {mes:'Enero', dias:31},
    {mes:'Febrero', dias:28},
    {mes: 'Marzo', dias:31},
    {mes:'Abril', dias:30},
    {mes:'Mayo', dias:31},
    {mes:'Junio', dias:30},
    {mes:'Julio', dias:31},
    {mes:'Agosto', dias:31},
    {mes:'Septiembre', dias:30},
    {mes:'Octubre', dias:31},
    {mes:'Noviembre', dias:30},
    {mes:'Diciembre', dias:31}
];
let mes = readlineSync.question("Ingrese un numero de un mes: ");
console.log("La cantidad de dias del mes ", mesesArray[--mes].mes,"es",mesesArray[--mes].dias);



//let meses1 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];