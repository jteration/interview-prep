export function LinkedList() {
	Object.defineProperties(this, {
		head: {
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
			value: (val) => {
				if (this.head == null) {
					this.head = {
						value: val,
						next: null
					};
				} else {
					let tail = this.head;

					while (tail.next != null) {
						tail = tail.next;
					}

					tail.next = {
						value: val,
						next: null
					};
				}

				this.size += 1;
			},
			enumerable: false,
			writable: false
		},
		pushBack: {
			value: (val) => {
				const newHead = {
					value: val,
					next: this.head
				};

				this.head = newHead;
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
				const newHead = this.head.next;

				this.head = newHead;
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

				let current = this.head;

				while (current.next != null) {
					current = current.next;
				}

				return current.value;
			},
			enumerable: false,
			writable: false
		},
		insert: {
			value: (index, value) => {
				if (index > this.size) {
					throw new Error("Index out of bounds");
				}

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
			},
			enumerable: false,
			writable: false
		},
		erase: {
			value: (index) => {
				if (this.size === 0) {
					throw new Error("List is empty");
				}

				if (index > this.size - 1) {
					throw new Error("Index out of bounds");
				}

				if (index === 0) {
					this.head = this.head.next;
					return;
				}

				let prev = this.head;
				let current = this.head.next;

				for (let i = 0; i < index - 1; i += 1) {
					prev = current;
					current = current.next;
				}

				prev.next = current.next;
				this.size -= 1;
			},
			enumerable: false,
			writable: false
		},
		reverse: {
			value: () => {
				if (this.size <= 1) {
					return;
				}

				let prev = this.head
				let current = this.head.next;

				while (current != null) {
					const next = current.next;
					current.next = prev;
					prev = current;
					current = next;
				}

				this.head.next = null;
				this.head = prev;
			},
			enumerable: false,
			writable: false
		}
	});
}
