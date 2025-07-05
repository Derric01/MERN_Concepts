//temporal dead zone

// console.log(a);//reference error

// let a = 10;

let a = 10;
let b = a;

b = 20;

console.log(a);//10 --primitiv ecopied

let obj1 = {
    "name": "john"
}

let obj2 = obj1;

obj2.name = "jane";

console.log(obj1);//{name:"jane"}-- referennce copied!!
//var
//Function-scoped (NOT block-scoped)

//Hoisted (initialized as undefined)

//Can be redeclared and reassigned

console.log(n);//undefined --hoisting   

var n = 10;
var n = 25;//redeclared
console.log(n);//25

for (var i=0;i<4;i++){
    console.log(i);
    setTimeout(()=>{
        console.log(i);
    },1000);
}//pitfall of var

//let
/*block scope

  hoisted but not initialized(tdz)
  cannot be redeclared in a scope*/

let x = 10 ;
x = 20;//reassigned
console.log(x);
//let x = 60 //redirected error


{
    let y = 5;
}

//console.log(y);//reference error --block scope


//temporal dead zone 
console.log(z);
let z =8;//reference error --hoisted but not initialized


//const 

//same as let but cannot be reassigned 
// value must be initialized at the time of declaration
//value cannot be reassigned!!

const pi = 3.14;
//pi = 3.14159; //type error --cannot be reassigned


const person = {
    age:20
};
person.age = 21; //allowed --object properties can be changed
