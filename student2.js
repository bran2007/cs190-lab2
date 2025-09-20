// =======================
// Global Variables
// =======================
var imgurl739 = 'images/';        // product images folder
var cardimgurl550 = 'images/cards/gbCard';  // card images folder
var cardnum580 = -1;              // blackjack cards, -1 = not on screen
var adnum899 = 1;                 // popup ad number
var winobj412 = -1;               // popup ad window object

// Hard-coded products
var product1 = { "name":"Space Explorer Book", "id":"101", "desc":"A thrilling space adventure book for kids."};
var product2 = { "name":"Planet Poster Set", "id":"102", "desc":"Educational posters featuring planets and stars."};
var product3 = { "name":"Astronomy Kit", "id":"103", "desc":"Hands-on kit to explore space and stars."};

// Server-requested products (Lab 15)
var product4 = {}; 
var product5 = {};
var jsonobj4 = { "type":"books", "number":"1" };
var jsonobj5 = { "type":"books", "number":"2" };

// =======================
// Header/Footer
// =======================
function getHeader() {
    return "<h1>GalaxSea Explorers Store</h1>";
}

function getFooter() {
    return "<p>&copy; 2025 GalaxSea Explorers</p>";
}

// =======================
// Menu
// =======================
function makeMenu2() {
    var html = "Menu: ";
    html += "<button onclick='execButton382(product1)'>Product #1</button>";
    html += "<button onclick='execButton382(product2)'>Product #2</button>";
    html += "<button onclick='execButton382(product3)'>Product #3</button>";
    html += "<button onclick='execButton382(product4)'>Product #4</button>";
    html += "<button onclick='execButton382(product5)'>Product #5</button>";
    html += "<button onclick='dealCards649()'>Deal Cards</button>";
    html += "<button onclick='hitCard896()'>Hit Card</button>";
    html += "<button onclick='popupAd835()'>PopUp Ad</button>";
    html += "<button onclick='closeAd835()'>Close Ad</button>";
    html += "<button onclick='makeForm294()'>Enter Data</button>";
    return html;
}

// =======================
// Main Section
// =======================
function makeMain9(myproduct) {
    var produrl = imgurl739 + myproduct.id + '.gif';
    var html = "<h2>My Product:</h2>";
    html += "<p>Product Name: " + myproduct.name + "</p>";
    html += "<p>Product ID: " + myproduct.id + "</p>";
    html += "<p>Product Description: " + myproduct.desc + "</p>";
    html += makeLinkBar432(myproduct); // shopping cart links
    html += "<img src='" + produrl + "' alt='" + myproduct.name + "'>";
    return html;
}

// =======================
// Shopping Cart Link Bar
// =======================
function makeLinkBar432(myproduct) {
    var html = "<form target='paypal' action='https://www.paypal.com/cgi-bin/webscr' method='post'>";
    html += "<input type='hidden' name='business' value='bwchang@my.canyons.edu'>";
    html += "<input type='hidden' name='cmd' value='_cart'>";
    html += "<input type='hidden' name='add' value='1'>";
    html += "<input type='hidden' name='item_name' value='" + myproduct.name + "'>";
    html += "<input type='hidden' name='amount' value='10.00'>";
    html += "<input type='hidden' name='currency_code' value='USD'>";
    html += "<input type='image' name='submit' src='https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif' alt='Add to Cart'>";
    html += "<img alt='' width='1' height='1' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif'>";
    html += "</form>";
    return html;
}

// =======================
// Menu Button Action
// =======================
function execButton382(myproduct) {
    document.getElementById("main895").innerHTML = makeMain9(myproduct);
    cardnum580 = -1; // reset cards when product shown
}

// =======================
// Blackjack Cards
// =======================
function dealCards649() {
    var html = "";
    cardnum580 = 2; // first 2 cards are visible
    for (var i = 0; i < 5; i++) {
        var card = (i < 2) ? i : 52; // first 2 face up, last 3 back
        html += "<img id='card" + i + "' src='" + cardimgurl550 + card + ".gif'>";
    }
    document.getElementById("main895").innerHTML = html;
}

function hitCard896() {
    if (cardnum580 === -1) {
        alert("Deal the cards first!");
        return;
    }
    if (cardnum580 >= 5) {
        alert("No more cards to hit!");
        return;
    }
    document.getElementById("card" + cardnum580).src = cardimgurl550 + cardnum580 + ".gif";
    cardnum580++;
}

// =======================
// PopUp Ads
// =======================
function popupAd835() {
    if (winobj412 !== -1 && !winobj412.closed) winobj412.close();
    winobj412 = window.open("", "adwin", "width=400,height=100");
    var html = "";
    if (adnum899 === 1) html = "<table width=400 height=100 bgcolor='lightgreen'><tr><td><h2>Buy Space Books!</h2></td></tr></table>";
    else if (adnum899 === 2) html = "<table width=350 height=80 bgcolor='lightblue'><tr><td><h2>Planet Posters On Sale!</h2></td></tr></table>";
    else if (adnum899 === 3) html = "<table width=450 height=120 bgcolor='lightpink'><tr><td><h2>Astronomy Kits Available!</h2></td></tr></table>";
    winobj412.document.write(html);
    adnum899++;
    if (adnum899 > 3) adnum899 = 1;
}

function closeAd835() {
    if (winobj412 !== -1 && !winobj412.closed) winobj412.close();
}

// =======================
// Form
// =======================
function makeForm294() {
    var html = "<form onsubmit='return checkForm453()' name='customerform'>";
    html += "<table width=100% border=1>";
    html += "<tr><td>First Name: <input type='text' name='firstname'></td>";
    html += "<td align=right>Last Name: <input type='text' name='lastname'></td></tr>";
    html += "<tr><td colspan=2>Address: <input type='text' name='address' size=50></td></tr>";
    html += "<tr><td>City: <input type='text' name='city'></td>";
    html += "<td align=right>State: <input type='text' name='state' size=3> Zip: <input type='text' name='zip' size=6></td></tr>";
    html += "<tr><td colspan=2>Email Address: <input type='text' name='emailaddr' size=50></td></tr>";
    html += "<tr><td><input type='submit' value='Submit'></td><td align=right><input type='reset'></td></tr>";
    html += "<input type='hidden' name='send_email' value='bwchang@my.canyons.edu'>";
    html += "</table></form>";
    document.getElementById("main895").innerHTML = html;
}

function checkForm453() {
    var form = document.customerform;
    var missing = [];
    if (!form.firstname.value) missing.push("First Name");
    if (!form.lastname.value) missing.push("Last Name");
    if (!form.address.value) missing.push("Address");
    if (!form.city.value) missing.push("City");
    if (!form.state.value) missing.push("State");
    if (!form.zip.value) missing.push("Zip");
    if (!form.emailaddr.value) missing.push("Email Address");

    if (missing.length > 0) {
        alert("Missing fields: " + missing.join(", "));
        return false;
    }
    form.action = "https://www.college1.com/classes/javascript/survey.php";
    return true;
}

// =======================
// Lab 15: Get Products from Server
// =======================
function getProduct902(jsonobj) {
    var server = 'https://www.college1.com/getproduct.php';
    var jsonstr = JSON.stringify(jsonobj);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", server + "?jsonstr=" + jsonstr, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var replystr = this.responseText;
            if (!product4.id) product4 = JSON.parse(replystr);
            else if (!product5.id) product5 = JSON.parse(replystr);
            else console.log('Error, no object variable available');
        }
    };
}
