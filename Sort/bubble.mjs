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

export function bubbleSort(arr) {
	let swaps = 1;

	while (swaps > 0) {
		swaps = 0;

		for (let i = 1; i < arr.length; i += 1) {
			const leftItem = arr[i - 1];
			const rightItem = arr[i];

			compares += 1;
			if (leftItem > rightItem) {
				swap(arr, i - 1, i);
				swaps += 1;
			}
		}
	}
}

console.log(bestCase);
bubbleSort(bestCase);
console.log(bestCase);
console.log(compares);
