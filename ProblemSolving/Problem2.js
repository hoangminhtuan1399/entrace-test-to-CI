function merge2String(str1, str2) {
    let result = "";
    let split1 = str1.split("");
    let split2 = str2.split("");
    if (split1.length >= split2.length) {
        for (let i = 0; i < split2.length; i++) {
            result += split1[i] + split2[i];
        }
        for (let j = split2.length; j < split1.length; j++) {
            result += split1[j];
        }
    } else {
        for (let i = 0; i < split1.length; i++) {
            result += split1[i] + split2[i];
        }
        for (let j = split1.length; j < split2.length; j++) {
            result += split2[j];
        }
    }
    return result;
}

//Test
console.log(merge2String("abc", "1234")); // ==> a1b2c34
console.log(merge2String("abc", "123")); // ==> a1b2c3
console.log(merge2String("abcd", "123")); // ==> a1b2c3d