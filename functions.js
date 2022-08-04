// Random number between min/max (both inclusive)
function randomNumber(min, max, fxrand) {
	return Math.floor(fxrand * (max - min + 1) + min);
}

// Random array item
function randomItem(arr, fxrand) {
	return arr[Math.floor(fxrand * arr.length)];
}

// Random n array items
function randomItems(arr, n, fxrand) {
	return arr.map(x => ({ x, r: fxrand })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, n);
}

// Random HEX color
function randomColor(fxrand) {
	return fxrand.toString(16).substr(2, 6);
}

// HEX to RGB
function hexToRGB(hex) {
	return [parseInt(hex.slice(0, 2), 16), parseInt(hex.slice(2, 4), 16), parseInt(hex.slice(4, 6), 16)];
}

// RGB to HEX
function rgbToHex(r, g, b) {
	return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Color gradient - c1 and c2 are HEX colors, n is number of colors in gradient
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
function rarityPicker(values, fxrand) {
	var weight = values[0].w;
	const sumWeights = values.reduce((p, c) => p+c.w, 0) || 100;
	
	for (var i = 0; i < values.length; i++) {
		if (fxrand < weight / sumWeights) {
			return values[i].v;
		}
		weight += values[i + 1].w;
	}
}
