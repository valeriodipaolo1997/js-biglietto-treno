/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/

//chiedi i chilometri da percorrere

const userkm = parseInt(prompt('Qanti chilometri vuoi percorrere?'));

if (isNaN(userkm)) {

    alert('non hai inserito un numero nella richiesta');
    window.location.reload();

} else if (userkm < 1 || userkm > 2000) {

    alert('non hai inserito un numero valido');
    window.location.reload();

}

//chiedi l' eta dell' utente

const userAge = parseInt(prompt('Qanti anni hai?'));

if (isNaN(userAge)) {

    alert('non hai inserito nessun numero');
    window.location.reload();

} else if(userAge < 1 || userAge > 99) {

    alert("non hai inserito un'età valida");
    window.location.reload();
    
}

//calcola il prezzo del biglietto in base all' eta e ai chilometri


const ticketPrice = userkm * 0.21;

let discountTicket;
let finalPrice;

if (userAge < 18) {

    discountTicket = ticketPrice * 20 / 100;
    finalPrice = Number((ticketPrice - discountTicket).toFixed(2));
    console.log(finalPrice);

} else if (userAge > 65) {

    discountTicket = ticketPrice * 40 / 100;
    finalPrice = Number((ticketPrice - discountTicket).toFixed(2));
    console.log(finalPrice);

} else {

    finalPrice = Number(ticketPrice.toFixed(2));
    console.log(finalPrice);

};

//stampa risultato in pagina

const ticket = document.getElementById('ticket_price');
ticket.innerHTML = `Il prezzo del biglietto è: ${finalPrice} €`;

