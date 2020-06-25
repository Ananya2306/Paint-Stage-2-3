var database;
var drawing = [];
var currentPath = [];

function setup(){
    var canvas = createCanvas(1000,500);
    canvas.mousePressed(startPath);
    canvas.mouseReleased(endPath);

     var clearButton = select('#clearButton');
    clearButton.mousePressed(clearDrawing);

}
function startPath(){
    currentPath = [];
    drawing.push(currentPath);
}function endPath(){
    
}
function draw(){
    background("black");

    if(mouseIsPressed) {
        var point = {
            x: mouseX,
            y: mouseY
        }
        currentPath.push(point);
    }
    noFill("red");
    stroke(255);
    strokeWeight(4);
    
    for(var i = 0; i< drawing.length; i++){
        var path = drawing[i];
        beginShape();
        for(var p = 0; p< path.length; p++){
            vertex(path[p].x, path[p].y);
        }
        endShape();
    }
    
}
function clearDrawing() {
    drawing = [];
}


