// Meu próprio teste de mudança de peso!

let pessoa = {
    nome: '',
    sexo: '',
    pesoin: 0,
    pesofin: 0,
    checkWeight() {
        const gainWeight = this.pesoin < this.pesofin
        const eq = this.pesofin === this.pesoin
        const ammount =
            gainWeight
                ? this.pesofin - this.pesoin
                : this.pesoin - this.pesofin
        return {
            gainWeight,
            ammount,
            eq,
        }
    }
}

function verify() {

    pessoa.nome = document.getElementById('nome').value
    pessoa.sexo = document.getElementsByName('sexo')
    pessoa.pesoin = parseInt(document.getElementById('pesoin').value) || 0
    pessoa.pesofin = parseInt(document.getElementById('pesofin').value) || 0
    let genero = ''

    if(pessoa.nome.length === 0) {
        alert('Insira um nome.')
        return
    } else if(pessoa.pesoin === 0) {
        alert('Está faltando o peso inicial.')
        return
    } else if(pessoa.pesofin === 0) {
        alert('Está faltando o peso final.')
        return
    }

    let res = document.querySelector('div#result')

    const checks = pessoa.checkWeight()

    if(pessoa.sexo[0].checked) {
        genero = 'um homem'
    } else if(pessoa.sexo[1].checked) {
        genero = 'uma mulher'
    }

    res.innerHTML = `<p><strong>${pessoa.nome}</strong> é ${genero} que estava pesando <strong>${pessoa.pesoin}kg</strong> e agora está pesando <strong>${pessoa.pesofin}kg</strong>.</p>`

    if(checks.eq) {
        res.innerHTML += `<p>${pessoa.nome} manteve seu peso.</p>`
        return
    }

    res.innerHTML += `<p>${pessoa.nome} ${
        checks.gainWeight
        ? 'engordou'
        : 'emagreceu'
    } <strong>${checks.ammount}kg</strong>.</p>`
}