import { Observable, lastValueFrom, firstValueFrom } from "rxjs";

//- - - - - - produce - - - - - - - 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const observable = new Observable((subscriber) => {
    let index = 0;
    const intervalId = setInterval(() => {
        if (index < arr.length) {
            subscriber.next(arr[index++]);
        } else {
            subscriber.complete();
            clearInterval(intervalId);
        }
    }, 2000);
});

export function getValueBySubscribing() {
    observable.subscribe({
        next(hello) {
            console.log(hello);
        },
        error(err) {
            console.log(err);
        },
        complete() {
            console.log('Done');
        }
    });
}

export async function getFistValue() {
    const d = await firstValueFrom(observable);
    console.log(d);
}

export async function getLastValue() {
    const d = await lastValueFrom(observable);
    console.log(d);
}

//- - - - - - - consume - - - - - - - -
// getFistValue();
// getLastValue();
// getValueBySubscribe();

