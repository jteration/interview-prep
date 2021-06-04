let calls = 0;
let compares = 0;

const unsortedArr = [12, 15, 3, 56, 10, 9, 23, 65, 10, 10, 13];

export function mergeSort(arr) {
	calls += 1;

	if (arr.length === 1) {
		return arr;
	} else if (arr.length === 2) {
		compares += 1;

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
		compares += 1;

		const rightItem = rightHalf[rightIndex];
		const leftItem = leftHalf[leftIndex];

		if (typeof rightItem === "undefined") {
			sortedArr.push(leftItem);
			leftIndex += 1;
		} else if (typeof leftItem === "undefined") {
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

	return sortedArr;
}

const sorted = mergeSort(unsortedArr);

console.log(unsortedArr);
console.log(sorted);
console.log(calls);
console.log(compares);
