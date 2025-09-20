// Global variables for fake business
var companyname4 = "Valencia Book House";
var address4 = "962 Main St. Valencia, CA 91344";
var phonenumber5 = "(555) 638-1234";

// Header function (updated later labs may add date/time)
function getHeader() {
  var headerHTML = "<h1 style='color:#004488; font-size:2.5em;'>" + companyname4 + "</h1>";
  return headerHTML;
}

// Footer function (now with navigator info)
function getFooter(name, address, phone) {
  var footerHTML = "<p style='color:#666;'>" 
                 + name + " | " + address + " | " + phone
                 + " | " + navigator.appName
                 + " " + navigator.appVersion
                 + " | " + navigator.platform
                 + "</p>";
  return footerHTML;
}

// Make menu function
function makeMenu2(size) {
  var menuHTML = "My Menu: ";
  for (var i = 1; i <= size; i++) {
    menuHTML += "<button>Button " + i + "</button> ";
  }
  return menuHTML;
}

// Make main product placeholder
function makeMain9() {
  var mainHTML = "My Product:<br>" +
                 "Product Name: <br>" +
                 "Product ID: <br>" +
                 "Product Description: <br>" +
                 "Shopping Cart Link Bar <br>" +
                 "Product Image: <br>";
  return mainHTML;
}
