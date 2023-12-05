function findFirstRepeated(gifts) {
	// Code here
	if (new Set(gifts).size >= gifts.length) { // NO tiene repetidos
		return -1
	}
	let temp = []
	for (let i = 0; i < gifts.length; i++) {
		for (let j = 0; j < gifts.length; j++) {
			if (i != j && gifts[i] == gifts[j] && !temp.includes(gifts[i])) {
				temp[j] = gifts[i]
			}
		}
	}
	return temp.filter(e => e !== undefined)[0]
}