// Canvas
const canvas = document.querySelector('canvas'), ctx = canvas.getContext('2d');

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

// Random color (HEX)
function randomColor() {
	return Math.random().toString(16).substr(2, 6);
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
