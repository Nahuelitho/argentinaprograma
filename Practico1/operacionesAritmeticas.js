let variable1 = 17;
let variable2 = 5;
let variable3 = 12;
let variable4 = 14;

let suma1y2 = variable1 + variable2;

let resta4en3 = variable4 - variable3;

let resultadoFinal = suma1y2*resta4en3;

console.log(resultadoFinal);

function esPar(num){
    let result = num%2===0;
    return console.log(result);
}

esPar(6);
esPar(7);

console.log("Mis variables iniciales fueron 1:",variable1,"2:",variable2,"3:",variable3,"4:",variable4);