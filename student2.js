// Global variables for fake business
var companyname4 = "Valencia Book House";
var address4 = "962 Main St. Valencia, CA 91344";
var phonenumber5 = "(555) 638-1234";

// Global URL bases
var imgurl739 = 'images/';  // relative path to images folder
var cardimgurl550 = 'https://www.college1.com/images/cards/gbCard';  // blackjack cards

// Product objects (Books for this example)
var product1 = { name:"The Cosmos Explained", id:"book001", desc:"A complete guide to understanding the universe." };
var product2 = { name:"Journey Through Space", id:"book002", desc:"Explore the wonders of space travel." };
var product3 = { name:"Astronomy for Beginners", id:"book003", desc:"Learn the basics of stargazing and planets." };

// Global variable for tracking cards in hand
var cardnum580 = -1;  // -1 = game not active, 0-4 = visible cards

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

// Build Menu with product buttons + Deal Cards + Hit Card
function makeMenu2() {
  var menuHTML = "Menu: ";
  menuHTML += "<button onclick='execButton382(product1)'>Product #1</button>";
  menuHTML += "<button onclick='execButton382(product2)'>Product #2</button>";
  menuHTML += "<button onclick='execButton382(product3)'>Product #3</button>";
  menuHTML += "<button onclick='dealCards649()'>Deal Cards</button>";
  menuHTML += "<button onclick='hitCard896()'>Hit Card</button>";
  return menuHTML;
}

// Build Shopping Cart Link Bar
function makeLinkBar432(myproduct) {
  var linkHTML = "<form target='paypal' action='https://www.paypal.com/cgi-bin/webscr' method='post'>"
               + "<input type='hidden' name='business' value='kin@kinskards.com'>"
               + "<input type='hidden' name='cmd' value='_cart'>"
               + "<input type='hidden' name='add' value='1'>"
               + "<input type='hidden' name='item_name' value='" + myproduct.name + "'>"
               + "<input type='hidden' name='amount' value='3.95'>"
               + "<input type='hidden' name='currency_code' value='USD'>"
               + "<input type='image' name='submit' src='https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif' alt='Add to Cart'>"
               + "<img alt='' width='1' height='1' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif'>"
               + "</form>";
  return linkHTML;
}

// Build main section with product details + image + shopping cart
function makeMain9(myproduct) {
  var produrl = imgurl739 + myproduct.id + '.gif';
  return "My Product:<br>" +
         "Product Name: " + myproduct.name + "<br>" +
         "Product ID: " + myproduct.id + "<br>" +
         "Product Description: " + myproduct.desc + "<br>" +
         makeLinkBar432(myproduct) + "<br>" +
         "Product Image: <br><img src='" + produrl + "' alt='" + myproduct.name + "'>";
}

// Execute button click to change product
function execButton382(myproduct) {
  document.getElementById("main895").innerHTML = makeMain9(myproduct);
  cardnum580 = -1;  // reset card game when showing product
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
  cardnum580 = 2; // 2 cards visible initially
}

// Hit card function
function hitCard896() {
  if (cardnum580 === -1) {
    alert("The card game is not active. Click 'Deal Cards' first.");
    return;
  }
  if (cardnum580 >= 5) {
    alert("Maximum cards already visible.");
    return;
  }
  var cardurl = cardimgurl550 + cardnum580 + '.gif'; // flip next card
  document.getElementById("card" + cardnum580).src = cardurl;
  cardnum580++;  // increment visible card count
}
