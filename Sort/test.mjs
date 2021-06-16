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

const randomArrays = generateRandomArrays({ length: 100, amount: 100 });

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
		const elapsedBest = afterBest - beforeBest;
		console.log(`${sort.name} best case completed in ${elapsedBest}\n`);

		console.log(`Running ${sort.name} on worst case scenario`);
		const beforeWorst = performance.now();
		sort.fn(ourWorstCase);
		const afterWorst = performance.now();
		const elapsedWorst = afterWorst - beforeWorst;
		console.log(`${sort.name} worst case completed in ${elapsedWorst}\n`);

		console.log(`Running ${sort.name} on standard array`);
		const beforeStandard = performance.now();
		sort.fn(ourStandardArray);
		const afterStandard = performance.now();
		const elapsedStandard = afterStandard - beforeStandard;
		console.log(`${sort.name} standard array completed in ${elapsedStandard}\n`);

		console.log(`Running ${sort.name} on 100 random arrays of length 100`);
		const before100 = performance.now();
		for (let j = 0; j < ourRandomArrays.length; j += 1) {
			sort.fn(ourRandomArrays[j]);
		}
		const after100 = performance.now();
		const elapsed100 = after100 - before100;
		console.log(`${sort.name} completed 100 random arrays in ${elapsed100}\n`);

		resultObj["Elapsed Best"] = elapsedBest.toFixed(5);
		resultObj["Elapsed Worst"] = elapsedWorst.toFixed(5);
		resultObj["Elapsed Standard"] = elapsedStandard.toFixed(5);
		resultObj["Elapsed 100"] = elapsed100.toFixed(5);
		results[sort.name] = resultObj;
	}

	console.table(results);
}
