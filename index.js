// Write your sol
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    var newArray = cats.slice();
    newArray.push(name)
    return newArray
}

function prependCat(name) {
    var newArray = cats.slice();
    newArray.unshift(name);
    return newArray;
}

function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
    return cats.slice(1);
}
