// Global variables for fake business
var companyname4 = "Valencia Book House";
var address4 = "962 Main St. Valencia, CA 91344";
var phonenumber5 = "(555) 638-1234";

// Function to build header using the global variables
function getHeader() {
  var headerHTML = "<h1 style='color:#004488; font-size:2.5em;'>" + companyname4 + "</h1>";
  return headerHTML;
}

// Function to build footer using parameters (no hardcoding)
function getFooter(name, address, phone) {
  var footerHTML = "<p style='color:#666;'>" 
                 + name + " | " + address + " | " + phone 
                 + "</p>";
  return footerHTML;
}
