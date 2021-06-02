import { BinaryTreeNode } from "../BinaryTree/binary-tree-node.mjs";

const randomSet = new Set();

while (randomSet.size < 250) {
	const randomInt = Math.ceil(300 * Math.random());
	randomSet.add(randomInt);
}

const randomArr = Array.from(randomSet);

const generateTree = (arr, isSearch, isFirst) => {
	if (isSearch && isFirst) {
		arr = arr.sort((a, b) => a - b);
	}

	const mid = Math.floor(arr.length / 2);
	const value = arr[mid];
	const left_values = arr.slice(0, mid);
	const right_values = arr.slice(mid + 1, arr.length);

	const node = new BinaryTreeNode(value);
	node.left = left_values.length
		? generateTree(left_values, false, false)
		: null;
	node.right = right_values.length
		? generateTree(right_values, false, false)
		: null;

	return node;
};

export const binarySearchTree = generateTree([...randomArr], true, true);
export const binaryTree = generateTree([...randomArr], false, true);
