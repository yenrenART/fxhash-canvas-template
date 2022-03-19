// Canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Rarities
const pointsR = [{v:1,w:15},{v:2,w:25},{v:3,w:25},{v:4,w:35}];

// Features
var nPoints = rarityPicker(pointsR, fxrand());

function draw() {
	// Canvas size
	var w = canvas.width = canvas.height = (window.innerWidth > window.innerHeight) ? window.innerHeight : window.innerWidth;
		
	// Draw your design here...
	
	// Capture preview after all drawing is done
	fxpreview();
}

draw();
window.onresize = draw;

window.$fxhashFeatures = {
	'Number of Points' : nPoints
}

console.log(fxhash);
console.table($fxhashFeatures);
