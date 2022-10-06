// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


const numeroKm = prompt('Indicare il numero di Kilometri che si vuole percorrere ');
const numeroEta = prompt('Indicare la propio eta ');
document.getElementById("stamp_km").innerHTML =  numeroKm
document.getElementById("stamp_eta").innerHTML =  numeroEta

console.log(numeroKm);
console.log(numeroEta);

const prezzoBigl = numeroKm * 0.21

console.log(prezzoBigl);

if(numeroEta <= 18 ){
 const scontoMin = prezzoBigl * 10 / 100;
 const prezzoTotMin = prezzoBigl - scontoMin
 document.getElementById("biglietti_costo").innerHTML =  prezzoTotMin
 console.log(prezzoTotMin);
} else if ( numeroEta >= 65){
    const scontoMax = prezzoBigl * 40 / 100;
    const prezzoTotMax = prezzoBigl - scontoMax
    document.getElementById("biglietti_costo").innerHTML =  prezzoTotMax
    console.log(prezzoTotMax);
}else{
    prezzoBigl = prezzoBigl
    document.getElementById("biglietti_costo").innerHTML =  prezzoBigl
}
