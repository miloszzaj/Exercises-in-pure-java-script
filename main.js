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
  return (cos = [...x].shift());
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

const indexOf = (x, y) => y.indexOf(x);
console.log(indexOf("kawa", ["rum", "kawa", "sangría"]));

// 5. Stwórz funkcje findNonEmptyTask (tasks) która zwróci pierwsze zadanie, które ma tresó.
// Np.:
// findNonEmptyTask([
// {content: ""},
// {content: "kupié balony W ksztatcie psów"},
// )
// powinno zwróció {content: "kupic balony w ksztatcie psów"}
// Uzyj Array. find

const findNonEmptyTask = x => x.find(x => x.content !== "");

console.log(
  findNonEmptyTask([
    { content: "" },
    { content: "kupic balony W ksztatcie psów" },
  ])
);

// Stwórz funkcje oddIndex (numbers) , która zwróci indeks pierwszej nieparzystej liczby z
// podanej tablicy. Np.:
// oddIndex ([2, 4, 7, 8]) powinno zwrócié 2 .

const oddIndex = x => x.findIndex(number => number % 2 !== 0);
// or Math.abs(n % 2) !== 0
console.log(oddIndex([2, 4, 7, 8]));

// 7. Stwórz funkcje hasStrawberry (fruits) , która sprawdzi, czy w podanych owocach jest
// truskawka. Np.:
// hasSt rawberry ( ["banan", "marakuja"]) powinno zwrócié false .
// Uzyj Array. includes

const hasStrawberry = x => x.includes("strawberry");
console.log(hasStrawberry(["banan", "marakuja"]));

// 8. Stwórz funkcje someAdult ( people) która sprawdzi, czy w$ród podanych osób jest ktos
// dorosty. Np.:
// someAdult([
// {name: "Melodia" age: 15},
// {name: "Kosmo", age: 19},
// 1)
// powinno zwrócié true .
// Uzyj Array. some

const someAdult = x => x.some(({ age }) => age > 18);

const arrayOfPeople = [
  { name: "Melodia", age: 15 },
  { name: "Kosmo", age: 19 },
];

console.log(someAdult(arrayOfPeople));

// 9. Stwórz funkcje onlyString() która sprawdzi, czy wszystkie podane argumenty sa tekstowe.
// Np.:
// onlyString("", "Zelazko") powinno zwrócié true
// Uzyj Array. every .

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
const onlyString2 = (...params) =>
  params.every(param => typeof param === "string");

console.log(onlyString2("", "Zelazko", ""));

// 10. Stwórz funkcje filterPremium (carBrands) , która z podanej tablicy marek samochodów
// zwróci tylko marki premium. Np.:
// filterPremium ( ["Peugeot", "BMW", "Audi"]) powinno zwrócic ["BMW", "Audi"] .
// Zatózmy, 2e marki premium to BMW, Audi i Mercedes.
// Uzyj Array. filter oraz Array. includes.

const cars = ["Peugeot", "BMW", "Audi"];
const premiumCars = ["BMW", "Audi", "Mercedes"];
const filterPremium = cars => cars.filter(car => premiumCars.includes(car));

console.log(filterPremium(cars));

// 11. Stwórz funkcje getColors () , która zwróci tablice kolorów samochodów podanych w
// argumentach. Np.:
// getColors(
// {car: "BMW X5", color: "black"},
// {car: "Peugeot 3008", color: "white"},
// powinno zwróció ["black", "white"] .
// Uzyj Array. map

const getColors = (...params) => params.map(({ color }) => color);

console.log(
  getColors(
    { car: "BMW X5", color: "black" },
    { car: "Peugeot 3008", color: "white" }
  )
);

// 12. Stwórz funkcje sortPeople (people) , która posortuje osoby od najmtodszych do najstarszych.
// Przyktadowe uzycie:
// sortPeople([
// {name: "Krzychu", age: 30},
// {name: "Zdzichu", age: 20},
// 1)
// Uzyj Array. sort .

const people = [
  { name: "Krzychu", age: 30 },
  { name: "Zdzichu", age: 20 },
];

const sortPeople = x => x.sort((a, b) => a.age - b.age);
console.log(sortPeople(people));
