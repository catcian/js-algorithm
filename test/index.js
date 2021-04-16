function Person(person){
  person.age = 26;
  person = {
      name: 'zhangsan',
      age: 30
  }
  return person
}

var person1 = {
  name: 'lisi',
  age: 25
}

const person2 = Person(person1)
console.log('person1',person1)
console.log('person2',person2)