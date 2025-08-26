

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


function filterRange (arr, a, b){
  return arr.filter(item => (a <= item && item <= b));
}
//diese funktion filtert die werte zwischen a und b aus dem array arr aus
// "item" ist der wert des arrays, da kann man auch "num" schreiben oder sonst was
// "a <= item && item <= b" ist die bedingung, die erfüllt sein muss, damit der wert in das array kommt
// "a" ist der kleinste wert, der in das array kommen kann
// "b" ist der größte wert, der in das array kommen kann
