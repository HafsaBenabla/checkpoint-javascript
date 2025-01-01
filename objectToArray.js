function objectToArray(obj) {
    let resultat = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            resultat.push([key, obj[key]]);
        }

    }
    return resultat;
}