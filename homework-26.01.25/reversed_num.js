function reverse_num(num) {
    let reversed = 0;
    while (num !== 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit; 
        num = (num - digit) / 10; 
    }
    return reversed;
}
console.log(reverse_num(12345));

