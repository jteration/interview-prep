function swap(arr, i, j) {
	const temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

function partition(arr, low, high) {
	const pivot = arr[high];

	let i = low - 1;

	for (let j = low; j <= high - 1; j += 1) {
		if (arr[j] < pivot) {
			i += 1;

			swap(arr, i, j);
		}
	}

	swap(arr, i + 1, high);

	return i + 1;
}

export function quickSort(arr, low, high) {
	if (low === undefined) {
		low = 0;
	}

	if (high === undefined) {
		high = arr.length - 1;
	}

	if (low < high) {
		const partitionIndex = partition(arr, low, high);

		quickSort(arr, low, partitionIndex - 1);
		quickSort(arr, partitionIndex + 1, high);
	}
}
