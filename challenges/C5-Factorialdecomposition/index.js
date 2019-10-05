function decomp(n) {
    let result = "";
    temp = n;
    n = factorial(n);  //  -> !n
    primeFactors(n).forEach(f=>{ // primeFactors(n) -> [of prime factors for n]
        let pow = powerFactor(n,f);
        pow === 1 ? result += `${f} * `: result += `${f}^${pow} * `
    });
    result[result.length-1] === " " ? result = result.substring(0,result.length-3) : 0;

    function primeFactors(num){
        let factors = [];
        // cheating: checking only for first 1kk numbers if they are prime factors
        for(let i=2; i<temp; i++){
            i = BigInt(i);
            num%i == 0 && isPrime(i) ? factors.push(i) : 0;
        }
        return factors;
    }
    function isPrime(num){
        num = BigInt(num);
        for(let i=2; i<num;i++){
            i = BigInt(i);
            if(num%i === 0n){ return false};
        }
        return true;
    }
    
    function factorial(n) {
        let factorial = BigInt(1);
        for(let i=1; i<n; i++){
            i = BigInt(i);
            factorial = factorial * (i+1n);
        }
        return factorial;
    }
    function powerFactor(factorial, factor){
        let count = 0;
        function divide(num, div){
            if(num%div==0){
                num = num/div;
                count++;
                divide(num, div);
            }else return;
            
        }
        divide(factorial,factor);
        return count;
    }

console.log(Number.MAX_SAFE_INTEGER);
    console.log(result);
    return result;
  }

  // n to factorial -> max 10000
  decomp(2);