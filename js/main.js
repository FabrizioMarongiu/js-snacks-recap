


/*****************************************************************************
 * Giovedì 29 Aprile  MATTINO
 * ***************************************************************************






/**Snack 1
A:
Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
- Età
- Media punti fatti per partita
- Percentuale di successo per tiri da 3 punti
- Codice giocatore
Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
- l'età deve essere compresa tra 18 e 40
- la media punti fatti per partita deve essere compresa tra 0 e 50
- la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
- il codice giocatore deve essere formato da 3 lettere maiuscole casuali (array di lettere) e 3 cifre casuali
Stampare poi Codice giocatore, Media punti e percentuale tiri da 3 punti.
 

B:
Creare un array di 10 giocatori di basket, con le regole sopra indicate
Dopo aver creato l'array, stampa codice giocatore e media punti per ogni giocatore.


C:
Creare un nuovo array con i giocatori che hanno una media di punti superiore a 25 e
la percentuale di successo per i tiri da 3 punti superiore all’50%.
 * 
 */

// const alfabeto = [ "A", "B", "C", "D", "E", "F"]



// const giocatore = {
//     eta:  random(18, 40),
//     media: random(0, 50),
//     percentuale: random(0, 100),
//     codice: codice()
//     };



// console.log(giocatore);
// console.log(`Codice giocatore: ${giocatore.codice};
// Media punti: ${giocatore.media};`);



// // B
// let squadra = [];

// for (let i = 0; i < 10; i++){

//     squadra.push(
//         {
//         eta:  random(18, 40),
//         media: random(0, 50),
//         percentuale: random(0, 100),
//         codice: codice()
//         }
//     );

// };

// console.table(squadra);

// // STAMPA CODICE E MEDIA GIOCATORE
// // for( let i = 0; i < squadra.length; i++){

// //     console.log(`Il ${( i + 1)} giocatore ha il codice "${squadra[i].codice}", la sua media punti è: ${squadra[i].media}`)
// // }

// squadra.forEach((element, index) => {

//     console.log(`Il ${( index + 1)} giocatore ha il codice "${element.codice}", la sua media punti è: ${element.media}`);

// });

// // C

// const migliori = squadra.filter((element) => {

//     return (element.media > 25) && (element.percentuale > 50);

// });

// console.table(migliori);



// /*
// ****************************************************************
// FUNZIONI
// ****************************************************************
// */
// function random(min, max){

//     return Math.floor(Math.random() *(max - min +1) ) + min;

// }

// function codice(){


// let cod1 = '';

// let cod2 = '';

// for(let i = 0; i < 3; i++){

//     cod1 += alfabeto[random(0, alfabeto.length - 1)];
    
//     cod2 += random(1, 9);
// }

// return cod1 + ' - ' + cod2;

// }


/**************
 * SNACK 2
 * 
 * A partire da un array di numeri, genera un secondo array con le potenze al quadrato di ogni numero.
Es: [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]
 */


// const numeri = [1, 2, 3, 4, 5];

// const potenze= numeri.map((element) => {
    
//     // return element * element;

//     return Math.pow(element, 2);

    
// });

// console.table(potenze);



/*****************************************************************************
 * POMERIGGIO
 * ***************************************************************************
 * 
 * // Snack 1
Crea un array composto da 10 brand famosi (Sony, Gucci, Apple, Samsung, Dolce&Gabbana). 
- Partendo da questo array creare un nuovo array dove tutti i brand dovranno essere "normalizzati" 
(le lettere maiuscole saranno convertite in minuscolo quindi Gucci diventerà gucci) e aggiungere, 
sempre in questo contesto di "clonazione", una nuova proprietà denominata "foundationYear". Quest'ultima proprietà 
conterrà l'anno (mettete un valore voi, è necessario inserire valore reale) in cui l'azienda è stata fondata. 
 */


// const brand = [ "Coop", "Gucci", "Dolce e Gabbana", "Philips", "Apple", "Sony", "Ray Ban", "Google", "Microsoft", "Linux" ];

// const normBrand = brand.map((element) => {

//     let singleBrand = {
//         name: element.toLowerCase(),
//         foundationYear: random(1900, 2000)
//     }

//     return brand;

// });

// console.log(normBrand);


// const brand = [
//     { 
//         name: 'Coop'
//     },
//     {
//          name: 'Gucci'
//     },
//     { 
//         name: 'Dolce e Gabbana'
//     },
//     { 
//         name: 'Philips'
//     },
//     { 
//         name: 'Apple'
//     },
//     { 
//         name: 'Sony'
//     },
//     { 
//         name: 'Ray Ban'
//     },
//     { 
//         name: 'Google'
//     },
//     { 
//         name: 'Microsoft'
//     },
//     { 
//         name: 'Linux'
//     },
// ];

// const normBrand = brand.map((element) => {

