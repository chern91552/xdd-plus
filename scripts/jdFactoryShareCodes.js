let codes = ['T024a33Ml7aPIMl39bJKQV-0Lmf-CjVWnYaS5kRrbA
for (let i = 0; i < codes.length; i++) {
	const index = (i + 1 === 1) ? '' : (i + 1);
	exports['shareCodes.js' + index] = codes[i];
}