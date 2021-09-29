function swap(arr, i, j) {
	const temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

export function bubbleSort(arr) {
	let swaps = 1; // O(1)

	while (swaps > 0) { // O(n)
		swaps = 0; // O(1)

		for (let i = 1; i < arr.length; i += 1) {  // O(n)
			const leftItem = arr[i - 1]; // O(1)
			const rightItem = arr[i]; // O(1)

			if (leftItem > rightItem) { // O(1)
				swap(arr, i - 1, i); // O(3)
				swaps += 1; // O(1)
			}
		}
	}
}

// O(1 + n(1 + n(7)))
// O(1 + n + 7n^2)
// O(n^2)
