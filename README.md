#1. What is between normal function and arrow function?

---

| Normal function                                        | Arrow function                                                           |
| ------------------------------------------------------ | ------------------------------------------------------------------------ |
| Context: "This" is object call it                      | Context: "This" is context where arrow function is called                |
| Can redefine the value of "this" (bind this)           | Can't redefine the value of "this" (can't bind this)                     |
| Allow hoisted (can use before declare normal function) | Don't allow hoisted (throw error when use before declare arrow function) |
| Have prototype property                                | have no prototype property                                               |
| Can use to make method of object                       | Can't use as method of object                                            |
| Syntax: function(params) { execute command }           | Syntax: const function_name = (params) => { execute command }            |

#2. The difference bind, apple, call

---

| Bind                                                                          | Call                                                                          | Apply                                                                          |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Bind function is a Function prototype so we can only using it with a function | Call function is a Function prototype so we can only using it with a function | Apply function is a Function prototype so we can only using it with a function |
| Syntax: let newFunction = func.bind(thisArg[, arg1[, arg2[, ...]]]);          | Syntax: function.call(thisArg, arg_1, arg_2,...);                             | Syntax: function.apply(thisArg, [argsArray]);                                  |
| Will be return a new function, using bind an object                           | Call a function immediately and bind an object and argument with comma        | Call a function immediately and bind an object and argument as an array        |

#3. When using Bind, Call, Apply

---

###Bind()

- Use bind() If that function to later be called with a certain context, useful in events.
- Example:

```
 let animal = {
 name: "dog",
 age: 2,
 showInfo: function() {
   console.log("Name: "+ this.name + " And age: "+ this.age
   )
 }
 const showAnimalInfoBind = animal.showInfo.bind(animal) // We bind animal object to this of showInfo method
 showAnimalInfoBind()
```

###Call(), Apply()

- Use call() if that function called immediately
- Example:

```
let person = {
  firstName: 'firstName',
  lastName: 'lastName',
  showInfo: function (firstName, lastName) {
    var firstName = firstName || this.firstName
    var lastName = lastName || this.lastName
    console.log("First name: " + firstName + ", Last name: " + lastName)
  },
};

let van = {
  firstName: 'nguyen',
  lastName: 'van',
};
person.showInfo() // No pass param
person.showInfo.call(van, 'Le', 'Tien');
person.showInfo.apply(van, ['Le', 'Tien']);
```

#4. Demo
* Run js file in repository
```
  node filename.js
```
* Run html in repository
```
  Open With Liver Server (Alt + L Alt + O)
```
