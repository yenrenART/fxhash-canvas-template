// Canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Rarities
const pointsR = [{v:1,w:15},{v:2,w:25},{v:3,w:25},{v:4,w:35}];

// Features
var nPoints = rarityPicker(pointsR, fxrand());

function draw() {
	// Canvas size
	var w = canvas.width = canvas.height = Math.min(window.innerWidth, window.innerHeight);
		
	// Draw your design here...
	
	// Don't use fxrand() here. Assign fxrand() to variables or arrays outside draw() and use those variables or arrays here.
	
	// Capture preview after all drawing is done
	fxpreview();
}

// Adds 0.2s delay during resize to reduce browser load.
window.onload = draw; var d; window.onresize = function() { clearTimeout(d); d = setTimeout(draw, 200) };

window.$fxhashFeatures = {
	'Number of Points' : nPoints
}

console.log(fxhash);
console.table($fxhashFeatures);
