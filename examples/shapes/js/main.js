
// Discuss using the dom to get a reference to our canvas.
var canvas = document.getElementById("myCanvas");

/**
 * Discuss context,
 * we're going to be working with is CanvasRenderingContext2D
 * it allows us to draw in 2d on the canvas. Canvas also has a 3d rendering context.
 * Mention going to the documentation and checking out its functions on Mozillas
 *
 */
var ctx = canvas.getContext('2d');


/**
 * How-to : draw a regular rectangle
 */
ctx.strokeRect(10,10,20, 30);

/**
 * How-to : change stroke size and color the line
 */
ctx.lineWidth = 10;
ctx.strokeStyle = "blue";
ctx.strokeRect(40, 10, 30, 30)

/**
 * How-to : Draw a filled Rectangle
 */
ctx.fillRect(80,10, 30,30)

/**
 * How-to change stroke color
 * 'red'
 * '#ff0000'
 * 'rgb(255,0,0)'
 * 'rgba(255,0,0,1)'web
 */
ctx.fillStyle = 'rgba(255,0,0)';
ctx.fillRect(120,10, 30,30)

/**
 * Erase using clearRect
 */
// ctx.clearRect(0, 0, 900, 400);

/**
 * Drawing paths (triangles)
 * A path is a list of points, connected by segments of lines that can be of different shapes, curved or not, of
 * different width and of different color. A path, or even a subpath, can be closed. To make shapes using paths,
 */
ctx.lineWidth = 3;
ctx.strokeStyle = "black";

// Draw a line
ctx.beginPath();
ctx.moveTo(10,70)
ctx.lineTo(10,120);
ctx.stroke();

// Draw a triangle
ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.moveTo(60, 70);
ctx.lineTo(40,100);
ctx.lineTo(80,100);
ctx.lineTo(60,70);
ctx.stroke();
ctx.fill();

// close path shape
ctx.strokeStyle = "orange";
ctx.beginPath();
ctx.moveTo(110, 70);
ctx.lineTo(90,100);
ctx.lineTo(130,100);
ctx.closePath();
ctx.stroke();

/**
 * How to draw arcs and circles
 */
ctx.beginPath();
ctx.arc(150, 80, 10, 0, 2* Math.PI);
ctx.stroke();