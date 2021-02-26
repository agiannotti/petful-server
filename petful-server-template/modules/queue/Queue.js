class _Node {
  constructor(data, next) {
    this.value = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    // Set initial data.
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    // Add some data to the queue.
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    // Remove some data from the queue.
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    return node.value;
  }

  show() {
    // Return the next item in the queue.
    if (this.first === null) {
      return;
    }
    return this.first.value;
  }

  all() {
    // Return all items in the queue.
    let vals = [];
    if (this.first === null) {
      return;
    } else {
      let curr = this.first;
      while (curr) {
        vals.push(curr.value);
        curr = curr.next;
      }
    }
    return vals;
  }
}

module.exports = Queue;
