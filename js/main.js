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
