//Snack 3:
//Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
//:collisione: Usiamo i nuovi metodi degli array foreach o filter.

const array = [1,2,35,41,18,10,30,40];
const a = 5;
const b = 6;

const arrayFinale =[];
array.forEach((element,index) => {
    if(index >= a && index <= b){
    arrayFinale.push(element);
    
    }
}
); 
console.log(arrayFinale);
for(var i=0; i<arrayFinale.length; i++){
    document.getElementById('stampa').innerHTML += arrayFinale[i] + '<br>';
} 

const arrayfilter = array.filter((element, index) => {
     if(index >= a && index <= b){
    return true;
    }
});

console.log(arrayfilter);

for(var i=0; i<arrayfilter.length; i++){
    document.getElementById('stampa2').innerHTML += arrayfilter[i] + '<br>';
} 
