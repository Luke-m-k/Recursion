function mergeSort(myArray){
    if (myArray.length === 1){
        return myArray;
    }

    let firstArr = myArray.splice((myArray.length)/2);
    let secondArr = myArray;

    let sortedFirstArr = mergeSort(firstArr);
    let sortedSecondArr = mergeSort(secondArr);

    let mergeArr = [];
    while (sortedFirstArr.length != 0 || sortedSecondArr.length != 0){
        if(sortedFirstArr[0] <= sortedSecondArr[0]){
            mergeArr.push(sortedFirstArr.shift());
        }
        else if(sortedFirstArr[0] > sortedSecondArr[0]) {
            mergeArr.push(sortedSecondArr.shift());
        }
        else if(sortedFirstArr.length == 0){
            mergeArr.push(sortedSecondArr.shift());
        }
        else {
            mergeArr.push(sortedFirstArr.shift());
        }
    }

    return mergeArr;
}