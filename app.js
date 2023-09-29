function add() {
    let arg = Array.from(arguments);
    return args.reduce(function (acc, cur) {
        return acc + cur;
    })
}

console.log(add(15, 56, 56, 74));

console.log(add(3, 4, 7));