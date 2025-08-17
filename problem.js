/* =========================
   Problem 1: Reverse a String
   ========================= */
function reverseString(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) rev += str[i];
  return rev;
}
// console.log(reverseString("hello")); // "olleh"


/* =========================
   Problem 2: Count Vowels in a String
   ========================= */
function countVowels(str) {
  const vowels = { a:1, e:1, i:1, o:1, u:1 };
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i].toLowerCase();
    if (vowels[ch]) count++;
  }
  return count;
}
// console.log(countVowels("programming")); // 3


/* =========================
   Problem 3: Check for Palindrome
   (exact letters; case-insensitive)
   ========================= */
function isPalindrome(str) {
  let l = 0, r = str.length - 1;
  while (l < r) {
    if (str[l].toLowerCase() !== str[r].toLowerCase()) return false;
    l++; r--;
  }
  return true;
}
// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("hello")); // false


/* =========================
   Problem 4: Find the Maximum Number
   ========================= */
function maxInArray(arr) {
  if (arr.length === 0) throw new Error("Array is empty");
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) if (arr[i] > max) max = arr[i];
  return max;
}
// console.log(maxInArray([5, 1, 9, 3])); // 9


/* =========================
   Problem 5: Remove Duplicates from an Array
   (numbers only as per prompt)
   ========================= */
function uniqueNumbers(arr) {
  const seen = {};
  const out = [];
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    if (!seen[n]) {
      seen[n] = true;
      out.push(n);
    }
  }
  return out;
}
// console.log(uniqueNumbers([1,2,2,3,4,4])); // [1,2,3,4]


/* =========================
   Problem 6: Sum of All Numbers in an Array
   ========================= */
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  return sum;
}
// console.log(sumArray([1,2,3,4])); // 10


/* =========================
   Problem 7: Find Even Numbers in an Array
   ========================= */
function evenNumbers(arr) {
  const evens = [];
  for (let i = 0; i < arr.length; i++) if (arr[i] % 2 === 0) evens.push(arr[i]);
  return evens;
}
// console.log(evenNumbers([1,2,3,4,5,6])); // [2,4,6]


/* =========================
   Problem 8: Capitalize First Letter of Each Word
   (character-by-character to handle extra spaces/punctuation)
   ========================= */
function capitalizeWords(str) {
  let result = "";
  let startOfWord = true;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (startOfWord && ch >= "a" && ch <= "z") {
      result += String.fromCharCode(ch.charCodeAt(0) - 32); // to upper
      startOfWord = false;
    } else {
      result += ch;
      // word separators: space or any non-letter
      if (ch === " " || !( (ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z") )) {
        startOfWord = true;
      } else {
        startOfWord = false;
      }
    }
  }
  return result;
}
// console.log(capitalizeWords("hello world")); // "Hello World"
// console.log(capitalizeWords("  hello   world! js-rocks")); // "  Hello   World! Js-Rocks"


/* =========================
   Problem 9: Factorial of a Number (loop)
   ========================= */
function factorial(n) {
  if (n < 0 || n !== Math.floor(n)) throw new Error("n must be a non-negative integer");
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}
// console.log(factorial(5)); // 120
// console.log(factorial(0)); // 1


/* =========================
   Problem 10: PingPong Challenge (1..20)
   ========================= */
function pingPong(n = 20) {
  const out = [];
  for (let i = 1; i <= n; i++) {
    const by3 = i % 3 === 0;
    const by5 = i % 5 === 0;
    if (by3 && by5) out.push("PingPong");
    else if (by3) out.push("Ping");
    else if (by5) out.push("Pong");
    else out.push(i);
  }
  return out;
}
// console.log(pingPong().join(", ")); // 1, 2, Ping, 4, Pong, ...
