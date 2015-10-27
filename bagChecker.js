/*
The following describes a coding exercise that should take between 2-4 hours to complete. If you have questions about the desired behavior or boundaries, make an assumption and document it. Submit this documentation with your code.

Write a program for managing locker reservations at a hotel concierge desk. Customers leave bags with the concierge, who then uses your program to determine in which locker to place the bag. The program tells the concierge the number of the locker in which to place the bag, and prints a ticket to give to the customer. Upon return, the customer provides the ticket, and the concierge uses that to look up the corresponding locker, retrieve the bag, and return it to the customer.
There are 1000 small lockers, 1000 medium sized lockers, and 1000 large lockers (it’s a big Vegas hotel). You can assume that all checked bags fit into one of these three sizes. The program should​ ​always assign the smallest available locker that fits the bag.
*/

var smallLockers = [];
var mediumLockers = [];
var largeLockers = [];

function Bag(size) {
  this.ticketNumber = 0;
  this.size = size;
}

function bagChecker(size) {
  var bag = new Bag(size);
  var newTicket = 0;

  if (bag.size == "small") {
      newTicket = numberAssigner(bag);
      bag.ticketNumber = newTicket;
      smallLockers.push(bag);
  } else if (bag.size == "medium") {
      newTicket = numberAssigner(bag);
      bag.ticketNumber = newTicket;
      mediumLockers.push(bag);
  } else if (size == "large") {
      newTicket = numberAssigner(bag);
      bag.ticketNumber = newTicket;
      largeLockers.push(bag);
  }
  return newTicket;
}

function numberAssigner(bag) {

  if (bag.size == "small") {
     bag.ticketNumber = smallLockers.length + 1;
  } else if (bag.size == "medium") {
      bag.ticketNumber = mediumLockers.length + 1000;
  } else if (bag.size == "large") {
      bag.ticketNumber = largeLockers.length + 2000;
  }
  return bag.ticketNumber;
}


function retrieveBag(ticket) {

  var container = [];
  var retrieved;

  if (ticket <= 1000) {
    retrieved = smallLockers.filter(function(bag){
        return bag.ticketNumber == ticket;
      });
  } else if (ticket >= 1000 && ticket < 2000) {
      retrieved = mediumLockers.filter(function(bag){
        return bag.ticketNumber == ticket;
      });
      container.push(retrieved);
  } else if (ticket >= 2000 && ticket <= 3000) {
      retrieved = largeLockers.filter(function(bag){
        return bag.ticketNumber == ticket;
      });
  }

  return container[0];
};

// Jasmine tests


describe("bagChecker small", function() {
  return it("returns correct ticket number", function() {
    return expect(bagChecker("small")).toEqual(4);
  });
});

describe("bagChecker medium", function() {
  return it("returns correct ticket number", function() {
    return expect(bagChecker("medium")).toEqual(1005);
  });
});

describe("bagChecker large", function() {
  return it("returns correct ticket number", function() {
    return expect(bagChecker("large")).toEqual(2004);
  });
});
