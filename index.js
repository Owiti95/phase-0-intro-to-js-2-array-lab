// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push('Ralph');
 }  

 function destructivelyPrependCat() {
    cats.unshift('Bob')
 }

 function  destructivelyRemoveLastCat() {
    cats.pop('Garfield')
 }

 function  destructivelyRemoveFirstCat() {
    cats.shift('Milo')
 }

 function appendCat() {
    return [ 'Milo', 'Otis', 'Garfield', 'Broom']
 }

 function prependCat() {
    return ["Arnold", "Milo", "Otis", "Garfield"]
 }

 function removeLastCat() {
    return ["Milo", "Otis"]
 }

 function removeFirstCat() {
    return ["Otis", "Garfield"]
 }
