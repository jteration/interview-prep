let calls = 0;
let compares = 0;

const unsortedArr = [12, 15, 3, 56, 10, 9, 23, 65, 10, 10, 13];

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
			compares += 1;
			i += 1;

			swap(arr, i, j);
		}
	}

	swap(arr, i + 1, high);

	return i + 1;
}

export function quickSort(arr, low, high) {
	calls += 1;

	if (low < high) {
		const partitionIndex = partition(arr, low, high);

		quickSort(arr, low, partitionIndex - 1);
		quickSort(arr, partitionIndex + 1, high);
	}
}

console.log(unsortedArr);

quickSort(unsortedArr, 0, unsortedArr.length - 1);

console.log(`Calls: ${calls}`);
console.log(`Compares: ${compares}`);
console.log(unsortedArr);
