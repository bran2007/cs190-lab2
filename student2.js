// -------- Global Variables --------

var imgurl739 = 'https://www.college1.com/images/';
var cardimgurl550 = 'https://www.college1.com/images/cards/gbCard';

// Popup Ad Variables
var adnum899 = 1;
var winobj412 = null;

// Blackjack Variables
var cardnum580 = -1;
var hand = [];

// Products hardcoded
var product1 = { name:"HP 4426", id:"4426", desc:"Newest and Best Laptop from HP Computer"};
var product2 = { name:"Apple 88123 iPad", id:"88123", desc:"Apple Tablet Computer"};
var product3 = { name:"Dell Dimension 2400", id:"2400X", desc:"A fast 2.4 ghz computer"};

// Products from server (initially empty)
var product4 = {};
var product5 = {};

// JSON objects to request from server for product4 and product5
var jsonobj4 = { "type":"clothes", "number":"1" };
var jsonobj5 = { "type":"dvdcd", "number":"2" };

// ----------- Menu -----------

function makeMenu() {
  var menuHTML = "";
  menuHTML += "<button onclick='makeMain(product1)'>Product #1</button> ";
  menuHTML += "<button onclick='makeMain(product2)'>Product #2</button> ";
  menuHTML += "<button onclick='makeMain(product3)'>Product #3</button> ";
  menuHTML += "<button onclick='makeMain(product4)'>Product #4</button> ";
  menuHTML += "<button onclick='makeMain(product5)'>Product #5</button> ";
  menuHTML += "<button onclick='dealCards649()'>Deal Cards</button> ";
  menuHTML += "<button onclick='hitCard896()'>Hit Card</button> ";
  menuHTML += "<button onclick='popupAd835()'>PopUp Ad</button> ";
  menuHTML += "<button onclick='closeAd835()'>Close Ad</button> ";
  menuHTML += "<button onclick='makeForm294()'>Enter Data</button>";
  document.getElementById('menu').innerHTML = menuHTML;
}

// ----------- Display product -----------

function makeMain(myproduct) {
  cardnum580 = -1;
  hand = [];

  // If product object is empty (no name), show message
  if (!myproduct.name) {
    document.getElementById('mainXXX').innerHTML = "<p>Product info not available yet. Please wait or try again later.</p>";
    return;
  }

  var produrl = imgurl739 + myproduct.id + '.gif';
  var html = "<h2>" + myproduct.name + "</h2>";
  html += "<img src='" + produrl + "' alt='Product Image' style='max-width:200px; margin-bottom:10px; display:block;'>";
  html += "<p>" + myproduct.desc + "</p>";
  html += makeLinkBar432(myproduct);
  document.getElementById('mainXXX').innerHTML = html;
}

// --------- Shopping Cart Links ---------

function makeLinkBar432(product) {
  var html = "<div class='cartLinkBar'>";
  html += "<form target='paypal' action='https://www.paypal.com/cgi-bin/webscr' method='post'>";
  html += "<input type='hidden' name='business' value='test@yourbusiness.com'>";
  html += "<input type='hidden' name='cmd' value='_cart'>";
  html += "<input type='hidden' name='add' value='1'>";
  html += "<input type='hidden' name='item_name' value='" + product.name + "'>";
  html += "<input type='hidden' name='amount' value='9.99'>";
  html += "<input type='hidden' name='currency_code' value='USD'>";
  html += "<input type='image' src='https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif' alt='Add to Cart'>";
  html += "</form></div>";
  return html;
}

// --------- Blackjack Functions ---------

function dealCards649() {
  cardnum580 = 2;
  hand = [];

  var html = "<h3>Blackjack Hand</h3>";

  // Get 5 unique cards
  while(hand.length < 5) {
    var card = Math.floor(Math.random() * 52);
    if (!hand.includes(card)) hand.push(card);
  }

  for (var i=0; i<5; i++) {
    var cardurl = (i < 2) ? (cardimgurl550 + hand[i] + ".gif") : (cardimgurl550 + "52.gif"); // 52.gif is back of card
    html += "<img id='card" + i + "' src='" + cardurl + "' alt='Card " + i + "' style='margin-right:5px; width:80px; height:120px;'>";
  }
  document.getElementById('mainXXX').innerHTML = html;
}

