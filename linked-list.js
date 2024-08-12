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
      let temp = this.head;
      while (temp.nextNode != null) {
        temp = temp.nextNode;
      }
      temp.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  size() {
    let size = 1;
    let temp = this.head;

    if (temp === null) return console.log("There's nothing on the list");

    while (temp.nextNode != null) {
      temp = temp.nextNode;
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
    let temp = this.head;
    if (temp === null) return console.log("There's nothing on the list");
    while (temp.nextNode.nextNode != null) {
      temp = temp.nextNode;
    }
    if (temp.nextNode.nextNode === null) {
      const tail = temp.nextNode;
      console.log(tail.value);
    } else {
      console.log('Not Found');
    }
  }

  at(index) {
    let size = 0;
    let temp = this.head;
    if (temp === null) return console.log("There's nothing on the list");
    while (size < index) {
      size++;
      temp = temp.nextNode;
    }
    try {
      console.log(temp.value);
    } catch (error) {
      console.log('Not Found');
      return;
    }
  }

  pop() {
    let temp = this.head;
    if (temp === null) return console.log('The list is already empty !');
    while (temp.nextNode.nextNode != null) {
      temp = temp.nextNode;
    }
    temp.nextNode = null;
  }
  contains(value) {
    let temp = this.head;
    while (temp != null) {
      if (temp.value === value) {
        console.log(`The value ${value} was found on the list`);
        return true;
      }
      temp = temp.nextNode;
    }
    if (temp === null) {
      console.log(`The value ${value} was not found on the list`);
      return false;
    }
  }
  find(value) {
    let temp = this.head;
    let index = 0;
    while (temp != null) {
      if (temp.value === value) {
        return console.log(index);
      }
      index++;
      temp = temp.nextNode;
    }
    if (temp === null) {
      console.log('Index was not found');
    }
  }

  toString() {
    let temp = this.head;
    if (temp === null) return console.log("There's nothing on the list");
    const string = createString(temp);
    console.log(string);
    return string;

    function createString(temp) {
      if (temp.nextNode === null) {
        return `( ${temp.value} ) -> ` + null;
      } else {
        return `( ${temp.value} ) -> ` + createString(temp.nextNode);
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
newList.size();
newList.displayHead();
newList.displayTail();
newList.pop(1);
newList.at(3);
newList.contains('dog');
newList.find('snake');
newList.toString();
