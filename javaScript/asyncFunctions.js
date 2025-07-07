/*
🔄 What is Async Programming?
In JS, code is non-blocking — it doesn't wait for long operations (like API calls) to finish. This is called asynchronous programming.
 */
//callback function is function passed as an argument!!

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
 
