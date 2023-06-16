
//A//
let cita="Feliz el que no insiste en tener razón, porque nadie la tiene o todos la tienen";
let substring="nadie";

function tamañoCita(cita){
    return console.log("El tamaño de la cita es:",cita.length);
}

tamañoCita(cita);
//B//
function buscar(palabra,cita){
    return console.log("El indice del substring es:",cita.search(palabra));
}

buscar(substring,cita);

//C//
let citaRevisada = "Tres tristes tigres comen trigo en un trigal";
console.log(citaRevisada);
//realice una funcion que recibe una cita y dos numeros que significa de que caracter hasta que caracter quiere mostrar
function citaRecuperada(cita,num1,num2){
let citRec = cita.substring(num1,num2);//La funcion substring recorta un String le tenemos que decir de que posicion hasta que posicion
return console.log(citRec);
}

citaRecuperada(citaRevisada,20,31);



