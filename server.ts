import { asyncWrapProviders } from "async_hooks";
import { arrayBuffer } from "stream/consumers";
import { SourceTextModule } from "vm";


function sumOfTrippledEvens(array: number[]): number {
  return array
    .filter((num: number) => num % 2 === 0)
    .map((num: number) => num * 3)
    .reduce((sum: number, num: number) => sum + num, 0);
}

console.log(sumOfTrippledEvens([1, 2, 3, 4, 5]));


function camelize(str: string): string {
  return str
  .split('-')
  .map(                                   // "?" is a ternary operator (if true, return word, if false, return word[0].toUpperCase() + word.slice(1))
    (word: string, index: number) => index == 0 ? word : word[0].toUpperCase() + word.slice
    (1)
  )
  .join('');
}

// "?" wenn das stimmt (true) dann wird das erste wort ausgegeben, 
// wenn das nicht stimmt (false) dann wird das zweite wort ausgegeben, also das
// was nach dem ":" steht


function filterRange (arr: number[], a: number, b: number): number[] {
  return arr.filter(item => (a <= item && item <= b));
}
//diese funktion filtert die werte zwischen a und b aus dem array arr aus
// "item" ist der wert des arrays, da kann man auch "num" schreiben oder sonst was
// "a <= item && item <= b" ist die bedingung, die erfüllt sein muss, damit der wert in das array kommt
// "a" ist der kleinste wert, der in das array kommen kann
// "b" ist der größte wert, der in das array kommen kann


function filterRangeInPlace (arr: number[], a: number, b: number){
  for (let i = 0; i < arr.length; i++){
    let val = arr[i];

    if (val < a || val > b){
      arr.splice (i, 1);
      i--;
    }
  }
}

let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order
arr.sort((a, b) => b - a);
//"arr.sort" ist die funktion, die das array sortiert
//"(a, b) => b - a" ist die funktion, die das array sortiert
//"b - a" ist die funktion, die das array sortiert
//"b" ist der größte wert, der in das array kommen kann
//"a" ist der kleinste wert, der in das array kommen kann
alert( arr );


let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

  function copySorted(arr: string[]){
    return arr.slice().sort();
  }
  //"arr.slice()" ist die funktion, die das array kopiert
  //"arr.sort()" ist die funktion, die das array sortiert
  //"return arr.slice().sort()" ist die funktion, die das array kopiert und sortiert
  //"sorted" ist das array, das sortiert wird
  //"arr" ist das array, das sortiert wird
  //"alert( sorted )" ist die funktion die das sortierte array ausgibt
  //"alert( arr )" ist die funktion die das ursprüngliche array ausgibt

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)


function shuffle(arr: number[]){
  array.sort(() => Math.random() - 0.5);
}


let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]


function unique(arr:string []){
  let result = [];
  for (let str of arr){
    if (!result.includes(str)){
      result.push(str);
    }
  }
  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

let variable = username(vorname);

if (variable == " "){
  console.log("Hallo " + variable);
} else { 
  console.log("Hallo, unbekannte Person");
}

for (let i = 0; i < 10; i++){
  console.log(i);
  if (i == 5){
    break;
  }
  if (i == 3){
    continue;
  }
  console.log(i);
}
// Erklärung: Das ist eine for-Schleife, die von 0 bis 9 läuft.
// Wenn i == 5, dann wird die Schleife abgebrochen.
// Wenn i == 3, dann wird die Schleife übersprungen.
// Wenn i == 0, dann wird die Schleife gestartet.
// Wenn i == 1, dann wird die Schleife gestartet.
// Wenn i == 2, dann wird die Schleife gestartet.
// Wenn i == 3, dann wird die Schleife übersprungen.
// Wenn i == 4, dann wird die Schleife gestartet.
// Wenn i == 5, dann wird die Schleife abgebrochen.

