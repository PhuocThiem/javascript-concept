// Bind method is a Function prototype so we can only using it with a function
// Bind method will be return a new function

// Case 1
// Using "bind" method to bind object to this of function
// Example We bind "person" object to "this" of "showPersonInfo" with 2 argument

let person = {
  firstName: 'Nguyen',
  lastName: 'van',
};

function showPersonInfo(param_1, param_2) {
  console.log(param_1 + ' ' + param_2 + ', ' + this.firstName + ' ' + this.lastName);
}

const showName = showPersonInfo.bind(person, 'Hello', 'captain');
showName();

// Case 2
// Using "bind" method to bind this of object: 

let animal = {
  name: "dog",
  age: 2,
  showInfo: function() {
    console.log("Name: "+ this.name + " And age: "+ this.age
    )
  }
}

const showAnimalInfo = animal.showInfo // If we not use bind method => this is undefined
showAnimalInfo()

const showAnimalInfoBind = animal.showInfo.bind(animal) // We bind animal to this of showInfo method
showAnimalInfoBind()


