function pascal_triangle(rows) {
    let triangle = [];

    for (let i = 0; i < rows; i++) {
        let row = [];
        
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row[j] = 1; 
            } else {
                row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j]; 
        }
    }
        triangle[i] = row; 
    }

    for (let i = 0; i < rows; i++) {
        let spaces = "";
        for (let s = 0; s < rows - i; s++) {
            spaces += " ";
        }
        let line = spaces;
    
        for (let j = 0; j <= i; j++) {
            line += triangle[i][j] + " ";
        }

        console.log(line);
    }
}

pascal_triangle(5)
