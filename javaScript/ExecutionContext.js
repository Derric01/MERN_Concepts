// What Happens When JS Executes Code?

function greet(){
    var name = "derric";
    console.log(name);

}
greet();

//Internally what happens
// 1. Create a global execution context (GEC)
//Memory Phase: greet → stored as function reference

//Execution Phase: greet() runs → new Function Execution Context created

//2. create stack
//[ greet() ]
//[ global() ]

//3.Memory Creation Phase of greet():
//name → undefined

//4.execution phase
//name → "derric"
//console.log(name) → "derric"


//Pop greet() off call stack


//Hoisting in js

console.log(a);//undefined
console.log(b);//(tdz)
console.log(add(2));


var a  = 10;
let b = 20;

function add(x){
    return x +2;
}

function test(){
    console.log(x);
    let x = 10; //let is not hoisted
}


//call stack and  stack trace!!
function one(){
    two();
}
function two(){
    three();
}
function three(){
    console.log("fire");
}

one();


//event loop
/*
 PART 4: Event Loop — JS’s Secret Sauce
JavaScript is single-threaded but non-blocking. This is due to the:

Call stack

Callback queue (Macrotasks)

Microtask queue (Promises, MutationObservers)

Call Stack > Microtasks > Macrotasks

 */

console.log("A");
setTimeout(()=>console.log("B"),0);

Promise.resolve().then(()=>console.log("C"));

console.log("D");

for(var i =0;i<3; i++){
    setTimeout(()=>console.log(1),1000);
}//3 3 3

//fixing with closure!!

for(var i =0;i <3;i++){
    ((j)=>{
        setTimeout(()=>
            console.log(j)
        ,1000)
    })(i);
}//0 1 2