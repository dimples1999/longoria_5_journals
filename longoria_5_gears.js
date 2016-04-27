function Gear(config) {
    this.x = config.x;
    this.y = config.y;
    this.outerRadius = config.outerRadius;
    this.innerRadius = config.innerRadius;
    this.holeRadius = config.holeRadius;
    this.numTeeth = config.numTeeth;
    this.theta = config.theta;
    this.thetaSpeed = config.thetaSpeed;
    this.lightColor = config.lightColor;
    this.darkColor = config.darkColor;
    this.clockWise = config.clockWise;
    this.midRadius = config.midRadius;
}

Gear.prototype.draw = function(context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.theta);
    
    //draw gear teeth
    context.beginPath();
    // we can set the lineJoine property to bevel so that the tips 
    // of the gear teeth are flat and don't come to a sharp point
    context.lineJoin = "bevel";
    
    // loop through the number of points to create the gear shape 
    var numPoints = this.numTeeth * 2;
    for (var n = 0; n < numPoints; n++) {
        var radius = null;
        
        // draw tip of teethh on even iterations
        if (n % 2 == 0) {
            radius = this.outerRadius;
        }
        // draw teeth connection which lies somewhere between
        // the gear center and gear radius
        else {
            radius = this.innerRadius;
        }
        
        var theta = ((Math.PI * 2) / numPoints) * (n + 1);
        var x = (radius * Math.sin(theta));
        var y = (radius * Math.cos(theta));
        
        // if first iteration, use moveTo() to position 
        // the drawing cursor
        if (n == 0) {
            context.moveTo(x, y);
        }
        // if any other iteration, use lineTo() to connect sub paths
        else {
            context.lineTo(x, y);
        }
    }
    
    context.closePath();
    
    // define the line width and stroke color
    context.lineWidth = 5;
    context.strokeStyle = this.darkColor;
    context.stroke();
    
    // draw gear body
    context.beginPath();
    context.arc(0, 0, this.midRadius, 0, 2 * Math.PI, false);
    
    // create a linear gradient
    var grd = context.createLinearGradient(-1 * this.outerRadius / 2, -1*
    this.outerRadius / 2, this.outerRadius / 2, this.outerRadius / 2);
    grd.addColorStop(0, this.lightColor);
    grd.addColorStop(1, this.darkColor);
    context.stroke();
    
    // draw gear hole
    context.beginPath();
    context.arc(0, 0, this.holeRadius, 0, 2 * Math.PI, false);
    context.fillStyle = "white";
    context.fill();
    context.strokeStyle = this.darkColor;
    context.stroke();
    context.restore();
};

window.onload = function(){
    var anim = new Animation("myCanvas");
    var canvas = anim.getCanvas();
    var context = anim.getContext();
    
    var gears = [];
    
    // add blue gear
    gears.push(new Gear({
        x: 270,
        y: 105, 
        outerRadius: 90,
        innerRadius: 50,
        holeRadius: 10,
        numTeeth: 24,
        theta: 0,
        thetaSpeed: 1 / 1000,
        lightColor: "#B1CCFF",
        darkColor: "#3959CC",
        clockWise: false
    }));
    
    // add red gear
    gears.push(new Gear({
        x: 372,
        y: 190, 
        outerRadius: 50,
        innerRadius: 15,
        holeRadius: 10,
        numTeeth: 12,
        theta: 0.14,
        thetaSpeed: 2 / 1000,
        lightColor: "#FF9E9D",
        darkColor: "#AD0825",
        clockWise: true
    }));
    
    // add orange gear
    gears.push(new Gear({
        x: 422,
        y: 142,
        outerRadius: 28,
        innerRadius: 5,
        holeRadius: 7,
        numTeeth: 6,
        theta: 0.35,
        thetaSpeed: 4 / 1000,
        lightColor: "#FFDD87",
        darkColor: "#D25D00",
        clockWise: false
    }));
    
    anim.setDrawStage(function(){
        // update
        for (var i = 0; i < gears.length; i++) {
            var gear = gears[i];
            var thetaIncrement = gear.thetaSpeed * this.getTimeInterval();
            gear.theta += gear.clockWise ? thetaIncrement : -1 * thetaIncrement;
        }
        
        // clear
        this.clear();
        
        // draw 
        for (var i = 0; i < gears.length; i++) {
            gears[i].draw(context);
        }
    });
    
    anim.start();
};
    
    