






function map(arr, mapFunction) {    
    const mapArray = []; 
    for(let i=0;i<arr.length;i++) {        
        const result = mapFunction(arr[i], i, arr);       
         mapArray.push(result);    }    
         return mapArray;
    }
    var arr=[1,2,3,4,5,,7,8,9];
    const squareArr2 = map(arr, num => num ** 2);
    console.log(squareArr2);