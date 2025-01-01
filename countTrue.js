function countTrue(arr) {
    let c = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == true) {
            c++;
        }
    }
    return c; 
}