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



