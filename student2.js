// ---------------------- Products ----------------------
var product1 = { name: "Book 1", id: "b101", desc: "An exciting adventure book" };
var product2 = { name: "Book 2", id: "b102", desc: "A thrilling mystery novel" };
var product3 = { name: "Book 3", id: "b103", desc: "A comprehensive science guide" };

// Global variables for images
var imgurl739 = "images/";  // adjust folder as needed

// ---------------------- Pop-up Ads ----------------------
var adnum899 = 1;
var winobj412 = -1;

function popupAd835() {
  if (winobj412 && !winobj412.closed) {
    winobj412.focus();
    return;
  }
  var adHtml = "";
  if (adnum899 === 1) {
    adHtml = "<table width='500' height='80' bgcolor='lightgreen'><tr><td><h2 align='center'>Sale! 20% Off All Books!</h2></td></tr></table>";
  } else if (adnum899 === 2) {
    adHtml = "<table width='400' height='100' bgcolor='lightblue'><tr><td><h3 align='center'>New Arrivals: Mystery Novels!</h3></td></tr></table>";
  } else if (adnum899 === 3) {
    adHtml = "<table width='450' height='90' bgcolor='lightyellow'><tr><td><h2 align='center'>Get Your Science Guides Today!</h2></td></tr></table>";
  }

  winobj412 = window.open("", "popupAd", "width=520,height=120");
  winobj412.document.write(adHtml);
  winobj412.document.close();

  adnum899++;
  if (adnum899 > 3) adnum899 = 1;
}

function closeAd835() {
  if (winobj412 && !winobj412.closed) {
    winobj412.close();
  }
}

// ---------------------- Page Functions ----------------------
function getHeader() {
  return "<h1>Welcome to My Book Store</h1>";
}

function getFooter() {
  return "<p>&copy; 2025 My Book Store</p>";
}

function makeMenu2() {
  return `
    <button onclick="showProduct(product1)">Product #1</button>
    <button onclick="showProduct(product2)">Product #2</button>
    <button onclick="showProduct(product3)">Product #3</button>
    <button onclick="popupAd835()">PopUp Ad</button>
    <button onclick="closeAd835()">Close Ad</button>
  `;
}

function makeMain9(myproduct) {
  var produrl = imgurl739 + myproduct.id + ".gif";
  return `
    <p>My Product:</p>
    <p>Product Name: ${myproduct.name}</p>
    <p>Product ID: ${myproduct.id}</p>
    <p>Product Description: ${myproduct.desc}</p>
    <p><img src="${produrl}" alt="${myproduct.name}"></p>
    <p>${makeLinkBar432(myproduct)}</p>
  `;
}

// Shopping cart placeholder
function makeLinkBar432(product) {
  return `
    <form target='paypal' action='https://www.paypal.com/cgi-bin/webscr' method='post'>
      <input type='hidden' name='business' value='test@example.com'>
      <input type='hidden' name='cmd' value='_cart'>
      <input type='hidden' name='add' value='1'>
      <input type='hidden' name='item_name' value='${product.name}'>
      <input type='hidden' name='amount' value='10.00'>
      <input type='hidden' name='currency_code' value='USD'>
      <input type='image' name='submit' src='https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif' alt='Add to Cart'>
    </form>
  `;
}

// Display a product in main section
function showProduct(prod) {
  document.getElementById("main895").innerHTML = makeMain9(prod);
}
