function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    return 0; // Or throw a custom error for better handling
  }
  return a / b;
}

let result = add(5, 3); // 8
result = subtract(10, 4); // 6
result = multiply(7, 2); // 14
result = divide(9, 0); // Returns 0 instead of throwing error.  Consider using try...catch for better error management in a real application

//Example of try...catch
try {
    let result2 = divide(9,0);
    console.log(result2);
} catch (error) {
    console.log("An error occurred:", error)
}