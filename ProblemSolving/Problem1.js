function findOppositeNumber(n, inputNumber) {
    if (n%2===1) {
        return "Số phần tử phải là số chẵn";
    } else {
        if (inputNumber > n-1 || inputNumber < 0) {
            return "Không tìm được kết quả thỏa mãn";
        } else {
            let result = inputNumber > n/2 ? inputNumber-n/2 : n/2+inputNumber;
            return result;
        }
    }
}

//Test
console.log(findOppositeNumber(10,9)); // ==> 4
console.log(findOppositeNumber(12,5)); // ==> 11