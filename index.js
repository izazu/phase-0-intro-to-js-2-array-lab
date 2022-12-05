// Write your sol
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}
  
function  destructivelyPrependCat(name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop()
}
function  destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    var newArray = cats.slice();
  newArray.push(name)
  return newArray
}
function prependCat(name){
      var newArray = cats.slice();
      newArray.unshift("Arnold");
    return newArray;

}
function removeLastCaat(){
    cats.pop();
    

}
function removeFirstCat(){
    cats.shift()
}