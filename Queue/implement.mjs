import { LinkedList } from "../LinkedLists/implement.mjs";

export function ListQueue() {
	const queue = new LinkedList();

	Object.defineProperties(this, {
		enqueue: {
			value: (item) => {
				queue.pushBack(item);
			},
			enumerable: false,
			writable: false
		},
		dequeue: {
			value: () => {
				return queue.popFront();
			},
			enumerable: false,
			writable: false
		},
		empty: {
			value: () => {
				return queue.empty();
			},
			enumerable: false,
			writable: false
		}
	})
}

export function ArrayQueue(size) {
	if (typeof size === "undefined" || Number.isNaN(size)) {
		throw new Error("Must provide size");
	}

	if (size < 3) {
		throw new Error("Queue needs to be at least size 3");
	}

	const arr = new Array(size + 1);

	function getIncrementedIndex(index) {
		if (index + 1 > size + 1) {
			return 0
		}

		return index + 1;
	}

	Object.defineProperties(this, {
		readIndex: {
			value: 0,
			enumerable: false,
			writable: true
		},
		writeIndex: {
			value: 1,
			enumerable: false,
			writable: true
		},
		enqueue: {
			value: (item) => {
				const newWriteIndex = getIncrementedIndex(this.writeIndex);

				if (newWriteIndex === this.readIndex) {
					throw new Error("Queue is full");
				}

				arr[this.writeIndex] = item;
				this.writeIndex = newWriteIndex;
			},
			enumerable: false,
			writable: false
		},
		dequeue: {
			value: () => {
				const newReadIndex = getIncrementedIndex(this.readIndex);

				if (newReadIndex === this.writeIndex) {
					throw new Error("Queue is empty");
				}

				const item = arr[newReadIndex];

				this.readIndex = newReadIndex;

				return item;
			},
			enumerable: false,
			writable: false
		},
		empty: {
			value: () => {
				const incrementedReadIndex = getIncrementedIndex(this.readIndex);

				return incrementedReadIndex === this.writeIndex;
			},
			enumerable: false,
			writable: false
		}
	})
}