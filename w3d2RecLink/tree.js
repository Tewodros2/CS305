function contains(root, target) {
    if (root.value === target) {
        return true;
    }
    else {
        for (let value of root.descendents) {
            return contains(value, target)
        }
        return false
    }
}

function findSubtree(root, target) {
    if (root.value === target) {
        return root;
    }
    else {
        for (let value of root.descendents) {
            return findSubtree(value, target)
        }
        return null
    }
}
function treeModifier(root, modiferFunc) {
    if (root)
        root.value = modiferFunc(root)
    for (let node of root.descendents) {
        treeModifier(node, modiferFunc)
    }
}

function allCaps(node) {
    return node.value.toUpperCase()
}
function addStar(node) {
    return "***" + node.value + "***"
}
function reverseValue(node) {
    let reverse = ""
    for (let i = node.value.length - 1; i >= 0; i--) {
        reverse += node.value[i]
    }
    return reverse;
}
function treeCollector(root, collector = []) {
    if (root.value)
        collector.push(root.value)
    for (let node of root.descendents) {
        treeCollector(node, collector)
    }
    return collector
}
function TreeNode(value) {
    this.value = value;
    this.descendents = [];
}

// create nodes with values
const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');


abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);

console.log(treeCollector(abe))
console.log(contains(abe, "Bart"))//true
console.log(contains(abe, "Redda"))//false

console.log(findSubtree(abe, "Homer"))

treeModifier(abe, allCaps)
console.log(homer)//all must be capital after calling the tree modifier

treeModifier(abe, addStar)
console.log(abe)//all must include ***value***

treeModifier(abe, reverseValue)
console.log(homer)
