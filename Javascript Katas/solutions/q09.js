//09. How do you check if two strings are anagrams of each other?

const checkAnagram = (str1, str2) => {
    const str1Sorted = str1.toLowerCase().split("").sort().join("");
    const str2Sorted = str2.toLowerCase().split("").sort().join("");

    return str1Sorted.localeCompare(str2Sorted) === 0 ? true : false;
}

console.log(checkAnagram("dog", "god"), true)
console.log(checkAnagram("this string", "none"), false)
console.log(checkAnagram("Listen", "listen"), true)
console.log(checkAnagram("listen", "silent"), true)
console.log(checkAnagram("listen", "silentt"), false)