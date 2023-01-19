/*
Using normal function to make constructor function
*/

var x = 10;
function ShowThisWithFunction(value, timeout) {
  this.x = value;
  setTimeout(() => {
    console.log('"this" of Normal Function is ', this);
  }, timeout);
}

let p = new ShowThisWithFunction(5, 1000);

/*
Cannot Using arrow function to make constructor function
Program wil throw error "ShowThisWithArrowFunction is not a constructor"
*/

var y = 10;

const ShowThisWithArrowFunction = (value, timeout) => {
  this.y = value;
  setTimeout(() => {
    console.log('"this" of Arrow Function is', this);
  }, timeout);
};

let q = new ShowThisWithArrowFunction(5, 1000)