//     return {
//         name: element.name.toLowerCase(),
//         foundationYear: random(1900, 2000)
//     };
// });


// console.log(normBrand);


// // Snack 2
// Crea un array composto da 10 automobili. 
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello, alimentazione (benzina, diesel, gpl, elettrico, metano).
// - Dividi in 3 array separati. Inserire nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo e ultimo il resto delle auto. 
// - Infine stampa separatamente i 3 array.


// const riventita = [
//     {
//         marca: 'Fiat',
//         modello: '500',
//         alimentazione: 'gpl',
//     },
//     {
//         marca: 'Opel',
//         modello: 'Corsa',
//         alimentazione: 'benzina',
//     },
//     {
//         marca: 'Mercedes',
//         modello: 'A',
//         alimentazione: 'elettrica',
//     },
//     {
//         marca: 'kia',
//         modello: 'Rio',
//         alimentazione: 'benzina',
//     },
//     {
//         marca: 'Peugeot',
//         modello: '206',
//         alimentazione: 'elettrica',
//     },
//     {
//         marca: 'Citroen',
//         modello: 'Xara',
//         alimentazione: 'metano',
//     },
//     {
//         marca: 'Seat',
//         modello: 'Cordoba',
//         alimentazione: 'benzina',
//     },
//     {
//         marca: 'Wolksvagen',
//         modello: 'Golf',
//         alimentazione: 'gpl',
//     },
//     {
//         marca: 'Audi',
//         modello: 'A - 1000',
//         alimentazione: 'elettrica',
//     },
//     {
//         marca: 'Renault',
//         modello: 'Espace',
//         alimentazione: 'diesel',
//     },
// ];

// const benzina = [];

// const diesel = [];

// const green = [];


// riventita.forEach((element) => {

//     if(element.alimentazione == 'benzina'){
//         benzina.push(element);
//     }else if(element.alimentazione == 'diesel'){
//         diesel.push(element);
//     }else{
//         green.push(element);
//     }

// });

// console.log(`Le auto con alimentazione a "benzina" sono:`);
// console.table(benzina);

// console.log(`Le auto con alimentazione "diesel" sono:`);
// console.table(diesel);

// console.log(`Le auto con alimentazione più green sono:`);
// console.table(green);








// // // /*
// // // ****************************************************************
// // // FUNZIONI
// // // ****************************************************************
// // // */


// // FUNZIONE CHE RESTITUISCE UN NUMERO RANDOM (SNACK 1 E 1 SERALE)
// function random(min, max){

//     return Math.floor(Math.random() * (max - min +1 ) ) + min;

// }



/*****************************************************************************
 * Venerd' 30 Aprile
 * ***************************************************************************/

// SNACK 1
// Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe.
// Crea un nuovo array con la lista dei mammiferi




// const animali = [
//     {  
//         nome: 'leone',
//         famiglia: 'felidi', 
//         classe: 'mammiferi' 
//     },
//     { 
//         nome: 'cane', 
//         famiglia: 'canidi', 
//         classe: 'mammiferi'
//      },
//     { 
//         nome: 'gallina', 
//         famiglia: 'fasianidi', 
//         classe: 'uccelli' 
//     },
// ];


// const mammiferi = animali.filter((elemento) => {

//     return elemento.classe === 'mammiferi';

// });

// console.log(mammiferi);


// SNACK 2
// Crea un array di 8 oggetti che rappresentano delle persone: ogni persona ha un nome, un cognome e un'età.
// Crea un nuovo array inserendo per ogni persona una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.


// const studenti = [
//     { 
//         nome: 'Carla',
//         cognome: 'Rossi',
//         eta: 35,
//     },
//     { 
//         nome: 'Mario',
//         cognome: 'Bruni',
//         eta: 15,
//     },
//     { 
//         nome: 'Ignazio',
//         cognome: 'Black',
//         eta: 18,
//     },
//     { 
//         nome: 'Clara',
//         cognome: 'First',
//         eta: 14,
//     },
//     { 
//         nome: 'Marco',
//         cognome: 'Next',
//         eta: 24,
//     },
//     { 
//         nome: 'Claudia',
//         cognome: 'Neri',
//         eta: 20,
//     },
// ];



// const idonei = studenti.map((element) => {

//     const { nome, cognome, eta} = element;

//     if (eta >= 18){
//         return {
//             ...element,
//             idoneo: `${nome} ${cognome} può guidare`
//             }
//         }
        
//         return {
//             ...element,
//             idoneo: `${nome} ${cognome} non può guidare`
//             }
// });                  




// console.table(idonei);



