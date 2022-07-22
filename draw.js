// Rarities
const pointsR = [{v:1,w:15},{v:2,w:25},{v:3,w:25},{v:4,w:35}];

// Features
var nPoints = rarityPicker(pointsR, fxrand());

function draw() {
	fxrand = sfc32(...hashes);
	
	// Use one of the canvas size options:
	// 1) Square
	let cw = canvas.width = canvas.height = Math.min(window.innerWidth, window.innerHeight);
	
	// 2) Aspect ratio
	let cw, ch, ar = 0.75;
	if (window.innerWidth < ar * window.innerHeight) {
		cw = canvas.width = window.innerWidth; ch = canvas.height = cw / ar;
	} else {
		ch = canvas.height = window.innerHeight; cw = canvas.width = ch * ar;
	}
	
	// Size unit
	let size = 1000;
	let u = cw / size;
		
	// Draw your artwork here...
	
	// Capture preview after all drawing is done
	fxpreview();
}

// Adds 0.1s delay during resize to reduce browser load
window.onload = draw; var d; window.onresize = function() { clearTimeout(d); d = setTimeout(draw, 100) };

// S - Save PNG
document.addEventListener('keydown', function(e) {
	if (e.keyCode == 83) {
		let a = document.createElement('a'); a.download = 'ARTWORK-TITLE-by-ARTIST.png'; a.href = canvas.toDataURL('image/png'); a.click();
	}
});

window.$fxhashFeatures = {
	'Number of Points' : nPoints
}

// Remove
console.log(fxhash);
console.table($fxhashFeatures);
