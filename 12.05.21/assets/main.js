//Snack 3:
//Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
//:collisione: Usiamo i nuovi metodi degli array foreach o filter.

const array = [1,2,35,41,18,10,30,40];
var a = 5;
const b = 6 ;

const arrayFinale =[];
array.forEach((element,index) => {
    while(a <= b){
    arrayFinale.push(array[a]);
    a++
    }

}

); 

console.log(arrayFinale);