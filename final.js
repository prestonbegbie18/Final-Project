function retrieveSavedOrder()
{
  var saved= getCookie("savedOrder");
  console.log(saved);
}
function makeFullOrder()
{
  var checkoutName = getCookie("name");
  var pizza = getCookie("shirtType");
  return checkoutName + " order a " + shirt + " shirt";
}
function checkoutOrders()
{
document.getElementById("order").innerHTML = makeFullOrder();
}
function saveOrder()
{
  var fullOrder= makeFullOrder();
  setCookie("savedOrder", fullOrder, 9999);
}
function order(){
 var name = document.getElementById("orderName");
  var red = document.getElementById("checkRed").checked;
  var blue = document.getElementById("checkBlue").checked;
  var bla = document.getElementById("checkBlack").checked;

if (red == true && blue == false && bla == false)
//can use the '!' to use for false and not write false
{
  setCookie("shirtType", "Red", 1);
}
else if(blue == true && bla == false && red == false)
{
  setCookie("shirtType", "Blue", 1);
}
else if( blue == false && bla == true && red == false)
{
  setCookie("shirtType", "Black", 1)
}
else if (blue == true && bla == true && red == false)
{
  setCookie("shirtType", "Dark Blue", 1);
}
  else if(bla == true && blue == true && red == true)
   {
    setCookie("shirtType", "Purple", 1);
  }
  else if(red == false && blue == false && bla == false)
  {
    setCookie("shirtType", "white", 1);
  }
  else
    {
      setCookie("shirtType", "custom", 1);
    }
    setCookie("name",name.value,1);
    window.location.href="checkout.html"
}
//setcookie and getCookie are courtesy of w3schools
//https://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  }
