// Write a program that manages a database of tickets. A ticket has a destination, a price, and
// a status. Your program will receive two arguments - the first is an array of strings for
// ticket descriptions and the second is a string, representing a sorting criterion. The ticket
// descriptions have the following format:
// &lt;destinationName&gt;|&lt;price&gt;|&lt;status&gt;
// Store each ticket and at the end of execution return a sorted summary of all tickets, sorted
// by either destination, price, or status, depending on the second parameter that your
// program received. Always sort in ascending order (the default behavior for alphabetical
// sort). If two tickets compare the same, use order of insertion.

// e: office@sirma.bg a: 135 Tsarigradsko Shosse, blvd.
// m: +359 2 9768310 1784 Sofia, Bulgaria

// sirma.com
// Return a sorted array of all the tickets that were registered.
// Sample Input Output Array
// [&#39;Philadelphia|94.20|available&#39;,
// &#39;New York City|95.99|available&#39;,
// &#39;New York City|95.99|sold&#39;,
// &#39;Boston|126.20|departed&#39;],
// &#39;destination&#39;

// [ Ticket { destination: &#39;Boston&#39;,
// price: 126.20,
// status: &#39;departed&#39; },
// Ticket { destination: &#39;New York City&#39;,
// price: 95.99,
// status: &#39;available&#39; },
// Ticket { destination: &#39;New York City&#39;,
// price: 95.99,
// status: &#39;sold&#39; },
// Ticket { destination: &#39;Philadelphia&#39;,
// price: 94.20,
// status: &#39;available&#39; } ]

class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function ticketDatabase(ticketDescriptions, sortingCriterion) {
    let tickets = [];

    ticketDescriptions.forEach(description => {
        let [destination, price, status] = description.split('|').map(item => item.trim());
        let ticket = new Ticket(destination, parseFloat(price), status);
        tickets.push(ticket);
    });

    switch (sortingCriterion) {
        case 'destination':
            tickets.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            tickets.sort((a, b) => a.price - b.price);
            break;
        case 'status':
            tickets.sort((a, b) => a.status.localeCompare(b.status));
            break;
        default:
            tickets.sort((a, b) => a.destination.localeCompare(b.destination));
    }

    return tickets;
}

// Example usage
let input = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
];
let sortingCriterion = 'destination';

let sortedTickets = ticketDatabase(input, sortingCriterion);
console.log(sortedTickets);
