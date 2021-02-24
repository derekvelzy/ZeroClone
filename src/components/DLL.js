class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
};

class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  push(val) {
    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      let newNode = new Node(val);
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = this.tail.next;
    }
    return this;
  }
  forward() {
    let newTail = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    newTail.next = null;
    newTail.prev = this.tail;
    this.tail.next = newTail;
    this.tail = this.tail.next;
    return this;
  }
  back() {
    let newHead = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    newHead.prev = null;
    newHead.next = this.head;
    this.head.prev = newHead;
    this.head = this.head.prev;
    return this;
  }
};

export default DLL;