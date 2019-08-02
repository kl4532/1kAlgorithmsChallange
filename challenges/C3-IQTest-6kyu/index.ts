export function iqTest(numbers: string): number {
    const arr: number[] =[];
    let count: number = 0;
    numbers.split(" ").forEach(n=>arr.push(+n));
    for(let i=0; i<arr.length;i++){
        arr[i]%2 ? count++ : count;
    }
    for(let i=0; i<arr.length;i++){
        if(count<2 && arr[i]%2!==0){
            return i+1;
        }else if(count>=2 && arr[i]%2==0 ){
            return i+1;
        }
    }
  }
  
  console.log(iqTest("1 3 1 0 5"));
  