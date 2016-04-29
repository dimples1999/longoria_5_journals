function drawBranches(context, startX, startY, trunkWidth, level){
    if (level < 12) {
        var changeX = 100 / (level + 1);
        var changeY = 100 / (level + 1);
        
        var topRightX = startX + Math.random() * changeX;
        var topRightY = startY - Math.random() * changeY;
        
        var topLeftX = startX - Math.random() * changeX;
        var topLeftY = startY - Math.random() * changeX;
        
        // draw right branch
        context.beginPath();
        //leaves
        context.moveTo(startX + trunkWidth / 4, startY);
        context.quadraticCurveTo(startX + trunkWidth / 4, startY - trunkWidth, topRightX, topRightY);
        context.lineWidth = trunkWidth;
        context.lineCap = "round";
        context.strokeStyle = "#592A71";
        context.stroke();
        
        //draw left branch
        context.beginPath();
        //leaves
        context.moveTo(startX - trunkWidth / 4, startY);
        context.quadraticCurveTo(startX + trunkWidth / 4, startY - trunkWidth, topLeftX, topLeftY);
        context.lineWidth = trunkWidth;
        context.lineCap = "round";
        context.strokeStyle = "black";
        context.stroke();
        
        drawBranches(context, topRightX, topRightY, trunkWidth * 0.6, level + 1);
        drawBranches(context, topLeftX, topLeftY, trunkWidth * 0.6, level + 1);
    }
}

window.onload = function(){
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var grd = ctx.createLinearGradient(0,0,0,400);
    grd.addColorStop(0, '#E386B9');
    grd.addColorStop(0.99, 'rgb(135,206,250)');
    grd.addColorStop(1, 'rgb(16, 98, 10)');
    ctx.fillStyle = grd;
    ctx.fillRect(0,0,1670,920);
    drawBranches(context, canvas.width / 2, canvas.height, 50, 0);
    
    
};