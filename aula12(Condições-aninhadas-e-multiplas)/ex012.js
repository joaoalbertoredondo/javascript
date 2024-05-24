var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 4) {
    console.log ('Vai dormir!')
} else if (hora >= 6 && hora < 12) {
    console.log ('Bom dia!')
} else if (hora <= 18) {
    console.log ('Boa tarde!')
} else if (hora < 24) {
    console.log ('Boa noite!')
}