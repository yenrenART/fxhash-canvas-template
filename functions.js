// Random number between min/max (both inclusive)
function randomNumber(min, max, fxrand) {
	return Math.floor(fxrand * (max - min + 1) + min);
}

// Rarity picker
function rarityPicker(values, fxrand) {
	var weight = values[0].w;
	
	for (var i = 0; i < values.length; i++) {
		if (fxrand < weight / 100) {
			return values[i].v;
		}
		weight += values[i + 1].w;
	}
}
