#1. What is between normal function and arrow function?

---
Normal function | Arrow function
---|---
Context: "This" is object call it| Context: "This" is context where arrow function is called
Can redefine the value of "this" (bind this) | Can't redefine the value of "this" (can't bind this)
Allow hoisted (can use before declare normal function) | Don't allow hoisted (throw error when use before declare arrow function)
Have prototype property | have no prototype property
Can use to make method of object| Can't use as method of object
Syntax: function(params) { execute command } | Syntax: const function_name = (params) => { execute command }
