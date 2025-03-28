// Section C: Coding Questions (12 Marks)
// 1. Write a function to reverse a given string.
//1. Write a function to reverse a given string. 
// example:
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // Output: "olleh"
// 2. Implement a function to find the sum of all even numbers in an array.

function sumOfEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);
} 
console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6,8,10]));
// 3. Create a function that takes two numbers. If the numbers are the same, return their product. If they are different, return their sum.
function calculate(a, b) {
    if (a === b) {
        return a * b;
    } else {
        return a + b;
    }
}
console.log(calculate(4, 4)); 
console.log(calculate(4, 10));

// 4. Write a function that checks if a given word is a palindrome.
function isPalindrome(str) {
    return str == str.split('').reverse().join('');
}
console.log(isPalindrome('Hello')); 
console.log(isPalindrome("madam")); 




