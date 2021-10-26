import { TrieNode } from "./trie-node.mjs";

export function Trie() {
	this.root = {
		children: {}
	};

	this.insert = function(word) {
		let node = this.root;

		for (let i = 0; i < word.length; i += 1) {
			const char = word[i];

			if (node.children[char] === undefined) {
				node.children[char] = new TrieNode(char, i, i === word.length - 1 ? true : false);
			}

			node = node.children[char];
		}

		console.log(this.root);
	};

	this.dfs = function(node, arr, word) {
		const { char } = node;
		const newWord = word + char;

		if (node.isWord) {
			arr.push(newWord);
		}

		const children = Object.values(node.children);

		for (let i = 0; i < children.length; i += 1) {
			const child = children[i];
			this.dfs(child, arr, newWord);
		}
	}

	this.search = function(word) {
		const result = {
			words: [],
			found: false
		};
		let node = this.root;

		for (let i = 0; i < word.length; i += 1) {
			const char = word[i];

			if (node.children[char] !== undefined) {
				node = node.children[char];
			}
		}

		if (node.isWord) {
			result.found = true;
		}

		const children = Object.values(node.children);

		for (let i = 0; i < children.length; i += 1) {
			const child = children[i];
			this.dfs(child, result.words, word);
		}

		return result;
	};
}
