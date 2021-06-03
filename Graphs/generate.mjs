import util from "util";
import { GraphNode } from "./graph-node.mjs";

const randomSet = new Set();

while (randomSet.size < 20) {
	const randomInt = Math.ceil(300 * Math.random());
	randomSet.add(randomInt);
}

const randomArr = Array.from(randomSet);

export function Graph(data) {
	this.nodes = [];
	this.adjacencyMap = {};

	// Create nodes
	for (let i = 0; i < data.length; i += 1) {
		const node = new GraphNode(data[i]);
		this.nodes.push(node);
	}

	const connectionMap = {};

	// Create connections
	for (let i = 0; i < this.nodes.length; i += 1) {
		const node = this.nodes[i];
		const randomIndexSet = new Set();

		while (randomIndexSet.size < 2) {
			const randomInt = Math.floor(this.nodes.length * Math.random());
			randomIndexSet.add(randomInt);
		}

		const randomIndexes = Array.from(randomIndexSet);

		for (let j = 0; j < randomIndexes.length; j += 1) {
			const randomIndex = randomIndexes[j];
			// Use key to check for existing connection
			const connectionKey = `${Math.min(randomIndex, i)},${Math.max(randomIndex, i)}`;

			if (i !== randomIndex && !connectionMap[connectionKey]) {
				connectionMap[connectionKey] = true;
				const randomNode = this.nodes[randomIndex];

				node.connections.push(randomNode);
				randomNode.connections.push(node);

				if (!this.adjacencyMap[node.value]) {
					this.adjacencyMap[node.value] = [];
				}

				if (!this.adjacencyMap[randomNode.value]) {
					this.adjacencyMap[randomNode.value] = [];
				}

				this.adjacencyMap[node.value].push(randomNode);
				this.adjacencyMap[randomNode.value].push(node);
			}
		}
	}
}

export const graph = new Graph(randomArr);

// console.log(util.inspect(graph, false, 4, true));
