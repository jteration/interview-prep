export function LinkedList() {
	Object.defineProperties(this, {
		head: {
			value: null,
			enumerable: false,
			writable: true
		},
		tail: {
			value: null,
			enumerable: false,
			writable: true
		},
		size: {
			value: 0,
			enumerable: false,
			writable: true
		},
		empty: {
			value: () => this.size === 0,
			enumerable: false,
			writable: false
		},
		pushFront: {
			value: (value) => {
				const item = {
					value,
					next: null
				};

				if (this.size === 0) {
					this.head = item;
					this.tail = item;
				} else {
					item.next = this.head;
					this.head = item;
				}

				this.size += 1;
			},
			enumerable: false,
			writable: false
		},
		pushBack: {
			value: (value) => {
				const item = {
					value,
					next: null
				};

				if (this.size === 0) {
					this.head = item;
					this.tail = item;
				} else {
					this.tail.next = item;
					this.tail = item;
				}

				this.size += 1;
			},
			enumerable: false,
			writable: false
		},
		popFront: {
			value: () => {
				if (this.size === 0) {
					throw new Error("List is empty");
				}

				const { value } = this.head;

				if (this.size === 1) {
					this.head = null;
					this.tail = null;
				} else {
					const newHead = this.head.next;

					this.head = newHead;
				}

				this.size -= 1;

				return value;
			},
			enumerable: false,
			writable: false
		},
		popBack: {
			value: () => {
				if (this.size === 0) {
					throw new Error("List is empty");
				}

				if (this.size === 1) {
					const { value } = this.head;
					this.head = null;
					this.tail = null;
					this.size -= 1;

					return value;
				}

				let prev = this.head;
				let current = prev.next;

				while (current.next) {
					prev = current;
					current = current.next;
				}

				prev.next = null;
				this.tail = prev;
				this.size -= 1;

				return current.value;
			},
			enumerable: false,
			writable: false
		},
		front: {
			value: () => {
				if (this.size === 0) {
					return undefined;
				}

				return this.head.value;
			},
			enumerable: false,
			writable: false
		},
		back: {
			value: () => {
				if (this.size === 0) {
					return undefined;
				}

				return this.tail.value;
			},
			enumerable: false,
			writable: false
		},
		insert: {
			value: (index, value) => {
				if (index > this.size) {
					throw new Error("Index out of bounds");
				}

				if (index === this.size) {
					this.pushBack(value);
				} else {
					let current = this.head;

					for (let i = 0; i < index - 1; i += 1) {
						current = current.next;
					}

					const newNode = {
						value,
						next: current.next
					};

					current.next = newNode;

					this.size += 1;
				}
			},
			enumerable: false,
			writable: false
		},
		erase: {
			value: (index) => {
				if (this.size === 0) {
					throw new Error("List is empty");
				} else if (index > this.size - 1) {
					throw new Error("Index out of bounds");
				}

				if (index === 0) {
					this.popFront();
				} else if (index === this.size - 1) {
					this.popBack();
				} else {
					let prev = this.head;
					let current = this.head.next;

					for (let i = 0; i < index - 1; i += 1) {
						prev = current;
						current = current.next;
					}

					prev.next = current.next;
					this.size -= 1;
				}
			},
			enumerable: false,
			writable: false
		},
		reverse: {
			value: () => {
				if (this.size <= 1) {
					return;
				}

				let prev = this.head;
				let current = this.head.next;

				while (current != null) {
					const next = current.next;
					current.next = prev;
					prev = current;
					current = next;
				}

				this.head.next = null;
				this.tail = this.head;
				this.head = prev;
			},
			enumerable: false,
			writable: false
		}
	});
}
