function isSpecialArray(arr) {
    for (i = 0; i < arr.length; i++) {
        if (i % 2 == 0 && arr[i] % 2 !== 0) {
            return false;
        }
        if (i % 2 !== 0 && arr[i] % 2 == 0) {
            return false;
        }
    }
    return true;
}