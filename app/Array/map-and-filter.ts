import { isEven, isEvenWithIndex, makeDouble } from "../shared/general";

let arr: number[] = [1, 2, 3, 4, 5];

// - - - - - - - - - filter - - - - - - - - - - -
let evenArr: number[] = arr.filter((num: number) => num % 2 === 0);
// console.log(evenArr);
// using predicate function
export let advFilter: number[] = arr.filter(isEven);
export let advFilter2: number[] = arr.filter(isEvenWithIndex);

// - - - - - - - - - map - - - - - - - - - - -
let doubledArr: number[] = arr.map((num: number) => num * 2);
// console.log(doubledArr);
// using predicate 
export let doubledArr2: number[] = arr.map(makeDouble);


// - - - - - - filter and map - - - - - - - - - - -
let cusArr = arr
  .filter((num: number) => num % 2 === 0)
  .map((num: number) => num * 2);
// console.log(cusArr);
