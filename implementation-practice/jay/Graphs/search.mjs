import { graph } from "./generate.mjs";
import { ListQueue } from "../Queue/implement.mjs";

let nodesVisitedBFS = 0;

function BFS(node, value) {
	const queue = new ListQueue();
	const parent = { [node.value]: null };

	queue.enqueue(node);

	while (!queue.empty()) {
		const presentNode = queue.dequeue();
		nodesVisitedBFS += 1;

		if (presentNode.value === value) {
			return presentNode;
		}

		for (let i = 0; i < presentNode.connections.length; i += 1) {
			const childNode = presentNode.connections[i];

			if (!parent[childNode.value]) {
				parent[childNode.value] = presentNode;
				queue.enqueue(childNode);
			}
		}
	}

	return null;
}

let nodesVisitedDFS = 0;

const DFSparent = {};

function DFS(node, value) {
	nodesVisitedDFS += 1;

	if (node.value === value) {
		return node;
	}

	for (let i = 0; i < node.connections.length; i += 1) {
		const childNode = node.connections[i];

		if (!DFSparent[childNode.value]) {
			DFSparent[childNode.value] = node;

			const valOrNull = DFS(childNode, value);

			if (valOrNull) {
				return valOrNull;
			}
		}
	}

	return null;
}

const nodeOrNullBFS = BFS(graph.nodes[0], 50);
const nodeOrNullDFS = DFS(graph.nodes[0], 50);

console.log(nodeOrNullBFS);
console.log(nodesVisitedBFS);

console.log(nodeOrNullDFS);
console.log(nodesVisitedDFS);
