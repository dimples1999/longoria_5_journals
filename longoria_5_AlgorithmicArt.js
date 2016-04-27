var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var rectWidth = 150;
var rectHeight = 700;
ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, c.width, c.height);
for (var i = 0; i< 50; i++) {
    for (var j = 0; j <= 50; j++) {
        ctx.fillStyle = "#B9FFF3";
        if((i + j ) % 2 === 0) {
            ctx.fillRect((100 * i), (50 * j), 30, 30);
        }
    }
}
    
ctx.rotate(Math.PI / 190);
for (var i = 0; i < 50; i++) {
    for (var j = 0; j <= 50; j++) {
        ctx.fillStyle = "#F5BBFF";
        if((i + j) % 3 === 0) {
             //ctx.fillRect((100 * i), (60 * j), 30, 30);
                    ctx.fillRect((-445 + (53 * i)), (-600 + (47 * j)), 30, 30);
        }
    }
}
