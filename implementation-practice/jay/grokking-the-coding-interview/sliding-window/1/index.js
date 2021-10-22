// Finding the average of subarrays of length k in an array

const arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
let bruteForceIterations = 0;
let slidingWindowIterations = 0;

function bruteForceMethod(arr, k) { // O(n * k)
	const result = [];
	let sum = 0;

	for (let i = 0; i < arr.length - k + 1; i += 1) {
		bruteForceIterations++
		sum = 0;

		for (let j = i; j < k + i; j += 1) {
			bruteForceIterations++
			sum += arr[j];
		}

		result.push(sum / k);
	}

	return result;
}

function slidingWindowMethod(arr, k) { // O(n)
	const result = [];
	let sum = 0;

	for (let i = 0; i < k; i += 1) {
		slidingWindowIterations++;
		sum += arr[i];
	}

	result.push(sum / k);

	for (let i = 1; i < arr.length - k + 1; i += 1) {
		slidingWindowIterations++;
		sum -= arr[i - 1];
		sum += arr[i + k - 1];
		result.push(sum / k);
	}

	return result;
}

console.log(bruteForceMethod(arr, 5));
console.log(bruteForceIterations);

console.log(slidingWindowMethod(arr, 5));
console.log(slidingWindowIterations);