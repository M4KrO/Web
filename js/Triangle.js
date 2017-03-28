function Triangle() {
    this.prototype = Object.create(new Shape());
    this.x1 = 0;
    this.y1 = 0;
    this.y2 = 100;
    this.x2 = 100;
    this.y3 = 130;
    this.x3 = 0;	
}

Triangle.prototype.getAreaSize = function(){
    var comp1 = (this.x2 - this.x1)*(this.y3 - this.y1);
    var comp2 = (this.x3 - this.x1)*(this.y2 - this.y1);
    var areaSize = Math.abs(comp1 - comp2)/2;

    return areaSize;
};

Triangle.prototype.getPerimeter = function()
{
    var side1 = Math.abs(Math.sqrt(Math.pow((this.x2 - this.x1),2) + Math.pow((this.y2 - this.y1),2)));
    var side2 = Math.abs(Math.sqrt(Math.pow((this.x3 - this.x1),2) + Math.pow((this.y3 - this.y1),2)));
    var side3 = Math.abs(Math.sqrt(Math.pow((this.x2 - this.x3),2) + Math.pow((this.y2 - this.y3),2)));

    var perimeter = side1 + side2 + side3;

    return perimeter;
};

Triangle.prototype.draw = function()
{
    var canvas = document.getElementById("canvasArea");
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.strokeStyle = this.prototype.getOutlineColor();
    ctx.fillStyle = this.prototype.getFillColor();
    ctx.lineWidth = this.prototype.getOutlineThickness() * 2;
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.lineTo(this.x3, this.y3);
    ctx.lineTo(this.x1, this.y1);
    ctx.stroke();
    ctx.fill();
};
