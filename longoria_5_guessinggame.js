var magic = Math.floor((Math.random() * 10) + 1
var guess = prompt("What's your guess?");
while (magic != guess){
    if (guess < magic){
        guess = prompt("Too low!! Try Again!");
        document.write("Too Low!");
    } else if (guess > magic){
        guess = prompt("Too High!! Try Again!");
        document.write("Too High!");
    } else {
        document.write("This should not happen!");
    }
}
document.writeln("YOU ARE A WINNER!!!");