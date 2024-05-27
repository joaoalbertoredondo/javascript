class User {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.createdAt = new Date()
    }
    
    static adultAge = 18

    isAdult() {
        return this.age >= this.adultAge
    }
}

const user = new User('James', 24)

console.log(user.name) 

console.log(user.isAdult())