// Destructuring in object and array
const arr = [1, 2, 3, 4, 5];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr);


const [a,b,c,d,e] = arr;
console.log(d);
console.log(e);

// Object Destructuring
const person = {
    name:"Ahmad",
    age:22,
    gender:"Male",
    addres:"Pune"
};
// dot notation
console.log(person.name);
// bracket notation
console.log(person["age"]);
// Destructuring
const {name,age,gender,addres} = person;
console.log(name,age,gender,addres);
console.log(name);
console.log(age);
console.log(gender);
console.log(addres);