const f = () => 1 + 2

const g = () => {
    return 1 + 2
}

console.log(g())

function greeting(text) {
    console.log(text)
    console.log(arguments)
}

greeting('Hello', 'world')

const pet = 'cat'

function myMethod() {
    const pet = 'dog'
    console.log(pet)
}

myMethod()
console.log(pet)
