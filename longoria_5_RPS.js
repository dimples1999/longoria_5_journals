function myFunction() {
    document.getElementById("sample").innerHTML = "Choose your fate wisely...";
}

function maChoice(a) {
    if (a == 0) {
    document.getElementById("player").innerHTML = "You chose righteous rock!";
    } else if (a == 1) {
        document.getElementById("player").innerHTML = "You chose precious paper!";
    } else if (a == 2) {
        document.getElementById("player").innerHTML = "You chose supererior scissors!";
    }
}

function enemy(){
 var cpu = Math.floor(Math.random()*3);

 if (cpu == 0) {
  document.getElementById("q").innerHTML = "rock";
 } else if (cpu == 1) {
  document.getElementById("q").innerHTML = "paper";
 } else if (cpu == 2) {
  document.getElementById("q").innerHTML = "scissor";
 }

}


// JavaScript Document
var thing = true;
function clickOff() {
    
        if (thing === true){
    'use strict';
    var change1 = document.getElementById("Title"),
        change2 = document.getElementById("Bkgrnd"),
        change3 = document.getElementById("Menu");
            
    change1.style.backgroundColor = '#f00';
            change.innerHTML = "NIGHT";
    change1.style.color = '#333';
    change2.style.backgroundColor = '#000';
    change3.style.backgroundColor = '#00ff1d';
        thing = false;
        } else {
            
    var change1 = document.getElementById("Title"),
        change2 = document.getElementById("Bkgrnd"),
        change3 = documnet.getElementById("Menu");
            
    change1.style.backgroundColor = '#535353';
    change1.style.color = '#fff';
            change1.innerHTML = "DAY";
    change2.style.backgroundColor = '#efefef';
    change3.style.backgroundColor = '#AB00A4';
        thing = true;
        }
}
function over() {
    'use strict';
    var change = document.getElementById("container");
    change.style.backgroundColor = '#f3f3f3';
}

function off() {
    'use strict';
    var change = documnet.getElementById("container");
    change.style.backgroundColor = '#6d8c8e';
}
