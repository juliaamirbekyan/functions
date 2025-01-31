function calc(a, op, b){
switch(op){
    case "+":
        return a + b;
    case "-":
        return a - b;
    case "*":
        return a * b;
    case "/":
        return a / b;
    case "**":
        return a**b;
    case "%":
        return a % b;
}

}
console.log(calc(8, "/", 3))