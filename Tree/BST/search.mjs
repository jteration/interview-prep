import { ListQueue } from "../../Queue/implement.mjs";
import { binarySearchTree, binaryTree } from "./generate.mjs";

let bFSNodesVisited = 0;

export const breadthFirstSearch = (tree, value) => {
	const queue = new ListQueue();

	queue.enqueue(tree);

	while(!queue.empty()) {
		bFSNodesVisited += 1;

		const node = queue.dequeue();

		if (node.value === value) {
			return node;
		}

		if (node.left) {
			queue.enqueue(node.left);
		}

		if (node.right) {
			queue.enqueue(node.right);
		}
	}

	return null;
}

let dFSNodesVisited = 0;

export const depthFirstSearch = (tree, value) => {
	dFSNodesVisited += 1;

	if (tree === null) {
		return null;
	}

	if (tree.value === value) {
		return tree
	}

	const leftPathTreeOrNull = depthFirstSearch(tree.left, value);

	if (leftPathTreeOrNull) {
		return leftPathTreeOrNull;
	}

	const rightPathTreeOrNull = depthFirstSearch(tree.right, value);

	if (rightPathTreeOrNull) {
		return rightPathTreeOrNull;
	}

	return null;
}

let searchBSTNodesVisited = 0;

export const searchBST = (tree, value) => {
	searchBSTNodesVisited += 1;

	if (tree === null) {
		return null;
	}

	if (tree.value === value) {
		return tree;
	}

	if (tree.value < value) {
		return searchBST(tree.right, value);
	}
	
	if (tree.value > value) {
		return searchBST(tree.left, value);
	}

	return null;
}

console.log(depthFirstSearch(binarySearchTree, 50));
console.log(breadthFirstSearch(binarySearchTree, 50));
// console.log(depthFirstSearch(binaryTree, 50));
// console.log(breadthFirstSearch(binaryTree, 50));
console.log(searchBST(binarySearchTree, 50));
console.log(`
bFSNodesVisited: ${bFSNodesVisited}
dFSNodesVisited: ${dFSNodesVisited}
searchBSTNodesVisited: ${searchBSTNodesVisited}
`)