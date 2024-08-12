class linkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    const newNode = new node(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    } else {
      let currentNode = this.head;
      while (currentNode.nextNode != null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  insertAt(value, index) {
    const newNode = new node(value);
    let currentNode = this.head;
    let count = 1;
    if (index == 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      return;
    }
    while (count < index) {
      count++;
      currentNode = currentNode.nextNode;
    }
    newNode.nextNode = currentNode.nextNode;
    currentNode.nextNode = newNode;
  }

  removeAt(index) {
    let count = 1;
    let currentNode = this.head;

    if (index === 0) return (this.head = currentNode.nextNode);

    while (count < index) {
      count++;
      currentNode = currentNode.nextNode;
    }

    if (currentNode === null) {
      return console.log(`The value can't be removed it doesn't exist`);
    }
    currentNode.nextNode = currentNode.nextNode.nextNode;
  }

  size() {
    let size = 1;
    let currentNode = this.head;

    if (currentNode === null) return console.log("There's nothing on the list");

    while (currentNode.nextNode != null) {
      currentNode = currentNode.nextNode;
      size++;
    }
    console.log(`There are ${size} values on the list`);
  }

  displayHead() {
    const head = this.head;
    if (head === null) return console.log("There's nothing on the list");
    console.log(head.value);
  }

  displayTail() {
    let currentNode = this.head;
    if (currentNode === null) return console.log("There's nothing on the list");
    while (currentNode.nextNode.nextNode != null) {
      currentNode = currentNode.nextNode;
    }
    if (currentNode.nextNode.nextNode === null) {
      const tail = currentNode.nextNode;
      console.log(tail.value);
    } else {
      console.log('Not Found');
    }
  }

  at(index) {
    let count = 0;
    let currentNode = this.head;
    if (currentNode === null) return console.log("There's nothing on the list");
    try {
      while (count < index) {
        count++;
        currentNode = currentNode.nextNode;
      }
      console.log(currentNode.value);
    } catch (error) {
      console.log('The value was not found on the list');
      return;
    }
  }

  pop() {
    let currentNode = this.head;
    if (currentNode === null) return console.log('The list is already empty !');
    while (currentNode.nextNode.nextNode != null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = null;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode != null) {
      if (currentNode.value === value) {
        console.log(`The value ${value} was found on the list`);
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    if (currentNode === null) {
      console.log(`The value ${value} was not found on the list`);
      return false;
    }
  }

  find(value) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode != null) {
      if (currentNode.value === value) {
        return console.log(index);
      }
      index++;
      currentNode = currentNode.nextNode;
    }
    if (currentNode === null) {
      console.log('Index was not found');
    }
  }

  toString() {
    let currentNode = this.head;
    if (currentNode === null) return console.log("There's nothing on the list");
    const string = createString(currentNode);
    console.log(string);
    return string;

    function createString(currentNode) {
      if (currentNode.nextNode === null) {
        return `( ${currentNode.value} ) -> ` + null;
      } else {
        return (
          `( ${currentNode.value} ) -> ` + createString(currentNode.nextNode)
        );
      }
    }
  }
}

class node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const newList = new linkedList();
newList.append('dog');
newList.append('cat');
newList.prepend('parrot');
newList.append('hamster');
newList.prepend('snake');
newList.append('turtle');
newList.insertAt('bear', 0);
newList.insertAt('pigeon', 2);
newList.insertAt('bat', 1);
newList.pop(1);
newList.removeAt(3);
newList.removeAt(1);
newList.size();
newList.displayHead();
newList.displayTail();
newList.at(3);
newList.contains('dog');
newList.find('cat');
newList.toString();
