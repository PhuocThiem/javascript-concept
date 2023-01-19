/*
If call arrow function at here
The program will throw error
"Cannot access 'arrowFunction' before initialization"
*/

const arrowFunction = (typeFunction) => {
  console.log("this is", typeFunction)
}

// Must call arrowFunction after define it

arrowFunction("arrowFunction")
