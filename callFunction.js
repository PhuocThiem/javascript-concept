// Call method is a Function prototype so we can only using it with a function

// Call method allow we pass a object to a function with argument

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

person.showInfo()
person.showInfo.apply(van, ['Le', 'Tien']);
person.showInfo.apply(van, ['', '']);
