export function mergeSort(arr) {
	if (arr.length === 1) {
		return arr;
	} else if (arr.length === 2) {
		if (arr[0] > arr[1]) {
			return [arr[1], arr[0]];
		}

		return arr;
	}

	const mid = Math.floor(arr.length / 2);
	const leftHalf = mergeSort(arr.slice(0, mid));
	const rightHalf = mergeSort(arr.slice(mid, arr.length));

	let leftIndex = 0;
	let rightIndex = 0;

	const sortedArr = [];

	for (let i = 0; i < leftHalf.length + rightHalf.length; i += 1) {
		const rightItem = rightHalf[rightIndex];
		const leftItem = leftHalf[leftIndex];

		if (rightItem === undefined) {
			sortedArr.push(leftItem);
			leftIndex += 1;
		} else if (leftItem === undefined) {
			sortedArr.push(rightItem);
			rightIndex += 1;
		} else if (rightItem <= leftItem) {
			sortedArr.push(rightItem);
			rightIndex += 1;
		} else {
			sortedArr.push(leftItem);
			leftIndex += 1;
		}
	}

	for (let i = 0; i < sortedArr.length; i += 1) {
		arr[i] = sortedArr[i];
	}

	return sortedArr;
}
