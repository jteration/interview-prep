function swap(arr, i, j) {
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
