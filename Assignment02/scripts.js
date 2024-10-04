// Write code to display from 1 to 100 but just even numbers.

// for(let i=2;i<=1000;i+=2){
//     // console.log(i," ");
//     process. stdout. write(i+",")
// }

// ---------------------------------------------------------------------------------------------
// 3) You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.
// if 500000 >= salary > 0 then 0% tax on the entire salary.
// If 1000000 >= salary > 500000 then 10% tax on the entire salary.
// If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
// If the salary > 1500000 then 30% tax on the entire salary.


// function findTax(salary) {
//     let taxAmount;

//     switch (true) {
//         case (salary > 0 && salary <= 500000):
//             taxAmount = 0;
//             break;
//         case (salary > 500000 && salary <= 1000000):
//             taxAmount = salary * 0.10;
//             break;
//         case (salary > 1000000 && salary <= 1500000):
//             taxAmount = salary * 0.20;
//             break;
//         case (salary > 1500000):
//             taxAmount = salary * 0.30;
//             break;
//         default:
//             console.log("Invalid salary");
//             return;
//     }

//     console.log(`The tax for a salary of ${salary} is: ${taxAmount}`);
//     return taxAmount;
// }

// // Example usage:
// findTax(450000); 
// findTax(750000); 
// findTax(1200000); 
// findTax(1600000); 

// --------------------------------------------------------------------------
// 4)  Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

function sumOfProductOfDigits(n1, n2) {
    let str1 = n1.toString();
    let str2 = n2.toString();

    // Reverse the strings to align digits from the right
    let rev1 = str1.split('').reverse();
    let rev2 = str2.split('').reverse();

    // Determine the minimum length to ensure we handle only corresponding digits
    let minLength = Math.min(rev1.length, rev2.length);

    // Initialize the sum of products
    let sum = 0;

    for (let i = 0; i < minLength; i++) {
        sum += parseInt(rev1[i]) * parseInt(rev2[i]);
    }

    return sum;
}

// Example usage:
console.log(sumOfProductOfDigits(6, 34)); // Output: 24
console.log(sumOfProductOfDigits(123, 456)); // Output: 27 ((3*6) + (2*5) + (1*4) = 18 + 10 + 4)

