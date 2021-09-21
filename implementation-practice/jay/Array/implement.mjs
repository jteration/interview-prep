export function MyArray() {
	Object.defineProperty(this, "length", {
		value: 0,
		enumerable: false,
		writable: true
	});

	Object.defineProperty(this, "push", {
		value: (item) => {
			this[this.length] = item;
			this.length += 1;
		},
		enumerable: false,
		writable: false
	});

	Object.defineProperty(this, "at", {
		value: (index) => {
			if (index >= this.length) {
				throw new Error("Index out of bounds");
			}

			return this[index];
		},
		enumerable: false,
		writable: false
	});

	Object.defineProperty(this, "insert", {
		value: (index, item) => {
			if (index > this.length) {
				throw new Error("Index out of bounds");
			}

			for (let i = this.length; i > index; i -= 1) {
				this[i] = this[i - 1];
			}

			this[index] = item;
			this.length += 1;
		},
		enumerable: false,
		writable: false
	});

	Object.defineProperty(this, "pop", {
		value: () => {
			if (this.length === 0) {
				throw new Error("Cannot call pop() on empty array");
			}

			const item = this[this.length - 1];

			delete this[this.length - 1];

			this.length -= 1;

			return item;
		},
		enumerable: false,
		writable: false
	});

	Object.defineProperty(this, "delete", {
		value: (index) => {
			if (index >= this.length) {
				throw new Error("Index out of bounds");
			}

			for (let i = index; i < this.length; i += 1) {
				this[i] = this[i + 1];
			}

			delete this[this.length - 1];
			this.length -= 1;
		},
		enumerable: false,
		writable: false
	});

	Object.defineProperty(this, "find", {
		value: (test) => {
			if (typeof test !== "function") {
				throw new Error("Find expects a function");
			}

			for (let i = 0; i < this.length; i += 1) {
				const item = this[i];

				if (test(item)) {
					return item;
				}
			}

			return undefined;
		},
		enumerable: false,
		writable: false
	});

	Object.defineProperty(this, "join", {
		value: (separator) => {
			let finalString = "";

			for (let i = 0; i < this.length; i += 1) {
				finalString += this[i];

				if (i < this.length - 1) {
					finalString += separator;
				}
			}

			return finalString;
		},
		enumerable: false,
		writable: false
	});
}
