// Adds shadow - c is color (HEX)
function shadow(x, y, blur, c) {
	ctx.shadowOffsetX = x; ctx.shadowOffsetY = y; ctx.shadowBlur = blur; ctx.shadowColor = '#'+c;
}

// Rotates around point [x,y] by angle a (degrees)
function rotateC(x, y, a) {
	ctx.translate(x, y); ctx.rotate(a * Math.PI / 180); ctx.translate(-x, -y);
}

// Draws a line from point 1 [x1,y1] to point 2 [x2,y2], with width t
function line(x1, y1, x2, y2, t, c) {
	ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.lineWidth = t; ctx.strokeStyle = '#'+c; ctx.stroke();
}
