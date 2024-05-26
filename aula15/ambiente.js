let num = [5, 8, 2, 9, 3]

console.log (`Nosso vetor é o ${num}`)
console.log (`O vetor tem ${num.length} posições.`)
console.log (`O primeiro valor do vetor é ${num[0]}`)

num.sort()
console.log (`Depois do 'sort' o vetor fica assim: ${num}`)
console.log (`Agora, o primeiro valor do vetor é ${num[0]}`)


console.log (`Para adicionar um número é só usar o 'push'`)
num.push(1)
console.log (`Assim: ${num}`)

console.log (`Se quiser representar todos os valores, um de cada vez, é só utitizar o 'for'!`)

for(let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}

let pos1 = num.indexOf(8)

console.log(`O valor 8 está na posição ${pos1}`)