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


var shapes = {
    Triangle : {value: "1"}, 
    Circle: {value: "2"}, 
    Rectangle : {value: "3"}
};

function getValue(){
    var select, val;
    select = document.getElementById("shapes"); 
    val = select.value;
    return val;
}

function removeFields(){
    var value = getValue();
    if(value === shapes.Circle.value)
    {
        document.getElementById("radius").style.display = "block";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "none";
        document.getElementById("y2").style.display = "none";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
    else if(value === shapes.Triangle.value)
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "block";
        document.getElementById("y3").style.display = "block";
    }
    else
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "blockcd";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
}

function clearFields(){
    document.getElementById("color").value = "";
    document.getElementById("border_color").value = "";
    document.getElementById("radius").value = "";
    document.getElementById("x1").value = "";
    document.getElementById("y1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("y2").value = "";
    document.getElementById("x3").value = "";
    document.getElementById("y3").value = "";
}

function clearCanvas(){
    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
}

function changeVal(){
    var value = getValue();
    clearCanvas();
    if(value === shapes.Rectangle.value){
        makeRectangle();
    } else if (value === shapes.Triangle.value){
        makeTriangle();
    } else if (value === shapes.Circle.value){
        makeCircle();
    }
}

function makeText(shape){
    var perimeter = shape.getPerimeter();
    var areaSize = shape.getAreaSize();

    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.fillStyle = "#00F";
    ctx.font = "10pt Arial";
    ctx.fillText("perimeter: " + perimeter, 250, 20);
    ctx.fillText("areaSize: " + areaSize, 250, 40);
}

function makeRectangle(){
    var rectangle = new Rectangle();
    rectangle.x1 = document.getElementById("x1").value;
    rectangle.y1 = document.getElementById("y1").value;
    rectangle.x2 = document.getElementById("x2").value;
    rectangle.y2 = document.getElementById("y2").value;
    rectangle.prototype.setFillColor(document.getElementById("color").value);
    rectangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(rectangle);
    rectangle.draw();
}

function makeTriangle(){
    var triangle = new Triangle();
    triangle.x1 = document.getElementById("x1").value;
    triangle.y1 = document.getElementById("y1").value;
    triangle.x2 = document.getElementById("x2").value;
    triangle.y2 = document.getElementById("y2").value;
    triangle.x3 = document.getElementById("x3").value;
    triangle.y3 = document.getElementById("y3").value;
    triangle.prototype.setFillColor(document.getElementById("color").value);
    triangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(triangle);
    triangle.draw();
}

function makeCircle(){
    var circle = new Circle();
    circle.centerX = document.getElementById("x1").value;
    circle.centerY = document.getElementById("y1").value;
    circle.radius = document.getElementById("radius").value;
    circle.prototype.setFillColor(document.getElementById("color").value);
    circle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(circle);
    circle.draw();
}

function change(){
    var value = getValue();

    clearCanvas();
    clearFields();
    removeFields();
    if(value === shapes.Rectangle.value){
        var rectangle = new Rectangle();
        rectangle.draw();
        makeText(rectangle);
    } else if (value === shapes.Triangle.value){
        var triangle = new Triangle();
        triangle.draw();
        makeText(triangle);
    } else if (value === shapes.Circle.value){
        var circle = new Circle();
        circle.draw();
        makeText(circle);
    }
}

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


var shapes = {
    Triangle : {value: "1"}, 
    Circle: {value: "2"}, 
    Rectangle : {value: "3"}
};

function getValue(){
    var select, val;
    select = document.getElementById("shapes"); 
    val = select.value;
    return val;
}

function removeFields(){
    var value = getValue();
    if(value === shapes.Circle.value)
    {
        document.getElementById("radius").style.display = "block";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "none";
        document.getElementById("y2").style.display = "none";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
    else if(value === shapes.Triangle.value)
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "block";
        document.getElementById("y3").style.display = "block";
    }
    else
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "blockcd";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
}

function clearFields(){
    document.getElementById("color").value = "";
    document.getElementById("border_color").value = "";
    document.getElementById("radius").value = "";
    document.getElementById("x1").value = "";
    document.getElementById("y1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("y2").value = "";
    document.getElementById("x3").value = "";
    document.getElementById("y3").value = "";
}

function clearCanvas(){
    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
}

function changeVal(){
    var value = getValue();
    clearCanvas();
    if(value === shapes.Rectangle.value){
        makeRectangle();
    } else if (value === shapes.Triangle.value){
        makeTriangle();
    } else if (value === shapes.Circle.value){
        makeCircle();
    }
}

function makeText(shape){
    var perimeter = shape.getPerimeter();
    var areaSize = shape.getAreaSize();

    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.fillStyle = "#00F";
    ctx.font = "10pt Arial";
    ctx.fillText("perimeter: " + perimeter, 250, 20);
    ctx.fillText("areaSize: " + areaSize, 250, 40);
}

function makeRectangle(){
    var rectangle = new Rectangle();
    rectangle.x1 = document.getElementById("x1").value;
    rectangle.y1 = document.getElementById("y1").value;
    rectangle.x2 = document.getElementById("x2").value;
    rectangle.y2 = document.getElementById("y2").value;
    rectangle.prototype.setFillColor(document.getElementById("color").value);
    rectangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(rectangle);
    rectangle.draw();
}

function makeTriangle(){
    var triangle = new Triangle();
    triangle.x1 = document.getElementById("x1").value;
    triangle.y1 = document.getElementById("y1").value;
    triangle.x2 = document.getElementById("x2").value;
    triangle.y2 = document.getElementById("y2").value;
    triangle.x3 = document.getElementById("x3").value;
    triangle.y3 = document.getElementById("y3").value;
    triangle.prototype.setFillColor(document.getElementById("color").value);
    triangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(triangle);
    triangle.draw();
}

function makeCircle(){
    var circle = new Circle();
    circle.centerX = document.getElementById("x1").value;
    circle.centerY = document.getElementById("y1").value;
    circle.radius = document.getElementById("radius").value;
    circle.prototype.setFillColor(document.getElementById("color").value);
    circle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(circle);
    circle.draw();
}

function change(){
    var value = getValue();

    clearCanvas();
    clearFields();
    removeFields();
    if(value === shapes.Rectangle.value){
        var rectangle = new Rectangle();
        rectangle.draw();
        makeText(rectangle);
    } else if (value === shapes.Triangle.value){
        var triangle = new Triangle();
        triangle.draw();
        makeText(triangle);
    } else if (value === shapes.Circle.value){
        var circle = new Circle();
        circle.draw();
        makeText(circle);
    }
}

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


var shapes = {
    Triangle : {value: "1"}, 
    Circle: {value: "2"}, 
    Rectangle : {value: "3"}
};

function getValue(){
    var select, val;
    select = document.getElementById("shapes"); 
    val = select.value;
    return val;
}

function removeFields(){
    var value = getValue();
    if(value === shapes.Circle.value)
    {
        document.getElementById("radius").style.display = "block";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "none";
        document.getElementById("y2").style.display = "none";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
    else if(value === shapes.Triangle.value)
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "block";
        document.getElementById("y3").style.display = "block";
    }
    else
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "blockcd";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
}

function clearFields(){
    document.getElementById("color").value = "";
    document.getElementById("border_color").value = "";
    document.getElementById("radius").value = "";
    document.getElementById("x1").value = "";
    document.getElementById("y1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("y2").value = "";
    document.getElementById("x3").value = "";
    document.getElementById("y3").value = "";
}

function clearCanvas(){
    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
}

function changeVal(){
    var value = getValue();
    clearCanvas();
    if(value === shapes.Rectangle.value){
        makeRectangle();
    } else if (value === shapes.Triangle.value){
        makeTriangle();
    } else if (value === shapes.Circle.value){
        makeCircle();
    }
}

function makeText(shape){
    var perimeter = shape.getPerimeter();
    var areaSize = shape.getAreaSize();

    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.fillStyle = "#00F";
    ctx.font = "10pt Arial";
    ctx.fillText("perimeter: " + perimeter, 250, 20);
    ctx.fillText("areaSize: " + areaSize, 250, 40);
}

function makeRectangle(){
    var rectangle = new Rectangle();
    rectangle.x1 = document.getElementById("x1").value;
    rectangle.y1 = document.getElementById("y1").value;
    rectangle.x2 = document.getElementById("x2").value;
    rectangle.y2 = document.getElementById("y2").value;
    rectangle.prototype.setFillColor(document.getElementById("color").value);
    rectangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(rectangle);
    rectangle.draw();
}

function makeTriangle(){
    var triangle = new Triangle();
    triangle.x1 = document.getElementById("x1").value;
    triangle.y1 = document.getElementById("y1").value;
    triangle.x2 = document.getElementById("x2").value;
    triangle.y2 = document.getElementById("y2").value;
    triangle.x3 = document.getElementById("x3").value;
    triangle.y3 = document.getElementById("y3").value;
    triangle.prototype.setFillColor(document.getElementById("color").value);
    triangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(triangle);
    triangle.draw();
}

function makeCircle(){
    var circle = new Circle();
    circle.centerX = document.getElementById("x1").value;
    circle.centerY = document.getElementById("y1").value;
    circle.radius = document.getElementById("radius").value;
    circle.prototype.setFillColor(document.getElementById("color").value);
    circle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(circle);
    circle.draw();
}

function change(){
    var value = getValue();

    clearCanvas();
    clearFields();
    removeFields();
    if(value === shapes.Rectangle.value){
        var rectangle = new Rectangle();
        rectangle.draw();
        makeText(rectangle);
    } else if (value === shapes.Triangle.value){
        var triangle = new Triangle();
        triangle.draw();
        makeText(triangle);
    } else if (value === shapes.Circle.value){
        var circle = new Circle();
        circle.draw();
        makeText(circle);
    }
}

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


var shapes = {
    Triangle : {value: "1"}, 
    Circle: {value: "2"}, 
    Rectangle : {value: "3"}
};

function getValue(){
    var select, val;
    select = document.getElementById("shapes"); 
    val = select.value;
    return val;
}

function removeFields(){
    var value = getValue();
    if(value === shapes.Circle.value)
    {
        document.getElementById("radius").style.display = "block";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "none";
        document.getElementById("y2").style.display = "none";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
    else if(value === shapes.Triangle.value)
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "block";
        document.getElementById("y3").style.display = "block";
    }
    else
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "blockcd";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
}

function clearFields(){
    document.getElementById("color").value = "";
    document.getElementById("border_color").value = "";
    document.getElementById("radius").value = "";
    document.getElementById("x1").value = "";
    document.getElementById("y1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("y2").value = "";
    document.getElementById("x3").value = "";
    document.getElementById("y3").value = "";
}

function clearCanvas(){
    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
}

function changeVal(){
    var value = getValue();
    clearCanvas();
    if(value === shapes.Rectangle.value){
        makeRectangle();
    } else if (value === shapes.Triangle.value){
        makeTriangle();
    } else if (value === shapes.Circle.value){
        makeCircle();
    }
}

function makeText(shape){
    var perimeter = shape.getPerimeter();
    var areaSize = shape.getAreaSize();

    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.fillStyle = "#00F";
    ctx.font = "10pt Arial";
    ctx.fillText("perimeter: " + perimeter, 250, 20);
    ctx.fillText("areaSize: " + areaSize, 250, 40);
}

function makeRectangle(){
    var rectangle = new Rectangle();
    rectangle.x1 = document.getElementById("x1").value;
    rectangle.y1 = document.getElementById("y1").value;
    rectangle.x2 = document.getElementById("x2").value;
    rectangle.y2 = document.getElementById("y2").value;
    rectangle.prototype.setFillColor(document.getElementById("color").value);
    rectangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(rectangle);
    rectangle.draw();
}

function makeTriangle(){
    var triangle = new Triangle();
    triangle.x1 = document.getElementById("x1").value;
    triangle.y1 = document.getElementById("y1").value;
    triangle.x2 = document.getElementById("x2").value;
    triangle.y2 = document.getElementById("y2").value;
    triangle.x3 = document.getElementById("x3").value;
    triangle.y3 = document.getElementById("y3").value;
    triangle.prototype.setFillColor(document.getElementById("color").value);
    triangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(triangle);
    triangle.draw();
}

function makeCircle(){
    var circle = new Circle();
    circle.centerX = document.getElementById("x1").value;
    circle.centerY = document.getElementById("y1").value;
    circle.radius = document.getElementById("radius").value;
    circle.prototype.setFillColor(document.getElementById("color").value);
    circle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(circle);
    circle.draw();
}

function change(){
    var value = getValue();

    clearCanvas();
    clearFields();
    removeFields();
    if(value === shapes.Rectangle.value){
        var rectangle = new Rectangle();
        rectangle.draw();
        makeText(rectangle);
    } else if (value === shapes.Triangle.value){
        var triangle = new Triangle();
        triangle.draw();
        makeText(triangle);
    } else if (value === shapes.Circle.value){
        var circle = new Circle();
        circle.draw();
        makeText(circle);
    }
}

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


var shapes = {
    Triangle : {value: "1"}, 
    Circle: {value: "2"}, 
    Rectangle : {value: "3"}
};

function getValue(){
    var select, val;
    select = document.getElementById("shapes"); 
    val = select.value;
    return val;
}

function removeFields(){
    var value = getValue();
    if(value === shapes.Circle.value)
    {
        document.getElementById("radius").style.display = "block";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "none";
        document.getElementById("y2").style.display = "none";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
    else if(value === shapes.Triangle.value)
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "block";
        document.getElementById("y3").style.display = "block";
    }
    else
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "blockcd";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
}

function clearFields(){
    document.getElementById("color").value = "";
    document.getElementById("border_color").value = "";
    document.getElementById("radius").value = "";
    document.getElementById("x1").value = "";
    document.getElementById("y1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("y2").value = "";
    document.getElementById("x3").value = "";
    document.getElementById("y3").value = "";
}

function clearCanvas(){
    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
}

function changeVal(){
    var value = getValue();
    clearCanvas();
    if(value === shapes.Rectangle.value){
        makeRectangle();
    } else if (value === shapes.Triangle.value){
        makeTriangle();
    } else if (value === shapes.Circle.value){
        makeCircle();
    }
}

function makeText(shape){
    var perimeter = shape.getPerimeter();
    var areaSize = shape.getAreaSize();

    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.fillStyle = "#00F";
    ctx.font = "10pt Arial";
    ctx.fillText("perimeter: " + perimeter, 250, 20);
    ctx.fillText("areaSize: " + areaSize, 250, 40);
}

function makeRectangle(){
    var rectangle = new Rectangle();
    rectangle.x1 = document.getElementById("x1").value;
    rectangle.y1 = document.getElementById("y1").value;
    rectangle.x2 = document.getElementById("x2").value;
    rectangle.y2 = document.getElementById("y2").value;
    rectangle.prototype.setFillColor(document.getElementById("color").value);
    rectangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(rectangle);
    rectangle.draw();
}

function makeTriangle(){
    var triangle = new Triangle();
    triangle.x1 = document.getElementById("x1").value;
    triangle.y1 = document.getElementById("y1").value;
    triangle.x2 = document.getElementById("x2").value;
    triangle.y2 = document.getElementById("y2").value;
    triangle.x3 = document.getElementById("x3").value;
    triangle.y3 = document.getElementById("y3").value;
    triangle.prototype.setFillColor(document.getElementById("color").value);
    triangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(triangle);
    triangle.draw();
}

function makeCircle(){
    var circle = new Circle();
    circle.centerX = document.getElementById("x1").value;
    circle.centerY = document.getElementById("y1").value;
    circle.radius = document.getElementById("radius").value;
    circle.prototype.setFillColor(document.getElementById("color").value);
    circle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(circle);
    circle.draw();
}

function change(){
    var value = getValue();

    clearCanvas();
    clearFields();
    removeFields();
    if(value === shapes.Rectangle.value){
        var rectangle = new Rectangle();
        rectangle.draw();
        makeText(rectangle);
    } else if (value === shapes.Triangle.value){
        var triangle = new Triangle();
        triangle.draw();
        makeText(triangle);
    } else if (value === shapes.Circle.value){
        var circle = new Circle();
        circle.draw();
        makeText(circle);
    }
}

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


var shapes = {
    Triangle : {value: "1"}, 
    Circle: {value: "2"}, 
    Rectangle : {value: "3"}
};

function getValue(){
    var select, val;
    select = document.getElementById("shapes"); 
    val = select.value;
    return val;
}

function removeFields(){
    var value = getValue();
    if(value === shapes.Circle.value)
    {
        document.getElementById("radius").style.display = "block";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "none";
        document.getElementById("y2").style.display = "none";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
    else if(value === shapes.Triangle.value)
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "block";
        document.getElementById("y3").style.display = "block";
    }
    else
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "blockcd";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
}

function clearFields(){
    document.getElementById("color").value = "";
    document.getElementById("border_color").value = "";
    document.getElementById("radius").value = "";
    document.getElementById("x1").value = "";
    document.getElementById("y1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("y2").value = "";
    document.getElementById("x3").value = "";
    document.getElementById("y3").value = "";
}

function clearCanvas(){
    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
}

function changeVal(){
    var value = getValue();
    clearCanvas();
    if(value === shapes.Rectangle.value){
        makeRectangle();
    } else if (value === shapes.Triangle.value){
        makeTriangle();
    } else if (value === shapes.Circle.value){
        makeCircle();
    }
}

function makeText(shape){
    var perimeter = shape.getPerimeter();
    var areaSize = shape.getAreaSize();

    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.fillStyle = "#00F";
    ctx.font = "10pt Arial";
    ctx.fillText("perimeter: " + perimeter, 250, 20);
    ctx.fillText("areaSize: " + areaSize, 250, 40);
}

function makeRectangle(){
    var rectangle = new Rectangle();
    rectangle.x1 = document.getElementById("x1").value;
    rectangle.y1 = document.getElementById("y1").value;
    rectangle.x2 = document.getElementById("x2").value;
    rectangle.y2 = document.getElementById("y2").value;
    rectangle.prototype.setFillColor(document.getElementById("color").value);
    rectangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(rectangle);
    rectangle.draw();
}

function makeTriangle(){
    var triangle = new Triangle();
    triangle.x1 = document.getElementById("x1").value;
    triangle.y1 = document.getElementById("y1").value;
    triangle.x2 = document.getElementById("x2").value;
    triangle.y2 = document.getElementById("y2").value;
    triangle.x3 = document.getElementById("x3").value;
    triangle.y3 = document.getElementById("y3").value;
    triangle.prototype.setFillColor(document.getElementById("color").value);
    triangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(triangle);
    triangle.draw();
}

function makeCircle(){
    var circle = new Circle();
    circle.centerX = document.getElementById("x1").value;
    circle.centerY = document.getElementById("y1").value;
    circle.radius = document.getElementById("radius").value;
    circle.prototype.setFillColor(document.getElementById("color").value);
    circle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(circle);
    circle.draw();
}

function change(){
    var value = getValue();

    clearCanvas();
    clearFields();
    removeFields();
    if(value === shapes.Rectangle.value){
        var rectangle = new Rectangle();
        rectangle.draw();
        makeText(rectangle);
    } else if (value === shapes.Triangle.value){
        var triangle = new Triangle();
        triangle.draw();
        makeText(triangle);
    } else if (value === shapes.Circle.value){
        var circle = new Circle();
        circle.draw();
        makeText(circle);
    }
}

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


var shapes = {
    Triangle : {value: "1"}, 
    Circle: {value: "2"}, 
    Rectangle : {value: "3"}
};

function getValue(){
    var select, val;
    select = document.getElementById("shapes"); 
    val = select.value;
    return val;
}

function removeFields(){
    var value = getValue();
    if(value === shapes.Circle.value)
    {
        document.getElementById("radius").style.display = "block";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "none";
        document.getElementById("y2").style.display = "none";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
    else if(value === shapes.Triangle.value)
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "block";
        document.getElementById("y3").style.display = "block";
    }
    else
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "blockcd";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
}

function clearFields(){
    document.getElementById("color").value = "";
    document.getElementById("border_color").value = "";
    document.getElementById("radius").value = "";
    document.getElementById("x1").value = "";
    document.getElementById("y1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("y2").value = "";
    document.getElementById("x3").value = "";
    document.getElementById("y3").value = "";
}

function clearCanvas(){
    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
}

function changeVal(){
    var value = getValue();
    clearCanvas();
    if(value === shapes.Rectangle.value){
        makeRectangle();
    } else if (value === shapes.Triangle.value){
        makeTriangle();
    } else if (value === shapes.Circle.value){
        makeCircle();
    }
}

function makeText(shape){
    var perimeter = shape.getPerimeter();
    var areaSize = shape.getAreaSize();

    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.fillStyle = "#00F";
    ctx.font = "10pt Arial";
    ctx.fillText("perimeter: " + perimeter, 250, 20);
    ctx.fillText("areaSize: " + areaSize, 250, 40);
}

function makeRectangle(){
    var rectangle = new Rectangle();
    rectangle.x1 = document.getElementById("x1").value;
    rectangle.y1 = document.getElementById("y1").value;
    rectangle.x2 = document.getElementById("x2").value;
    rectangle.y2 = document.getElementById("y2").value;
    rectangle.prototype.setFillColor(document.getElementById("color").value);
    rectangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(rectangle);
    rectangle.draw();
}

function makeTriangle(){
    var triangle = new Triangle();
    triangle.x1 = document.getElementById("x1").value;
    triangle.y1 = document.getElementById("y1").value;
    triangle.x2 = document.getElementById("x2").value;
    triangle.y2 = document.getElementById("y2").value;
    triangle.x3 = document.getElementById("x3").value;
    triangle.y3 = document.getElementById("y3").value;
    triangle.prototype.setFillColor(document.getElementById("color").value);
    triangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(triangle);
    triangle.draw();
}

function makeCircle(){
    var circle = new Circle();
    circle.centerX = document.getElementById("x1").value;
    circle.centerY = document.getElementById("y1").value;
    circle.radius = document.getElementById("radius").value;
    circle.prototype.setFillColor(document.getElementById("color").value);
    circle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(circle);
    circle.draw();
}

function change(){
    var value = getValue();

    clearCanvas();
    clearFields();
    removeFields();
    if(value === shapes.Rectangle.value){
        var rectangle = new Rectangle();
        rectangle.draw();
        makeText(rectangle);
    } else if (value === shapes.Triangle.value){
        var triangle = new Triangle();
        triangle.draw();
        makeText(triangle);
    } else if (value === shapes.Circle.value){
        var circle = new Circle();
        circle.draw();
        makeText(circle);
    }
}

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


var shapes = {
    Triangle : {value: "1"}, 
    Circle: {value: "2"}, 
    Rectangle : {value: "3"}
};

function getValue(){
    var select, val;
    select = document.getElementById("shapes"); 
    val = select.value;
    return val;
}

function removeFields(){
    var value = getValue();
    if(value === shapes.Circle.value)
    {
        document.getElementById("radius").style.display = "block";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "none";
        document.getElementById("y2").style.display = "none";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
    else if(value === shapes.Triangle.value)
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "block";
        document.getElementById("y3").style.display = "block";
    }
    else
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "blockcd";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
}

function clearFields(){
    document.getElementById("color").value = "";
    document.getElementById("border_color").value = "";
    document.getElementById("radius").value = "";
    document.getElementById("x1").value = "";
    document.getElementById("y1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("y2").value = "";
    document.getElementById("x3").value = "";
    document.getElementById("y3").value = "";
}

function clearCanvas(){
    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
}

function changeVal(){
    var value = getValue();
    clearCanvas();
    if(value === shapes.Rectangle.value){
        makeRectangle();
    } else if (value === shapes.Triangle.value){
        makeTriangle();
    } else if (value === shapes.Circle.value){
        makeCircle();
    }
}

function makeText(shape){
    var perimeter = shape.getPerimeter();
    var areaSize = shape.getAreaSize();

    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.fillStyle = "#00F";
    ctx.font = "10pt Arial";
    ctx.fillText("perimeter: " + perimeter, 250, 20);
    ctx.fillText("areaSize: " + areaSize, 250, 40);
}

function makeRectangle(){
    var rectangle = new Rectangle();
    rectangle.x1 = document.getElementById("x1").value;
    rectangle.y1 = document.getElementById("y1").value;
    rectangle.x2 = document.getElementById("x2").value;
    rectangle.y2 = document.getElementById("y2").value;
    rectangle.prototype.setFillColor(document.getElementById("color").value);
    rectangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(rectangle);
    rectangle.draw();
}

function makeTriangle(){
    var triangle = new Triangle();
    triangle.x1 = document.getElementById("x1").value;
    triangle.y1 = document.getElementById("y1").value;
    triangle.x2 = document.getElementById("x2").value;
    triangle.y2 = document.getElementById("y2").value;
    triangle.x3 = document.getElementById("x3").value;
    triangle.y3 = document.getElementById("y3").value;
    triangle.prototype.setFillColor(document.getElementById("color").value);
    triangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(triangle);
    triangle.draw();
}

function makeCircle(){
    var circle = new Circle();
    circle.centerX = document.getElementById("x1").value;
    circle.centerY = document.getElementById("y1").value;
    circle.radius = document.getElementById("radius").value;
    circle.prototype.setFillColor(document.getElementById("color").value);
    circle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(circle);
    circle.draw();
}

function change(){
    var value = getValue();

    clearCanvas();
    clearFields();
    removeFields();
    if(value === shapes.Rectangle.value){
        var rectangle = new Rectangle();
        rectangle.draw();
        makeText(rectangle);
    } else if (value === shapes.Triangle.value){
        var triangle = new Triangle();
        triangle.draw();
        makeText(triangle);
    } else if (value === shapes.Circle.value){
        var circle = new Circle();
        circle.draw();
        makeText(circle);
    }
}

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


var shapes = {
    Triangle : {value: "1"}, 
    Circle: {value: "2"}, 
    Rectangle : {value: "3"}
};

function getValue(){
    var select, val;
    select = document.getElementById("shapes"); 
    val = select.value;
    return val;
}

function removeFields(){
    var value = getValue();
    if(value === shapes.Circle.value)
    {
        document.getElementById("radius").style.display = "block";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "none";
        document.getElementById("y2").style.display = "none";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
    else if(value === shapes.Triangle.value)
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "block";
        document.getElementById("y3").style.display = "block";
    }
    else
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "blockcd";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
}

function clearFields(){
    document.getElementById("color").value = "";
    document.getElementById("border_color").value = "";
    document.getElementById("radius").value = "";
    document.getElementById("x1").value = "";
    document.getElementById("y1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("y2").value = "";
    document.getElementById("x3").value = "";
    document.getElementById("y3").value = "";
}

function clearCanvas(){
    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
}

function changeVal(){
    var value = getValue();
    clearCanvas();
    if(value === shapes.Rectangle.value){
        makeRectangle();
    } else if (value === shapes.Triangle.value){
        makeTriangle();
    } else if (value === shapes.Circle.value){
        makeCircle();
    }
}

function makeText(shape){
    var perimeter = shape.getPerimeter();
    var areaSize = shape.getAreaSize();

    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.fillStyle = "#00F";
    ctx.font = "10pt Arial";
    ctx.fillText("perimeter: " + perimeter, 250, 20);
    ctx.fillText("areaSize: " + areaSize, 250, 40);
}

function makeRectangle(){
    var rectangle = new Rectangle();
    rectangle.x1 = document.getElementById("x1").value;
    rectangle.y1 = document.getElementById("y1").value;
    rectangle.x2 = document.getElementById("x2").value;
    rectangle.y2 = document.getElementById("y2").value;
    rectangle.prototype.setFillColor(document.getElementById("color").value);
    rectangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(rectangle);
    rectangle.draw();
}

function makeTriangle(){
    var triangle = new Triangle();
    triangle.x1 = document.getElementById("x1").value;
    triangle.y1 = document.getElementById("y1").value;
    triangle.x2 = document.getElementById("x2").value;
    triangle.y2 = document.getElementById("y2").value;
    triangle.x3 = document.getElementById("x3").value;
    triangle.y3 = document.getElementById("y3").value;
    triangle.prototype.setFillColor(document.getElementById("color").value);
    triangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(triangle);
    triangle.draw();
}

function makeCircle(){
    var circle = new Circle();
    circle.centerX = document.getElementById("x1").value;
    circle.centerY = document.getElementById("y1").value;
    circle.radius = document.getElementById("radius").value;
    circle.prototype.setFillColor(document.getElementById("color").value);
    circle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(circle);
    circle.draw();
}

function change(){
    var value = getValue();

    clearCanvas();
    clearFields();
    removeFields();
    if(value === shapes.Rectangle.value){
        var rectangle = new Rectangle();
        rectangle.draw();
        makeText(rectangle);
    } else if (value === shapes.Triangle.value){
        var triangle = new Triangle();
        triangle.draw();
        makeText(triangle);
    } else if (value === shapes.Circle.value){
        var circle = new Circle();
        circle.draw();
        makeText(circle);
    }
}

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


var shapes = {
    Triangle : {value: "1"}, 
    Circle: {value: "2"}, 
    Rectangle : {value: "3"}
};

function getValue(){
    var select, val;
    select = document.getElementById("shapes"); 
    val = select.value;
    return val;
}

function removeFields(){
    var value = getValue();
    if(value === shapes.Circle.value)
    {
        document.getElementById("radius").style.display = "block";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "none";
        document.getElementById("y2").style.display = "none";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
    else if(value === shapes.Triangle.value)
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "block";
        document.getElementById("y3").style.display = "block";
    }
    else
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "blockcd";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
}

function clearFields(){
    document.getElementById("color").value = "";
    document.getElementById("border_color").value = "";
    document.getElementById("radius").value = "";
    document.getElementById("x1").value = "";
    document.getElementById("y1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("y2").value = "";
    document.getElementById("x3").value = "";
    document.getElementById("y3").value = "";
}

function clearCanvas(){
    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
}

function changeVal(){
    var value = getValue();
    clearCanvas();
    if(value === shapes.Rectangle.value){
        makeRectangle();
    } else if (value === shapes.Triangle.value){
        makeTriangle();
    } else if (value === shapes.Circle.value){
        makeCircle();
    }
}

function makeText(shape){
    var perimeter = shape.getPerimeter();
    var areaSize = shape.getAreaSize();

    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.fillStyle = "#00F";
    ctx.font = "10pt Arial";
    ctx.fillText("perimeter: " + perimeter, 250, 20);
    ctx.fillText("areaSize: " + areaSize, 250, 40);
}

function makeRectangle(){
    var rectangle = new Rectangle();
    rectangle.x1 = document.getElementById("x1").value;
    rectangle.y1 = document.getElementById("y1").value;
    rectangle.x2 = document.getElementById("x2").value;
    rectangle.y2 = document.getElementById("y2").value;
    rectangle.prototype.setFillColor(document.getElementById("color").value);
    rectangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(rectangle);
    rectangle.draw();
}

function makeTriangle(){
    var triangle = new Triangle();
    triangle.x1 = document.getElementById("x1").value;
    triangle.y1 = document.getElementById("y1").value;
    triangle.x2 = document.getElementById("x2").value;
    triangle.y2 = document.getElementById("y2").value;
    triangle.x3 = document.getElementById("x3").value;
    triangle.y3 = document.getElementById("y3").value;
    triangle.prototype.setFillColor(document.getElementById("color").value);
    triangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(triangle);
    triangle.draw();
}

function makeCircle(){
    var circle = new Circle();
    circle.centerX = document.getElementById("x1").value;
    circle.centerY = document.getElementById("y1").value;
    circle.radius = document.getElementById("radius").value;
    circle.prototype.setFillColor(document.getElementById("color").value);
    circle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(circle);
    circle.draw();
}

function change(){
    var value = getValue();

    clearCanvas();
    clearFields();
    removeFields();
    if(value === shapes.Rectangle.value){
        var rectangle = new Rectangle();
        rectangle.draw();
        makeText(rectangle);
    } else if (value === shapes.Triangle.value){
        var triangle = new Triangle();
        triangle.draw();
        makeText(triangle);
    } else if (value === shapes.Circle.value){
        var circle = new Circle();
        circle.draw();
        makeText(circle);
    }
}

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


var shapes = {
    Triangle : {value: "1"}, 
    Circle: {value: "2"}, 
    Rectangle : {value: "3"}
};

function getValue(){
    var select, val;
    select = document.getElementById("shapes"); 
    val = select.value;
    return val;
}

function removeFields(){
    var value = getValue();
    if(value === shapes.Circle.value)
    {
        document.getElementById("radius").style.display = "block";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "none";
        document.getElementById("y2").style.display = "none";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
    else if(value === shapes.Triangle.value)
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "block";
        document.getElementById("y3").style.display = "block";
    }
    else
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "blockcd";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
}

function clearFields(){
    document.getElementById("color").value = "";
    document.getElementById("border_color").value = "";
    document.getElementById("radius").value = "";
    document.getElementById("x1").value = "";
    document.getElementById("y1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("y2").value = "";
    document.getElementById("x3").value = "";
    document.getElementById("y3").value = "";
}

function clearCanvas(){
    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
}

function changeVal(){
    var value = getValue();
    clearCanvas();
    if(value === shapes.Rectangle.value){
        makeRectangle();
    } else if (value === shapes.Triangle.value){
        makeTriangle();
    } else if (value === shapes.Circle.value){
        makeCircle();
    }
}

function makeText(shape){
    var perimeter = shape.getPerimeter();
    var areaSize = shape.getAreaSize();

    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.fillStyle = "#00F";
    ctx.font = "10pt Arial";
    ctx.fillText("perimeter: " + perimeter, 250, 20);
    ctx.fillText("areaSize: " + areaSize, 250, 40);
}

function makeRectangle(){
    var rectangle = new Rectangle();
    rectangle.x1 = document.getElementById("x1").value;
    rectangle.y1 = document.getElementById("y1").value;
    rectangle.x2 = document.getElementById("x2").value;
    rectangle.y2 = document.getElementById("y2").value;
    rectangle.prototype.setFillColor(document.getElementById("color").value);
    rectangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(rectangle);
    rectangle.draw();
}

function makeTriangle(){
    var triangle = new Triangle();
    triangle.x1 = document.getElementById("x1").value;
    triangle.y1 = document.getElementById("y1").value;
    triangle.x2 = document.getElementById("x2").value;
    triangle.y2 = document.getElementById("y2").value;
    triangle.x3 = document.getElementById("x3").value;
    triangle.y3 = document.getElementById("y3").value;
    triangle.prototype.setFillColor(document.getElementById("color").value);
    triangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(triangle);
    triangle.draw();
}

function makeCircle(){
    var circle = new Circle();
    circle.centerX = document.getElementById("x1").value;
    circle.centerY = document.getElementById("y1").value;
    circle.radius = document.getElementById("radius").value;
    circle.prototype.setFillColor(document.getElementById("color").value);
    circle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(circle);
    circle.draw();
}

function change(){
    var value = getValue();

    clearCanvas();
    clearFields();
    removeFields();
    if(value === shapes.Rectangle.value){
        var rectangle = new Rectangle();
        rectangle.draw();
        makeText(rectangle);
    } else if (value === shapes.Triangle.value){
        var triangle = new Triangle();
        triangle.draw();
        makeText(triangle);
    } else if (value === shapes.Circle.value){
        var circle = new Circle();
        circle.draw();
        makeText(circle);
    }
}

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


var shapes = {
    Triangle : {value: "1"}, 
    Circle: {value: "2"}, 
    Rectangle : {value: "3"}
};

function getValue(){
    var select, val;
    select = document.getElementById("shapes"); 
    val = select.value;
    return val;
}

function removeFields(){
    var value = getValue();
    if(value === shapes.Circle.value)
    {
        document.getElementById("radius").style.display = "block";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "none";
        document.getElementById("y2").style.display = "none";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
    else if(value === shapes.Triangle.value)
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "block";
        document.getElementById("y3").style.display = "block";
    }
    else
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "blockcd";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
}

function clearFields(){
    document.getElementById("color").value = "";
    document.getElementById("border_color").value = "";
    document.getElementById("radius").value = "";
    document.getElementById("x1").value = "";
    document.getElementById("y1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("y2").value = "";
    document.getElementById("x3").value = "";
    document.getElementById("y3").value = "";
}

function clearCanvas(){
    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
}

function changeVal(){
    var value = getValue();
    clearCanvas();
    if(value === shapes.Rectangle.value){
        makeRectangle();
    } else if (value === shapes.Triangle.value){
        makeTriangle();
    } else if (value === shapes.Circle.value){
        makeCircle();
    }
}

function makeText(shape){
    var perimeter = shape.getPerimeter();
    var areaSize = shape.getAreaSize();

    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.fillStyle = "#00F";
    ctx.font = "10pt Arial";
    ctx.fillText("perimeter: " + perimeter, 250, 20);
    ctx.fillText("areaSize: " + areaSize, 250, 40);
}

function makeRectangle(){
    var rectangle = new Rectangle();
    rectangle.x1 = document.getElementById("x1").value;
    rectangle.y1 = document.getElementById("y1").value;
    rectangle.x2 = document.getElementById("x2").value;
    rectangle.y2 = document.getElementById("y2").value;
    rectangle.prototype.setFillColor(document.getElementById("color").value);
    rectangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(rectangle);
    rectangle.draw();
}

function makeTriangle(){
    var triangle = new Triangle();
    triangle.x1 = document.getElementById("x1").value;
    triangle.y1 = document.getElementById("y1").value;
    triangle.x2 = document.getElementById("x2").value;
    triangle.y2 = document.getElementById("y2").value;
    triangle.x3 = document.getElementById("x3").value;
    triangle.y3 = document.getElementById("y3").value;
    triangle.prototype.setFillColor(document.getElementById("color").value);
    triangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(triangle);
    triangle.draw();
}

function makeCircle(){
    var circle = new Circle();
    circle.centerX = document.getElementById("x1").value;
    circle.centerY = document.getElementById("y1").value;
    circle.radius = document.getElementById("radius").value;
    circle.prototype.setFillColor(document.getElementById("color").value);
    circle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(circle);
    circle.draw();
}

function change(){
    var value = getValue();

    clearCanvas();
    clearFields();
    removeFields();
    if(value === shapes.Rectangle.value){
        var rectangle = new Rectangle();
        rectangle.draw();
        makeText(rectangle);
    } else if (value === shapes.Triangle.value){
        var triangle = new Triangle();
        triangle.draw();
        makeText(triangle);
    } else if (value === shapes.Circle.value){
        var circle = new Circle();
        circle.draw();
        makeText(circle);
    }
}

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


var shapes = {
    Triangle : {value: "1"}, 
    Circle: {value: "2"}, 
    Rectangle : {value: "3"}
};

function getValue(){
    var select, val;
    select = document.getElementById("shapes"); 
    val = select.value;
    return val;
}

function removeFields(){
    var value = getValue();
    if(value === shapes.Circle.value)
    {
        document.getElementById("radius").style.display = "block";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "none";
        document.getElementById("y2").style.display = "none";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
    else if(value === shapes.Triangle.value)
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "block";
        document.getElementById("y3").style.display = "block";
    }
    else
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "blockcd";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
}

function clearFields(){
    document.getElementById("color").value = "";
    document.getElementById("border_color").value = "";
    document.getElementById("radius").value = "";
    document.getElementById("x1").value = "";
    document.getElementById("y1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("y2").value = "";
    document.getElementById("x3").value = "";
    document.getElementById("y3").value = "";
}

function clearCanvas(){
    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
}

function changeVal(){
    var value = getValue();
    clearCanvas();
    if(value === shapes.Rectangle.value){
        makeRectangle();
    } else if (value === shapes.Triangle.value){
        makeTriangle();
    } else if (value === shapes.Circle.value){
        makeCircle();
    }
}

function makeText(shape){
    var perimeter = shape.getPerimeter();
    var areaSize = shape.getAreaSize();

    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.fillStyle = "#00F";
    ctx.font = "10pt Arial";
    ctx.fillText("perimeter: " + perimeter, 250, 20);
    ctx.fillText("areaSize: " + areaSize, 250, 40);
}

function makeRectangle(){
    var rectangle = new Rectangle();
    rectangle.x1 = document.getElementById("x1").value;
    rectangle.y1 = document.getElementById("y1").value;
    rectangle.x2 = document.getElementById("x2").value;
    rectangle.y2 = document.getElementById("y2").value;
    rectangle.prototype.setFillColor(document.getElementById("color").value);
    rectangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(rectangle);
    rectangle.draw();
}

function makeTriangle(){
    var triangle = new Triangle();
    triangle.x1 = document.getElementById("x1").value;
    triangle.y1 = document.getElementById("y1").value;
    triangle.x2 = document.getElementById("x2").value;
    triangle.y2 = document.getElementById("y2").value;
    triangle.x3 = document.getElementById("x3").value;
    triangle.y3 = document.getElementById("y3").value;
    triangle.prototype.setFillColor(document.getElementById("color").value);
    triangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(triangle);
    triangle.draw();
}

function makeCircle(){
    var circle = new Circle();
    circle.centerX = document.getElementById("x1").value;
    circle.centerY = document.getElementById("y1").value;
    circle.radius = document.getElementById("radius").value;
    circle.prototype.setFillColor(document.getElementById("color").value);
    circle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(circle);
    circle.draw();
}

function change(){
    var value = getValue();

    clearCanvas();
    clearFields();
    removeFields();
    if(value === shapes.Rectangle.value){
        var rectangle = new Rectangle();
        rectangle.draw();
        makeText(rectangle);
    } else if (value === shapes.Triangle.value){
        var triangle = new Triangle();
        triangle.draw();
        makeText(triangle);
    } else if (value === shapes.Circle.value){
        var circle = new Circle();
        circle.draw();
        makeText(circle);
    }
}

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


var shapes = {
    Triangle : {value: "1"}, 
    Circle: {value: "2"}, 
    Rectangle : {value: "3"}
};

function getValue(){
    var select, val;
    select = document.getElementById("shapes"); 
    val = select.value;
    return val;
}

function removeFields(){
    var value = getValue();
    if(value === shapes.Circle.value)
    {
        document.getElementById("radius").style.display = "block";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "none";
        document.getElementById("y2").style.display = "none";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
    else if(value === shapes.Triangle.value)
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "block";
        document.getElementById("y3").style.display = "block";
    }
    else
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "blockcd";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
}

function clearFields(){
    document.getElementById("color").value = "";
    document.getElementById("border_color").value = "";
    document.getElementById("radius").value = "";
    document.getElementById("x1").value = "";
    document.getElementById("y1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("y2").value = "";
    document.getElementById("x3").value = "";
    document.getElementById("y3").value = "";
}

function clearCanvas(){
    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
}

function changeVal(){
    var value = getValue();
    clearCanvas();
    if(value === shapes.Rectangle.value){
        makeRectangle();
    } else if (value === shapes.Triangle.value){
        makeTriangle();
    } else if (value === shapes.Circle.value){
        makeCircle();
    }
}

function makeText(shape){
    var perimeter = shape.getPerimeter();
    var areaSize = shape.getAreaSize();

    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.fillStyle = "#00F";
    ctx.font = "10pt Arial";
    ctx.fillText("perimeter: " + perimeter, 250, 20);
    ctx.fillText("areaSize: " + areaSize, 250, 40);
}

function makeRectangle(){
    var rectangle = new Rectangle();
    rectangle.x1 = document.getElementById("x1").value;
    rectangle.y1 = document.getElementById("y1").value;
    rectangle.x2 = document.getElementById("x2").value;
    rectangle.y2 = document.getElementById("y2").value;
    rectangle.prototype.setFillColor(document.getElementById("color").value);
    rectangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(rectangle);
    rectangle.draw();
}

function makeTriangle(){
    var triangle = new Triangle();
    triangle.x1 = document.getElementById("x1").value;
    triangle.y1 = document.getElementById("y1").value;
    triangle.x2 = document.getElementById("x2").value;
    triangle.y2 = document.getElementById("y2").value;
    triangle.x3 = document.getElementById("x3").value;
    triangle.y3 = document.getElementById("y3").value;
    triangle.prototype.setFillColor(document.getElementById("color").value);
    triangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(triangle);
    triangle.draw();
}

function makeCircle(){
    var circle = new Circle();
    circle.centerX = document.getElementById("x1").value;
    circle.centerY = document.getElementById("y1").value;
    circle.radius = document.getElementById("radius").value;
    circle.prototype.setFillColor(document.getElementById("color").value);
    circle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(circle);
    circle.draw();
}

function change(){
    var value = getValue();

    clearCanvas();
    clearFields();
    removeFields();
    if(value === shapes.Rectangle.value){
        var rectangle = new Rectangle();
        rectangle.draw();
        makeText(rectangle);
    } else if (value === shapes.Triangle.value){
        var triangle = new Triangle();
        triangle.draw();
        makeText(triangle);
    } else if (value === shapes.Circle.value){
        var circle = new Circle();
        circle.draw();
        makeText(circle);
    }
}

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


var shapes = {
    Triangle : {value: "1"}, 
    Circle: {value: "2"}, 
    Rectangle : {value: "3"}
};

function getValue(){
    var select, val;
    select = document.getElementById("shapes"); 
    val = select.value;
    return val;
}

function removeFields(){
    var value = getValue();
    if(value === shapes.Circle.value)
    {
        document.getElementById("radius").style.display = "block";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "none";
        document.getElementById("y2").style.display = "none";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
    else if(value === shapes.Triangle.value)
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "block";
        document.getElementById("y3").style.display = "block";
    }
    else
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "blockcd";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
}

function clearFields(){
    document.getElementById("color").value = "";
    document.getElementById("border_color").value = "";
    document.getElementById("radius").value = "";
    document.getElementById("x1").value = "";
    document.getElementById("y1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("y2").value = "";
    document.getElementById("x3").value = "";
    document.getElementById("y3").value = "";
}

function clearCanvas(){
    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
}

function changeVal(){
    var value = getValue();
    clearCanvas();
    if(value === shapes.Rectangle.value){
        makeRectangle();
    } else if (value === shapes.Triangle.value){
        makeTriangle();
    } else if (value === shapes.Circle.value){
        makeCircle();
    }
}

function makeText(shape){
    var perimeter = shape.getPerimeter();
    var areaSize = shape.getAreaSize();

    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.fillStyle = "#00F";
    ctx.font = "10pt Arial";
    ctx.fillText("perimeter: " + perimeter, 250, 20);
    ctx.fillText("areaSize: " + areaSize, 250, 40);
}

function makeRectangle(){
    var rectangle = new Rectangle();
    rectangle.x1 = document.getElementById("x1").value;
    rectangle.y1 = document.getElementById("y1").value;
    rectangle.x2 = document.getElementById("x2").value;
    rectangle.y2 = document.getElementById("y2").value;
    rectangle.prototype.setFillColor(document.getElementById("color").value);
    rectangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(rectangle);
    rectangle.draw();
}

function makeTriangle(){
    var triangle = new Triangle();
    triangle.x1 = document.getElementById("x1").value;
    triangle.y1 = document.getElementById("y1").value;
    triangle.x2 = document.getElementById("x2").value;
    triangle.y2 = document.getElementById("y2").value;
    triangle.x3 = document.getElementById("x3").value;
    triangle.y3 = document.getElementById("y3").value;
    triangle.prototype.setFillColor(document.getElementById("color").value);
    triangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(triangle);
    triangle.draw();
}

function makeCircle(){
    var circle = new Circle();
    circle.centerX = document.getElementById("x1").value;
    circle.centerY = document.getElementById("y1").value;
    circle.radius = document.getElementById("radius").value;
    circle.prototype.setFillColor(document.getElementById("color").value);
    circle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(circle);
    circle.draw();
}

function change(){
    var value = getValue();

    clearCanvas();
    clearFields();
    removeFields();
    if(value === shapes.Rectangle.value){
        var rectangle = new Rectangle();
        rectangle.draw();
        makeText(rectangle);
    } else if (value === shapes.Triangle.value){
        var triangle = new Triangle();
        triangle.draw();
        makeText(triangle);
    } else if (value === shapes.Circle.value){
        var circle = new Circle();
        circle.draw();
        makeText(circle);
    }
}

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


var shapes = {
    Triangle : {value: "1"}, 
    Circle: {value: "2"}, 
    Rectangle : {value: "3"}
};

function getValue(){
    var select, val;
    select = document.getElementById("shapes"); 
    val = select.value;
    return val;
}

function removeFields(){
    var value = getValue();
    if(value === shapes.Circle.value)
    {
        document.getElementById("radius").style.display = "block";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "none";
        document.getElementById("y2").style.display = "none";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
    else if(value === shapes.Triangle.value)
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "block";
        document.getElementById("y3").style.display = "block";
    }
    else
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "blockcd";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
}

function clearFields(){
    document.getElementById("color").value = "";
    document.getElementById("border_color").value = "";
    document.getElementById("radius").value = "";
    document.getElementById("x1").value = "";
    document.getElementById("y1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("y2").value = "";
    document.getElementById("x3").value = "";
    document.getElementById("y3").value = "";
}

function clearCanvas(){
    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
}

function changeVal(){
    var value = getValue();
    clearCanvas();
    if(value === shapes.Rectangle.value){
        makeRectangle();
    } else if (value === shapes.Triangle.value){
        makeTriangle();
    } else if (value === shapes.Circle.value){
        makeCircle();
    }
}

function makeText(shape){
    var perimeter = shape.getPerimeter();
    var areaSize = shape.getAreaSize();

    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.fillStyle = "#00F";
    ctx.font = "10pt Arial";
    ctx.fillText("perimeter: " + perimeter, 250, 20);
    ctx.fillText("areaSize: " + areaSize, 250, 40);
}

function makeRectangle(){
    var rectangle = new Rectangle();
    rectangle.x1 = document.getElementById("x1").value;
    rectangle.y1 = document.getElementById("y1").value;
    rectangle.x2 = document.getElementById("x2").value;
    rectangle.y2 = document.getElementById("y2").value;
    rectangle.prototype.setFillColor(document.getElementById("color").value);
    rectangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(rectangle);
    rectangle.draw();
}

function makeTriangle(){
    var triangle = new Triangle();
    triangle.x1 = document.getElementById("x1").value;
    triangle.y1 = document.getElementById("y1").value;
    triangle.x2 = document.getElementById("x2").value;
    triangle.y2 = document.getElementById("y2").value;
    triangle.x3 = document.getElementById("x3").value;
    triangle.y3 = document.getElementById("y3").value;
    triangle.prototype.setFillColor(document.getElementById("color").value);
    triangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(triangle);
    triangle.draw();
}

function makeCircle(){
    var circle = new Circle();
    circle.centerX = document.getElementById("x1").value;
    circle.centerY = document.getElementById("y1").value;
    circle.radius = document.getElementById("radius").value;
    circle.prototype.setFillColor(document.getElementById("color").value);
    circle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(circle);
    circle.draw();
}

function change(){
    var value = getValue();

    clearCanvas();
    clearFields();
    removeFields();
    if(value === shapes.Rectangle.value){
        var rectangle = new Rectangle();
        rectangle.draw();
        makeText(rectangle);
    } else if (value === shapes.Triangle.value){
        var triangle = new Triangle();
        triangle.draw();
        makeText(triangle);
    } else if (value === shapes.Circle.value){
        var circle = new Circle();
        circle.draw();
        makeText(circle);
    }
}

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


var shapes = {
    Triangle : {value: "1"}, 
    Circle: {value: "2"}, 
    Rectangle : {value: "3"}
};

function getValue(){
    var select, val;
    select = document.getElementById("shapes"); 
    val = select.value;
    return val;
}

function removeFields(){
    var value = getValue();
    if(value === shapes.Circle.value)
    {
        document.getElementById("radius").style.display = "block";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "none";
        document.getElementById("y2").style.display = "none";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
    else if(value === shapes.Triangle.value)
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "block";
        document.getElementById("y3").style.display = "block";
    }
    else
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "blockcd";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
}

function clearFields(){
    document.getElementById("color").value = "";
    document.getElementById("border_color").value = "";
    document.getElementById("radius").value = "";
    document.getElementById("x1").value = "";
    document.getElementById("y1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("y2").value = "";
    document.getElementById("x3").value = "";
    document.getElementById("y3").value = "";
}

function clearCanvas(){
    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
}

function changeVal(){
    var value = getValue();
    clearCanvas();
    if(value === shapes.Rectangle.value){
        makeRectangle();
    } else if (value === shapes.Triangle.value){
        makeTriangle();
    } else if (value === shapes.Circle.value){
        makeCircle();
    }
}

function makeText(shape){
    var perimeter = shape.getPerimeter();
    var areaSize = shape.getAreaSize();

    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.fillStyle = "#00F";
    ctx.font = "10pt Arial";
    ctx.fillText("perimeter: " + perimeter, 250, 20);
    ctx.fillText("areaSize: " + areaSize, 250, 40);
}

function makeRectangle(){
    var rectangle = new Rectangle();
    rectangle.x1 = document.getElementById("x1").value;
    rectangle.y1 = document.getElementById("y1").value;
    rectangle.x2 = document.getElementById("x2").value;
    rectangle.y2 = document.getElementById("y2").value;
    rectangle.prototype.setFillColor(document.getElementById("color").value);
    rectangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(rectangle);
    rectangle.draw();
}

function makeTriangle(){
    var triangle = new Triangle();
    triangle.x1 = document.getElementById("x1").value;
    triangle.y1 = document.getElementById("y1").value;
    triangle.x2 = document.getElementById("x2").value;
    triangle.y2 = document.getElementById("y2").value;
    triangle.x3 = document.getElementById("x3").value;
    triangle.y3 = document.getElementById("y3").value;
    triangle.prototype.setFillColor(document.getElementById("color").value);
    triangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(triangle);
    triangle.draw();
}

function makeCircle(){
    var circle = new Circle();
    circle.centerX = document.getElementById("x1").value;
    circle.centerY = document.getElementById("y1").value;
    circle.radius = document.getElementById("radius").value;
    circle.prototype.setFillColor(document.getElementById("color").value);
    circle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(circle);
    circle.draw();
}

function change(){
    var value = getValue();

    clearCanvas();
    clearFields();
    removeFields();
    if(value === shapes.Rectangle.value){
        var rectangle = new Rectangle();
        rectangle.draw();
        makeText(rectangle);
    } else if (value === shapes.Triangle.value){
        var triangle = new Triangle();
        triangle.draw();
        makeText(triangle);
    } else if (value === shapes.Circle.value){
        var circle = new Circle();
        circle.draw();
        makeText(circle);
    }
}

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


var shapes = {
    Triangle : {value: "1"}, 
    Circle: {value: "2"}, 
    Rectangle : {value: "3"}
};

function getValue(){
    var select, val;
    select = document.getElementById("shapes"); 
    val = select.value;
    return val;
}

function removeFields(){
    var value = getValue();
    if(value === shapes.Circle.value)
    {
        document.getElementById("radius").style.display = "block";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "none";
        document.getElementById("y2").style.display = "none";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
    else if(value === shapes.Triangle.value)
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "block";
        document.getElementById("y3").style.display = "block";
    }
    else
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "blockcd";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
}

function clearFields(){
    document.getElementById("color").value = "";
    document.getElementById("border_color").value = "";
    document.getElementById("radius").value = "";
    document.getElementById("x1").value = "";
    document.getElementById("y1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("y2").value = "";
    document.getElementById("x3").value = "";
    document.getElementById("y3").value = "";
}

function clearCanvas(){
    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
}

function changeVal(){
    var value = getValue();
    clearCanvas();
    if(value === shapes.Rectangle.value){
        makeRectangle();
    } else if (value === shapes.Triangle.value){
        makeTriangle();
    } else if (value === shapes.Circle.value){
        makeCircle();
    }
}

function makeText(shape){
    var perimeter = shape.getPerimeter();
    var areaSize = shape.getAreaSize();

    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.fillStyle = "#00F";
    ctx.font = "10pt Arial";
    ctx.fillText("perimeter: " + perimeter, 250, 20);
    ctx.fillText("areaSize: " + areaSize, 250, 40);
}

function makeRectangle(){
    var rectangle = new Rectangle();
    rectangle.x1 = document.getElementById("x1").value;
    rectangle.y1 = document.getElementById("y1").value;
    rectangle.x2 = document.getElementById("x2").value;
    rectangle.y2 = document.getElementById("y2").value;
    rectangle.prototype.setFillColor(document.getElementById("color").value);
    rectangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(rectangle);
    rectangle.draw();
}

function makeTriangle(){
    var triangle = new Triangle();
    triangle.x1 = document.getElementById("x1").value;
    triangle.y1 = document.getElementById("y1").value;
    triangle.x2 = document.getElementById("x2").value;
    triangle.y2 = document.getElementById("y2").value;
    triangle.x3 = document.getElementById("x3").value;
    triangle.y3 = document.getElementById("y3").value;
    triangle.prototype.setFillColor(document.getElementById("color").value);
    triangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(triangle);
    triangle.draw();
}

function makeCircle(){
    var circle = new Circle();
    circle.centerX = document.getElementById("x1").value;
    circle.centerY = document.getElementById("y1").value;
    circle.radius = document.getElementById("radius").value;
    circle.prototype.setFillColor(document.getElementById("color").value);
    circle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(circle);
    circle.draw();
}

function change(){
    var value = getValue();

    clearCanvas();
    clearFields();
    removeFields();
    if(value === shapes.Rectangle.value){
        var rectangle = new Rectangle();
        rectangle.draw();
        makeText(rectangle);
    } else if (value === shapes.Triangle.value){
        var triangle = new Triangle();
        triangle.draw();
        makeText(triangle);
    } else if (value === shapes.Circle.value){
        var circle = new Circle();
        circle.draw();
        makeText(circle);
    }
}

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


var shapes = {
    Triangle : {value: "1"}, 
    Circle: {value: "2"}, 
    Rectangle : {value: "3"}
};

function getValue(){
    var select, val;
    select = document.getElementById("shapes"); 
    val = select.value;
    return val;
}

function removeFields(){
    var value = getValue();
    if(value === shapes.Circle.value)
    {
        document.getElementById("radius").style.display = "block";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "none";
        document.getElementById("y2").style.display = "none";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
    else if(value === shapes.Triangle.value)
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "block";
        document.getElementById("y3").style.display = "block";
    }
    else
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "blockcd";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
}

function clearFields(){
    document.getElementById("color").value = "";
    document.getElementById("border_color").value = "";
    document.getElementById("radius").value = "";
    document.getElementById("x1").value = "";
    document.getElementById("y1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("y2").value = "";
    document.getElementById("x3").value = "";
    document.getElementById("y3").value = "";
}

function clearCanvas(){
    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
}

function changeVal(){
    var value = getValue();
    clearCanvas();
    if(value === shapes.Rectangle.value){
        makeRectangle();
    } else if (value === shapes.Triangle.value){
        makeTriangle();
    } else if (value === shapes.Circle.value){
        makeCircle();
    }
}

function makeText(shape){
    var perimeter = shape.getPerimeter();
    var areaSize = shape.getAreaSize();

    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.fillStyle = "#00F";
    ctx.font = "10pt Arial";
    ctx.fillText("perimeter: " + perimeter, 250, 20);
    ctx.fillText("areaSize: " + areaSize, 250, 40);
}

function makeRectangle(){
    var rectangle = new Rectangle();
    rectangle.x1 = document.getElementById("x1").value;
    rectangle.y1 = document.getElementById("y1").value;
    rectangle.x2 = document.getElementById("x2").value;
    rectangle.y2 = document.getElementById("y2").value;
    rectangle.prototype.setFillColor(document.getElementById("color").value);
    rectangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(rectangle);
    rectangle.draw();
}

function makeTriangle(){
    var triangle = new Triangle();
    triangle.x1 = document.getElementById("x1").value;
    triangle.y1 = document.getElementById("y1").value;
    triangle.x2 = document.getElementById("x2").value;
    triangle.y2 = document.getElementById("y2").value;
    triangle.x3 = document.getElementById("x3").value;
    triangle.y3 = document.getElementById("y3").value;
    triangle.prototype.setFillColor(document.getElementById("color").value);
    triangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(triangle);
    triangle.draw();
}

function makeCircle(){
    var circle = new Circle();
    circle.centerX = document.getElementById("x1").value;
    circle.centerY = document.getElementById("y1").value;
    circle.radius = document.getElementById("radius").value;
    circle.prototype.setFillColor(document.getElementById("color").value);
    circle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(circle);
    circle.draw();
}

function change(){
    var value = getValue();

    clearCanvas();
    clearFields();
    removeFields();
    if(value === shapes.Rectangle.value){
        var rectangle = new Rectangle();
        rectangle.draw();
        makeText(rectangle);
    } else if (value === shapes.Triangle.value){
        var triangle = new Triangle();
        triangle.draw();
        makeText(triangle);
    } else if (value === shapes.Circle.value){
        var circle = new Circle();
        circle.draw();
        makeText(circle);
    }
}

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


var shapes = {
    Triangle : {value: "1"}, 
    Circle: {value: "2"}, 
    Rectangle : {value: "3"}
};

function getValue(){
    var select, val;
    select = document.getElementById("shapes"); 
    val = select.value;
    return val;
}

function removeFields(){
    var value = getValue();
    if(value === shapes.Circle.value)
    {
        document.getElementById("radius").style.display = "block";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "none";
        document.getElementById("y2").style.display = "none";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
    else if(value === shapes.Triangle.value)
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "block";
        document.getElementById("y3").style.display = "block";
    }
    else
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "blockcd";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
}

function clearFields(){
    document.getElementById("color").value = "";
    document.getElementById("border_color").value = "";
    document.getElementById("radius").value = "";
    document.getElementById("x1").value = "";
    document.getElementById("y1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("y2").value = "";
    document.getElementById("x3").value = "";
    document.getElementById("y3").value = "";
}

function clearCanvas(){
    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
}

function changeVal(){
    var value = getValue();
    clearCanvas();
    if(value === shapes.Rectangle.value){
        makeRectangle();
    } else if (value === shapes.Triangle.value){
        makeTriangle();
    } else if (value === shapes.Circle.value){
        makeCircle();
    }
}

function makeText(shape){
    var perimeter = shape.getPerimeter();
    var areaSize = shape.getAreaSize();

    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.fillStyle = "#00F";
    ctx.font = "10pt Arial";
    ctx.fillText("perimeter: " + perimeter, 250, 20);
    ctx.fillText("areaSize: " + areaSize, 250, 40);
}

function makeRectangle(){
    var rectangle = new Rectangle();
    rectangle.x1 = document.getElementById("x1").value;
    rectangle.y1 = document.getElementById("y1").value;
    rectangle.x2 = document.getElementById("x2").value;
    rectangle.y2 = document.getElementById("y2").value;
    rectangle.prototype.setFillColor(document.getElementById("color").value);
    rectangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(rectangle);
    rectangle.draw();
}

function makeTriangle(){
    var triangle = new Triangle();
    triangle.x1 = document.getElementById("x1").value;
    triangle.y1 = document.getElementById("y1").value;
    triangle.x2 = document.getElementById("x2").value;
    triangle.y2 = document.getElementById("y2").value;
    triangle.x3 = document.getElementById("x3").value;
    triangle.y3 = document.getElementById("y3").value;
    triangle.prototype.setFillColor(document.getElementById("color").value);
    triangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(triangle);
    triangle.draw();
}

function makeCircle(){
    var circle = new Circle();
    circle.centerX = document.getElementById("x1").value;
    circle.centerY = document.getElementById("y1").value;
    circle.radius = document.getElementById("radius").value;
    circle.prototype.setFillColor(document.getElementById("color").value);
    circle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(circle);
    circle.draw();
}

function change(){
    var value = getValue();

    clearCanvas();
    clearFields();
    removeFields();
    if(value === shapes.Rectangle.value){
        var rectangle = new Rectangle();
        rectangle.draw();
        makeText(rectangle);
    } else if (value === shapes.Triangle.value){
        var triangle = new Triangle();
        triangle.draw();
        makeText(triangle);
    } else if (value === shapes.Circle.value){
        var circle = new Circle();
        circle.draw();
        makeText(circle);
    }
}

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


var shapes = {
    Triangle : {value: "1"}, 
    Circle: {value: "2"}, 
    Rectangle : {value: "3"}
};

function getValue(){
    var select, val;
    select = document.getElementById("shapes"); 
    val = select.value;
    return val;
}

function removeFields(){
    var value = getValue();
    if(value === shapes.Circle.value)
    {
        document.getElementById("radius").style.display = "block";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "none";
        document.getElementById("y2").style.display = "none";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
    else if(value === shapes.Triangle.value)
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "block";
        document.getElementById("y3").style.display = "block";
    }
    else
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "blockcd";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
}

function clearFields(){
    document.getElementById("color").value = "";
    document.getElementById("border_color").value = "";
    document.getElementById("radius").value = "";
    document.getElementById("x1").value = "";
    document.getElementById("y1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("y2").value = "";
    document.getElementById("x3").value = "";
    document.getElementById("y3").value = "";
}

function clearCanvas(){
    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
}

function changeVal(){
    var value = getValue();
    clearCanvas();
    if(value === shapes.Rectangle.value){
        makeRectangle();
    } else if (value === shapes.Triangle.value){
        makeTriangle();
    } else if (value === shapes.Circle.value){
        makeCircle();
    }
}

function makeText(shape){
    var perimeter = shape.getPerimeter();
    var areaSize = shape.getAreaSize();

    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.fillStyle = "#00F";
    ctx.font = "10pt Arial";
    ctx.fillText("perimeter: " + perimeter, 250, 20);
    ctx.fillText("areaSize: " + areaSize, 250, 40);
}

function makeRectangle(){
    var rectangle = new Rectangle();
    rectangle.x1 = document.getElementById("x1").value;
    rectangle.y1 = document.getElementById("y1").value;
    rectangle.x2 = document.getElementById("x2").value;
    rectangle.y2 = document.getElementById("y2").value;
    rectangle.prototype.setFillColor(document.getElementById("color").value);
    rectangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(rectangle);
    rectangle.draw();
}

function makeTriangle(){
    var triangle = new Triangle();
    triangle.x1 = document.getElementById("x1").value;
    triangle.y1 = document.getElementById("y1").value;
    triangle.x2 = document.getElementById("x2").value;
    triangle.y2 = document.getElementById("y2").value;
    triangle.x3 = document.getElementById("x3").value;
    triangle.y3 = document.getElementById("y3").value;
    triangle.prototype.setFillColor(document.getElementById("color").value);
    triangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(triangle);
    triangle.draw();
}

function makeCircle(){
    var circle = new Circle();
    circle.centerX = document.getElementById("x1").value;
    circle.centerY = document.getElementById("y1").value;
    circle.radius = document.getElementById("radius").value;
    circle.prototype.setFillColor(document.getElementById("color").value);
    circle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(circle);
    circle.draw();
}

function change(){
    var value = getValue();

    clearCanvas();
    clearFields();
    removeFields();
    if(value === shapes.Rectangle.value){
        var rectangle = new Rectangle();
        rectangle.draw();
        makeText(rectangle);
    } else if (value === shapes.Triangle.value){
        var triangle = new Triangle();
        triangle.draw();
        makeText(triangle);
    } else if (value === shapes.Circle.value){
        var circle = new Circle();
        circle.draw();
        makeText(circle);
    }
}

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


var shapes = {
    Triangle : {value: "1"}, 
    Circle: {value: "2"}, 
    Rectangle : {value: "3"}
};

function getValue(){
    var select, val;
    select = document.getElementById("shapes"); 
    val = select.value;
    return val;
}

function removeFields(){
    var value = getValue();
    if(value === shapes.Circle.value)
    {
        document.getElementById("radius").style.display = "block";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "none";
        document.getElementById("y2").style.display = "none";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
    else if(value === shapes.Triangle.value)
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "block";
        document.getElementById("y3").style.display = "block";
    }
    else
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "blockcd";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
}

function clearFields(){
    document.getElementById("color").value = "";
    document.getElementById("border_color").value = "";
    document.getElementById("radius").value = "";
    document.getElementById("x1").value = "";
    document.getElementById("y1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("y2").value = "";
    document.getElementById("x3").value = "";
    document.getElementById("y3").value = "";
}

function clearCanvas(){
    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
}

function changeVal(){
    var value = getValue();
    clearCanvas();
    if(value === shapes.Rectangle.value){
        makeRectangle();
    } else if (value === shapes.Triangle.value){
        makeTriangle();
    } else if (value === shapes.Circle.value){
        makeCircle();
    }
}

function makeText(shape){
    var perimeter = shape.getPerimeter();
    var areaSize = shape.getAreaSize();

    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.fillStyle = "#00F";
    ctx.font = "10pt Arial";
    ctx.fillText("perimeter: " + perimeter, 250, 20);
    ctx.fillText("areaSize: " + areaSize, 250, 40);
}

function makeRectangle(){
    var rectangle = new Rectangle();
    rectangle.x1 = document.getElementById("x1").value;
    rectangle.y1 = document.getElementById("y1").value;
    rectangle.x2 = document.getElementById("x2").value;
    rectangle.y2 = document.getElementById("y2").value;
    rectangle.prototype.setFillColor(document.getElementById("color").value);
    rectangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(rectangle);
    rectangle.draw();
}

function makeTriangle(){
    var triangle = new Triangle();
    triangle.x1 = document.getElementById("x1").value;
    triangle.y1 = document.getElementById("y1").value;
    triangle.x2 = document.getElementById("x2").value;
    triangle.y2 = document.getElementById("y2").value;
    triangle.x3 = document.getElementById("x3").value;
    triangle.y3 = document.getElementById("y3").value;
    triangle.prototype.setFillColor(document.getElementById("color").value);
    triangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(triangle);
    triangle.draw();
}

function makeCircle(){
    var circle = new Circle();
    circle.centerX = document.getElementById("x1").value;
    circle.centerY = document.getElementById("y1").value;
    circle.radius = document.getElementById("radius").value;
    circle.prototype.setFillColor(document.getElementById("color").value);
    circle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(circle);
    circle.draw();
}

function change(){
    var value = getValue();

    clearCanvas();
    clearFields();
    removeFields();
    if(value === shapes.Rectangle.value){
        var rectangle = new Rectangle();
        rectangle.draw();
        makeText(rectangle);
    } else if (value === shapes.Triangle.value){
        var triangle = new Triangle();
        triangle.draw();
        makeText(triangle);
    } else if (value === shapes.Circle.value){
        var circle = new Circle();
        circle.draw();
        makeText(circle);
    }
}

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


var shapes = {
    Triangle : {value: "1"}, 
    Circle: {value: "2"}, 
    Rectangle : {value: "3"}
};

function getValue(){
    var select, val;
    select = document.getElementById("shapes"); 
    val = select.value;
    return val;
}

function removeFields(){
    var value = getValue();
    if(value === shapes.Circle.value)
    {
        document.getElementById("radius").style.display = "block";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "none";
        document.getElementById("y2").style.display = "none";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
    else if(value === shapes.Triangle.value)
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "block";
        document.getElementById("y3").style.display = "block";
    }
    else
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "blockcd";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
}

function clearFields(){
    document.getElementById("color").value = "";
    document.getElementById("border_color").value = "";
    document.getElementById("radius").value = "";
    document.getElementById("x1").value = "";
    document.getElementById("y1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("y2").value = "";
    document.getElementById("x3").value = "";
    document.getElementById("y3").value = "";
}

function clearCanvas(){
    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
}

function changeVal(){
    var value = getValue();
    clearCanvas();
    if(value === shapes.Rectangle.value){
        makeRectangle();
    } else if (value === shapes.Triangle.value){
        makeTriangle();
    } else if (value === shapes.Circle.value){
        makeCircle();
    }
}

function makeText(shape){
    var perimeter = shape.getPerimeter();
    var areaSize = shape.getAreaSize();

    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.fillStyle = "#00F";
    ctx.font = "10pt Arial";
    ctx.fillText("perimeter: " + perimeter, 250, 20);
    ctx.fillText("areaSize: " + areaSize, 250, 40);
}

function makeRectangle(){
    var rectangle = new Rectangle();
    rectangle.x1 = document.getElementById("x1").value;
    rectangle.y1 = document.getElementById("y1").value;
    rectangle.x2 = document.getElementById("x2").value;
    rectangle.y2 = document.getElementById("y2").value;
    rectangle.prototype.setFillColor(document.getElementById("color").value);
    rectangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(rectangle);
    rectangle.draw();
}

function makeTriangle(){
    var triangle = new Triangle();
    triangle.x1 = document.getElementById("x1").value;
    triangle.y1 = document.getElementById("y1").value;
    triangle.x2 = document.getElementById("x2").value;
    triangle.y2 = document.getElementById("y2").value;
    triangle.x3 = document.getElementById("x3").value;
    triangle.y3 = document.getElementById("y3").value;
    triangle.prototype.setFillColor(document.getElementById("color").value);
    triangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(triangle);
    triangle.draw();
}

function makeCircle(){
    var circle = new Circle();
    circle.centerX = document.getElementById("x1").value;
    circle.centerY = document.getElementById("y1").value;
    circle.radius = document.getElementById("radius").value;
    circle.prototype.setFillColor(document.getElementById("color").value);
    circle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(circle);
    circle.draw();
}

function change(){
    var value = getValue();

    clearCanvas();
    clearFields();
    removeFields();
    if(value === shapes.Rectangle.value){
        var rectangle = new Rectangle();
        rectangle.draw();
        makeText(rectangle);
    } else if (value === shapes.Triangle.value){
        var triangle = new Triangle();
        triangle.draw();
        makeText(triangle);
    } else if (value === shapes.Circle.value){
        var circle = new Circle();
        circle.draw();
        makeText(circle);
    }
}

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


var shapes = {
    Triangle : {value: "1"}, 
    Circle: {value: "2"}, 
    Rectangle : {value: "3"}
};

function getValue(){
    var select, val;
    select = document.getElementById("shapes"); 
    val = select.value;
    return val;
}

function removeFields(){
    var value = getValue();
    if(value === shapes.Circle.value)
    {
        document.getElementById("radius").style.display = "block";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "none";
        document.getElementById("y2").style.display = "none";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
    else if(value === shapes.Triangle.value)
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "block";
        document.getElementById("y3").style.display = "block";
    }
    else
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "blockcd";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
}

function clearFields(){
    document.getElementById("color").value = "";
    document.getElementById("border_color").value = "";
    document.getElementById("radius").value = "";
    document.getElementById("x1").value = "";
    document.getElementById("y1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("y2").value = "";
    document.getElementById("x3").value = "";
    document.getElementById("y3").value = "";
}

function clearCanvas(){
    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
}

function changeVal(){
    var value = getValue();
    clearCanvas();
    if(value === shapes.Rectangle.value){
        makeRectangle();
    } else if (value === shapes.Triangle.value){
        makeTriangle();
    } else if (value === shapes.Circle.value){
        makeCircle();
    }
}

function makeText(shape){
    var perimeter = shape.getPerimeter();
    var areaSize = shape.getAreaSize();

    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.fillStyle = "#00F";
    ctx.font = "10pt Arial";
    ctx.fillText("perimeter: " + perimeter, 250, 20);
    ctx.fillText("areaSize: " + areaSize, 250, 40);
}

function makeRectangle(){
    var rectangle = new Rectangle();
    rectangle.x1 = document.getElementById("x1").value;
    rectangle.y1 = document.getElementById("y1").value;
    rectangle.x2 = document.getElementById("x2").value;
    rectangle.y2 = document.getElementById("y2").value;
    rectangle.prototype.setFillColor(document.getElementById("color").value);
    rectangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(rectangle);
    rectangle.draw();
}

function makeTriangle(){
    var triangle = new Triangle();
    triangle.x1 = document.getElementById("x1").value;
    triangle.y1 = document.getElementById("y1").value;
    triangle.x2 = document.getElementById("x2").value;
    triangle.y2 = document.getElementById("y2").value;
    triangle.x3 = document.getElementById("x3").value;
    triangle.y3 = document.getElementById("y3").value;
    triangle.prototype.setFillColor(document.getElementById("color").value);
    triangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(triangle);
    triangle.draw();
}

function makeCircle(){
    var circle = new Circle();
    circle.centerX = document.getElementById("x1").value;
    circle.centerY = document.getElementById("y1").value;
    circle.radius = document.getElementById("radius").value;
    circle.prototype.setFillColor(document.getElementById("color").value);
    circle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(circle);
    circle.draw();
}

function change(){
    var value = getValue();

    clearCanvas();
    clearFields();
    removeFields();
    if(value === shapes.Rectangle.value){
        var rectangle = new Rectangle();
        rectangle.draw();
        makeText(rectangle);
    } else if (value === shapes.Triangle.value){
        var triangle = new Triangle();
        triangle.draw();
        makeText(triangle);
    } else if (value === shapes.Circle.value){
        var circle = new Circle();
        circle.draw();
        makeText(circle);
    }
}

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


var shapes = {
    Triangle : {value: "1"}, 
    Circle: {value: "2"}, 
    Rectangle : {value: "3"}
};

function getValue(){
    var select, val;
    select = document.getElementById("shapes"); 
    val = select.value;
    return val;
}

function removeFields(){
    var value = getValue();
    if(value === shapes.Circle.value)
    {
        document.getElementById("radius").style.display = "block";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "none";
        document.getElementById("y2").style.display = "none";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
    else if(value === shapes.Triangle.value)
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "block";
        document.getElementById("y3").style.display = "block";
    }
    else
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "blockcd";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
}

function clearFields(){
    document.getElementById("color").value = "";
    document.getElementById("border_color").value = "";
    document.getElementById("radius").value = "";
    document.getElementById("x1").value = "";
    document.getElementById("y1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("y2").value = "";
    document.getElementById("x3").value = "";
    document.getElementById("y3").value = "";
}

function clearCanvas(){
    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
}

function changeVal(){
    var value = getValue();
    clearCanvas();
    if(value === shapes.Rectangle.value){
        makeRectangle();
    } else if (value === shapes.Triangle.value){
        makeTriangle();
    } else if (value === shapes.Circle.value){
        makeCircle();
    }
}

function makeText(shape){
    var perimeter = shape.getPerimeter();
    var areaSize = shape.getAreaSize();

    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.fillStyle = "#00F";
    ctx.font = "10pt Arial";
    ctx.fillText("perimeter: " + perimeter, 250, 20);
    ctx.fillText("areaSize: " + areaSize, 250, 40);
}

function makeRectangle(){
    var rectangle = new Rectangle();
    rectangle.x1 = document.getElementById("x1").value;
    rectangle.y1 = document.getElementById("y1").value;
    rectangle.x2 = document.getElementById("x2").value;
    rectangle.y2 = document.getElementById("y2").value;
    rectangle.prototype.setFillColor(document.getElementById("color").value);
    rectangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(rectangle);
    rectangle.draw();
}

function makeTriangle(){
    var triangle = new Triangle();
    triangle.x1 = document.getElementById("x1").value;
    triangle.y1 = document.getElementById("y1").value;
    triangle.x2 = document.getElementById("x2").value;
    triangle.y2 = document.getElementById("y2").value;
    triangle.x3 = document.getElementById("x3").value;
    triangle.y3 = document.getElementById("y3").value;
    triangle.prototype.setFillColor(document.getElementById("color").value);
    triangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(triangle);
    triangle.draw();
}

function makeCircle(){
    var circle = new Circle();
    circle.centerX = document.getElementById("x1").value;
    circle.centerY = document.getElementById("y1").value;
    circle.radius = document.getElementById("radius").value;
    circle.prototype.setFillColor(document.getElementById("color").value);
    circle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(circle);
    circle.draw();
}

function change(){
    var value = getValue();

    clearCanvas();
    clearFields();
    removeFields();
    if(value === shapes.Rectangle.value){
        var rectangle = new Rectangle();
        rectangle.draw();
        makeText(rectangle);
    } else if (value === shapes.Triangle.value){
        var triangle = new Triangle();
        triangle.draw();
        makeText(triangle);
    } else if (value === shapes.Circle.value){
        var circle = new Circle();
        circle.draw();
        makeText(circle);
    }
}

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


var shapes = {
    Triangle : {value: "1"}, 
    Circle: {value: "2"}, 
    Rectangle : {value: "3"}
};

function getValue(){
    var select, val;
    select = document.getElementById("shapes"); 
    val = select.value;
    return val;
}

function removeFields(){
    var value = getValue();
    if(value === shapes.Circle.value)
    {
        document.getElementById("radius").style.display = "block";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "none";
        document.getElementById("y2").style.display = "none";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
    else if(value === shapes.Triangle.value)
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "block";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "block";
        document.getElementById("y3").style.display = "block";
    }
    else
    {
        document.getElementById("radius").style.display = "none";
        document.getElementById("x1").style.display = "blockcd";
        document.getElementById("y1").style.display = "block";
        document.getElementById("x2").style.display = "block";
        document.getElementById("y2").style.display = "block";
        document.getElementById("x3").style.display = "none";
        document.getElementById("y3").style.display = "none";
    }
}

function clearFields(){
    document.getElementById("color").value = "";
    document.getElementById("border_color").value = "";
    document.getElementById("radius").value = "";
    document.getElementById("x1").value = "";
    document.getElementById("y1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("y2").value = "";
    document.getElementById("x3").value = "";
    document.getElementById("y3").value = "";
}

function clearCanvas(){
    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
}

function changeVal(){
    var value = getValue();
    clearCanvas();
    if(value === shapes.Rectangle.value){
        makeRectangle();
    } else if (value === shapes.Triangle.value){
        makeTriangle();
    } else if (value === shapes.Circle.value){
        makeCircle();
    }
}

function makeText(shape){
    var perimeter = shape.getPerimeter();
    var areaSize = shape.getAreaSize();

    var drawingArea = document.getElementById("canvasArea");
    var ctx = drawingArea.getContext("2d");

    ctx.fillStyle = "#00F";
    ctx.font = "10pt Arial";
    ctx.fillText("perimeter: " + perimeter, 250, 20);
    ctx.fillText("areaSize: " + areaSize, 250, 40);
}

function makeRectangle(){
    var rectangle = new Rectangle();
    rectangle.x1 = document.getElementById("x1").value;
    rectangle.y1 = document.getElementById("y1").value;
    rectangle.x2 = document.getElementById("x2").value;
    rectangle.y2 = document.getElementById("y2").value;
    rectangle.prototype.setFillColor(document.getElementById("color").value);
    rectangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(rectangle);
    rectangle.draw();
}

function makeTriangle(){
    var triangle = new Triangle();
    triangle.x1 = document.getElementById("x1").value;
    triangle.y1 = document.getElementById("y1").value;
    triangle.x2 = document.getElementById("x2").value;
    triangle.y2 = document.getElementById("y2").value;
    triangle.x3 = document.getElementById("x3").value;
    triangle.y3 = document.getElementById("y3").value;
    triangle.prototype.setFillColor(document.getElementById("color").value);
    triangle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(triangle);
    triangle.draw();
}

function makeCircle(){
    var circle = new Circle();
    circle.centerX = document.getElementById("x1").value;
    circle.centerY = document.getElementById("y1").value;
    circle.radius = document.getElementById("radius").value;
    circle.prototype.setFillColor(document.getElementById("color").value);
    circle.prototype.setOutlineColor(document.getElementById("border_color").value);
    makeText(circle);
    circle.draw();
}

function change(){
    var value = getValue();

    clearCanvas();
    clearFields();
    removeFields();
    if(value === shapes.Rectangle.value){
        var rectangle = new Rectangle();
        rectangle.draw();
        makeText(rectangle);
    } else if (value === shapes.Triangle.value){
        var triangle = new Triangle();
        triangle.draw();
        makeText(triangle);
    } else if (value === shapes.Circle.value){
        var circle = new Circle();
        circle.draw();
        makeText(circle);
    }
}

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
