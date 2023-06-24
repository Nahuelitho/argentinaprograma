let listInvitados = ["Jose","Maria","Andres","Lionel","Sofia","Leandro","Emilia"];
let admitidos = [];
let rechazados = [];

//console.log(listInvitados);

let fraseA = "La lista de invitados admitidos es: ";
let fraseR = "La lista de invitados rechazados es: ";

for(let i = 0; i<listInvitados.length; i++){
if(listInvitados[i]==="Jose"||listInvitados[i]==="Sofia" ){
    rechazados.push(listInvitados[i]);
    fraseR += listInvitados[i] + ", ";
}else{
    admitidos.push(listInvitados[i]);
    fraseA += listInvitados[i] + ", ";
}
}

//console.log(admitidos);
//console.log(rechazados);
let frase1 = fraseA.substring(0,fraseA.length-2); 
let frase2 = fraseR.substring(0,fraseR.length-2);
console.log("\n"+frase1+".");
console.log("\n"+frase2+".");


////////EXTRA/////////
admitidos.sort();
rechazados.sort();
let frase3 = "La lista ordenada de invitados admitidos es: ";
for(let i=0;i<admitidos.length;i++){
frase3+=admitidos[i]+", ";
}

//console.log(fraseA);
console.log("\n"+frase3.substring(0,frase3.length-2)+"."+"\n");



