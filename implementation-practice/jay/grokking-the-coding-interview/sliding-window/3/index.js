// Smallest Subarray with a given sum

const arr = [2, 1, 5, 2, 8];
let bruteForceIterations = 0;

function bruteForceMethod(arr, s) {
	let smallest = arr.length + 1;

	for (let i = 0; i < arr.length; i++) {
		bruteForceIterations++;

		for (let j = 1; j <= arr.length - i; j++) {
			bruteForceIterations++;
			let sum = 0;

			for (let k = 0; k < j; k++) {
				bruteForceIterations++;
				sum += arr[k + i];
			}

			if (sum >= s) {
				smallest = Math.min(smallest, j);
			}
		}
	}

	return smallest === arr.length + 1 ? -1 : smallest;
}

let windowMethodIterations = 0;

function windowMethod(arr, s) {
	let windowStart = 0;
	let windowEnd = 0;
	let sum = arr[0];
	if (sum >= s) return 1;
	let grow = true;
	let done = false;
	let smallestSize = arr.length + 1;

	while (!done) {
		windowMethodIterations++;

		if (grow) {
			if (windowEnd < arr.length - 1) {
				windowEnd++;
				sum += arr[windowEnd];
			} else {
				grow = false;
			}
		} else {
			if (windowStart < windowEnd) {
				sum -= arr[windowStart];
				windowStart++;
			} else {
				grow = true;
			}
		}

		if (sum >= s) {
			smallestSize = Math.min(smallestSize, windowEnd - windowStart + 1);
			grow = false;
		} else {
			if (windowStart === windowEnd) {
				grow = true;
			}
		}

		done = windowEnd === arr.length - 1 && windowStart === windowEnd;
	}

	return smallestSize === arr.length + 1 ? -1 : smallestSize;
}

console.log(bruteForceMethod(arr, 7));
console.log(bruteForceIterations);

console.log(windowMethod(arr, 7));
console.log(windowMethodIterations);