// 1. Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

function insertFront(arr, x){
    len = arr.length;
    for(var i = len; i > 0; i--){
        arr[i] = arr[i-1]
    }
    arr[0] = x;
    return arr;
}
console.log(insertFront([2,4,6], 5))

//2. Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

function popFront(arr){
    var i = arr[0];
    for(var x = 0; x < arr.length-1; x++){
        var replace = arr[x];
        arr[x] = arr[x+1];
        arr[x+1] = replace;
    }
    arr.pop();
    return i;
}

var arr = [5,6,7];
console.log(popFront(arr));
console.log(arr);

//3. Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertAt(arr, x, val){
    for(var i  = arr.length-1; i > x; i--){
        var temp = arr[i-1];
        arr[i] = temp;
    }

arr[x] = val;
return arr
}

var arrOne = [5,6,7,8]
console.log(insertAt(arrOne, 1, 5))