// arithmatic operators = operands (values, variables, etc.)
//                        operators (+, -, *, /)
//                        ex. 11 = x + 5;

/*let student = 30;
//student += 1;  student ++;
//student -= 1;  student --;
//student *= 2;
//student /= 2;
//student **= 2;
student %= 4;

console.log(student);
*/

/*
operation precedence:
1. parenthesis ()
2. exponents
3. multiplication & division & module
4. addition & subtraction
*/

let result = 1 + 2 * 3 + 4 ** 2;
console.log(result)

let answer = 12 % 5 + 8 / 2;  // % first
console.log(answer);

let x = 6 / 2 ** (2 + 5);
console.log(x);