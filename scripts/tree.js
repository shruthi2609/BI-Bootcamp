class BST {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode
            return this
        }
        let current = this.root
        while (true) {
            if (value === current.data) {
                return -1
            }
            if (value < current.data) {
                if (current.left === null) {
                    current.left = newNode
                    return this
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode
                    return this
                }
                current = current.right;

            }
        }

    }
}



class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}


const tree = new BST()

console.log(tree.insert(10));
console.log(tree.insert(700));
console.log(tree.insert(650));
// console.log(tree.insert(705));
// console.log(tree.insert(730));
// console.log(tree.insert(5));

console.log(tree);