export function defragmentArrayToSmallParts(array: any) {
	const arr = []
	let concatStr = ""

	for (var i = 0; i < 4; i++) {
		array[i].map((subArray: any, index: number) => {
			concatStr += subArray
		})
		arr.push(concatStr)
		concatStr = ""
	}

	return arr
}
