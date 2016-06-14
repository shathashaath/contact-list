//business logic
function Contact(first, last, addresses) {
  this.firstName = first;
  this.lastName = last;
  this.addresses= [];
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.addressesType=[];
}

function addressType(home,mailing,business){
  this.home=home;
  this.mailing=mailing;
  this.business=business;
}


Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

Address.prototype.fullAddress = function() {
  return this.street + " " +  this.city + " " + this.state;
};

addressType.prototype.fulladdressType = function() {
  return this.home +" "+ this.mailing +" "+ this.business;
};

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

    var  inputtedhome=$("input#new-home").val();
    var  inputtedmailing=$("input#new-mailing").val();
    var inputtedbusiness=$("input#new-business").val();



    var newContact = new Contact(inputtedFirstName, inputtedLastName);
    var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
    var newaddressType=new addressType(inputtedhome,inputtedmailing,inputtedbusiness);
    newContact.addresses.push(address);
    newAddress.addressesType.push(addressType);
    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $("ul#address").append("<li><span class='Address'>" + newAddress.fullAddress() + "</span></li>");

    $("ul#addressType").append("<li><span class='addressType'>" + newaddressType.fulladdressType() + "</span></li>");


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
    $("input#new-addressType").val("");

  });
});
