var ctx = document.getElementById('myCanvas').getContext('2d');

/**
 * Stroke and Fill colors with and without alpha
 */
// Different was to change fill and stroke color
ctx.fillStyle = 'red';
ctx.strokeStyle = '#00FF00';

ctx.fillRect(10,0,10,10);
ctx.strokeRect(30,0,10,10);

ctx.fillStyle = 'rgba(0,0,255,.3)';
ctx.strokeStyle = 'rgb(255,255,0)';

ctx.fillRect(50,0,10,10);
ctx.strokeRect(70, 0,10,10);
// Reset stroke color
ctx.strokeStyle = 'black';

/**
 * GlobalAlpha
 */
// Global Alpha
// ctx.globalAlpha = .5;

/**
 * Line styles
 */
// line width
for(var i = 1; i <= 5; i++){
    ctx.lineWidth = i;
    ctx.beginPath();
    ctx.moveTo(i*10, 100);
    ctx.lineTo(i*10, 110);
    ctx.stroke();
}
// dashed patterns
ctx.beginPath();
ctx.setLineDash([15,2,30,10]);
ctx.moveTo(5,90);
ctx.lineTo(200,90);
ctx.stroke();

/**
 * Gradients
 */
//Create a linear gradient with 2 color stops
var lingrad = ctx.createLinearGradient(10, 10, 60, 60);
lingrad.addColorStop(0, '#00ABEB');
lingrad.addColorStop(0.5, '#000');
ctx.fillStyle = lingrad;
ctx.fillRect(10, 10, 50, 50);

//Create radial Gradient
var radgrad = ctx.createRadialGradient(70, 10, 5, 120, 60, 5);
radgrad.addColorStop(0, '#ff0000');
radgrad.addColorStop(0.5, '#000000');
ctx.fillStyle = radgrad;
ctx.fillRect(70, 10, 50, 50);

/**
 * Image Patterns
 */
var image = new Image();
image.src = 'https://static.wixstatic.com/media/d8d7c1_cbce40393a774b07bcc1945d7c9a1f5d~mv2.png/v1/fill/w_60,h_60,al_c,q_85,usm_0.66_1.00_0.01/5%20version%20of%20the%20logo%20(no%20background)%20bl.webp';
image.onload = function() {
    var ptrn = ctx.createPattern(image, 'repeat');
    ctx.fillStyle = ptrn;
    ctx.fillRect(150, 0, 90, 60);
}

/**
 * Shadows
 */
ctx.fillStyle = 'black';
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 5;
ctx.shadowBlur = 2;
ctx.shadowColor = 'rgba(10, 0, 0, 0.5)';
ctx.fillRect(70, 100, 25, 25);