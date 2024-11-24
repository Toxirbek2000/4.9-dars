
// 16-masala

// let products = [
//     {id: 6,name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},
//     {id: 2,name: "Acer", price: 12000, rating: 4.3, discount: 10},
//     {id: 1,name: "Mac book", price: 17000, rating: 4.7, discount: 40},
//     {id: 4,name: "HP", price: 21000, rating: 4.1, discount: 16},
// ];

// let result = products.filter(item => item.id !== 4)
// console.log(result);


// 17-masala

// const people = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
// ];

// people.sort((a, b) => a.age - b.age);

// const youngest = people[0].age;
// const oldest = people[people.length - 1].age;

// const ageDifference = oldest - youngest;

// console.log(`Eng yosh: ${youngest}, Eng qari: ${oldest}`);
// console.log(`Yoshlar farqi: ${ageDifference}`);


// 18-masala

// let str = "Hello World!"
// function countCase(val){
//     let arr = str.split("").filter(item => item !== "")
//     let uppercase = 0
//     let lowercase = 0
//     arr.forEach(item => {
//         if (item >= "A" && item <= "Z") {
//             uppercase++;
//         } 
//         else if (item >= "a" && item <= "z") {
//             lowercase++; 
//         }
//     })
//     console.log({uppercase, lowercase});

// }

// countCase(str)


// 19-masala

// let arr = [1, 2, 3, 4, 5, 6]

// function evenOddIndexSums() {
//     let juftIndex = 0
//     let toqIndex = 0
//     for(let i = 0; i < arr.length; i++){
//         if(i % 2 == 0){
//             juftIndex += arr[i]
//         }
//         else{
//             toqIndex += arr[i]
//         }
//     }
//     console.log({juftIndex, toqIndex});
// }

// evenOddIndexSums()


// 20-masala

// function rotateMatrix(matrix) {
//     const n = matrix.length;
//     const result = Array.from({ length: n }, () => Array(n).fill(0));
    
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             result[n - j - 1][i] = matrix[i][j];
//         }
//     }
    
//     return result;
// }

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// const rotatedMatrix = rotateMatrix(matrix);
// console.log(rotatedMatrix);


// 21-masala

// let str = "Hello World! How are you?"

// function removeSpaces() {
//     let result = str.split(" ").join("")
//     console.log(result);
// }

// removeSpaces()


// 22-masala

// function anagramma(str1, str2) {
//     if (str1.length !== str2.length){
//         return false;
//     } 

//     const sortString = str => str.toLowerCase().split('').sort().join('');
//     return sortString(str1) === sortString(str2);
// }

// console.log(anagramma("Listen", "Silent")); 
// console.log(anagramma("Hello", "World"));  


// 23-masala

// let arr = [1, 3, 2, 1, 4, 1, 3, 1, 5, 1]
// function fn() {
//     let obj = {};
//     let count = 0;
//     let mostFrequent;  

//     arr.forEach(item => {
//         if (obj[item] === undefined) {
//             obj[item] = 1;
//         } 
//         else {
//             obj[item]++;
//         }

//         if (obj[item] > count) {
//             count = obj[item];
//             mostFrequent = item;
//         }
//     });

//     console.log(mostFrequent);;
// }

// fn()

// 24-masala

// let str = "abc123def45";

// function sumNumbers() {
//     let sum = 0;
//     let arr = str.split('');
//     arr.forEach(item => {
//         let num = parseInt(item);
//         if (!isNaN(num)) { 
//             sum += num;
//         }
//     });
//     console.log(sum); 
// }

// sumNumbers();


// 25-masala

// let str = "hello world"

// function fn() {
//     let obj = {}

//     str.split('').forEach(item => {
//         if (item !== ' ') {
//             if (obj[item] !== undefined) {
//                 obj[item] += 1;
//             } 
//             else {
//                 obj[item] = 1;
//             }
//         }
//     });

//     console.log(obj);
// }
// fn()


