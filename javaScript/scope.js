/**
 🧭 Section 3: Scope — "The Path JavaScript Follows to Find Things"
Think of scope as the “visibility or accessibility” of variables during code execution. Scope determines where you can access a variable and where you can’t.
 
| Type        | Level                                                 | Description                          |
| ----------- | ----------------------------------------------------- | ------------------------------------ |
| 🌐 Global   | Outside all functions or blocks                       | Accessible everywhere                |
| 🧠 Function | Inside a function                                     | Accessible only within that function |
| 📦 Block    | Inside `{}` like `if`, `for`, `while`, `switch`, etc. | Introduced by `let` and `const`      |

*/



let x =10;

function test(){
    let y = 122;
    if(true){
        let z = 30;
        console.log(x,y,z);
    }
}
//x-global scope
//y-function scope
//z- block scope

/*
🔎 How JS Resolves Variables (Scope Chain)
When JavaScript sees console.log(x, y, z), it follows this path:

Looks for z in the current block scope → ✅ found

Looks for y in the current block → ❌ not found → moves to enclosing function → ✅ found

Looks for x in function → ❌ not found → moves to global scope → ✅ found

This is called the Scope Chain — JS climbs upward through the lexical hierarchy, stopping at the first match.
 
| Keyword | Scope Type | Redeclarable? | Hoisted?                           | Block Scoped? |
| ------- | ---------- | ------------- | ---------------------------------- | ------------- |
| `var`   | Function   | ✅ Yes         | ✅ Yes (initialized as `undefined`) | ❌ No          |
| `let`   | Block      | ❌ No          | ✅ Yes (but in TDZ\*)               | ✅ Yes         |
| `const` | Block      | ❌ No          | ✅ Yes (but in TDZ\*)               | ✅ Yes         |







*/

