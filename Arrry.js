// Array type
// // let marks = [97,82,75,64];
// // console.log(marks[3]);

// Object type
// let marks ={
//     stu1:23,
//     stu2:67,
//     stu3:70,
//     stu4:89,
// };
// console.log(marks);

// Array Method
// // Push (add to end)
// let veggies =["potato","tomato","apple","chips"];
// veggies.push("litachi");

// Pop 
// let veggies =["potato","tomato","apple","chips"];
// veggies.pop();
// console.log(veggies);

// To String
// let veggies =["potato","tomato","apple","chips"];
// console.log(veggies);
// console.log(veggies.toString());

// // Concat
// let veggies =["potato","tomato","apple","chips"];
// let veggies1=["Rohan","rajendra","Ayub"];
// let result= veggies .concat(veggies1);
// console.log(result);

// // Unshift add to start
// let veggies =["potato","tomato","apple","chips"];
// veggies.unshift("chips");
// console.log(veggies);

// Shift delate to start
// let veggies =["potato","tomato","apple","chips"];
//  veggies.shift();
//  console.log(veggies);

// Slice
// let veggies =["potato","tomato","apple","chips"];
// // veggies.unshift("chips");
// console.log(veggies.slice(1,3));

// let veggies =["potato","tomato","apple","chips"];
// veggies.splice("rohan","roha");
// console.log(veggies);

// function myfunction(msg,n)
// {
//     // console.log("wecome to my apna collage");
//     console.log(msg.n);
// }
// myfunction("i love js",100);

// function sum (x,y)
// {
//     s=x+y;
//     return s;
// }
// let val = sum(3,4);
// console.log(val)

// function multiplication(x,y)
// {
//     multiplication=x*y;
//     return multiplication;
// }
//  let val= multiplication(3,4);
//  console.log(val)

const countvow =(str);
{
    let count=0;
    for(const char of str)
{
    if (
        char=="a"||
        char=="e"||
        char=="i"||
        char=="o"||
        char=="u"||
 )
{
    count++;
}
}
return count;
}