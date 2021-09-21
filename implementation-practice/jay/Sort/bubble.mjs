function swap(arr, i, j) {
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

			if (leftItem > rightItem) {
				swap(arr, i - 1, i);
				swaps += 1;
			}
		}
	}
}
