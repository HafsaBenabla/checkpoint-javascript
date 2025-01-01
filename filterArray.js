function filterArray(arr) {
    let tab = [];
    for (i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            tab.push(arr[i]);
        }
    }
    return tab;
}