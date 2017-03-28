function Rectangle() {
    this.prototype = Object.create(new Shape());
    this.x1 = 10;
    this.y1 = 10;
    this.y2 = 20;
    this.x2 = 20;
}
Rectangle.prototype.getWidth = function()
{
    return Math.abs(this.x1 - this.x2);
};

Rectangle.prototype.getHeight = function()
{
    return Math.abs(this.y1 - this.y2);
};

Rectangle.prototype.getAreaSize = function()
{
    var areaSize = this.getWidth() * this.getHeight();

    return areaSize;
};

Rectangle.prototype.getPerimeter = function()
{
    var perimeter = 2 * (this.getWidth() + this.getHeight());

    return perimeter;
};

Rectangle.prototype.getX1 = function()
{
    return this.x1;
};

Rectangle.prototype.getX2 = function()
{
    return this.x2;
};

Rectangle.prototype.draw = function()
{
    var ctx = document.getElementById("canvasArea").getContext("2d");

    ctx.beginPath();
    ctx.strokeStyle = this.prototype.getOutlineColor();
    ctx.lineWidth = this.prototype.getOutlineThickness() * 2;
    ctx.fillStyle = this.prototype.getFillColor();
    ctx.moveTo(this.x1, this.y1);
    ctx.strokeRect(this.x1, this.y1, this.x2, this.y2);
    ctx.fillRect(this.x1, this.y1, this.x2, this.y2);
};

