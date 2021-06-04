const unsortedArr = [12, 15, 3, 56, 10, 9, 23, 65, 10, 10, 13, 24, 5];
const worstCase = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const bestCase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let compares = 0;

function swap(arr, i, j) {
	console.log(`Swapping ${arr[i]} and ${arr[j]}`);
	console.log(JSON.stringify(arr));
	const temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

export function insertionSort(arr, arrPos) {
	let unsortedPoint = arrPos;

	while (arr[unsortedPoint] < arr[unsortedPoint - 1]) {
		compares += 1;
		swap(arr, unsortedPoint, unsortedPoint - 1);

		if (unsortedPoint > 0) {
			unsortedPoint -= 1;
		}
	}

	if (arrPos + 1 < arr.length) {
		insertionSort(arr, arrPos + 1);
	}
}

console.log(worstCase);
insertionSort(worstCase, 0);
console.log(compares);
console.log(worstCase);