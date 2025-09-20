// --------------------
// Global Variables
// --------------------
var product1 = {"name":"HP 4426","id":"4426","desc":"Newest and Best Laptop from HP Computer"};
var product2 = {"name":"Apple 88123 iPad","id":"88123","desc":"Apple Tablet Computer"};
var product3 = {"name":"Dell Dimension 2400","id":"2400X","desc":"A fast 2.4 ghz computer"};
var product4 = {};  // to be set from server
var product5 = {};  // to be set from server

var imgurl739 = 'images/'; // base URL for images

// JSON objects for requesting products from server
var jsonobj4 = { "type":"books", "number":"1" };
var jsonobj5 = { "type":"books", "number":"2" };

// --------------------
// Create Product Display
// --------------------
function makeMain123(myproduct) {
  if (!myproduct || !myproduct.id) {
    return "<p>Product not available yet.</p>";
  }
  var produrl = imgurl739 + myproduct.id + '.gif';
  return `
    <h2>${myproduct.name}</h2>
    <img src="${produrl}" alt="${myproduct.name}" width="200">
    <p>${myproduct.desc}</p>
  `;
}

// --------------------
// Create Menu Buttons
// --------------------
function makeMenu123() {
  var menuHTML = '';
  menuHTML += `<button onclick="document.getElementById('mainXXX').innerHTML = makeMain123(product1)">Product #1</button>`;
  menuHTML += `<button onclick="document.getElementById('mainXXX').innerHTML = makeMain123(product2)">Product #2</button>`;
  menuHTML += `<button onclick="document.getElementById('mainXXX').innerHTML = makeMain123(product3)">Product #3</button>`;
  menuHTML += `<button onclick="document.getElementById('mainXXX').innerHTML = makeMain123(product4)">Product #4</button>`;
  menuHTML += `<button onclick="document.getElementById('mainXXX').innerHTML = makeMain123(product5)">Product #5</button>`;
  document.getElementById("menu").innerHTML = menuHTML;
}

// --------------------
// Fetch Products from Server (Lab 15)
// --------------------
function getProduct902(jsonobj) {
  var server = 'https://www.college1.com/getproduct.php';
  var jsonstr = JSON.stringify(jsonobj);
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", server + "?jsonstr=" + encodeURIComponent(jsonstr), true);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var replystr = this.responseText;
      try {
        var newProduct = JSON.parse(replystr);
        if (Object.keys(product4).length === 0) product4 = newProduct;
        else if (Object.keys(product5).length === 0) product5 = newProduct;
        else console.log("Error: No available product variable.");
      } catch(e) {
        console.log("Error parsing server response: " + e);
      }
    }
  };
}

// --------------------
// Initialize Page
// --------------------
makeMenu123();                        // create menu buttons
document.getElementById("mainXXX").innerHTML = makeMain123(product1); // show default product
getProduct902(jsonobj4);              // request product 4
getProduct902(jsonobj5);              // request product 5
