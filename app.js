
/*function reverseString(str) {
    return str.split("").reverse().join("");//split string into seperate substrings, reverse the order, joing the substrings back together
}
console.log(reverseString("hello")); //Output: olleh
console.log(reverseString("recursion")); //Output: noisrucer
console.log(reverseString(" ")); //Output: a
console.log("" + reverseString(" ") + ""); // Output: [ ]console.log(reverseString("coding is fun")); //Output: nuf si gnidoc
*/

NEW ATTEMPT WITH RECURSION
function reverseString(str) {
    if (str.length === 1 || 0) {
        return str;
    }
    return str.charAt(str.length - 1) + reverseString(str.slice(0, -1));
}

console.log(reverseString("hello")); //Output: olleh
console.log("" + reverseString(" ") + ""); // Output: [ ]console.log(reverseString("coding is fun")); //Output: nuf si gnidoc
console.log(reverseString("recursion")); //Output: noisrucer

