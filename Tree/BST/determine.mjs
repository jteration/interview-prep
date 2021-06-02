import { binarySearchTree, binaryTree } from "./generate.mjs";

const isBinarySearchTree = (tree, range) => {
	if (tree === null) {
		return true;
	}

	const { value, left, right } = tree;

	return (
		value > range[0] &&
		value < range[1] &&
		isBinarySearchTree(left, [range[0], value]) &&
		isBinarySearchTree(right, [value, range[1]])
	);
};

const isBinarySearchTreeBinarySearchTree = isBinarySearchTree(
	binarySearchTree,
	[-Infinity, Infinity]
);
const isBinaryTreeBinarySearchTree = isBinarySearchTree(binaryTree,
	[-Infinity, Infinity]
);

console.log(isBinarySearchTreeBinarySearchTree);
console.log(isBinaryTreeBinarySearchTree);
