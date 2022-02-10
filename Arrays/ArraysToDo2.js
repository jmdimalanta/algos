//1. Reverse - Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second 
//array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

var arrayOne = [5,6,7,8,9];
function reverseArray(array){
    for (var i = 0; i < array.length/2; i++){
        var temp = array[i];
        array[i] = array[(array.length - 1) - i];
        array[(array.length -1) - i] = temp;
    }
    return array;
}
console.log(reverseArray(arrayOne));

//Rotate - Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), 
// change the array to [3,1,2]. Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.

var newArray = [5,6,7,8,9];
function rotate(array, shiftBy){
    if((shiftBy > array.length -1)||((shiftBy * -1) > array.length-1)){
        shiftBy = shiftBy % array.length;
    }
    if(shiftBy < 0){
        shiftBy = array.length + shiftBy;
    }
    for(var i = 0; i < shiftBy; i++){
        for(var x = array.length; x > 0; x--){
            array[x] = array[x-1];
        }
        array[0] = array[array.length-1];
        array.pop(array.length-1);
    }
    return array;
}
console.log(rotate(newArray, -1));

//Filter Range - Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.
var arrayFilter = [1,3,5,6,7,8,9,12,15];
function removeAt(array, val){
    var deleted = array[val];
    for(var i = val; i < array.length-1; i++){
        var content = array[i+1];
        array[i] = content;
    }
    array.pop(array.length-1);
    return array;
}

function filteredRange(array, minNum, maxNum){
    for(var x = 0; x < array.length; x++){
        if((array[x] >= minNum) &&(array[x] <= maxNum)){
            removeAt(array, x);
        }
    }
    return array;
}
console.log(filteredRange(arrayFilter, 5, 8));

//Concat - Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

var firstArray = [5,6,7];
var secondArray = [20,55,66];
function concatArr(firstArray, secondArray){
    var newArr = [];
    for (var i = 0; i < firstArray.length; i++){
        newArr.push(firstArray[i]);
    }
    for (var j = 0; j < secondArray.length; j++){
        newArr.push(secondArray[j]);
    }
    return newArr;
}
console.log(concatArr(firstArray, secondArray));