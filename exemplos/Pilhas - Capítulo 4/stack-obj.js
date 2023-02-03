//metodo FIFO
// Stack using the struct of object

export default class Stack {
    constructor() {
        this.count = 0;
        this.item = {};
    }

    push(element) {
        this.item[this.count] = element;
        this.count++;
    }

    isEmpty() {
        return this.count === 0;
    }

    pop() {
        if (this.isEmpty) {
            return undefined;
        }

        this.count--;
        const result = this.item[this.count];
        delete this.item[this.count];
        return result;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined
        }

        return this.item[this.count - 1]
    }

    size() {
        return this.count;
    }

    clear() {
        this.item = {};
    }

    toString()  {
        if (this.isEmpty()) {
            return ' '
        }
        let objString = `${this.item[0]}`;
        for (let i = 0; i < this.count; i++) {
            objString = `${this.item}, ${this.item[í]}`
        }
        return objString;
    }
}    