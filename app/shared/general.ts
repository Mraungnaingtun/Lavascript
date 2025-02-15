export function isEven(num: number) {
  return num % 2 === 0;
}

export function isEvenWithIndex(num: number, index: number, arr: number[]) {
  return (num + index + 1) % 2 === 0;
}


export function makeDouble(num: number) {
  return num * 2;
}
