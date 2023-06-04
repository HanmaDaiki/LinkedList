import { Node } from "./Node.js";

export class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
  }

  append(data) {
    const node = new Node(data);

    if (this._tail) {
      this._tail.next = node;
    }

    if (!this._head) {
      this._head= node;
    }

    this._tail = node;
  }

  prepend(data) {
    const node = new Node(data, this._head);

    this._head = node;

    if(!this._tail) {
      this._tail = node;
    }
  }

  find(data) {
    if (!this._head) {
      return null;
    }
    let index = 0;
    let current = this._head;

    while (current) {
      if (current.data === data) {
        return current;
      }

      current = current.next;
      index++;
    }

    return undefined;
  }

  insertAfter(after, data) {
    const found = this.find(after) ;

    if(!found) {
      return found;
    }

    const node = new Node(data, found.next);
    found.next = node;
  }

  remove(data) {
    if (!this._head) {
      return null;
    }

    while (this._head && this._head.data === data) {
      this._head = this._head.next;
    }

    let current = this._head;
    while (current.next) {
      if(current.next.data === data) {
        current.next = current.next.next;
        continue;
      } 

      current = current.next;
    }

    if(this._tail.data === data) {
      this._tail =current;
    }
  }

  toArray() {
    const output = [];
    let current = this._head;

    while (current) {
      output.push(current.data);
      current = current.next;
    }

    return output;
  }
}