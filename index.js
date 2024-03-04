function isPalindrome(word) {
  // Write your algorithm here
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanedStr === cleanedStr.split('').reverse().join('');

}

/* 
  Add your pseudocode here:
  Remove non-alphanumeric characters from the input string and convert it to lowercase.
 Check if the cleaned string is equal to its reverse.
  If they are equal, return true (it's a palindrome), otherwise, return false.
*/


/*
Add written explanation of your solution here:
  The function first cleans the input string by removing non-alphanumeric characters and converting it to lowercase.
  Then it checks if the cleaned string is equal to its reverse. If they are equal, it returns true, indicating that the input string is a palindrome, otherwise, it returns false.
*/



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
