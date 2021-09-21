function swap(arr, i, j) {
	const temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

export function selectionSort(arr) {
	for (let i = 0; i < arr.length; i += 1) {
		let min = i;

		for(let j = i + 1; j < arr.length; j += 1) {
			if (arr[min] > arr[j]) {
				min = j;
			}
		}

		swap(arr, i, min);
	}
};
