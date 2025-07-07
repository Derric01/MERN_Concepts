//function declaration 


greet();//hoisted!!
function greet(){
    console.log("Hello World!!");
}


//function expression

const greet2 = function(){
    console.log("Hello World!! this is a function expression");
}
greet2();

//arrow function 

const greet3 = ()=>{
    console.log("Hey there this is an arrow function");

}
greet3();

const obj ={
    name:"Derric",
    greet4(){
        console.log(this.name +"Wassup buddy!!");
    },
   

}


//execution context
/*everytime a script or a function is invoked ,js creates
a box(think of it like a memory space) to execute that code
That box is ccalled execution context(EC) 
| Type                                | What it is                              |
| ----------------------------------- | --------------------------------------- |
| 🌐 Global Execution Context (GEC)   | Created once when the script runs       |
| 🧠 Function Execution Context (FEC) | Created every time a function is called |
| 🧪 Eval Execution Context           | (rare) Created when `eval()` is used    |

execution context will have variable environment,lexical env and this binding



*/
//memory life cycle

function outer(){
    let a =122;
    function inner(){
        console.log(a);
    }
    return inner;
}

const fn = outer();
fn();

/*
🔁 What happens behind the scenes?
⏱ Step-by-step:
outer() is called:

Creates Function Execution Context for outer

Variable a = 10 is stored in the Variable Environment

inner() function is created and remembers the Lexical Environment (the surrounding context where a exists)

inner is returned, but its closure remembers a, so it's not garbage collected

fn() is called:

fn is actually inner function

Even though outer() has finished, a = 10 is still in memory (thanks to closure)

Prints 10


 */

//use case of execution context

//setTimeout with loop

for(var i=1;i<=3;i++){
    (function(x){
        setTimeout(()=>{
            console.log(x);
        },1000);
    }

    )(i);
}

//lexical env 

function foo(){
    const y = 100;
    return function bar(){
        console.log(y);
    };
}

const  fin = foo();

fin();