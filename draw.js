// Aspect Ratio - Use one ar option below with any values you want
var ar = 1; // Fixed ar
var ar = randomItem([0.8, 1, 1.25]); // Varying ar

// Rarities - Use of rarities is optional
const pointsR = [{v:1,w:15},{v:2,w:25},{v:3,w:25},{v:4,w:35}];

// Features
var nPoints = rarityPicker(pointsR);

// Base Units - 1000 is base units for the canvas width, use any value you want
var cw = 1000, ch = cw / ar;

function draw() {
	// Default Canvas Size - 1200px width, use any value you want
	fxrand = sfc32(...hashes); setup(1200);
	
	// Draw your artwork here...
	ctx.fillStyle = '#006600';
	ctx.fillRect(300, 300, 400, 400);
	
	// Capture preview after all drawing is done
	fxpreview();
}

// Adds 0.1s delay during resize to reduce browser load
onload = draw; var d; onresize = function() { clearTimeout(d); d = setTimeout(draw, 100) };

// S - Save PNG
document.addEventListener('keydown', function(e) {
	if (e.keyCode == 83) {
		let a = document.createElement('a'); a.download = 'ARTWORK-TITLE-by-ARTIST.png'; a.href = canvas.toDataURL('image/png'); a.click();
	}
});

// Features - Use of features is optional
window.$fxhashFeatures = {
	'Number of Points' : nPoints
}

// Remove
console.log(fxhash);
console.table($fxhashFeatures);
