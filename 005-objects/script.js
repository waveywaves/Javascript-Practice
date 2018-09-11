function Person(name,age){
    this.name = name
    this.age = age
}

var vibhav = new Person("Vibhav",21)
var elvis = new Person("Elvis",0)

var people = [vibhav, elvis]

console.log(people)