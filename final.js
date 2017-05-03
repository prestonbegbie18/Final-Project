function retrieveSavedOrder()
{
  var saved= getCookie("savedOrder");
  console.log(saved);
}
function makeFullOrder()
{
  var checkoutName = getCookie("name");
  var pizza = getCookie("pizzaType");
  return checkoutName + " order a " + pizza + " pizza";
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
  var veg = document.getElementById("checkVeggies").checked;
  var pep = document.getElementById("checkPepperoni").checked;
  var sau = document.getElementById("checkSausage").checked;

if (veg == true && pep == false && sau == false)
//can use the '!' to use for false and not write false
{
  setCookie("pizzaType", "veggie", 1);
}
else if (pep == true && sau == true && veg == false)
{
  setCookie("pizzaType", "meat lovers", 1);
}
  else if(veg == true && pep == true && sau == true)
   {
    setCookie("pizzaType", "supreme", 1);
  }
  else if(veg == false && pep == false && sau == false)
  {
    setCookie("pizzaType", "cheese", 1);
  }
  else
    {
      setCookie("pizzaType", "custom", 1);
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
