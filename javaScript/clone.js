function deepClone(obj,seen= new WeakMap()){
    if(obj===null || typeof obj!== 'object') return obj;
    if (seen.has(obj)) return seen.get(obj);
    const clone = Array.isArray(obj)? []:{} ;

    seen.set(obj,clone);

    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            clone[key] = deepClone(obj[key],seen);
        }
    }
  return clone;
}


const og = {
    name:"derric",
    nested:{
        age:30,
        hobbies:["coding","gym"]
    }
};
const clone = deepClone(og);

clone.nested.age= 20;
clone.nested.hobbies.push("reading");

console.log(og.nested.age);

console.log(og.nested.hobbies);

console.log(clone);
