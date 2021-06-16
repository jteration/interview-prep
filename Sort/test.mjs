import { bubbleSort } from "./bubble.mjs";
import { insertionSort } from "./insertion.mjs";
import { mergeSort } from "./merge.mjs";
import { quickSort } from "./quick.mjs";
import { selectionSort } from "./selection.mjs";
import { javascriptDefault } from "./default.mjs";
import { bestCase, worstCase, standardTwenty, generateRandomArrays } from "./test-arrays.mjs";

const sorts = [
	{
		fn: bubbleSort,
		name: "Bubble Sort"
	},
	{
		fn: insertionSort,
		name: "Insertion Sort"
	},
	{
		fn: mergeSort,
		name: "Merge Sort"
	},
	{
		fn: quickSort,
		name: "Quick Sort"
	},
	{
		fn: selectionSort,
		name: "Selection Sort"
	},
	{
		fn: javascriptDefault,
		name: "Javascript Default"
	}
];

const amount = 10000;
const length = 1000;
const randomArrays = generateRandomArrays({ length, amount });

function arrIsSorted(arr) {
	let prev = arr[0];

	for (let i = 1; i < arr.length; i += 1) {
		const current = arr[i];

		if (current < prev) {
			return false;
		}

		prev = current;
	}

	return true;
}

export function testSorts() {
	const results = {};

	for (let i = 0; i < sorts.length; i += 1) {
		const resultObj = {};
		const sort = sorts[i];
		const ourBestCase = [...bestCase];
		const ourWorstCase = [...worstCase];
		const ourStandardArray = [...standardTwenty];
		const ourRandomArrays = [];

		for (let j = 0; j < randomArrays.length; j += 1) {
			ourRandomArrays.push([...randomArrays[j]]);
		}

		console.log(`\nRunning ${sort.name} on best case scenario`);
		const beforeBest = performance.now();
		sort.fn(ourBestCase);
		const afterBest = performance.now();
		if (!arrIsSorted(ourBestCase)) {
			console.log(ourBestCase);
			throw new Error("ourBestCase isn't sorted!");
		}
		const elapsedBest = afterBest - beforeBest;
		console.log(`${sort.name} best case completed in ${elapsedBest}\n`);

		console.log(`Running ${sort.name} on worst case scenario`);
		const beforeWorst = performance.now();
		sort.fn(ourWorstCase);
		const afterWorst = performance.now();
		if (!arrIsSorted(ourWorstCase)) {
			console.log(ourWorstCase);
			throw new Error("ourWorstCase isn't sorted!");
		}
		const elapsedWorst = afterWorst - beforeWorst;
		console.log(`${sort.name} worst case completed in ${elapsedWorst}\n`);

		console.log(`Running ${sort.name} on standard array`);
		const beforeStandard = performance.now();
		sort.fn(ourStandardArray);
		const afterStandard = performance.now();
		if (!arrIsSorted(ourStandardArray)) {
			console.log(ourStandardArray);
			throw new Error("ourStandardArray isn't sorted!");
		}
		const elapsedStandard = afterStandard - beforeStandard;
		console.log(`${sort.name} standard array completed in ${elapsedStandard}\n`);

		console.log(`Running ${sort.name} on ${amount} random arrays of length ${length}`);
		const beforeRandom = performance.now();
		for (let j = 0; j < ourRandomArrays.length; j += 1) {
			sort.fn(ourRandomArrays[j]);
		}
		const afterRandom = performance.now();
		for (let j = 0; j < ourRandomArrays.length; j += 1) {
			if (!arrIsSorted(ourRandomArrays[j])) {
				console.log(ourRandomArrays[j]);
				throw new Error("ourRandomArrays isn't sorted!");
			}
		}
		const elapsedRandom = afterRandom - beforeRandom;
		console.log(`${sort.name} completed ${amount} random arrays in ${elapsedRandom}\n`);

		resultObj["Elapsed Best"] = elapsedBest.toFixed(5);
		resultObj["Elapsed Worst"] = elapsedWorst.toFixed(5);
		resultObj["Elapsed Standard"] = elapsedStandard.toFixed(5);
		resultObj["Elapsed Random"] = elapsedRandom.toFixed(5);
		results[sort.name] = resultObj;
	}

	console.table(results);
}
