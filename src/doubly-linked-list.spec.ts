import { expect } from "chai";
import "mocha";
import { DoublyLinkedList } from "./doubly-linked-list";

describe("Empty DoublyLinkedList", () => {
  let list: DoublyLinkedList;

  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  it("initializes with an empty list", () => {
    expect(list.length).to.equal(0);
    expect(list.first).to.be.undefined;
    expect(list.last).to.be.undefined;
  });

  it("adds first node as head and tail", () => {
    const data = "first";
    list.add(data);
    expect(list.first.data).to.equal(data);
    expect(list.last.data).to.equal(data);
  });

  it("adds first node as head and second node as tail", () => {
    const first = "1st";
    const second = "2nd";
    list.add(first);
    list.add(second);
    expect(list.first.data).to.equal(first);
    expect(list.last.data).to.equal(second);
  });
});

describe("DoublyLinkedList with 3 nodes", () => {
  let list: DoublyLinkedList;
  const first = "1st";
  const second = "2nd";
  const third = "3rd";

  beforeEach(() => {
    list = new DoublyLinkedList();
    list.add(first);
    list.add(second);
    list.add(third);
  });

  it("correctly references previous and next", () => {
    const node1 = list.first;
    const node2 = node1.next;
    const node3 = list.last;
    expect(node1.previous).to.equal(undefined);
    expect(node2).to.equal(node3.previous);
    expect(node3.next).to.equal(undefined);
  });

  it("removes data", () => {
    list.remove(second);
    expect(list.first.next).to.equal(list.last);
  });

  it("traverses list", () => {
    let found = false;
    list.traverse(current => {
      if (current.data === second) {
        found = true;
      }
    });
    expect(found).to.be.true;
  });

  it("reversely traverses list", () => {
    let found = false;
    list.traverseReverse(current => {
      if (current.data === second) {
        found = true;
      }
    });
    expect(found).to.be.true;
  });
});
