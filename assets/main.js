//Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
//nome e
//peso.
//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
var bici = [
    {nome: 'santa cruz', peso:6},
    {nome: 'trek', peso:11},
    {nome:'merida', peso:7},
    {nome:'kona', peso:12},
    {nome:'giant', peso: 8}
];

console.log(bici);
var pesi =[];
for(var i = 0; i <bici.length;i++){
    console.log(bici[i].peso);
   pesi.push(bici[i].peso);
}
console.log(pesi);
var min =pesi[0];
for(var i=0; i<pesi.length; i++){
    
    if(pesi[i] <= min) 
    min = pesi[i];

}
console.log(min);

