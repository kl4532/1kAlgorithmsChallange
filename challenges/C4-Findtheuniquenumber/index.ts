export function findUniq(arr: Array<number>): number {
    let filter: number = 0;
    arr[0]==arr[1] ? filter=arr[0] : filter=arr[2];
    return arr.filter(f=> filter!==f)[0];
  }
console.log(findUniq([1,1,0,1,1,1,1]));