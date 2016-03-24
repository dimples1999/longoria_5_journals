var c = document.getElementById("house");

var ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,150,75);

ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();