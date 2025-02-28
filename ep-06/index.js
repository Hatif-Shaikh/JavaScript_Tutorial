// // Array(map, filter, reduce)
// const arr = [20,30,40,50.5,60.6,"Apple",'Banana',false,true];
// // console.log(arr);
// // arr.push("Mango");
// // console.log(arr);
// // arr.unshift("Start");
// // console.log(arr);
// // console.log(arr.length);
// // console.log(arr.indexOf("Apple"));
// // console.log(arr.indexOf("Banana"));
// // console.log(arr.splice(0,7));
// // console.log(arr);


// // for (let i = 0; i < arr.length; i++) {
// //     const element = arr[i];
// //     console.log(element);
    
// // }

// //  Map
// const array = [20,30,40,50,60];
// const newArray = array.map(function(element){
//     return element*2;
// })
// // console.log(newArray);

// // const products = [
// //     {  
// //         price:1200,
// //         name:"Dell"
// //     },
// //     {  
// //         price:1100,
// //         name:"Vivo"
// //     },
// //     {  
// //         price:1300,
// //         name:"Samsung"
// //     },
// // ]

// // products.map((element)=>{
// //     console.log(element,element.name,element.price);
// // });

// // Filter
// const array1 = [20,30,40,50,60];
// const res = array1.filter((element)=>{ 
//     return element>30;
// })
// console.log(res);

// // Reduce
// function sumOfElement(array1){
//     let sum = 0;
//     for(let i = 0; i < array1.length; i++){
//     sum += array1[i];
//     }
//     return sum;
// }
// console.log(sumOfElement(array1));
// const ans = array1.reduce((accumulator,element)=>{return accumulator+element;
// },0)
// console.log(ans);

