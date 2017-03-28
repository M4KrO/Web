function Circle(){
    this.prototype = Object.create(new Shape());
    this.centerX = 110;
    this.centerY = 110;
    this.radius = 20;
}

Circle.prototype.getAreaSize = function()
{
    var areaSize = Math.PI * Math.pow(this.radius, 2);

    return areaSize;
};

Circle.prototype.getPerimeter = function()
{
    var perimeter = 2 * Math.PI * this.radius;

    return perimeter;
};

Circle.prototype.draw = function()
{
    var canvas = document.getElementById("canvasArea");
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.strokeStyle = this.prototype.getOutlineColor();
    ctx.lineWidth = this.prototype.getOutlineThickness() * 2;
    ctx.fillStyle = this.prototype.getFillColor();
    ctx.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, true);
    ctx.stroke();
    ctx.fill();
};

