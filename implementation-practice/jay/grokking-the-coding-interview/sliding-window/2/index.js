// Find maximum sum of contiguous subarrays of size k in an array

let arr = [2, 1, 5, 1, 3, 2];
let bruteForceIterations = 0;

function bruteForceMethod(arr, k) {
	let result = 0;

	for (let i = 0; i < arr.length - k + 1; i += 1) {
		bruteForceIterations++;
		let sum = 0;

		for (let j = i; j < i + k; j += 1) {
			bruteForceIterations++;
			sum += arr[j];
		}

		result = Math.max(sum, result);
	}

	return result;
}

console.log(bruteForceMethod(arr, 3));
console.log(bruteForceIterations);

let slidingWindowIterations = 0;

function slidingWindowMethod(arr, k) {
	let sum = 0;

	for (let i = 0; i < k; i += 1) {
		slidingWindowIterations++
		sum += arr[i];
	}

	let result = sum;

	for (let i = 1; i < arr.length - k + 1; i += 1) {
		slidingWindowIterations++
		sum -= arr[i - 1];
		sum += arr[i + k - 1];
		result = Math.max(result, sum);
	}

	return result;
}

console.log(slidingWindowMethod(arr, 3));
console.log(slidingWindowIterations);
