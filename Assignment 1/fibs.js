function fibs(num){
    if (num <= 1){
        return ([0]);
    }
    else if (num == 2){
        return ([0, 1]);
    }
    else {
        let myArray = [0, 1]
        for (let i = 3; i <= num; i++){
            myArray.push(myArray[i - 3] + myArray[i - 2]);
        }
        return myArray;
    }
}