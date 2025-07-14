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

const log = debounce(()=>console.log("This is debounced!!"),1000);

 /*Why Async Matters (Real World)
JavaScript is single-threaded → it can only do one thing at a time.
But your app needs to:

Fetch data from APIs (React, Vue)

Hit your MongoDB via Express

Wait for users to type

Handle file uploads, cloud requests

Async lets you handle all this without freezing the app.*/
//callback recap
function greet(name,callback){
    console.log("hello",name);
    callback();
}
greet("Derric",()=>{
    console.log("Welcome to java script!!");
});


//simulating async (api delay style)

function fetchdata(callback){
    setTimeout(()=>{
        callback({id:1,name:"Derric"});
    },1000);
}

fetchdata((data)=>{
    console.log("Data fetched",data);
});
//callback hell

getUser((user)=>{
    getOrders(user.id,(orders)=>{
        getdetails(orders[0].id,(details)=>{
            console.log(details);
        })
    })
})

//we use promises to fix this !! callback !!
const fetchData =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Here is the data");
        },1000);
    });
};
fetchData().then(console.log)

/*
Promises — Reclaim Control
🤯 What is a Promise really?
A Promise is an object that represents a value that might be available in the future, and gives us the ability to register callbacks using .then() or .catch() instead of nesting.
 */

const promise = new Promise((resolve,reject)=>{
    if(success ){
        resolve(data);
    }else{
        reject(error);
    }
});

fetchUserData()
.then(user=>fetchCart(user.id))
.then(cart=>fetchTotal(cart))
.then(total=>crossOriginIsolated.log("Total:",total));
//.catch(error=>console.error("error has occured:",error));


//async and await flow

async function getTotal(){
    try{
        const user = await fetchUserData();
        const cart = await fetchCart(user.id);
        const total = await fetchTotal(cart);
        console.log("Total",total)
    }catch(error){
        console.error("Error has occurred:",error);
    
    }
}  

async function x(){
    const data = await fetchData();
}

function x(){
return y().then(data=>{
    return data;
});
}
/*🧪  Real-World MERN Applications
  🛠 Express API: Serial Async
  Client → GET /user/64a2a9 → Express route triggers
↓
req.params.id → "64a2a9"
↓
User.findById("64a2a9") → returns user object
↓
Post.find({ userId: user._id }) → returns array of posts
↓
res.json({ user, posts }) → sends response back to client

*/
app.get("user/:id",async(req,res)=>{
try{
    const user = await UserActivation.findById(req.params.id);
    const posts = await post.find({userId:user._id});
    res.json({user,posts});
}catch(error){
    res.status(500).json({
        error:"an error has occurred!!!"
    });
}
})

//parallel execution with promise.all()

const [user,cart] = await promise.all([
    user.findById(req.params.id),
    cart.find({userId:req.params.id}),
])

//custom retry function pro level pattern

async function retry(fn,retries = 3){
    while(retries--){
        try{
            return await fn();
        }catch(e){
            console.log("retrying !!");
        }
    }
    throw new error("All retries failed!!");
}


function delay(ms){
    return new Promise(resolve =>setTimeout(resolve,ms));
}

async function animate(){
    for(let i =1; i<=3; i++){
        console.log(`Step ${i}`);
        await delay(1000); // Wait for 1 second 
    }
}