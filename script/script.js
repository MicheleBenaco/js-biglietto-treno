// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


const numeroKm = prompt('Indicare il numero di Kilometri che si vuole percorrere ');
const numeroEta = prompt('Indicare la propio eta ');
console.log(numeroKm);
console.log(numeroEta);

const prezzoBigl = numeroKm * 0.21

console.log(prezzoBigl);

if(numeroEta <= 18 ){
 const scontoMin = prezzoBigl * 10 / 100;
 let prezzoTotMin = scontoMin - prezzoBigl
} else if ( numeroEta >= 65){
    const scontoMax = prezzoBigl * 40 / 100;
    const prezzoTotMax = scontoMax - prezzoBigl
}else{
    prezzoBigl = prezzoBigl
}
console.log(prezzoBigl);
console.log(prezzoTotMin);
console.log(prezzoTotMax);