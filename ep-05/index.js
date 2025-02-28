// Function Decalaration
function sum(num1,num2){
    console.log(num1+num2);
}

sum(400,300); // function call

// Function Expression
// Named Function Expression
const sumofTwoNumbers1 = function sum(num1,num2){
    console.log(num1+num2);
}
sumofTwoNumbers1(300,200);

// Anonymous Function Expression
const sumofTwoNumbers2 = function sum(num1,num2){
    console.log(num1+num2);
}
sumofTwoNumbers2(200,100);

// Callback Function
const doSomething = function(callback){
    console.log("Samose ban rahe hain ......");
    setTimeout(function(){
        callback();
    },3000);
}

const callback = function(){
    console.log("Samose ready hain");
}

doSomething(callback);

// Higher Order Function

const radius = [1,2,3,4];
const area = function(radiusArray) {
    const result = [];
    for(let i=0; i<radiusArray.length; i++){
        const a = Math.PI * radiusArray[i] * radiusArray[i];
        result.push(a);
    }
    return result;
}
const ans1 = area(radius);
console.log(ans1);

const circumfernce = function(radiusArray) {
    const result = [];
    for(let i=0; i<radiusArray.length; i++){
        const a = 2*Math.PI * radiusArray[i];
        result.push(a);
    }
    return result;
}
const ans2 = circumfernce(radius);
console.log(ans2);

// 
const formulaOfArea = function(r){
    return Math.PI * r * r;
}

const formulaOfCircumference = function(r){
    return 2*Math.PI * r;
}

const calculate = function(radiusArray, formula){
    const result = [];
    for(let i = 0; i < radiusArray.length; i++){   const a = formula(radiusArray[i]);
        result.push(a);
    }
    return result;
}
const ans3 = calculate(radius, formulaOfArea);
const ans4 = calculate(radius, formulaOfArea);
console.log(ans3);
console.log(ans4);

// Arrow Function
const Multiply = (num1,num2) => {
    return 20*30;
}
console.log(Multiply(20,30));
// OR
// For Single line of code
const Add = (num1,num2) => num1+num2;
console.log(Add(20,30));
