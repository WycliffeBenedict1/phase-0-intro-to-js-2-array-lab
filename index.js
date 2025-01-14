// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Bella){
    cats.push(Bella);
}

function destructivelyPrependCat(Elsa) {
    cats.unshift(Elsa);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat( Broom){
    return [...cats, "Broom"];
}

function prependCat(Arnold) {
    return ["Arnold", ...cats];
}

function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
    return cats.slice (1)
}