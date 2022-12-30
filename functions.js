var canvas = document.querySelector('canvas'), ctx = canvas.getContext('2d', { alpha:false });
var save = location.search.split('s=')[1];

// Shorten fxrand() to fx()
function fx() { return fxrand() }

// Random number between min/max (both inclusive)
function randomNumber(min, max) {
	return Math.floor(fx() * (max - min + 1) + min);
}

// Random array item
function randomItem(arr) {
	return arr[Math.floor(fx() * arr.length)];
}

// Random n array items
function randomItems(arr, n) {
	return arr.map(x => ({ x, r: fx() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, n);
}

// Shuffle array
function shuffle(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		let n = Math.floor(fx() * (i + 1));
		[arr[i], arr[n]] = [arr[n], arr[i]];
	}
}

// Random HEX color
function randomColor() {
	return fx().toString(16).substr(2, 6);
}

// HEX to RGB
function hexToRGB(hex) {
	return [parseInt(hex.slice(0, 2), 16), parseInt(hex.slice(2, 4), 16), parseInt(hex.slice(4, 6), 16)];
}

// RGB to HEX
function rgbToHex(r, g, b) {
	return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Color gradient - c1, c2 HEX colors, n number of gradient colors
function colorGradient(c1, c2, n) {
	let c1RGB = hexToRGB(c1);
	let c2RGB = hexToRGB(c2);
	let diff = [c1RGB[0] - c2RGB[0], c1RGB[1] - c2RGB[1], c1RGB[2] - c2RGB[2]];
	
	let gr = [c1];
	for (i = 1; i <= (n - 2); i++) {
		gr.push(rgbToHex(Math.round(c1RGB[0] - diff[0] * (1 / (n - 1)) * i), Math.round(c1RGB[1] - diff[1] * (1 / (n - 1)) * i), Math.round(c1RGB[2] - diff[2] * (1 / (n - 1)) * i)));
	}
	gr.push(c2);
	
	return gr;
}

// Rarity picker
function rarityPicker(values) {
	var weight = values[0].w;
	const sumWeights = values.reduce((p, c) => p+c.w, 0) || 100;
	
	for (var i = 0; i < values.length; i++) {
		if (fx() < weight / sumWeights) {
			return values[i].v;
		}
		weight += values[i + 1].w;
	}
}

// Setup canvas size
function setup(size) {
	let w = innerWidth, h = innerHeight;
	save = save ?? size;
	let s = save / cw;
	
	canvas.width = save; canvas.height = save / ar;
	canvas.style.width = ((w < h * ar) ? w : h * ar)+'px'; canvas.style.height = ((w < h * ar) ? w / ar : h)+'px';
	canvas.style.display = 'block';
	ctx.scale(s, s);
}
