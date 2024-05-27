const objTypeVariable = {
    name: 'one',
    surname: 'two',
    age: 3,
}

console.log(objTypeVariable)
console.log(JSON.stringify(objTypeVariable))

const stringTypeObject = `{"param1":"valueOfParam1","param2":"valueOfParam2","param3":3}`

console.log(stringTypeObject)
console.log(JSON.parse(stringTypeObject))

const secondObj = JSON.parse(stringTypeObject)

console.log(secondObj.param1)