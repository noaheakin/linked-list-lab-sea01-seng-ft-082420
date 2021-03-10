function getName(node) {
    return node["name"];
}

function headNode(linkedList, collection) {
    return collection[linkedList];
}

function next(head, collection) {
    return collection[head.next];
}

function nodeAt(index, linkedList, collection) {
    let currentNode = headNode(linkedList, collection);
    for (let i = 0; i < index; i++) {
        currentNode = next(currentNode, collection);
    }
    return currentNode;
}

function addressAt(index, linkedList, collection) {
    if (index === 0) return linkedList;
    else return nodeAt(index-1, linkedList, collection).next;
}

function indexAt(node, collection, linkedList) {
    let currentNode = headNode(linkedList, collection);
    let index = 0;
    while (currentNode !== node) {
        index ++;
        currentNode = next(currentNode, collection);
    }
    return index;
}

function insertNodeAt(index, newNodeAddress, linkedList, collection){
    let prevNode = nodeAt(index - 1, linkedList, collection)
    let nextNode = nodeAt(index, linkedList, collection)
    let nextNodeAddress = addressAt(nextNode, linkedList, collection)
    prevNode.next = newNodeAddress
    let newNode = collection[newNodeAddress]
    newNode.next = nextNodeAddress
  }

function deleteNodeAt(index, linkedList, collection) {
    let prevNode;
    let currentNode = headNode(linkedList, collection);
    for (let i = 0; i < index; i++) {
        prevNode = currentNode;
        currentNode = next(currentNode, collection);
    }
    prevNode.next = currentNode.next;
}