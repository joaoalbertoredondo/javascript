function contar() {
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let pas = document.getElementById('passo')
    let res = document.getElementById('result')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if (p <= 0) {
            alert('Passo inválido! Considerando passo 1.')
            p = 1
        }

        if (i < f) {
            for (let num = i; num <= f; num += p) {
                res.innerHTML += `${num}\u{1F449}`
            }
        } else {
            for (let num = i; num >= f; num -= p) {
                res.innerHTML += `${num}\u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}