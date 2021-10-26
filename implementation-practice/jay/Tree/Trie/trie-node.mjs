export function TrieNode(char, depth, isWord) {
	return {
		char,
		children: {},
		depth,
		isWord
	};
}
