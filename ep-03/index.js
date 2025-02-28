// Spread Operators:
// Objects / Arrays, Too much used in function 
// ...
// dublicate

// make a dublicate Array
const arr = [1, 2, 3, 4, 5];
const dublicateArr =[...arr,6,7,8,9,"Hello"];
console.log(dublicateArr);

// Q. Marge two Arrays
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
console.log(arr1.concat(arr2));

const result = [...arr1,...arr2];
console.log(result);

// Object
// Q. Marge two Objects
console.log("Marge two Objects");
const  obj1 = {
    a:1,
    b:2,
    c:3
};
const obj2 = {
    d: "Apple",
    e: "Banana",
    f: "Orange"
};
const res = {...obj1, ...obj2};
console.log(res);

// Function 
function sum(...numbers){
    console.log(numbers);
    let sum = 0;
    for(let i=0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}
console.log(sum(1,2,3,4,5,6));