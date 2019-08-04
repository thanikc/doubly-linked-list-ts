export class DoublyLinkedListNode {
  previous: DoublyLinkedListNode;
  next: DoublyLinkedListNode;
  constructor(public data: any) {}
}

export class DoublyLinkedList {
  private head: DoublyLinkedListNode;
  private tail: DoublyLinkedListNode;
  private numberOfValues = 0;

  get length(): number {
    return this.numberOfValues;
  }

  get first(): DoublyLinkedListNode {
    return this.head;
  }

  get last(): DoublyLinkedListNode {
    return this.tail;
  }

  add(data) {
    const node = new DoublyLinkedListNode(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.numberOfValues++;
  }

  remove(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current === this.head && current === this.tail) {
          this.head = null;
          this.tail = null;
        } else if (current === this.head) {
          this.head = this.head.next;
          this.head.previous = null;
        } else if (current === this.tail) {
          this.tail = this.tail.previous;
          this.tail.next = null;
        } else {
          current.previous.next = current.next;
          current.next.previous = current.previous;
        }
        this.numberOfValues--;
      }
      current = current.next;
    }
  }

  insertAfter(data, toNodeData) {
    let current = this.head;
    while (current) {
      if (current.data === toNodeData) {
        const node = new DoublyLinkedListNode(data);
        if (current === this.tail) {
          this.add(data);
        } else {
          current.next.previous = node;
          node.previous = current;
          node.next = current.next;
          current.next = node;
          this.numberOfValues++;
        }
      }
      current = current.next;
    }
  }

  traverse(fn: Function) {
    let current = this.head;
    while (current) {
      if (fn) {
        fn(current);
      }
      current = current.next;
    }
  }

  traverseReverse(fn: Function) {
    let current = this.tail;
    while (current) {
      if (fn) {
        fn(current);
      }
      current = current.previous;
    }
  }

  toString(): string {
    let string = "";
    let current = this.head;
    while (current) {
      string += current.data + " ";
      current = current.next;
    }
    return string.trim();
  }
}
