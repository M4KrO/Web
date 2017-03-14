function Rectangle() {
    this.prototype = Object.create(new Shape());
    this.x1 = 10;
    this.y1 = 10;
    this.y2 = 20;
    this.x2 = 20;
    this.getWidth = function()
    {
        return Math.abs(this.x1 - this.x2);
    };

    this.getHeight = function()
    {
        return Math.abs(this.y1 - this.y2);
    };

    this.getAreaSize = function()
    {
        var areaSize = this.getWidth() * this.getHeight();

        return areaSize;
    };

    this.getPerimeter = function()
    {
        var perimeter = 2 * (this.getWidth() + this.getHeight());

        return perimeter;
    };

    this.getX1 = function()
    {
        return this.x1;
    };

    this.getX2 = function()
    {
        return this.x2;
    };

    this.draw = function()
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

}