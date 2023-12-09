function manufacture(gifts, materials) {
	// Code here
	let result = []
	gifts.map(gift => {
		let word = ""
		for (let i = 0; i < gift.split('').length; i++) {
			const letter = gift.split('')[i]
			if (materials.includes(letter)) {
				word += letter
			} else {
				word = ""
				break
			}
		}
		word !== '' ? result.push(word) : NaN
	})
	return result
}