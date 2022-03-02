// Random number between min/max (both inclusive)
function randomNumber(min, max, fxrand) {
	return Math.floor(fxrand * (max - min + 1) + min);
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
