import { from, pipe } from 'rxjs';

const myObservable = from([1, 2, 3, 4, 5]);

// const result = await lastValueFrom(myObservable);
// console.log(result);
console.log(myObservable.pipe(
  map(value => value * 2)
)
)

