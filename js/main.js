//business logic
function Contact(first, last, addresses) {
  this.firstName = first;
  this.lastName = last;
  this.addresses= [];
}

function Address(street, city, state) {   this.street = street;
  this.street = street;
  this.city = city;
  this.state = state;
}


Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Address.prototype.fullAddress = function() {
  return this.street + " " +  this.city + " " + this.state;
}


// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    debugger;


    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var inputtedStreet = $("input#new-street").val();
    var inputtedCity = $("input#new-city").val();
    var inputtedState = $("input#new-state").val();




    var newContact = new Contact(inputtedFirstName, inputtedLastName);
    var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);

    newContact.addresses.push(address);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>")

    $("ul#address").append("<li><span class='Address'>" + newAddress.fullAddress() + "</span></li>")

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("#show-contact").show();
      $(".new-address").text(newAdress.address);

    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-address").val("");
  });
});
