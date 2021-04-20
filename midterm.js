let array = [];
let sum = 0;
let count = 0;
for(let num = 20; num <= 500; num++) {
    if(num % 7 == 0) {
        if(num % 2 == 1) {
            array[count] = num;
            count++;
            sum += num;
        }
    }
}
let output = "결과: ";
for(let i = 0; i < array.length; i++){
    output = output + array[i]
    if(!(i == array.length-1)) {
        output += " + ";
    }
}
output += " = " + sum
console.log(output);