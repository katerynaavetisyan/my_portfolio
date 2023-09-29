function add() {

    console.log(arguments);
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(add(15, 56, 56, 74));

console.log(add(3, 4, 7));
