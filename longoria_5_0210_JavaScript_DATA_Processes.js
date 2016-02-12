document.getElementById("p2").style.color = "red";


document.write("This is how we math\ in <i>JavaScript</i>.<br>")

var k = prompt("Pick a number");
var r = prompt("Pick another number);
var d = (k+r);
var num1 = parseInt(k);
//*We parseInt'ed so the variables would be treated as INTS and not Strings */
var num2 = parseInt(r);
var num3 = num1 + num2;
document.write(" k is " + k + " r is " + r + " d is k + r and it's  " + d);
document.write("<br>multiplication: <br/>");
document.write(k * r);
document.write("<br>division:\n <br>");
document.write(k / r);
document.write("<br>addition:\n <br>");
document.write(num1 + num2)
document.write("<br>subtraction:\n <br>");
document.write(k - r);
document.write("<br>this is num1" +num1);
document.write("<br>this is num2" +num2);
num1++;
document.write("<br>this is num1"+num1++ +"<br>");
document.write("<br>this is num2"+num2++ + "<br>");
num2++;
document.write("<br>this is num2 " +num2++ + "<br>";
document.write("<br>this is num2 " + (++num2) +"<br>";
num1++;
document.write("<br>this is num1 again " +num1 + "<br>";
document.write("<br>this is num2 " + (++num2) + "<br>";
num1 = 42;
num1 += 5;
document.write(num1 + "<br>");
num1 -= 5;
document.write(num1 + "<br>");
num1 /= 5;
document.write(num1 + "<br>");
/* L337 h@x0r5 use conditionals */

if ( k == r) {
    document.write("k and r are the same");
} else {
    document.write("<br>k and r are NOT the same");
}