// Global variables for fake business
var companyname4 = "Valencia Book House";
var address4 = "962 Main St. Valencia, CA 91344";
var phonenumber5 = "(555) 638-1234";

// Global URL bases
var imgurl739 = 'https://www.college1.com/images/books/';  // book images
var cardimgurl550 = 'https://www.college1.com/images/cards/gbCard';  // blackjack cards

// Product objects (Books)
var product1 = { name:"The Cosmos Explained", id:"book001", desc:"A complete guide to understanding the universe." };
var product2 = { name:"Journey Through Space", id:"book002", desc:"Explore the wonders of space travel." };
var product3 = { name:"Astronomy for Beginners", id:"book003", desc:"Learn the basics of stargazing and planets." };

// Header function
function getHeader() {
  return "<h1 style='color:#004488; font-size:2.5em;'>" + companyname4 + "</h1>";
}

// Footer function
function getFooter(name, address, phone) {
  return "<p style='color:#666;'>" 
       + name + " | " + address + " | " + phone
       + " | " + navigator.appName
       + " " + navigator.appVersion
       + " | " + navigator.platform
       + "</p>";
}

// Make menu with product buttons + Deal Cards
function makeMenu2() {
  var menuHTML = "Menu: ";
  menuHTML += "<button onclick='execButton382(product1)'>Product #1</button>";
  menuHTML += "<button onclick='execButton382(product2)'>Product #2</button>";
  menuHTML += "<button onclick='execButton382(product3)'>Product #3</button>";
  menuHTML += "<button onclick='dealCards649()'>Deal Cards</button>";
  return menuHTML;
}

// Make main section with dynamic product and image
function makeMain9(myproduct) {
  var produrl = imgurl739 + myproduct.id + '.gif';
  return "My Product:<br>" +
         "Product Name: " + myproduct.name + "<br>" +
         "Product ID: " + myproduct.id + "<br>" +
         "Product Description: " + myproduct.desc + "<br>" +
         "Shopping Cart Link Bar <br>" +
         "Product Image: <br><img src='" + produrl + "' alt='" + myproduct.name + "'>";
}

// Execute button click to change product
function execButton382(myproduct) {
  document.getElementById("main895").innerHTML = makeMain9(myproduct);
}

// Deal cards function
function dealCards649() {
  var cardHTML = "";
  for (var i = 0; i < 5; i++) {
    var cardnumber = (i < 2) ? i : 52;  // first 2 face up, last 3 face down
    var cardurl = cardimgurl550 + cardnumber + '.gif';
    cardHTML += "<img id='card" + i + "' src='" + cardurl + "' alt='Card " + i + "'> ";
  }
  document.getElementById("main895").innerHTML = cardHTML;
}
