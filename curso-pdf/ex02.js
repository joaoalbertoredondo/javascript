const person = {
    firstName:'Carl',
    lastName:'Johnson',
    age:34
}

function greeting() {
    console.log(`Hello, ${person.firstName}`)
}

greeting()

function incAge(num) {
    person.age+=num
}

console.log(person.age)
incAge(10)
console.log(person.age)