class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }

  fazerSom() {
    console.log("Algum som genérico")
  }
}

class Dog extends Animal {
  fazerSom() {
    console.log("Au Au")
  }
}

let dog1 = new Dog("Lucky", 12)
console.log(dog1.name) 
console.log(dog1.age)
dog1.fazerSom()

class Cat extends Animal {
  consturctor(name, age) {
    this.name = name
    this.age = age
  }

  fazerSom() {
    console.log("Miau Miau")
  }
}

let cat1 = new Cat("Zorro", 8) 
console.log(cat1.name)
console.log(cat1.age)
cat1.fazerSom()