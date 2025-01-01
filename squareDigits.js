function squareDigits(n) {
    let result = "";
    while (n > 0) {
        let digit = n % 10;
        let squared = digit * digit;
        result = squared + result;
        n = Math.floor(n / 10);
    }
    return parseInt(result);
}