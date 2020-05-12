/**
TODO: Do the work */

function writeMessage(message) {
  text.text(message);
  layer.draw();
}

let stage = new Konva.Stage({
  container: "container",
  width: window.innerWidth,
  height: window.innerHeight,
});

let layer = new Konva.Layer();

let circle = new Konva.Circle({
  x: 950,
  y: 460,
  radius: 100,
  fill: "red",
  stroke: "black",
  draggable: true,
  strokeWidth: 8,
  shadowColor: "black",
  shadowBlur: 30,
  shadowOffset: { x: 40, y: 10 },
  shadowOpacity: 0.5,
});
layer.add(circle);
circle.on("mouseover", function () {
  writeMessage("You are seeing a Circle");
  this.fill("grey");
  layer.draw();
});
circle.on("mouseout", function () {
  writeMessage("Bye Bye");
  this.fill("red");
  layer.draw();
});

let rect = new Konva.Rect({
  x: 40,
  y: 250,
  width: 200,
  height: 150,
  fill: "green",
  stroke: "black",
  strokeWidth: 4,
  draggable: true,
});
layer.add(rect);

rect.on("mouseover", function () {
  writeMessage("You are seeing a Rectangle");
  document.body.style.cursor = "pointer";
  this.fill("yellow");
  this.stroke("red");
  layer.draw();
});
rect.on("mouseout", function () {
  writeMessage("Bye Bye");
  document.body.style.cursor = "pointer";
  this.fill("green");
  this.stroke("black");
  layer.draw();
});

var triangle = new Konva.RegularPolygon({
  x: 600,
  y: 250,
  sides: 3,
  radius: 80,
  fill: "#00D2FF",
  stroke: "black",
  strokeWidth: 4,
  draggable: true,
  shadowColor: "black",
  shadowBlur: 50,
  shadowOffset: { x: 0, y: 30 },
  shadowOpacity: 0.8,
});
layer.add(triangle);

triangle.on("mouseover", function () {
  writeMessage("You are seeing a Triangle");
  document.body.style.cursor = "pointer";
  this.fill("blue");
  layer.draw();
});
triangle.on("mouseout", function () {
  writeMessage("Bye Bye");
  this.fill("#00D2FF");
  document.body.style.cursor = "pointer";
  layer.draw();
});

var star = new Konva.Star({
  x: 1000,
  y: 100,
  numPoints: 7,
  innerRadius: 40,
  outerRadius: 70,
  fill: "coral",
  stroke: "black",
  strokeWidth: 4,
  draggable: true,
  shadowColor: "black",
  shadowBlur: 40,
  shadowOffset: { x: 0, y: 30 },
  shadowOpacity: 0.5,
});

layer.add(star);

star.on("mouseover", function () {
  writeMessage("You are seeing a Star");
  this.fill("red");
  layer.draw();
});
star.on("mouseout", function () {
  writeMessage("Bye Bye");
  this.fill("coral");
  layer.draw();
});

var text = new Konva.Text({
  x: 500,
  y: 10,
  fontSize: 40,
  text: "",
  fill: "blue",
});

layer.add(text);

stage.add(layer);