function hitCard896() {
  if(cardnum580 === -1) {
    alert("Deal the cards first!");
    return;
  }
  if(cardnum580 >= 5) {
    alert("No more cards to hit!");
    return;
  }
  var cardIndex = cardnum580;
  var cardElement = document.getElementById("card" + cardIndex);
  if (!cardElement) {
    alert("Card element not found!");
    return;
  }
  var cardValue = hand[cardIndex];
  cardElement.src = cardimgurl550 + cardValue + ".gif";
  cardnum580++;
}

// --------- Popup Ads ---------

function popupAd835() {
  if (winobj412 && !winobj412.closed) {
    winobj412.focus();
    return;
  }
  var adUrl;
  if (adnum899 === 1) adUrl = 'https://www.college1.com/ads/ad1.html';
  else if (adnum899 === 2) adUrl = 'https://www.college1.com/ads/ad2.html';
  else adUrl = 'https://www.college1.com/ads/ad3.html';

  winobj412 = window.open(adUrl, "PopUpAd", "width=500,height=500");

  adnum899++;
  if(adnum899 > 3) adnum899 = 1;
}

function closeAd835() {
  if(winobj412 && !winobj412.closed) winobj412.close();
}

// --------- Lab 14: Form Creation and Validation ---------

function makeForm294() {
  cardnum580 = -1;
  hand = [];

  var formHTML = `
  <h2>Customer Data Entry</h2>
  <form name='customerform' onsubmit='return checkForm453()' method='post' action='https://www.college1.com/classes/javascript/survey.php'>
  <table width='100%' border='1'>
    <tr>
      <td>First Name: <input type='text' name='firstname'></td>
      <td align='right'>Last Name: <input type='text' name='lastname'></td>
    </tr>
    <tr>
      <td colspan='2'>Address: <input type='text' name='address' size='50'></td>
    </tr>
    <tr>
      <td>City: <input type='text' name='city'></td>
      <td align='right'>State: <input type='text' name='state' size='3'> Zip: <input type='text' name='zip' size='6'></td>
    </tr>
    <tr>
      <td colspan='2'>Email Address: <input type='text' name='emailaddr' size='50'></td>
    </tr>
    <tr>
      <td><input type='submit' value='Submit'></td>
      <td align='right'><input type='reset'></td>
    </tr>
  </table>
  <input type='hidden' name='send_email' value='bwchang@my.canyons.edu'>
  </form>`;

  document.getElementById('mainXXX').innerHTML = formHTML;
}

function checkForm453() {
  var form = document.forms['customerform'];
  var missingFields = [];

  if (!form.firstname.value.trim()) missingFields.push("First Name");
  if (!form.lastname.value.trim()) missingFields.push("Last Name");
  if (!form.address.value.trim()) missingFields.push("Address");
  if (!form.city.value.trim()) missingFields.push("City");
  if (!form.state.value.trim()) missingFields.push("State");
  if (!form.zip.value.trim()) missingFields.push("Zip");
  if (!form.emailaddr.value.trim()) missingFields.push("Email Address");

  if (missingFields.length > 0) {
    alert("Please fill in the following field(s):\n" + missingFields.join(", "));
    return false; // Cancel form submit
  }

  // All fields filled - allow submit
  return true;
}

// --------- Lab 15: Fetch products from server ---------

function getProduct902(jsonobj) {
  var server = 'https://www.college1.com/getproduct.php';
  var jsonstr = JSON.stringify(jsonobj);
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.open("GET", server + "?jsonstr=" + encodeURIComponent(jsonstr), true);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var replystr = this.responseText;
      var obj = JSON.parse(replystr);

      if (!product4.name) product4 = obj;
      else if (!product5.name) product5 = obj;
      else console.log('Error: No product variable available');

      // If currently displaying product4 or product5, refresh main section
      if (document.getElementById('mainXXX').innerHTML.includes(product4.name)) {
        makeMain(product4);
      }
      if (document.getElementById('mainXXX').innerHTML.includes(product5.name)) {
        makeMain(product5);
      }
    }
  };
}

// --------- Initialization ---------

window.onload = function() {
  makeMenu();
  makeMain(product1);

  // Request product4 and product5 from server on load
  product4 = {};
  product5 = {};
  getProduct902(jsonobj4);
  getProduct902(jsonobj5);
};
