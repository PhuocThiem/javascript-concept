class Person {
  constructor(name) {
    this.name = name
  }
  getNameFunction() {
    return this.name
  }
  getNameArrowFunction = () => {
    return this.name
  }
}

const human1 = new Person("Join")
const human2 = new Person("Join")

console.log("Person arrow", Person.prototype.getNameArrowFunction )
console.log("Person function", Person.prototype.getNameFunction )

console.log("Comparator arrow function", human1.getNameArrowFunction === human2.getNameArrowFunction)
console.log("Comparator arrow function", human1.getNameFunction === human2.getNameFunction)
