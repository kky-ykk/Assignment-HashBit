// 01)Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.

// const indianStates = [
//     "Andhra Pradesh",
//     "Arunachal Pradesh",
//     "Assam",
//     "Bihar",
//     "Chhattisgarh",
//     "Goa",
//     "Gujarat",
//     "Haryana",
//     "Himachal Pradesh",
//     "Jharkhand",
//     "Karnataka",
//     "Kerala",
//     "Madhya Pradesh",
//     "Maharashtra",
//     "Manipur",
//     "Meghalaya",
//     "Mizoram",
//     "Nagaland",
//     "Odisha",
//     "Punjab",
//     "Rajasthan",
//     "Sikkim",
//     "Tamil Nadu",
//     "Telangana",
//     "Tripura",
//     "Uttar Pradesh",
//     "Uttarakhand",
//     "West Bengal"
//   ];
  
//   const vowels="aeiouAEIOU";
  
//   let filterResult=indianStates.filter((state)=> !vowels.includes(state[0]));

//   console.log(filterResult);
  
// ------------------------------------------------------------------------------------------------
// Q2) let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.

// let str = 'I love my India';
// let strArr=str.split(" ");

// // let revArr=strArr.reverse();

// let l=0,h=strArr.length-1;

// while (l<h) {
//     let temp=strArr[l];
//     strArr[l]=strArr[h];
//     strArr[h]=temp;
//     l++;h--;
// }

// console.log(strArr);

// -----------------------------------------------------------------------------------------
// Q3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice

// let string = 'INDIA';

// let charArray = string.split(''); 

// charArray.splice(3, 0, 'O', 'N', 'E'); 
// charArray.splice(6, 1, 'S'); 

// let output = charArray.join(''); 

// console.log(output); // Output: 'INDONESIA'


// -------------------------------------------------------------------------------------
// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

// function countVowelsAndConsonants(str) {
//     let lowerStr = str.toLowerCase();
    
//     const vowels = ['a', 'e', 'i', 'o', 'u'];

//     let vowelCount = 0;
//     let consonantCount = 0;

//     for (let char of lowerStr) {
//         if (/[a-z]/.test(char)) {
//             if (vowels.includes(char)) {
//                 vowelCount++; 
//             } else {
//                 consonantCount++; 
//             }
//         }
//     }

//     return { vowelCount, consonantCount };
// }

// let exampleString = "This is a string with more than twenty characters.";
// let result = countVowelsAndConsonants(exampleString);

// console.log("Vowels: " + result.vowelCount); 
// console.log("Consonants: " + result.consonantCount); 

// ---------------------------------------------------------------------------------------------------
// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

// function correctfn(string, wrong, correct) {
//     const regex = new RegExp(wrong, 'g');
//     return string.replace(regex, correct);
// }

// // Example usage:
// const sentence = "The weather is nice today. The weather is perfect for a picnic.";
// const wrongWord = "weather";
// const correctWord = "day";

// const correctedSentence = correctfn(sentence, wrongWord, correctWord);
// console.log(correctedSentence);


// --------------------------------------------------------------------------------------
// Q6) inputArr = [1,2,3,9,10,7,5,4,3]
// answer = [9, 10, 7]
// User array.filter and return numbers greater than 5.

// let inputArr = [1,2,3,9,10,7,5,4,3];

// let arrRes=inputArr.filter(ele=>ele>5);

// console.log(arrRes);

// ------------------------------------------------------------------------------------------------
// Q7)
// const students = [
// { name: "Ram", scores: [80, 70, 60] },
// { name: "Mohan", scores: [80, 70, 90] },
// { name: "Sai", scores: [60, 70, 80] },
// { name: "Hemang", scores: [90, 90, 80, 80] },
// ];
// Output = [
// { name: "Ram", average: 70 },
// { name: "Mohan", average: 80 },
// { name: "Sai", average: 70 },
// { name: "Hemang", average: 85 },
// ];
// Use array.map and array.reduce.

// const students = [
//     { name: "Ram", scores: [80, 70, 60] },
//     { name: "Mohan", scores: [80, 70, 90] },
//     { name: "Sai", scores: [60, 70, 80] },
//     { name: "Hemang", scores: [90, 90, 80, 80] },
//     ];

// const res=students.map(obj=>{
//     let n=obj.scores.length;
//     let sum=obj.scores.reduce((c,s)=>c+s);

//     return ({
//         name:obj.name,
//         average:(sum/n)
//     })
// })

// console.log(res);

// ----------------------------------------------------------------------------------------
// Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.

// function repeatedSum(num) {
//     function sumOfDigits(n) {
//         let sum = 0;
//         while (n > 0) {
//             sum += n % 10; 
//             n = Math.floor(n / 10); 
//         }
//         return sum;
//     }

//     while (num >= 10) {
//         num = sumOfDigits(num); 
//     }
    
//     return num; 
// }

// // Example usage:
// const number = 456;
// const result = repeatedSum(number);
// console.log(result); // Output: 6


// ----------------------------------------------------------------------------------------
// Q9) Write a function to count the number of words in a paragraph.

// function countWords(paragraph) {
//     const words = paragraph.trim().split(/\s+/);
    
//     return words.length > 0 && words[0] !== '' ? words.length : 0;
// }

// // Example usage:
// const paragraph = "This is a sample paragraph with several words.";
// const wordCount = countWords(paragraph);
// console.log(`Number of words: ${wordCount}`); // Output: Number of words: 8


// -------------------------------------------------------------------------------------
// Q10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// // Example usage:
// const input = "Hello";
// const output = reverseString(input);
// console.log(output); // Output: olleH


// ---------------------------------------------------------------------------------
// Q11)
// Input

// [
//     student1: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student2: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student3: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     }
// ]
    
// Output: -
// [
//     student1: {
//         average: 44
//     },
//     student2: {
//         average: 44
//     },
//     student3: {
//         average: 44
//     }
// ]
// Write code to find average as mentioned above. Use array and object methods.

// Input data
const students = {
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

function calculateAverages(students) {
    const averages = {};

    for (const student in students) {
        const subjects = students[student];
        const scores = Object.values(subjects); 

        const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;

        averages[student] = { average };
    }

    return averages;
}

// Example usage
const output = calculateAverages(students);
console.log(output);
