/*
🔄 What is Async Programming?
In JS, code is non-blocking — it doesn't wait for long operations (like API calls) to finish. This is called asynchronous programming.
 */
//callback function is function passed as an argument!!

const { json } = require("express");

function fetchData(callback){
    setTimeout(()=>{
        callback("Here is the data");
    },1000);
}

fetchData((data)=>{
    console.log(data); // "Here is the data"
})

function fetchUserData(userId,callback){
    console.log("Fetching user data.....");

    setTimeout(()=>{
        if(userId===0){
            callback("User not found ",null);
        }else{
            const fakeData = {
                id: userId,
                name:"Derric samson",
                email:"Derricsamson@gmail.com"
            };
            callback(null,fakeData);
        }
    },1500);
}

fetchUserData(1,(error,data)=>{
    if(error){
        console.error(error);
    }else{
        console.log("User data fetcched successfully:",data);
    }
});


function fetchpicoin(ID,callback){
    console.log("Fetching the details");

    setTimeout(()=>{
        if(ID===0){
            callback("coin is not found",null);

        }else{
            const data ={
                id:ID,
                num:"122335464756$",
                name:"PICOIN"
            };
            callback(null,data);
        }
    },1500);
}

   fetchpicoin(1,(error,data)=>{
        if(error){
            console.error(error);
        }else{
            console.log("The is fetched:",data);
        }
    });


function fetchBitCoin(Id,callback){
    console.log("Fetching the details!!");
    setTimeout(()=>{
        if(Id===0){
            callback("The coin is not found",null);
        }else{
            const data ={
                id:Id,
                num:"12635236453264",
                name:"Bitcoin"
            }
            callback(null,data);
        }
    });

}
fetchBitCoin(1,(error,data)=>{
    if(error){
        console.error(error);
    }else{
        console.log("The data is fetched amazingly!!:",data);
    }
})


//once function 

function once(fn){
    let called = false;
    let result;
    return function (...args){
        if(!called){
            result = fn.apply(this,args);
            called = true;
        }
        return result;
    };
}

const logonce = once(()=>console.log("ran"));
logonce();//ran
logonce();//no output, as it will not run again
 

function onnce(fn){
    let called = false;
    let result;
    return function(...args){
        if(!called){
            result = fn.apply(this,args);
            called = true;
        }
        return result;
    }
}

const lonce = onnce(()=>console.log("Ran again!!"));
lonce();
lonce();
//memoization 

function memoize(fn){
    const cache = {};
    return function(...args){
        const key = JSON.stringify(args);
        if(key in cache) return cache[key];
        const result = fn.apply(this,args);
        cache[key] = result;
        return result;
    }
}

const sq = memoize(n=>n*n);
console.log(sq(5)); // 25
console.log(sq(5)); // 25 (cached result)





function memo(fin){
    let cache ={};
    return function (...args){
        const key = JSON.stringify(args);
        if(key in cache ) return cache[key];
        const r = fin.apply(this,args);
        cache[key] = r;
        return r;
    }
}

const add1 = memo(n =>n+1)

console.log(add1(5)); // 6
console.log(add1(5)); // 6 (cached result)


//debounce function 

function debounce(fx,delay){
    let timeoutId;
    return function(...args){
        clearTimeout(timeoutId);
        timeoutId = setTimeout(()=>{
            fx.apply(this,args);
        })
    };
}

const logg = debounce(()=>console.log("This is debounced!!"),1000);