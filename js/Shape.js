function Shape(){
    this.fillColor = "#00F";
    this.outlineColor = "000";
    this.outlineThickness = 2;
    this.setFillColor = function(color)
    {
        this.fillColor = color;
    };

    this.setOutlineColor = function(color)
    {
        this.outlineColor = color;
    };

    this.setOutlineThickness = function(outlineThickness)
    {
        this.outlineThickness = outlineThickness;
    };

    this.getFillColor = function()
    {
        return this.fillColor;
    };

    this.getOutlineColor = function()
    {
        return this.outlineColor;
    };

    this.getOutlineThickness = function()
    {
        return this.outlineThickness;
    };
}
