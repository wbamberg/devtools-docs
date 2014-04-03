function makeGreeting() {
  var user = document.getElementById('user');
  var greeting = "Hi, " + user.value + "!";
  return greeting;
}

var greetme = document.getElementById('greetme');

greetme.addEventListener("click", function() {
  var welcome = document.getElementById('welcome');
  welcome.textContent = "";
  welcome.textContent = makeGreeting();
}, false);

var user = document.getElementById('user');
user.addEventListener("focus", function() {
  var welcome = document.getElementById('welcome');
  welcome.textContent = "";
}, false);