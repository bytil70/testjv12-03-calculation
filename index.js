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

/*
let result = 1 + 2 * 3 + 4 ** 2;
console.log(result)

let answer = 12 % 5 + 8 / 2;  // % first
console.log(answer);

let x = 6 / 2 ** (2 + 5);
console.log(x);
*/



const consoleOutput = document.getElementById('consoleOutput');

// 覆寫 console.log 函數
const originalConsoleLog = console.log.bind(console);
console.log = function() {
  const message = Array.from(arguments).join(' '); // 將所有參數連接成一個字串
  originalConsoleLog.apply(console, arguments);
  if (consoleOutput) {
    consoleOutput.innerHTML += message + '<br>';
  }
};

// 您的 JavaScript 程式碼，包含 console.log()
console.log('Hello from JavaScript!');
let myVariable = 4;
console.log('變數 myVariable 的值是：', myVariable);

function myFunction() {
  let result = 12 % 5 + 8 / 2 + myVariable ** 2;  // % first
  console.log('函式 myFunction 的結果是：', result);
}

myFunction();