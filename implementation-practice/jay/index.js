// import { testSorts } from "./Sort/test.mjs";
import { Trie } from "./Tree/Trie/generate.mjs";

const trie = new Trie();
trie.insert("cat");
trie.insert("catnap");
trie.insert("car");
trie.insert("balloon");
trie.insert("catnip");
trie.insert("person");
trie.insert("purse");

console.log(trie.search("c"));
console.log(trie.search("ca"));
console.log(trie.search("cat"));
console.log(trie.search("catnap"));
console.log(trie.search("b"));
console.log(trie.search("bal"));
console.log(trie.search("p"));
// testSorts();
