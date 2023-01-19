// We can call normal function before define it
normalFunction("is normal function")
function normalFunction(typeFunction) {
  // this.typeFunction = typeFunction
  console.log("This is", typeFunction)
}

// normalFunction("is arrow function")



