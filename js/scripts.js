function TicketStub(age,movie,time) {
  this.age = age;
  this.movie = movie;
  this.time = time;
  this.cost = 4;
};

TicketStub.prototype.totalCost = function(ticket) {
  if(this.age === "child"){
    this.cost -= 2;
} else if(this.age === "adult") {
    this.cost += 0;
} else {
    this.cost -= 1;
};

  if (this.movie === 'batman') {
    this.cost += 9; 
  } else if (this.movie === 'scream') {
    this.cost += 7;
  } else if (this.movie === 'spiderman') {
    this.cost += 6;
  } else {
    this.cost += 4;
  };

  if (this.time === "matinee") {
    this.cost += 0;
  } else {
    this.cost +=4;
  };
  return this.cost;
};

TicketStub.prototype.displayTicket = function () {
  $("#results").show();
  $("#ageChoice").text($("select#age option:selected").text());
  $("#movieChoice").text($("select#movie option:selected").text());
  $("#timeChoice").text($("select#time option:selected").text());
  $("#ticketPrice").text(this.cost);
};

$(document).ready(function(){
  $("#input").submit(function(event){
    event.preventDefault();
    let age =$("#age").val();
    let movie = $("#movie").val();
    let time = $("#time").val();
    let ticket = new TicketStub(age,movie,time);
    ticket.totalCost();
    ticket.displayTicket();
  });
});