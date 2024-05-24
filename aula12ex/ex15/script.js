function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'bebe-m.png')
            } else if (idade >= 10 && idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade >= 21 && idade < 50) {
                // adulto
                img.setAttribute('src', 'adulto.png')
            } else {
                // idoso
                img.setAttribute('src', 'velho.png')
            }
        } else if (fsex [1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'bebe-f.png')
            } else if (idade >= 10 && idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-f.png')
            } else if (idade >= 21 && idade < 50) {
                // adulto
                img.setAttribute('src', 'adulta.png')
            } else {
                // idoso
                img.setAttribute('src', 'velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        // var brtag = document.createElement('br')
        // res.appendChild(brtag)
        res.appendChild(img)
    }
}