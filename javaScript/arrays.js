const arr = [10,203,23,23,12];

console.log(arr.length);
console.log(arr[1]);//203
console.log(arr[4]);//12
console.log(arr[5]);//undefined

arr.forEach((item,i)=>{
    if(item %2 ===0){
        console.log(`the item at index ${i} is even: ${item}`);
    }
});

//map

const nums = [1,2,3,45,5,6,7,8,9,10];
const double = nums.map(num => num*2);
console.log(double);//[2,4,6,90,10,12,14,16,18,20]

const filtered = nums.filter(num =>num%2 ===0);
console.log(filtered);//[2,6,10]

const sum = nums.reduce((acc,cur)=>acc+cur,0);
console.log(sum);//66

//immutability

const number = [1,2,3,5,6,2,23];
const v = [...number];
v.push(1000);
console.log(v);//[1,2,3,5,6,2,23,1000]
console.log(number);//[1,2,3,5,6,2,23]


const obj  = {
    user:{
        name:"sam"
    },
    age:23

}

console.log(obj)