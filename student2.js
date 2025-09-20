// Global variables for fake business
var companyname4 = "Valencia Book House";
var address4 = "962 Main St. Valencia, CA 91344";
var phonenumber5 = "(555) 638-1234";

// Product objects
var product1 = { name:"HP 4426", id:"4426", desc:"Newest and Best Laptop from HP Computer" };
var product2 = { name:"Apple 88123 iPad", id:"88123", desc:"Apple Tablet Computer" };
var product3 = { name:"Dell Dimension 2400", id:"2400X", desc:"A fast 2.4 ghz computer" };

// Header function
function getHeader() {
  var headerHTML = "<h1 style='color:#004488; font-size:2.5em;'>" + companyname4 + "</h1>";
  return headerHTML;
}

// Footer function
function getFooter(name, address, phone) {
  var footerHTML = "<p style='color:#666;'>" 
                 + name + " | " + address + " | " + phone
                 + " | " + navigator.appName
                 + " " + navigator.appVersion
                 + " | " + navigator.platform
                 + "</p>";
  return footerHTML;
}

// Make menu with product buttons
function makeMenu2() {
  var menuHTML = "Menu: ";
  menuHTML += "<button onclick='execButton382(product1)'>Product #1</button>";
  menuHTML += "<button onclick='execButton382(product2)'>Product #2</button>";
  menuHTML += "<button onclick='execButton382(product3)'>Product #3</button>";
  return menuHTML;
}

// Make main section with dynamic product
function makeMain9(myproduct) {
  var mainHTML = "My Product:<br>" +
                 "Product Name: " + myproduct.name + "<br>" +
                 "Product ID: " + myproduct.id + "<br>" +
                 "Product Description: " + myproduct.desc + "<br>" +
                 "Shopping Cart Link Bar <br>" +
                 "Product Image: <br>";
  return mainHTML;
}

// Execute button click to change product
function execButton382(myproduct) {
  document.getElementById("main895").innerHTML = makeMain9(myproduct);
}
