// filter takes an array and function as argumentfunction 
function filter(arr, filterFunc) 
{  
      const filterArr = []; // empty array     
         // loop though array   
          for(let i=0;i<arr.length;i++) {     
                 const result = filterFunc(arr[i], i, arr);        // push the current element if result is true      
                   if(result)            
                    filterArr.push(arr[i]);   
                  }   
                     return filterArr;
                    }
                    var arr=[1,2,3,4,5,,7,8,9];
                const oddArr2 = filter(arr, num => num % 2 === 0);
console.log(oddArr2); //prints [2, 4, 8]








