function objectToArray(obj) {
    let keys = Object.keys(obj);  // Récupère les clés de l'objet
    let resultat = [];  
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];  
        let value = obj[key];  
        resultat.push([key, value]); 
    }

    return resultat;  
}


let obj = { a: 1, b: 2, c: 3 };
console.log(objectToArray(obj)); 