// SNACK 3
// Crea un array di 8 oggetti che rappresenti i pc in vendita nel nostro negozio: ogni pc ha un nome, una marca, un booleano 
// che indica se esce con Windows come OS di fabbrica (hasWindows: true oppure hasWindows: false) ed il prezzo e prezzo scontato.
// Creiamo un nuovo array che indichi i pc che hanno Windows e di questi andiamo a tirar fuori la differenza tra prezzo originale e scontato.


// const negozio = [
//     {
//         nome: '1002',
//         marca: 'hp',
//         hasWindows: true,
//         prezzo: 1200,
//         scontato: 1000,
//     },
//     {
//         nome: '5000',
//         marca: 'ACER',
//         hasWindows: true,
//         prezzo: 700,
//         scontato: 600,
//     },
//     {
//         nome: '300',
//         marca: 'Philips',
//         hasWindows: true,
//         prezzo: 800,
//         scontato: 500,
//     },
//     {
//         nome: 'AA',
//         marca: 'Samsung',
//         hasWindows: false,
//         prezzo: 1400,
//         scontato: 1200,
//     },
//     {
//         nome: 'MacBook Air',
//         marca: 'Apple',
//         hasWindows: false,
//         prezzo: 1500,
//         scontato: 1300,
//     },
//     {
//         nome: '2323',
//         marca: 'ASUS',
//         hasWindows: true,
//         prezzo: 1200,
//         scontato: 1000,
//     },
// ];


// const windows = negozio.map((element) => {

// const { nome, marca, hasWindows, prezzo, scontato} = element;

//     if(hasWindows){
//         return{
//             ...element,
//             differenza: prezzo - scontato,
//         }
//     }

// });

// const windows = [];

// negozio.forEach((element) => {

//     const { nome, marca, hasWindows, prezzo, scontato} = element;

//     if(hasWindows){
//                 windows.push(
//                     {
//                     ...element,
//                     differenza: prezzo - scontato,
//                 }
//             );
//     }
// });

//BEST SOLUTION****
// console.time();
// const windows = negozio.filter((element) => {

//     const { nome, marca, hasWindows, prezzo, scontato} = element;

//     return hasWindows;

// }).map((element) => {
//     const { nome, marca, hasWindows, prezzo, scontato} = element;
//     return{
//         ...element,
//         differenza: prezzo - scontato,
//     }
// })



// console.table(windows);

// console.timeEnd();

//ESERCIZI WEEKEND
    // SNACK 1
    // A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
    // Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

// const elenco1 = ['AnNa', 'clauDIA', 'RoBertO', 'Mattia', 'Lorena', 'oSCAR'];

// const elenco2 = elenco1.map((element) => {

//     return element[0].toUpperCase() + element.slice(1, element.length).toLowerCase();

// });

// console.log(elenco2);







// SNACK 2
// Un oggetto rappresenta una finestra di un browser e contiene due campi: 
// un array di tab aperte
// un numero che indica l'indice della tab aperta nell'array:
// {
//     "tab": ["Facebook", "GitHub", "Gmail"],
//     "activeTab": 0
// }
// Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
// Nel caso la tab fosse attiva, deve attivare la successiva.






















// SNACK 3  -> si potrebbe ottimizzare con una funzione separata per il capitalize
// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
// Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']


// const elenco1 = ['AnNa', 'clauDIA', 'RoBertO', 'Mattia', 'Lorena', 'oSCAR'];

// const elenco2 = elenco1.map((element) => {

//     return capitalize(element);

// });

// console.log(elenco2);


// /*
// * FUNZIONI
//  * 
//  */


// function capitalize(element){

//     return element[0].toUpperCase() + element.slice(1, element.length).toLowerCase();

// };


// SNACK 4 -> VUE 
// Partendo da un array di oggetti con i contatti di una rubrica con nome, cognome, numero, attivo (true,false)
// Andiamo a stampare nome cognome e numero dentro una lista.
// Fare in modo poi che i contatti non attivi (attivo: false) siano stampati di colore rosso mentre gli altri normalmente di nero. Cliccando sul numero della persona fate in modo che appaia in console il cognome della persona di cui è stato cliccato il numero

const app = new Vue({

    el: '#app',
    data: {

        rubrica: [
            {
                nome: 'Anna',
                cognome: 'Bianchi',
                numero: 345252525,
                attivo: false
            },
            {
                nome: 'Fabio',
                cognome: 'Verdi',
                numero: 333252333,
                attivo: false
            },
            {
                nome: 'Laura',
                cognome: 'Zanti',
                numero: 300252588,
                attivo: false
            },
            {
                nome: 'Moreno',
                cognome: 'Marmi',
                numero: 3228825257,
                attivo: false
            },
        ],
    },
        methods:{
            attivo(index){

                    

                    this.rubrica.forEach((element) => {

                        element.attivo = false;

                    });

                    this.rubrica[index].attivo = ! this.rubrica[index].attivo;
            },
            numero(element){
                console.log(element.cognome);
            },

        

    },

});
