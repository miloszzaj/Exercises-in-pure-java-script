// Ćwiczenia do tablic i obiektów

// 1. Stwórz funkcje mergeArrays (array1, array2) , która zwróci now tablice, bedaca
// potaczeniem dwóch przekazanych tablic.
// Np.:
// mergeArrays ([2, 5], [3, 7]) powinno zwrócié [2, 5, 3, 7] .

arr1 = [2, 5];
arr2 = [3, 7];

const mergeArrays = (x, y) => (cos1 = [...x, ...y]);
console.log(mergeArrays(arr1, arr2));

// 2. Stwórz funkcje exceptFirst () , która zwróci tablice ze wszystkimi przekazanymi do niej
// argumentami oprócz pierwszego. Np.:
// exceptFirst (2, "delfin", null) powinno zwrócic ["delfin", null].
// Uzyj sktadni rest parameter.

arr3 = [2, "delfin", null];
const exceptFirst = x => {
  return (cos = [...x].slice(1));
};
console.log(exceptFirst(arr3));

// 3. Stwórz funkcje last2Parameters () , która zwróci tablice Z dwoma ostatnimi argumentami
// przekazanymi do funkcji. Np.:
// last2Parameters (1, 3, undefined, true) powinno zwróció [undefined, true]
// Uzyj Array. slice

const myFunction = (...x) => {
  return x.slice(-2);
};
console.log(myFunction(1, 3, undefined, true));

// 4. Stwórz funkcje index0f (element, array) , która zwróci indeks podanego elementu w podanej
// tablicy. Np.:
// index0f ("kawa", ["rum", "kawa", "sangría"]) powinno zwrócié 1 .
// Uzyj Array. index0f.
