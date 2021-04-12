const isPrime=function(number)
{
    if(number<2)
    return false;
    if(number==2)
    return true;
    for(let i=2;i<number;i++)
    if(number%i==0)
    return false;

    return true;
}

const findPrimes=(min,max,callback)=>{
    let primes=[]; //to hold all the prime values
    let lo=min;

    let hi=Math.min(lo+100,max);

    let iid=setInterval(() => {

        for(let i=lo;i<hi;i++)
        if(isPrime(i))
        primes.push(i);
    
        lo=hi;
        hi=Math.min(lo+100,max);
        if(lo>=max)
        {
            clearInterval(iid);
            callback(primes);
        }
    },100);
}

function testFindPrimes(min,max)
{
    findPrimes(min,max,primes=> console.log(`total primes between ${min}-${max}is${primes.length}`));


    console.log(`finding primes between ${min}-${max}`);
}

testFindPrimes(2,100);
testFindPrimes(2,10000);
testFindPrimes(2,10);