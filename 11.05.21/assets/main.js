//Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
//nome e
//peso.
//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
const bici = [
    {nome: 'santa cruz', peso:9},
    {nome: 'trek', peso:11},
    {nome:'merida', peso:7},
    {nome:'kona', peso:12},
    {nome:'giant', peso: 8}
];

//creo un array con solo i pesi delle biciclette
console.log(bici);
var pesi =[];
for(var i = 0; i <bici.length; i++){
    console.log(bici[i].peso);
   pesi.push(bici[i].peso);
}
console.log(pesi);

//trovo tra i pesi quello minore
var min =pesi[0];
for(var i = 1; i<pesi.length; i++){
    if(pesi[i] <= min) 
    min = pesi[i];
}
console.log(min);

//stampo l'array col peso minore
for(var i=0; i < bici.length; i++){
if (bici[i].peso == min){
   var obMin = bici[i];
}
}

console.log(obMin);



//Snack2:
//Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
//nome,
//punti fatti,
//falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

var squadre = [
    {nome:'Milan', punti_fatti:0 , falli_subiti:0},
    {nome:'Inter', punti_fatti:0 , falli_subiti:0},
    {nome:'Juventus', punti_fatti:0 , falli_subiti:0},
    {nome:'Napoli', punti_fatti:0 , falli_subiti:0},
    {nome:'Atalanta', punti_fatti:0 , falli_subiti:0}
];

//funzioni per calcolare i punti e i falli subiti random
function punti(){
    var n = Math.floor(Math.random() * 100) + 1;
    return n;
}

function falli(){
    var f = Math.floor(Math.random() * 500) + 1;
    return f;
}

var puntiRandom = punti();
console.log(puntiRandom);

var falliRandom = falli();
console.log(falliRandom);


//con due cicli for assegno i numeri random 
for(var i = 0; i<squadre.length; i++){
    puntiRandom = punti();
    if(squadre[i].punti_fatti == 0){
        squadre[i].punti_fatti += puntiRandom;
    }
}


for(var i = 0; i<squadre.length; i++){
    falliRandom = falli();
    if(squadre[i].falli_subiti == 0){
        squadre[i].falli_subiti += falliRandom;
    }
}

console.log(squadre);