export class Kata {
    static highAndLow(numbers: string) {
        let num: string[] = numbers.split(" ");
        let arr: number[] = [];
        num.forEach(n=>arr.push(+n));
        arr.sort((a,b)=>a-b);
        return arr[arr.length-1] + " " + arr[0];
    }
}
console.log(Kata.highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));