function my_bin(n) {
    let binary = "";
    
    if (n === 0) {
        return "0";
    }

    while (n > 0) {
        let remainder = n % 2; 
        binary = remainder + binary; 
        n = (n - remainder) / 2;
    }
    
    return binary;
} 

console.log(my_bin(5)); 

