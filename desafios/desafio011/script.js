function ver() {
    let ano = Number(window.prompt('Qual é o ano que você que verificar?'))

    let res = document.getElementById('result')
    res.innerHTML = `<h2>Analisando o ano de ${ano}...</h2>`

    if (ano%4 == 0) {
        res.innerHTML += `<p>O ano de ${ano} <mark class="green"><strong>É BISSEXTO!</strong></mark> &#x2705;</p>`

    } else {
        res.innerHTML += `<p>O ano de ${ano} <mark class="red"><strong>NÃO É BISSEXTO!</strong></mark> &#x274C;</p>`
    }
}