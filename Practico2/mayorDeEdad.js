const readlineSync = require('readline-sync');
let edad = readlineSync.question("Cual es su edad? ");
if(edad>=18){
    console.log("Eres mayor de edad");
}else if(edad>0&&edad<18){
    console.log("Eres menor de edad");
} else{
    console.log("Ingreso una edad menor a 0");
}
