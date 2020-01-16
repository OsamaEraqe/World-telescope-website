document.getElementById("box1").onchange = function() {
document.getElementById("box2").innerHTML = ""; //clear s2 to avoid conflicts between options values
var opt =  document.createElement("option");
var opt0 = document.createElement("option");
var opt1 = document.createElement("option");
var opt2 = document.createElement("option");
var opt3 = document.createElement("option");
var opt4 = document.createElement("option");
var opt5 = document.createElement("option");
if (this.value == "international tourism") {
    opt.textContent = "All Places";
    opt0.textContent = "Istanbul";
    opt1.textContent = "Zurich";
    opt2.textContent = "Paris";
    opt3.textContent = "Beirut";
    opt4.textContent = "London";
    opt5.textContent = "Athens";
    document.getElementById("box2").appendChild(opt);
    document.getElementById("box2").appendChild(opt0);
    document.getElementById("box2").appendChild(opt1);
    document.getElementById("box2").appendChild(opt2);
    document.getElementById("box2").appendChild(opt3);
    document.getElementById("box2").appendChild(opt4);
    document.getElementById("box2").appendChild(opt5);
}
  else if (this.value == "local tours") {
  opt.textContent = "All Places";
  opt0.textContent = "sharm EL sheikh";
  opt1.textContent = "El Ain El Sokhna";
  opt2.textContent = "Dahab";
  opt3.textContent = "Luxor";
  opt4.textContent = "Aswan";
  opt5.textContent = "Hurghada";
  document.getElementById("box2").appendChild(opt);
  document.getElementById("box2").appendChild(opt0);
  document.getElementById("box2").appendChild(opt1);
  document.getElementById("box2").appendChild(opt2);
  document.getElementById("box2").appendChild(opt3);
  document.getElementById("box2").appendChild(opt4);
  document.getElementById("box2").appendChild(opt5);
}
 else if (this.value == "special offers") {
  opt.textContent = "All Places";
  opt0.textContent = "Maldives";
  opt1.textContent = "Mykonons";
  opt2.textContent = "Sydney";
  opt3.textContent = "Singapore";
  opt4.textContent = "Hurgada";
  opt5.textContent = "Dubai";
  document.getElementById("box2").appendChild(opt);
  document.getElementById("box2").appendChild(opt0);
  document.getElementById("box2").appendChild(opt1);
  document.getElementById("box2").appendChild(opt2);
  document.getElementById("box2").appendChild(opt3);
  document.getElementById("box2").appendChild(opt4);
  document.getElementById("box2").appendChild(opt5);
}
}

document.getElementById("box2").onchange = function() {
if (this.value == "Istanbul") {
  location.replace("Istanbul.html");
} 
else if (this.value == "Zurich") {
  location.replace("Zurich.html");
}
else if (this.value == "Paris") {
  location.replace("Paris.html");
}
else if (this.value == "Beirut") {
  location.replace("Beirut.html");
}
else if (this.value == "London") {
  location.replace("London.html");
}
else if (this.value == "Athens") {
  location.replace("Athens.html");
}
else if (this.value == "sharm EL sheikh") {
  location.replace("Local.html");
}
else if (this.value == "El Ain El Sokhna") {
  location.replace("Local.html");
} 
else if (this.value == "Dahab") {
  location.replace("Local.html");
}
else if (this.value == "Luxor") {
  location.replace("Local.html");
}
else if (this.value == "Aswan") {
  location.replace("Local.html");
}
else if (this.value == "Hurghada") {
  location.replace("Local.html");
}
else if (this.value == "Maldives") {
  location.replace("maldives.html");
} 
else if (this.value == "Mykonons") {
  location.replace("mykonos.html");
}
else if (this.value == "Sydney") {
  location.replace("Sydney.html");
}
else if (this.value == "Singapore") {
  location.replace("Singapore.html");
}
else if (this.value == "Hurgada") {
  location.replace("Hurghada.html");
}
else if (this.value == "Dubai") {
  location.replace("Dubai.html");
}
}
