function fibsRec(num){
    if (num == 1){
        return [0];
    }
    else if (num == 2){
        return [0, 1];
    }
    else {
        let myArray = fibsRec(num - 1);
        myArray.push(myArray[num - 3] + myArray[num - 2]);
        return myArray;
    }
}