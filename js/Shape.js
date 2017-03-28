function Shape(){
    this.fillColor = "#00F";
    this.outlineColor = "000";
    this.outlineThickness = 2;
}

Shape.prototype.setFillColor = function(color)
{
    this.fillColor = color;
};

Shape.prototype.setOutlineColor = function(color)
{
    this.outlineColor = color;
};

Shape.prototype.setOutlineThickness = function(outlineThickness)
{
    this.outlineThickness = outlineThickness;
};

Shape.prototype.getFillColor = function()
{
    return this.fillColor;
};

Shape.prototype.getOutlineColor = function()
{
    return this.outlineColor;
};

Shape.prototype.getOutlineThickness = function()
{
    return this.outlineThickness;
};

