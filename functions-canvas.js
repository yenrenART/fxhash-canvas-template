// Adds shadow
function shadow(x, y, blur, c) {
	ctx.shadowOffsetX = x; ctx.shadowOffsetY = y; ctx.shadowBlur = blur; ctx.shadowColor = '#'+c;
}

// Rotates around point [x,y] by angle a (degrees)
function rotateC(x, y, a) {
	ctx.translate(x, y); ctx.rotate(a * Math.PI / 180); ctx.translate(-x, -y);
}

// Draws a line from point 1 [x1,y1] to point 2 [x2,y2], with width t and color c (HEX)
function line(x1, y1, x2, y2, t, c) {
	ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.lineWidth = t; ctx.strokeStyle = '#'+c; ctx.stroke();
}

// Draws a rectangle
function rectangle(x, y, w, h, c) {
	ctx.fillStyle = '#'+c; ctx.fillRect(x, y, w, h);
}

// Draws an empty rectangle
function rectangleE(x, y, w, h, t, c) {
	ctx.lineWidth = t; ctx.strokeStyle = '#'+c; ctx.strokeRect(x, y, w, h);
}

// Draws a rectangle with border - cs border color, cf fill color
function rectangleF(x, y, w, h, t, cs, cf) {
	ctx.lineWidth = t; ctx.strokeStyle = '#'+cs; ctx.strokeRect(x, y, w, h); ctx.fillStyle = '#'+cf; ctx.fillRect(x + t / 2, y + t / 2, w - t, h - t);
}

// Draws a triangle
function triangle(x1, y1, x2, y2, x3, y3, c) {
	ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.lineTo(x3, y3); ctx.fillStyle = '#'+c; ctx.fill();
}

// Draws an empty triangle
function triangleE(x1, y1, x2, y2, x3, y3, t, c) {
	ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.lineTo(x3, y3); ctx.closePath(); ctx.lineWidth = t; ctx.strokeStyle = '#'+c; ctx.stroke();
}

// Draws a triangle with border
function triangleF(x1, y1, x2, y2, x3, y3, t, cs, cf) {
	ctx.beginPath(); ctx.moveTo(x1 - t / 2, y1 - t / 2); ctx.lineTo(x2 - t / 2, y2 - t / 2); ctx.lineTo(x3 - t / 2, y3 - t / 2); ctx.closePath(); ctx.lineWidth = t * 2; ctx.strokeStyle = '#'+cs; ctx.stroke(); ctx.fillStyle = '#'+cf; ctx.fill();
}

// Draws an arc starting at point [x,y], with radius r and start/end angles in radians (0 < start/end < 2)
function arcE(x, y, r, start, end, t, c) {
	ctx.beginPath(); ctx.arc(x, y, r, start * Math.PI, end * Math.PI); ctx.lineWidth = t; ctx.strokeStyle = '#'+c; ctx.stroke();
}

// Draws a circle
function circle(x, y, r, c) {
	ctx.beginPath(); ctx.arc(x, y, r, 0, 2 * Math.PI); ctx.fillStyle = '#'+c; ctx.fill();
}

// Draws an empty circle
function circleE(x, y, r, t, c) {
	ctx.beginPath(); ctx.arc(x, y, r, 0, 2 * Math.PI); ctx.lineWidth = t; ctx.strokeStyle = '#'+c; ctx.stroke();
}

// Draws a circle with border
function circleF(x, y, r, t, cs, cf) {
	ctx.beginPath(); ctx.arc(x, y, r - t / 2, 0, 2 * Math.PI); ctx.lineWidth = t * 2; ctx.strokeStyle = '#'+cs; ctx.stroke(); ctx.fillStyle = '#'+cf; ctx.fill();
}

// Draws a half circle starting at angle in radians (0 < angle < 2)
function circle2(x, y, r, angle, c) {
	ctx.beginPath(); ctx.arc(x, y, r, angle * Math.PI, (angle + 1) * Math.PI); ctx.fillStyle = '#'+c; ctx.fill();
}

// Draws a quarter circle starting at angle in radians (0 < angle < 2)
function circle4(x, y, r, angle, c) {
	ctx.beginPath(); ctx.moveTo(x, y); ctx.arc(x, y, r, angle * Math.PI, (angle + 0.5) * Math.PI); ctx.fillStyle = '#'+c; ctx.fill();
}

// Draws an ellipse with rotation in radians (0 < rotation < 2)
function elips(x, y, r1, r2, rotation, c) {
	ctx.beginPath(); ctx.ellipse(x, y, r1, r2, rotation * Math.PI, 0, 2 * Math.PI); ctx.fillStyle = '#'+c; ctx.fill();
}

// Draws an empty ellipse
function elipsE(x, y, r1, r2, rotation, t, c) {
	ctx.beginPath(); ctx.ellipse(x, y, r1, r2, rotation * Math.PI, 0, 2 * Math.PI); ctx.lineWidth = t; ctx.strokeStyle = '#'+c; ctx.stroke();
}

// Draws an ellipse with border
function elipsF(x, y, r1, r2, rotation, t, cs, cf) {
	ctx.beginPath(); ctx.ellipse(x, y, r1 - t / 2, r2 - t / 2, rotation * Math.PI, 0, 2 * Math.PI); ctx.lineWidth = t * 2; ctx.strokeStyle = '#'+cs; ctx.stroke(); ctx.fillStyle = '#'+cf; ctx.fill();
}

// Draws a polygon from given points - [[x1,y1],[x2,y2],[x3,y3],...]
function poly(points, c) {
	ctx.beginPath(); ctx.moveTo(points[0][0], points[0][1]); for (let i = 1; i < points.length; i++) ctx.lineTo(points[i][0], points[i][1]); ctx.fillStyle = '#'+c; ctx.fill();
}

// Draws an empty polygon
function polyE(points, t, c) {
	ctx.beginPath(); ctx.moveTo(points[0][0], points[0][1]); for (let i = 1; i < points.length; i++) ctx.lineTo(points[i][0], points[i][1]); ctx.closePath(); ctx.lineWidth = t; ctx.strokeStyle = '#'+c; ctx.stroke();
}

// Draws a polygon with border
function polyF(points, t, cs, cf) {
	ctx.beginPath(); ctx.moveTo(points[0][0], points[0][1]); for (let i = 1; i < points.length; i++) ctx.lineTo(points[i][0], points[i][1]); ctx.closePath(); ctx.lineWidth = t * 2; ctx.strokeStyle = '#'+cs; ctx.stroke(); ctx.fillStyle = '#'+cf; ctx.fill();
}
